import { useHistory, Link } from "react-router-dom";
import Dropdown from "./Dropdown";


const Header = () => {

  const history = useHistory();

  return <div>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
            <img src="../img/waysbuck-logo.svg" alt="waysbucklogo" />
        </div>
          <ul className="hidden md:flex flex-1 justify-end items-center gap-2">
          <Link to={"/cart"}>
          <button type="button" className="px-5 py-1" ><img src="../img/chart.svg" alt="chart"  /></button>
          </Link>
          <Dropdown />
          </ul>
      </nav>
  </div>;
};

export default Header;
