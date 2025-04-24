import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
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
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;