import { Link } from "react-router-dom";

import navbar from "./navbar.module.css";
export const Navbar = () => {
  return <nav className={navbar.navbar}>
    <div><Link to ="/"><div className={navbar.logo}>Health Tracker</div></Link></div>
    <div><Link to="/archive">Archives</Link></div>
  </nav>;
};
