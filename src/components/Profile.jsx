import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./profile.module.css";
import { Link } from "react-router-dom";
const Profile = () => {
  let getobj = useParams();
  let [info, setinfo] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${getobj.id}`)
      .then((response) => {
        // console.log(response.data);
        setinfo(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  let deleteuser = (id) => {
    axios
      .delete(`http://localhost:3000/employees/${id}`)
      .then(() => {
        console.log("successfully deleted");
      })
      .catch(() => {
        console.log("errorrr");
      });
    window.location.assign("/users");
  };
  return (
    <div id={style.profilePage}>
      <p>Profile</p>
      <div id={style.IntoprofilePage}>
        <div id={style.profileImage}>
        <img src={info.image} alt="" />
        <p>
          {info.firstname} {info.lastname}
        </p>
        </div>
      <div id={style.profileCard}>
        {/* <h2>Emp ID: {info.empid}</h2>
        <h3>Role&Designation: {info.designation}</h3>
        <h3>Email: {info.email}</h3>
        <h3>Mobile No: {info.mobile}</h3>
        <h3>Experience: {info.experience} years</h3>
        <h3>Current location: {info.location}</h3>
        <h3>Address: {info.address}</h3>
        <h3>Password: {info.password}</h3> */}
        <p>Name as on SS card is: {info.firstname} {info.lastname} And Employee ID is {info.empid} and he has {info.experience}years of Experience.Joining Date is None And Date of Birth is None.Now he presently working in our company name of the title is {info.designation}.He is full-time Day-shift employee currently staying in {info.location}.
          <br />
          <br />Email Id: {info.email}
          <br />Mobile Number: {info.mobile}
          <br />Password: {info.password}
        </p>
        <br />
        <div id={style.btns}>
          <Link to={`/update/${info.id}`}>
            <button>Update</button>
          </Link>
          <button
            onClick={() => {
              deleteuser(info.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Profile;
