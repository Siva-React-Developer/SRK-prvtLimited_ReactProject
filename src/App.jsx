import style from "./app.module.css";
import Accounts from "./components/Accounts";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import SettingHome from "./components/SettingHome";
import SignUp from "./components/SignUp";
import Update from "./components/Update";
import Users from "./components/Users";
import Welcome from "./components/Welcome";
import CreativeFivestar from "./components/CreativeFivestar";
import bgvideo from "./video/snow1.mp4";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lists from "./components/Lists";
import SettingSystem from "./components/SettingSystem";
const App = () => {
  return (
    <div id={style.bgrnd}>
      <BrowserRouter>
        <Welcome />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Users />} path="/users" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<SignUp />} path="/SignUp" />
          <Route element={<Login />} path="/Login" />
          <Route element={<Update />} path="/update/:id" />
          <Route element={<Profile />} path="/profile/:id" />
          <Route element={<Accounts />} path="/accounts" />
          <Route element={<CreativeFivestar />} path="/CreativeFivestar/:id"/>
          <Route element={<SettingHome />} path="/SettingHome" />
          <Route element={<SettingSystem />} path="/SettingSystem" />
          <Route element={<Lists />} path="/Lists" />
          {/* <Route element={<Lists />} path="/Lists" />
          <Route element={<Lists />} path="/Lists" />
          <Route element={<Lists />} path="/Lists" />
          <Route element={<Lists />} path="/Lists" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
