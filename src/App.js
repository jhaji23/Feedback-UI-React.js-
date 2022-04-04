import {v4 as uuidv4} from 'uuid'
import { Header } from "./components/Header";
import { useState } from "react";

import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import InputForm from "./components/InputForm";

function App() {
  const [data, setData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
  
    setData([newFeedback , ...data])
  }




  return (
    <>
      <div className="head">
        <Header title="Feedback UI"></Header>
      </div>

      <div className="container">
        <InputForm  handleAdd={addFeedback}/>

        <FeedbackStats data={data}></FeedbackStats>

        <FeedbackList data={data} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
