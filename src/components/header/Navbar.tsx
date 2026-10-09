import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/logo.png";
import { logout } from "../../services/redux/actionCreator/authAction";
import { AppState } from "../../services/redux/stores";
import CartItems from "../cartItem/CartItems";
import AdminMenu from "./adminMenu";
import TopSearchBar from "./TopSearchBar";
import UserMenu from "./UserMenu";
export default function Navbar() {
  const dispatch = useDispatch();
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openAdminMenu, setOpenAdminMenu] = useState(false);
  const cart = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.auth);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCartItem, setOpenCartItem] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
        <div className="container ">
          <a className="navbar-brand" href="index.html">
            <img src={brandLogo} alt="" />
          </a>

          <div className="collapse navbar-collapse " id="navbarResponsive">
            <ul className="navbar-nav ms-auto mr-5">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  menu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Foods
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Review
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <ul className=" d-flex ms-auto mr-5 nav-bar">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <li
              className="nav-item"
              onClick={() => setOpenSearchBar(!openSearchBar)}
            >
              <a className="nav-link" href="#">
                <BsSearch />
              </a>
            </li>

            {data?.role === "user" && (
              <li onClick={() => setOpenUserMenu(!openUserMenu)}>
                <a className="nav-link " href="#">
                  <FaUserAlt />
                </a>
              </li>
            )}

            {data?.role === "admin" && (
              <li onClick={() => setOpenAdminMenu(!openAdminMenu)}>
                <a className="nav-link " href="#">
                  <FaUserAlt />
                </a>
              </li>
            )}

            <li
              className="nav-item me-5"
              onClick={() => setOpenCartItem(!openCartItem)}
            >
              <a className="nav-link">
                <div className="shoppingbasket">
                  <div className="top-bar"></div>
                  <div className="bottom-bar"></div>
                  <div className="left-bar"></div>
                  <div className="right"></div>
                  <div className="basketitems">
                    <h5>{cart.length}</h5>
                  </div>
                </div>
              </a>
            </li>
            {data ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => dispatch(logout())}
                  to="/login"
                >
                  <MdLogout />
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <FiUser />
                </Link>
              </li>
            )}
          </ul>
        </div>
        {openUserMenu ? <UserMenu /> : null}
        {openAdminMenu ? <AdminMenu /> : null}
        {openCartItem ? <CartItems /> : null}
        {openSearchBar ? <TopSearchBar /> : null}
      </nav>
    </>
  );
}
