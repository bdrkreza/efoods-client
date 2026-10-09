import { AppContent, AppFooter, AppHeader, AppSidebar } from "../components";
import "../scss/style.scss";

export default function DashboardLayout() {
  return (
    <>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </>
  );
}
