"use client"
import { TodoTask } from "./components/todo_parts"
import { TaskState, StringState } from "./utils/custom_types"

import styles from "./page.module.css";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [todoItems, setTodoItems]: TaskState = useState([]);
  const [taskValue, setTaskvalue]: StringState = useState("");

  function add_button_clicked(): void{
    if(taskValue === ""){
      return;
    }

    let newTodoItem = new TodoTask(taskValue);
    setTodoItems([...todoItems, newTodoItem]);
    setTaskvalue("")
  }

  function handleInputChange(e: ChangeEvent): void{
    setTaskvalue(e.target.value);
  }

  return (
    <main>
      <div className={styles.mainDiv}>
        <ul className={styles.taskList}>
          {
            todoItems.map((
              item: TodoTask, 
              index: number
              ) =>( 
              <li key={index}>
                  {item.makeTag()}
              </li>
            ))
          }
          <li className={styles.inputContainer}>
            <input 
              type="text" 
              value={taskValue} 
              className={styles.taskInput} 
              onChange={handleInputChange}
              placeholder="Enter a task"
            />
            <button 
              className={styles.addButton} 
              onClick={add_button_clicked}>
                Add
            </button>
          </li>
        </ul>
        <div className={styles.contentDiv}>
        </div>
      </div>
    </main>
  );
}
