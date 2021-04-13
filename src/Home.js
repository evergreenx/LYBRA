import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LatestPost from "./LatestPost";
import Newletter from "./Newletter";
import TheTeam from "./TheTeam";
import './css/app.css'
import Hero from "./Hero";



export default function Home() {
  return (
    <div className="container-fluid">
      <Header />
<Hero/>
      <TheTeam/>
      <LatestPost/>
      <Newletter/>
      <Footer />
    </div>
  );
}
