import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])


const fetchMenu = async () => {
       
    const data = await fetch(MENU_API+resId)
    const json = await data.json()
    const resData = json.data
    // console.log(resData)
    setResInfo(resData)
}

if(resInfo === null) return <Shimmer />
const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card || {};

return (
    <div className='menu'>
        <h2>{name}</h2>
        <h5>{cuisines.join(', ')} {costForTwoMessage}</h5>
        <h3></h3>
        <h3>Menu</h3>
        
            {itemCards && itemCards.map(item => (
            <li key={item.card.info.id}>
                {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
            ))}

            <li>Burgers</li>
            <li>Diet Coke</li>
        
    </div>
  )
}

export default RestaurantMenu
