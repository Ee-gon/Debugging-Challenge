import { useEffect, useState } from 'react'
import './App.css'
import FilledOutForm from './FilledOut/form';
import Cards from './Cards/Cards';

function Foundation() {
 
    const [tasks, setTasks] = useState([]);


   
    async function getTasks() {
        try {
          const response = await fetch("http://localhost:4000/tasks");
          const tasksData = await response.json();
           
           //tasksData.map(task =>
            // <taskCard 
            // title = {task.title} 
            // description = {task.description} 
            // is_completed = {task.is_completed} 
            // taskId = {task.taskId}
            // />
            // );
          setTasks(tasksData);
          console.log(tasksData);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
    }

useEffect(() => {
    getTasks();
}, []);



    async function deleteTask(id) {
        try {
          const response = await fetch(`http://localhost:4000/tasks/delete/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          getTasks();
        } catch (error) {
          console.error("Error deleting tasks:", error);
        }
      }
    

    // const handleSearchChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    // const [condition, setCondition] = useState('');

    // const handleConditionChange = (event) => {
    //     setCondition(event.target.value);
    // };

    // const [showDropdown, setShowDropdown] = useState(false);
    // const toggleDropdown = () => {
    //     setShowDropdown(!showDropdown);
    // };

    async function updateTask(taskId, updatedData) {
        try {
          const response = await fetch(
            `http://localhost:4000/fullUpdate/${taskId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedData),
            }
          );
    
          if (!response.ok) {
            throw new Error("Failed to update task");
          }
    
          const result = await response.json();
          console.log("Task updated successfully:", result);
        } catch (error) {
          console.error("Error updating task:", error);
        }
      }


    async function createTask(data) {
        console.log("here data looks like", data);
        console.log(JSON.stringify(data));

        try {
            const response = await fetch(`http://localhost:4000/tasks/add`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
      
            if (!response.ok) {
              throw new Error("Failed to create task");
            }
      
            const result = await response.json();
            console.log("Task created successfully:", result);
            getTasks();
          } catch (error) {
            console.log(error);
          }
    }

    return (
         <>
            <div className = "topBox">
                <h1>MyPlanner!</h1>
                 <p>~ plan your day, your way ~</p>

                <></>
                <h1><b>________________________________________________</b></h1>
                <></>
            </div>
                {/* <input 
                    type="text" 
                    placeholder="Search..." 
                   // value={searchTerm} 
                    onChange={handleSearchChange} 
                />         */}

                {/* <button 
                        onClick={toggleDropdown} 
                    >
                        Conditions
                    </button>
                    {showDropdown && (
                        <select 
                            value={condition} 
                            onChange={handleConditionChange} 
                            style={{ marginLeft: '10px' }}
                        >
                            <option value="">Select Condition</option>
                            <option value="allTasks">All Tasks</option>
                            <option value="incompleteTasks">Incomplete Tasks</option>
                            <option value="completeTasks">Complete Tasks</option>
                        </select>
                    )}
            </div> */}

            <div className = "midBox">
                    
            <Cards handleCreate={createTask} />
            {tasks.length === 0 ? (
        <p className="serverInfo">Sorry you got some Server related issues, go see a counselor</p>
         ) : (
        tasks.map((task) => (
          <FilledOutForm
            key={task.id}
            {...task}
            handleDelete={deleteTask}
            handleUpdate={updateTask}
          />
        ))
      )}
      
            </div>
 </>
        
    )
}

export default Foundation;