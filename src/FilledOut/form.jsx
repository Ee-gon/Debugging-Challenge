import React from "react";
import ss from "./SSform.module.css";

export default function FilledOutForm({ 
        title, description, handleCreate }) {

            function handleAddTask(params) {
                const title = params.get("title");
                const description = params.get("description");

                handleCreate({ title, description, is_completed: false });
            }
            
            return (
                <div className = { ss.formBox }>
                    <form action = {handleAddTask} className = { ss.formFilled }>
                        <input type = ":text" placeholder = "Title" name = "title" value = {title} className= { ss.titleForm } />
                        <input type = ":text" placeholder = "Description" name = "description" value = {description} className= { ss.descriptionForm } />
                        <input type = "submit" value = "Add Task" className = { ss.addTaskForm }/>
                    </form>
                </div> 
            );
        }
    

