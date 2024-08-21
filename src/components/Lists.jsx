import style from "./lists.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Lists = () => {
    let i=0
  let [info, setinfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/employees")
      .then((response) => {
        setinfo(response.data);
      })
      .catch(() => {
        console.log("errorrr");
      });
  }, []);
  return (
    <div id={style.user}>
      <div id={style.changeFormat}>
        <Link id={style.leftButton} to="/accounts">
          Cards
        </Link>
        <Link id={style.rightButton} to="/Lists">
          List
        </Link>
      </div>
      <table
        style={{
          height: "500px",
          width: "100%",
          border: "1px solid white",
          color: "white",
        }}
      >
        <tr>
          <th>SLNO.</th>
          <th>EMPPLOYEE ID</th>
          <th>NAME</th>
          <th>DESIGNATION</th>
          <th>MOBILE NUMBER</th>
          <th>EMAIL</th>
          <th>LOCATION</th>
          <th>ADDRESS</th>
          <th>PASSWORD</th>
        </tr>
        {info.map((x) => {
            i=i+1;
          return (
            <tr>
              <th>{i}</th>
              <th>{x.empid}</th>
              <th>{x.firstname} {x.lastname}</th>
              <th>{x.designation}</th>
              <th>{x.mobile}</th>
              <th>{x.email}</th>
              <th>{x.location}</th>
              <th>{x.address}</th>
              <th>{x.password}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Lists;
