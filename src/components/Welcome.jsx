import { Link } from "react-router-dom";
import style from "./welcome.module.css";
import bgpic from "../pictures/.trashed-1708179083-1705579161275.jpg";
import logo from "../pictures/logo.png"
const Welcome = () => {
  return (
    <div id={style.wel}>
      <div id={style.navbar}>
        <div id={style.navleft}>
          <img id={style.logo} src={logo} alt="" />
        </div>
        <div id={style.navright}>
          <Link to="/">Home</Link>
          <Link to="/users">Accounts</Link>
          <Link to="/SignUp">SignUp</Link>
          <Link to="/Login">Login</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
