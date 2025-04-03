import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    const { name, cuisine, avgRating, deliveryTime } = resData?.data;

    return (
        <div className="res-card">
            <img src={CDN_URL} />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;