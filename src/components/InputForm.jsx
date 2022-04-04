import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function InputForm({handleAdd}) {
    const[text,setText]=useState("");
    const[isDisabled,setIsDisabled]=useState(true);
    const[msg,setMsg]=useState("")

    const[rating,setRating]=useState(10);
    

    const handleTextChange=(e)=>{
        if(text===''){
            setIsDisabled(true);
            setMsg(null);
        }else if( text!=='' && text.trim().length<10){
          setIsDisabled(true);
          setMsg('review must be atleast 10 characters')
        }else{
          setMsg(null);
          setIsDisabled(false);

        }
        setText(e.target.value);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(text.trim().length>10){
        const newFeedback = {
          text,
          rating,
        };

        handleAdd(newFeedback)
        setText("");
      }
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={rating=>setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review..."
            value={text}
          />
          <Button type="submit" isDisabled={isDisabled}> Send</Button>
        </div>
        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  );
}

export default InputForm