import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile.png";
import { AppState } from "../../services/redux/stores";
import UserOutlet from "../userOutlet/UserOutlet";

export default function Sidebar() {
  const { data } = useSelector((state: AppState) => state.auth);

  return (
    <div className="container-fluid mt-5">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3  px-0 bg-dark">
          <div className="d-flex flex-column align-items-center  px-3 pt-2 text-white min-vh-100">
            <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center ">
              <div className="text-center p-3">
                <img
                  src={data?.image ? profileImage : data?.image}
                  alt="profile picture"
                  className="w-75 rounded-circle my-4 p-1 d-none d-md-block shadow"
                />
                <a className="navbar-brand mx-0 font-weight-bold  text-nowrap">
                  {data?.name}
                </a>
              </div>
              <button
                type="button"
                className="navbar-toggler border-0 order-1"
                data-toggle="collapse"
                data-target="#nav"
                aria-controls="nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse order-last" id="nav">
                <ul className="navbar-nav flex-column w-100 justify-content-center">
                  <li className="nav-item">
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link">
                        dashboard
                      </Link>
                    </li>
                    <Link to="editProfile" className="nav-link active">
                      Edit Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="orderItem" className="nav-link">
                      Order Items
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="setting" className="nav-link">
                      Setting
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="col py-3 mt-5 text-white">
          <UserOutlet />
        </div>
      </div>
    </div>
  );
}
