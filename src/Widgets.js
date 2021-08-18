import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Abhinav is back","Top news - 999 readers")}
      {newsArticle("CoronaVirus: India updates","Top news - 886 readers")}
      {newsArticle("Tesla hits new highs","Top news - 300 readers")}
      {newsArticle("Bitcoin breaks $22k","Top news - 568 readers")}
      {newsArticle("Is redux too good?","Top news - 287 readers")}
      {newsArticle("Canada heatwaves know no bound?","Top news - 652 readers")}
    </div>
  )
}

export default Widgets
