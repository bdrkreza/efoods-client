import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./admin/layout/DashboardLayout";
import {
  Analytics,
  Calendar,
  Chat,
  Customer,
  Dashboard,
  FoodDetails,
  FoodGrid,
  FoodItemList,
  OrderList,
  Reviews,
  Wallet,
} from "./admin/views";
import AddFoodItem from "./admin/views/Food/addFoodItem/AddFoodItem";
import ArticleDetails from "./components/article/ArticleDetails";
import DefaultLayout from "./layout/DefaultLayout";
import { ProtectedRoute } from "./lib/ProtectedRoute";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import Nomatch from "./pages/Nomatch";
import SignupForm from "./pages/SignupForm";
import UserDashboard from "./profile/userDashboard/UserDashboard";
import UserLayout from "./profile/Userlayout/UserLayout";
import EditProfile from "./profile/View/EditProfile";
import OrderItem from "./profile/View/OrderItem";
import Setting from "./profile/View/Setting";
import { Role } from "./types";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
export default function AppRouter() {
  return (
    <>
      <DefaultLayout>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/article/:Id" element={<ArticleDetails />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute roles={Role.Admin}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="orderList" element={<OrderList />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="customer" element={<Customer />} />
              <Route path="addFoodItem" element={<AddFoodItem />} />
              <Route path="foodItemList" element={<FoodItemList />} />
              <Route path="foodGrid" element={<FoodGrid />} />
              <Route path="foodItemDetails" element={<FoodDetails />} />
              <Route path="review" element={<Reviews />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="chat" element={<Chat />} />
              <Route path="wallet" element={<Wallet />} />
            </Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute roles={Role.User}>
                  <UserLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<UserDashboard />} />
              <Route path="editProfile" element={<EditProfile />} />
              <Route path="orderItem" element={<OrderItem />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="/*" element={<Nomatch />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
}
