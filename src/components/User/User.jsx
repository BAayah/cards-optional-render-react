import React from 'react';
import './User.css';

export const User = ({ el }) => {
  return (
    <div className="user-card">
      <div className="avatar">
        <img src={el.img} />
      </div>
      <b className='fn'>{el.full_name}</b>
      <b className='ag'>{el.age}</b>
      <b className='st'>{el.status}</b>
      <b className='count'>{el.country}</b>
    </div>
  )
}


