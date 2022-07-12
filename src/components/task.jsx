import React, { useState } from "react";

const Task = ({ task, deleteTask }) => {
    const [completed, setComplete] = useState(false)
    return (
        <div>
            <h3 style={{ textDecoration: completed && "line-through" }}>{task.content}</h3>
            <input type="checkbox" checked={task.isComplete}
                onChange={e => setComplete(e.target.checked)} />

            <button onClick={deleteTask}> Delete</button>
        </div>
    )
}

export default Task