import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } = resData;
    const deliveryTime = sla?.deliveryTime;
    const imageUrl = cloudinaryImageId
  ? `${CDN_URL}${cloudinaryImageId}`
  : "https://via.placeholder.com/300x200?text=Image+Not+Available";

    return (
        <div className="res-card">
            <img
            src={imageUrl}
            alt={name} 
            />
            <h4>{name}</h4>
            <h5>Cuisines: {cuisines}</h5>
            <h5>Rating: {avgRating}</h5>
            <h5>Delivery Time: {deliveryTime} min</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;