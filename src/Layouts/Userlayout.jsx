import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

function Userlayout() {
  return (
    <div className="pagecontainer">
      <div className="content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Userlayout
