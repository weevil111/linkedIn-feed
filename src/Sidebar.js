import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://www.wallpaperup.com/uploads/wallpapers/2019/09/04/1337713/d56666c7d4ef056f4367db506d063f5c-700.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Abhinav Mishra</h2>
        <h4>abhinavparagmishra23@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")} 
        {recentItem("softwareengineering")} 
        {recentItem("design")} 
        {recentItem("developer")} 
      </div>
    </div>
  )
}

export default Sidebar
