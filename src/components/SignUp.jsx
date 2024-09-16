import { useRef, useState } from "react";
import style from "./signup.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let [firstname, setfirstname] = useState("");
  let [lastname, setlastname] = useState("");
  let [empid, setempid] = useState("");
  let [designation, setdesignation] = useState("");
  let [email, setemail] = useState("");
  let [mobile, setmobile] = useState("");
  let [experience, setexperience] = useState("");
  let [location, setlocation] = useState("");
  let [address, setaddress] = useState("");
  let [password, setpassword] = useState("");
  let[image,setimage]=useState("")
  let navigate = useNavigate();
  let inpt1 = useRef();
  let inpt2 = useRef();
  let inpt3 = useRef();
  let inpt4 = useRef();
  let inpt5 = useRef();
  let inpt6 = useRef();
  let inpt7 = useRef();
  let inpt8 = useRef();
  let inpt9 = useRef();
  let inpt10 = useRef();
  let uploadImage=useRef(null);
  let getfirstname = (e) => {
    setfirstname(e.target.value);
    inpt1.current.style.border = "none";
  };
  let getlastname = (e) => {
    setlastname(e.target.value);
    inpt2.current.style.border = "none";
  };
  let getempid = (e) => {
    setempid(e.target.value);
    inpt3.current.style.border = "none";
  };
  let getdesignation = (e) => {
    setdesignation(e.target.value);
    inpt4.current.style.border = "none";
  };
  let getemail = (e) => {
    setemail(e.target.value);
    inpt5.current.style.border = "none";
  };
  let getmobile = (e) => {
    setmobile(e.target.value);
    inpt6.current.style.border = "none";
  };
  let getexperience = (e) => {
    setexperience(e.target.value);
    inpt7.current.style.border = "none";
  };
  let getlocation = (e) => {
    setlocation(e.target.value);
    inpt8.current.style.border = "none";
  };
  let getaddress = (e) => {
    setaddress(e.target.value);
    inpt9.current.style.border = "none";
  };
  let getpassword = (e) => {
    setpassword(e.target.value);
    inpt10.current.style.border = "none";
  };
  let uploadPic=()=>{
    uploadImage.current.click()
  }
  let getImage=(e)=>{
    const file=e.target.files[0]
    // let pic=URL.createObjectURL(file)
    if(file){
      const reader=new FileReader()
      reader.onload=()=>{
        setimage(reader.result)
      }
      reader.readAsDataURL(file)
    }
    console.log(file);
  }
  let submit = (e) => {
    e.preventDefault();
    if (
      firstname.length > 2 &&
      lastname.length > 2 &&
      empid.length === 6 &&
      designation.length > 2 &&
      email.includes("@") &&
      mobile.length === 10 &&
      experience.length >= 1 &&
      location.length > 2 &&
      address.length > 2 &&
      password.length > 5
    ) {
      let obj = {
        firstname: firstname,
        lastname: lastname,
        empid: empid,
        designation: designation,
        email: email,
        mobile: mobile,
        experience: experience,
        location: location,
        address: address,
        password: password,
        image:image
      };
      axios
        .post("http://localhost:3000/employees", obj)
        .then((response) => {
          console.log(response.data);
        })
        .catch(() => {
          console.log("error");
        });
        alert('Succesfully SignUp with your detailes')
      window.location.assign("/SignUp")
    }
    if (firstname.length == "") {
      inpt1.current.style.border = "3px solid red";
      inpt1.current.placeholder = "*FirstName is required";
      inpt1.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (firstname.length <= 2) {
        inpt1.current.style.border = "3px solid red";
        inpt1.current.value = "";
        inpt1.current.placeholder =
          "*FirstName should be more than 2 characters";
        inpt1.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (lastname.length == "") {
      inpt2.current.style.border = "3px solid red";
      inpt2.current.placeholder = "*lastname is required";
      inpt2.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (lastname.length <= 2) {
        inpt2.current.style.border = "3px solid red";
        inpt2.current.value = "";
        inpt2.current.placeholder =
          "*LastName should be more than 2 characters";
        inpt2.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (empid.length == "") {
      inpt3.current.style.border = "3px solid red";
      inpt3.current.placeholder = "*Employee ID is required";
      inpt3.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (empid.length < 6) {
        inpt3.current.style.border = "3px solid red";
        inpt3.current.value = "";
        inpt3.current.placeholder =
          "*Employee ID must and should be 6 characters";
        inpt3.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (designation.length == "") {
      inpt4.current.style.border = "3px solid red";
      inpt4.current.placeholder = "*Designation is required";
      inpt4.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (designation.length <= 2) {
        inpt4.current.style.border = "3px solid red";
        inpt4.current.value = "";
        inpt4.current.placeholder = "*Designation must and should be wanted";
        inpt4.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (email.length == "") {
      inpt5.current.style.border = "3px solid red";
      inpt5.current.placeholder = "*Email is required";
      inpt5.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (!email.includes("@")) {
        inpt5.current.style.border = "3px solid red";
        inpt5.current.value = "";
        inpt5.current.placeholder = "*Enter the Email properly";
        inpt5.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (mobile.length == "") {
      inpt6.current.style.border = "3px solid red";
      inpt6.current.placeholder = "*Mobile Number is required";
      inpt6.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (mobile.length < 10) {
        inpt6.current.style.border = "3px solid red";
        inpt6.current.value = "";
        inpt6.current.placeholder = "*Enter the Number properly";
        inpt6.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (experience.length == "") {
      inpt7.current.style.border = "3px solid red";
      inpt7.current.placeholder = "*Experience is Mandatory";
      inpt7.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (experience.length < 1) {
        inpt7.current.style.border = "3px solid red";
        inpt7.current.value = "";
        inpt7.current.placeholder = "*Enter the experience properly";
        inpt7.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (location.length == "") {
      inpt8.current.style.border = "3px solid red";
      inpt8.current.placeholder = "*Location is Mandatory";
      inpt8.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (location.length < 1) {
        inpt8.current.style.border = "3px solid red";
        inpt8.current.value = "";
        inpt8.current.placeholder = "*Enter the location properly";
        inpt8.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (address.length == "") {
      inpt9.current.style.border = "3px solid red";
      inpt9.current.placeholder = "*address is Mandatory";
      inpt9.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (address.length <= 2) {
        inpt9.current.style.border = "3px solid red";
        inpt9.current.value = "";
        inpt9.current.placeholder = "*Enter the address properly";
        inpt9.current.classList.add(style["placeholder-color--danger"]);
      }
    }
    if (password.length == "") {
      inpt10.current.style.border = "3px solid red";
      inpt10.current.placeholder = "*password is Mandatory";
      inpt10.current.classList.add(style["placeholder-color--danger"]);
    } else {
      if (password.length < 5) {
        inpt10.current.style.border = "3px solid red";
        inpt10.current.value = "";
        inpt10.current.placeholder = "*Enter the password properly";
        inpt10.current.classList.add(style["placeholder-color--danger"]);
      }
    }
  };
  return (
    <div id={style.formpage}>
      <div id={style.formbox}>
        <h1>SignUp</h1>
        <br />
        <form action="">
          <div id={style.input1} className={style.allinput}>
            <label htmlFor="FirstName">FirstName</label>
            <br />
            <input
              ref={inpt1}
              id="FirstName"
              type="text"
              placeholder="Enter the FirstName"
              maxLength={20}
              value={firstname}
              onChange={getfirstname}
            />
          </div>
          <br />
          <div id={style.input2} className={style.allinput}>
            <label htmlFor="LastName">LastName</label>
            <br />
            <input
              ref={inpt2}
              id="LastName"
              type="text"
              placeholder="Enter the LastName"
              maxLength={20}
              value={lastname}
              onChange={getlastname}
            />
          </div>
          <br />
          <div id={style.input3} className={style.allinput}>
            <label htmlFor="empid">EmployeeID</label>
            <br />
            <input
              ref={inpt3}
              id="empid"
              type="text"
              placeholder="Enter the EmployeeID"
              maxLength={6}
              value={empid}
              onChange={getempid}
            />
          </div>
          <br />
          <div id={style.input4} className={style.allinput}>
            <label htmlFor="designation">Designation</label>
            <br />
            <input
              ref={inpt4}
              id="designation"
              type="text"
              placeholder="Enter the Designation"
              maxLength={30}
              value={designation}
              onChange={getdesignation}
            />
          </div>
          <br />
          <div id={style.input5} className={style.allinput}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              ref={inpt5}
              id="email"
              type="email"
              placeholder="Enter the Email"
              value={email}
              onChange={getemail}
            />
          </div>
          <br />
          <div id={style.input6} className={style.allinput}>
            <label htmlFor="mobile">Mobile No</label>
            <br />
            <input
              ref={inpt6}
              id="mobile"
              type="text"
              placeholder="Enter the Mobile Number"
              maxLength={10}
              value={mobile}
              onChange={getmobile}
            />
          </div>
          <br />
          <div id={style.input7} className={style.allinput}>
            <label htmlFor="experience">Experience</label>
            <br />
            <input
              ref={inpt7}
              id="experience"
              type="number"
              placeholder="Enter the Experience in years"
              maxLength={3}
              value={experience}
              onChange={getexperience}
            />
          </div>
          <br />
          <div id={style.input8} className={style.allinput}>
            <label htmlFor="location">Current Location</label>
            <br />
            <input
              ref={inpt8}
              id="location"
              type="text"
              placeholder="Enter the City name"
              value={location}
              onChange={getlocation}
            />
          </div>
          <br />
          <div id={style.input9} className={style.allinput}>
            <label htmlFor="address">Address</label>
            <br />
            <input
              ref={inpt9}
              id="address"
              type="text"
              placeholder="Enter the Address"
              value={address}
              onChange={getaddress}
            />
          </div>
          <br />
          <div id={style.input10} className={style.allinput}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              ref={inpt10}
              id="password"
              type="password"
              placeholder="Enter the Password"
              value={password}
              onChange={getpassword}
            />
          </div>
          <div id={style.UploadIMage}>
            <img id="UploadIMage" src="/ImageUpload.png" alt="" style={{height:"50px",width:"50px",cursor:"pointer"}} onClick={uploadPic}/>
            <br />
            <label htmlFor="UploadIMage">Upload Your Image</label>
            <input type="file" ref={uploadImage} onChange={getImage} style={{display:"none"}}/>
          </div>
          <div id={style.input11} className={style.allbutton}>
            <button onClick={submit}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
