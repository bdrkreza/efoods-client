import { Link } from "react-router-dom";

export default function UserMenu() {
  return (
    <>
      <div className="user_menu">
        <div className="list-group user-menu-cart" id="list-tab" role="tablist">
          <Link
            className="list-group-item list-group-item-action active"
            id="list-home-list"
            data-toggle="list"
            to="/"
            role="tab"
            aria-controls="home"
          >
            Home
          </Link>
          <Link
            className="list-group-item list-group-item-action"
            id="list-profile-list"
            data-toggle="list"
            to="/profile"
            role="tab"
            aria-controls="profile"
          >
            Profile
          </Link>
          <Link
            className="list-group-item list-group-item-action"
            id="list-messages-list"
            data-toggle="list"
            to="message"
            role="tab"
            aria-controls="messages"
          >
            Messages
          </Link>
          <Link
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            to="setting"
            role="tab"
            aria-controls="settings"
          >
            Settings
          </Link>
        </div>
      </div>
    </>
  );
}
