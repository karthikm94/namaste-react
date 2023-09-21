import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>Ratings : {avgRating}</h4>
      <h4>RS {costForTwo}</h4>.
      <h4>Delivery time:{resData.sla.deliveryTime} minutess</h4>
    </div>
  );
};

export default RestaurantCard;
