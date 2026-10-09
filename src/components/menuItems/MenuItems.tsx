import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFoodItem } from "../../services/redux/actionCreator/foodAction";
import { AppState } from "../../services/redux/stores";
import { IFoodItem } from "../../types";
import MenuItemsCart from "./MenuItemsCart";

export default function MenuItems() {
  const dispatch = useDispatch<AppState>();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleClick = (category: any) => setSelectedCategory(category);

  const productList = useSelector((state: AppState) => state.food);
  const { loading, error, data } = productList;

  const allCategories = ["All", ...new Set(data?.map((item) => item.category))];

  // @ts-ignore
  useEffect(() => dispatch(GetFoodItem()), [dispatch]);

  return (
    <div className="container mt-5">
      <div className="menu-container">
        <div className="menu-title">
          <div className="d-flex flex-column align-items-center">
            <h1>our best menu</h1>
            <hr className="my-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <div className="d-flex justify-content-evenly mt-4">
            {allCategories.map((category) => (
              <button
                onClick={() => handleClick(category)}
                key={category}
                className="btn btn-outline-secondary btn-lg border"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {loading ? (
        <div>.......isLoading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="row align-middle">
          {data
            ?.filter(
              (product: any) =>
                selectedCategory === "All" ||
                product.category === selectedCategory
            )
            .map((data: IFoodItem) => (
              <MenuItemsCart data={data} key={data._id} />
            ))}
        </div>
      )}
    </div>
  );
}
