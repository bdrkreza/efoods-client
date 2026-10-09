import { Link } from "react-router-dom";

export default function AdminMenu() {
  return (
    <>
      <div className="user_menu">
        <div className="list-group user-menu-cart" id="list-tab" role="tablist">
          <a
            className="list-group-item list-group-item-action active"
            id="list-home-list"
            data-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="home"
          >
            Home
          </a>
          <Link
            className="list-group-item list-group-item-action"
            id="list-profile-list"
            data-toggle="list"
            to="/dashboard"
            role="tab"
            aria-controls="profile"
          >
            dashboard
          </Link>
          <a
            className="list-group-item list-group-item-action"
            id="list-messages-list"
            data-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="messages"
          >
            Messages
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
          >
            Settings
          </a>
        </div>
      </div>
    </>
  );
}
