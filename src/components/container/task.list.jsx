import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';
import TaskComponent from '../pure/forms/task';


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    const chageState = (id) => {
        console.log("ToDo: Cambiar el estado de clas cosas")

    }
    return (
        <div>
            <h1>Your tasks:</h1>
            <TaskComponent task={defaultTask}></TaskComponent>

        </div>
    );
};





export default TaskListComponent;
