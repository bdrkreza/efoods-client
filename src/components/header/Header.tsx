import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <>
      <div className="fixed-top">
        <TopBar />
        <Navbar />
      </div>
    </>
  );
}
