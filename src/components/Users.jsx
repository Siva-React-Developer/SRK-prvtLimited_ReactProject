import { useEffect, useRef, useState } from "react";
import style from "./users.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Users = () => {
  let [ownersid, setownersid] = useState("");
  let [password, setpassword] = useState("");
  let [info, setinfo] = useState([]);
  let inpt1 = useRef();
  let inpt2 = useRef();
  let error = useRef();
  let check = false;
  let getId;
  let navigate = useNavigate();
  let getownersid = (e) => {
    setownersid(e.target.value);
    inpt1.current.style.border = "none";
    error.current.textContent = "";
    error.current.style.color = "none";
  };
  let getpassword = (e) => {
    setpassword(e.target.value);
    inpt2.current.style.border = "none";
    error.current.textContent = "";
    error.current.style.color = "none";
  };
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
  let submit = (e) => {
    e.preventDefault();
    if (ownersid == "778056" && password == "krishna7780@@") {
      console.log(ownersid,password);
      navigate("/accounts");
    }
      else {
        error.current.textContent = "Emp ID and Password are not matched";
        error.current.style.color = "red";
        inpt1.current.style.border = "3px solid red";
        inpt1.current.value = "";
        inpt1.current.placeholder = "Enter the Employee Id Properly";
        inpt1.current.classList.add(style["placeholder-color--danger"]);
        inpt2.current.style.border = "3px solid red";
        inpt2.current.value = "";
        inpt2.current.placeholder = "Enter the Password Properly";
        inpt2.current.classList.add(style["placeholder-color--danger"]);
      }
    if (ownersid.length == "") {
      inpt1.current.style.border = "3px solid red";
      inpt1.current.placeholder = "*Employee Id is Mandatory";
      inpt1.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (ownersid.length < 6) {
        inpt1.current.style.border = "3px solid red";
        inpt1.current.value = "";
        inpt1.current.placeholder = "Enter the Employee Id Properly";
        inpt1.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (password.length == "") {
      inpt2.current.style.border = "3px solid red";
      inpt2.current.placeholder = "*Password is Mandatory";
      inpt2.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (password.length < 6) {
        inpt2.current.style.border = "3px solid red";
        inpt2.current.value = "";
        inpt2.current.placeholder = "Enter the Password Properly";
        inpt2.current.classList.add(style["placeholder-color--danger"]);
      }
    }
  }
  return (
    <div id={style.formpage}>
      <div id={style.formbox}>
        <br />
        <h1>Accounts</h1>
        <br />
        <form action="">
          <label htmlFor="empid">Owners ID</label>
          <input
            ref={inpt1}
            id="empid"
            type="text"
            maxLength={6}
            value={ownersid}
            onChange={getownersid}
            placeholder="Enter the Owners ID"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            ref={inpt2}
            id="password"
            type="password"
            value={password}
            onChange={getpassword}
            placeholder="Enter the Password"
            maxLength={15}
          />
          <br />
          <h4 ref={error}></h4>
          <br />
          <br />
          <button onClick={submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Users;
