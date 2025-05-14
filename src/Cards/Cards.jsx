import React, { useState } from "react";
import ss from "./SSboxes.css";

export default function Boxes ({

    id,
    title,
    description,
    is_completed,
    handleDelete,
    handleUpdate,
}) {
    const [titleText, setTitleText] = useState(title);
   // const [description, setDescription] = useState(description); 

    const [is_Completed, setIsCompleted] = useState(is_completed === 0 ? false : true);


    const [editClicked, setEditClicked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    function handleChange() {

        setIsDisabled(false);
        setEditClicked(true);
            if(editClicked) {
                handleUpdate(id, {
                    title: titleText,
                    description: description,
                    is_Completed: is_completed,
                });


                console.log(titleText, description, isCompleted);
                setEditClicked(false);
                setIsDisabled(true);
            
                }
            }
        
function onCheckClick() {
    handleUpdate( isDisabled, {
        title: titleText,
        description: description,
        is_Completed: is_completed,
    });
    setIsCompleted(!is_completed);
}

return (

    <div className = { "box" } >
        <div className = { "boxButtons" }>    
        

        {/* 
        
        handles the different edit options at the top of each box (task)      

        VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

        */}

        <button onClick = {() => {}}> 
            <i className ="material-symbols-outlined">
            delete  </i>
        </button>

        <button onClick = {() => {}} >
            {editClicked ? (
              <i
                className = "material-symbols-outlined">done</i>
            ) : (
                <i className = "material-symbols-outlined">edit</i>
            )}
        </button>
    </div>

    <div className = {is_Completed ? ss.boxCompleted : "box"}>
        <div className = {"title"}>
            <input
                type = "type"            
                name = "title"
                value = {titleText}
                onChange = {(e) => setTitleText(e.target.value)}
                disbaled = {isDisabled}
                />
                <textarea
                    type = "text"
                    name = "description"
                    value = {description}
                    maxLength = {200}
                    onChange = {(e) => setDescription(e.target.value)}
                    disabled = {isDisabled}
                    />
        </div>
        <div className = {"checkBox"}>
            <input
               type = "checkbox"
               name = "check"
               checked = {isCompleted}
               value = {isCompleted}
              // onChange = {}            
            />
        </div>
    </div>
</div>
);
}