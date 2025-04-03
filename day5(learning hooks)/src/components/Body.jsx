import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata"; 
import { useState } from "react";


const Body = () => {
    const [ listOfRestaurant, setListOfRestaurant ] = useState(resList)
    const ratedRestaurant = () => {
        const rated = listOfRestaurant.filter((restaurant) => restaurant.data.avgRating > 4.7)
        setListOfRestaurant(rated)
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ratedRestaurant}>Top RatedRestaurants</button>
            </div>
            <div className="res-container">
               {
               listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.data.name} resData = {restaurant}/>)
               }
            </div>
        </div>
    )
}


export default Body;


// 1:15:0