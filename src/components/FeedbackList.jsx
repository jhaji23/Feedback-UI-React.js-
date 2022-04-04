import React from "react";
import FeedbackItem from "./FeedbackItem";
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({ data ,handleDelete}) {
  console.log(data);
  
  return (
    <div className="feedback-list">
      <AnimatePresence>
      {data.map((i) => (
        <motion.div 
        key={i.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
        <FeedbackItem
          key={i.id}
          item={i}
          handleDelete={handleDelete}
        
        />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}

// return (
//   <div className="feedback-list">
//     {data.map((i) => (
//       <FeedbackItem
//         key={i.id}
//         item={i}
//         handleDelete={handleDelete}
      
//       />
//     ))}
//   </div>
// );

export default FeedbackList;
