import { useEffect, useState } from "react";
import style from "./settings.module.css"
import { Link } from "react-router-dom";
import axios from "axios";
const Settings = () => {
  let [settingTypes,setsettingTypes]=useState([])
  useEffect(()=>{
  axios.get("http://localhost:3000/settings")
  .then((response)=>{
    setsettingTypes(response.data)
  })
  },[])
  return (
    <div id={style.settingPage}>
      <aside>
      <div id={style.profile}>
          <img src="/AccountProfile.jpg" alt="" />
          <div id={style.profileName}>
            <p>Dasu Sivarama Krishna</p>
            <p>sivarmdasu35@gmail.com</p>
          </div>
        </div>
        <br />
        <input type="text" placeholder="Find Setting"/>
        <div id={style.scrollingContent}>
          {
            settingTypes.map((x)=>{
              return(
                <Link to={`${x.settingId}`}>
                <div id={style.setting}>
                  <img src={x.settingLogo} alt="" style={{height:"36px",width:"36px",margin:"0px 0px 0px 15px"}} />
                  <p>{x.settingName}</p>
                </div>
                </Link>
              )
            })
          }
        </div>
      </aside>
      <main>
          <p>Home</p>
          <nav>
            <div id={style.left}>
              <img src="/Accenture1.webp" alt="" />
              <div>
                <h3>DESKTOP-FIFF8V8</h3>
                <p>inspiron 15 3525</p>
                <p>Rename</p>
              </div>
            </div>
            <div id={style.right}>
              <img src="/WifiIcon.png" alt="" />
              <div>
                <h4>Delux PG 4th floor_5G</h4>
                <p>Connected,Secured</p>
              </div>
            </div>
          </nav>
          <div id={style.homeSettingboxes}>
            <div id={style.recentlySettings}>
            <div id={style.recentsett1}>
              <h3>Recommended Settings</h3>
              <p>Recently and commonly used settings</p>
            </div>
            <div className={style.recentsett2}>
              <img src="/SettingIcon.png" alt="" />
              <p>Taskbar</p>
            </div>
            <div className={style.recentsett2}>
            <img src="/SettingIcon.png" alt="" />
            <p>Sound</p>
            </div>
            <div className={style.recentsett2}>
            <img src="/SettingIcon.png" alt="" />
            <p>Installed apps</p>
            </div>
            </div>
            <div id={style.cloudStorage}>
              <img src="/CloudIcon.png" alt="" />
              <h3>Cloud Storage</h3>
              <p>Make sure your signed in with sivaramdau35@gmail.com so you can see your storage detailes here.</p>
              <Link to=""><button>Sign to OneDrive</button></Link>
            </div>
          </div>
      </main>
    </div>
  );
};
export default Settings;
