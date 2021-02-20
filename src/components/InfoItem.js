import React from 'react'
import './css/InfoItem.css'

function InfoItem(props) {
  return (
    <div className="info_section">
      <figure className="info_label" data-category={props.label}>
        <img src={props.src} alt="" className="info_image"/>
      </figure>
      <div className="info_text_wrap">
        <h5 className="info_text">{props.text}</h5>
      </div>
    </div>
  )
}

export default InfoItem;
