//Project layout
/*
Header
    -Logo
    -Navigation
Body
    -search inbox
    -RestaurantCardContainer
        -RestaurantCards
            -image
            -name of res, star rating, cuisine, delivery time etc
Footer
    -copyrights
    -links
    -address

*/

import React from "react";
import ReactDOM from 'react-dom/client';

const resList =  [
    { "data": { "name": "Spice Delight", "cuisine": "Indian", "avgRating": 4.5, "deliveryTiem": "30 mins" } },
    { "data": { "name": "Sushi Haven", "cuisine": "Japanese", "avgRating": 4.7, "deliveryTiem": "40 mins" } },
    { "data": { "name": "Pasta Paradise", "cuisine": "Italian", "avgRating": 4.3, "deliveryTiem": "35 mins" } },
    { "data": { "name": "Burger Hub", "cuisine": "American", "avgRating": 4.6, "deliveryTiem": "25 mins" } },
    { "data": { "name": "Tandoori Nights", "cuisine": "Indian", "avgRating": 4.4, "deliveryTiem": "30 mins" } },
    { "data": { "name": "Dragon Wok", "cuisine": "Chinese", "avgRating": 4.5, "deliveryTiem": "30 mins" } },
    { "data": { "name": "Greek Taverna", "cuisine": "Greek", "avgRating": 4.2, "deliveryTiem": "45 mins" } },
    { "data": { "name": "Vegan Bites", "cuisine": "Vegan", "avgRating": 4.8, "deliveryTiem": "20 mins" } },
    { "data": { "name": "BBQ Bliss", "cuisine": "Barbecue", "avgRating": 4.3, "deliveryTiem": "40 mins" } },
    { "data": { "name": "Taco Fiesta", "cuisine": "Mexican", "avgRating": 4.5, "deliveryTiem": "30 mins" } },
    { "data": { "name": "Curry House", "cuisine": "Indian", "avgRating": 4.6, "deliveryTiem": "35 mins" } },
    { "data": { "name": "Mediterranean Magic", "cuisine": "Mediterranean", "avgRating": 4.7, "deliveryTiem": "30 mins" } },
    { "data": { "name": "Pho Corner", "cuisine": "Vietnamese", "avgRating": 4.4, "deliveryTiem": "40 mins" } },
    { "data": { "name": "Kebab King", "cuisine": "Middle Eastern", "avgRating": 4.3, "deliveryTiem": "35 mins" } },
    { "data": { "name": "Dosa Delight", "cuisine": "South Indian", "avgRating": 4.6, "deliveryTiem": "25 mins" } }
  ]
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resData}) => {

    const { name, cuisine, avgRating, deliveryTime } = resData?.data;

    return (
        <div className="res-card">
            <img src="https://www.thespruceeats.com/thmb/oIaxLSj0xxAbD39jykKk3XsFo9s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg" alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
               {
               resList.map(restaurant => <RestaurantCard key={restaurant.data.name} resData = {restaurant}/>)
               }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)


//28 from last