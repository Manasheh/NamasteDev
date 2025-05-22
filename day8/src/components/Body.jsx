import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    const [ listOfRestaurant, setListOfRestaurant ] = useState([])
    const [ filteredRestaurantList, setFilteredRestaurantList ] = useState([])
    const [searchText, setSearchText ] = useState('')
    useEffect(() => {
        fetchData();
    }, []);

const fetchData = async () => {
    const SWIGGY_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
  
    const cards = json?.data?.cards || [];
  
    const restaurantCard = cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  
    const res = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    if (!res) {
      console.error("Restaurant data is missing.");
      return;
    }
  
    const resData = res.map(r => r.info); // ✅ Extract the actual info you need
    // console.log(resData)
    // console.log(typeof resData)
    setListOfRestaurant(resData);
    setFilteredRestaurantList(resData);
  };

const ratedRestaurant =  () => {
    const rated = listOfRestaurant.filter((restaurant) => restaurant.avgRating > 4.7)
    setListOfRestaurant(rated)
}

const filteredRestaurant = () => {
    const filteredRes = listOfRestaurant.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredRestaurantList(filteredRes)
}

return listOfRestaurant.length === 0 ? <Shimmer /> : (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value = {searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}/>
                <button onClick={filteredRestaurant}>search</button>
            </div>
            <button className="filter-btn" onClick={ratedRestaurant}>Top RatedRestaurants</button>
        </div>
        <div className="res-container">
            {filteredRestaurantList.map((restaurant) => (
                <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                <RestaurantCard resData={restaurant} />
                </Link>
            ))}
        </div>

    </div>
    )
}


export default Body;


// 50