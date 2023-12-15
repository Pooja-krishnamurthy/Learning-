import React, { useState } from "react";

export function Todo() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleClick() {
        if (task.trim() !== '') {
            setList([...list, task]);
            setTask('');
        }
    }

    function handleDelete(index) {
        const listMisesAJour = [...list];
        listMisesAJour.splice(index, 1);
        setList(listMisesAJour);
    }

    function handleUpdate(index, value) {
        const listMisesAJour = [...list];
        listMisesAJour[index] = value;
        setList(listMisesAJour);
    }

    return (
        <div>
            <div>
                <input
                    onChange={handleChange}
                    value={task}
                    name="task"
                    type="text"
                    placeholder="Enter Task"
                />
            </div>
            <br />

            <button onClick={handleClick}>ADD</button>

            <br />

            <ul>
                {list.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleUpdate(index, prompt('Edit Task:', task))}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
