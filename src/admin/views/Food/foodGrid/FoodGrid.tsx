import { CRow } from "@coreui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFoodItem } from "../../../../services/redux/actionCreator/foodAction";
import { AppState } from "../../../../services/redux/stores";
import { IFoodItem } from "../../../../types";
import FoodGridCart from "./FoodGridCart";

export default function FoodGrid() {
  const dispatch = useDispatch<AppState>();

  const { data } = useSelector((state: AppState) => state.food);
  // @ts-ignore
  useEffect(() => dispatch(GetFoodItem()), [dispatch]);
  return (
    <div>
      <CRow>
        {data?.map((data: IFoodItem) => (
          <FoodGridCart data={data} key={data._id} />
        ))}
      </CRow>
    </div>
  );
}
