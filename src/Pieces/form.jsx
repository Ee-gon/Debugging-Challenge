import React from "react";
//import ss from "./SSboxes.css";

export default function NewBox({ 
        title, description, handleCreate }) {

            function handleAddTask(params) {
                const title = params.get("title");
                const description = params.get("description");

                handleCreate({ title, description, is_completed: false });
            }
            
            return (
                <div className = { "formBox" }>
                    <form action = {handleAddTask} className = { "formBox" }>
                        <input type = ":text" placeholder = "Title" name = "title" value = {title} />
                        <input type = ":text" placeholder = "Description" name = "description" value = {description} />
                        <input type = "submit" value = "Add Task" className = {"addTask"}/>
                    </form>
                </div> 
            );
        }
    

