import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState,  } from "react";


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [listOfRestaurant, setlistOfReastaurant] = useState(restaurantList); // local state variable

  return (
    <div className="restaurant-list">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //logic of updating is Rerendering
            const filterList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfReastaurant(filterList); // update
          }}
        >
          Filter
        </button>
      </div>

      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};

export default Body;
