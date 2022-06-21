import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';
import TaskComponent from '../pure/task';
import "../../styles/task.scss"
import { useState } from 'react';
import { useEffect } from 'react';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = ({ items }) => {



    const defaultTask1 = new Task('Example1', 'Default description1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Default description2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Default description3', true, LEVELS.BLOCKING)


    const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        console.log('task state has been modifided')
        setLoading(true)
        return () => {
            console.log('taskList it is goinf to un mount')

        };
    }, [task]);

    // const chageState = (id) => {
    //     console.log("ToDo: Cambiar el estado de clas cosas")
    // }



    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks: </h5>
                    </div>
                    <div className='card-body' dat-mdb-perfect-scrollbar='true' style={{ positio: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    task.map((task, index) => {
                                        return (
                                            <TaskComponent
                                                key={index}
                                                task={task}>
                                            </TaskComponent>
                                        )
                                    })
                                }
                            </tbody>

                        </table>

                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>

        </div >
    );
};





export default TaskListComponent;
