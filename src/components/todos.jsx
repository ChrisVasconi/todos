import React, { useState } from "react";
import Todoform from "./TodoForm";
import Task from "./task";

const Todos = () => {
    const [taskList, setTaskList] = useState([])

    const addTask = (task) => {
        setTaskList([...taskList, task]);
    }
    const deleteTask = (delIdx) => {
        const filteredToDos = taskList.filter((t, i) =>
            i !== delIdx
        )
        setTaskList(filteredToDos);
    }
    return (
        <div>
            <Todoform
                addTask={addTask}
            /> {
                taskList.map((t, i) =>
                    <Task
                        deleteTask={() => deleteTask(i)}
                        task={t} />)}
        </div>
    )
}
export default Todos;