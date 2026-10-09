import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
type Props = {
  children?: ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("/dashboard") && <Header />}

      {children}

      {!location.pathname.includes("/dashboard") && <Footer />}
    </div>
  );
};

export default DefaultLayout;
