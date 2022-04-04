import {FaTimes} from 'react-icons/fa'
import React from "react";
import Card from "./shared/Card";


function FeedbackItem({item,handleDelete}) {

 
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>handleDelete(item.id)}><FaTimes color='red'/></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
