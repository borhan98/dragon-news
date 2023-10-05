import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import moment from 'moment';


const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to={'/'}>
        <img src={logo} alt="Logo" />
      </Link>
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
