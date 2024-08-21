import { useEffect, useRef, useState } from "react";
import style from "./accounts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Accounts = () => {
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
  let deleteuser=(id)=>{
    axios.delete(`http://localhost:3000/employees/${id}`)
    .then(()=>{
      console.log("successfully deleted");
    })
    .catch(()=>{
      console.log("errorrr");
    })
    window.location.assign("/accounts")
  }
  return (
    <div id={style.user}>
      <div id={style.changeFormat}>
            <Link id={style.leftButton} to="/accounts">Cards</Link>
            <Link id={style.rightButton} to="/Lists">List</Link>
          </div>
          <div id={style.accounts}>
      {info.map((x) => {
        return (
          <Link to={`/profile/${x.id}`}>
          <div id={style.cards}>
          <img src={x.image} style={{height:"100px",width:"100px",margin:"0px 0px 0px 65px",borderRadius:"50%"}} alt="" />
            <h3>
              {x.firstname} {x.lastname}
            </h3>
            <h3>Emp ID: {x.empid}</h3>
            <h4>Role&Designation: {x.designation}</h4>
            <h4>Email: {x.email}</h4>
            <h4>Mobile No: {x.mobile}</h4>
            <h4>Experience: {x.experience} years</h4>
            <h4>Current location: {x.location}</h4>
            <h5>Address: {x.address}</h5>
            <h5>Password: ..........</h5>
            <br />
            <div id={style.btns}>
              <Link to={`/update/${x.id}`}>
                <button>Update</button>
              </Link>
              <button onClick={()=>{deleteuser(x.id)}}>Delete</button>
            </div>
          </div>
          </Link>
        );
      })}
      </div>
    </div>
  );
};
export default Accounts;