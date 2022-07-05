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


    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        console.log('task state has been modifided')
        setTimeout(() => {

            setLoading(true)
        }, 2000)
        return () => {
            console.log('taskList it is going to unmount')

        };
    }, [tasks]);

    // const chageState = (id) => {
    //     console.log("ToDo: Cambiar el estado de clas cosas")
    // }


    const completeTask = (task) => {
        console.log(`complete this task:`, task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        //DUcplicate the state tasks para crear un nuevo array que es el que se modifica ya que los estados son inmutables.
        tempTask[index].completed = !tempTask[index].completed

        //Lo que sucede aqui es que está poniendo lo opuesto a lo que haya en Completed del elemento que se clike


        //We update the state of the component with the new list of task and it will update the
        //Iterantion of the tasks in orfer tho show the task update

        setTasks(tempTask)
    }
    const deleteTask = (task) => {
        console.log(`Delete this task:`, task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask.splice(index, 1)
        setTasks(tempTask)
    }

    const addTask = (task) => {
        console.log(`Add this task:`, task)
        const tempTask = [...tasks]
        tempTask.push(task)
        setTasks(tempTask)
    }

    const Table = () => {
        return (
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
                        tasks.map((task, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    complete={completeTask}
                                    remove={deleteTask}
                                >
                                </TaskComponent>
                            )
                        })
                    }
                </tbody>

            </table>
        )
    }


    let taskTable;

    if (tasks.length > 0) {
        taskTable = <Table />
    } else {
        taskTable = <h3> There is no task to show</h3>
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks: </h5>
                    </div>
                    <div className='card-body' dat-mdb-perfect-scrollbar='true' style={{ positio: 'relative', height: '400px' }}>
                        {
                            !loading ? <p1>Loading</p1> : taskTable
                        }

                    </div>

                </div>
            </div>
            <TaskForm
                add={addTask}
                length={tasks.length}
            >

            </TaskForm>
        </div >
    );
};




export default TaskListComponent;
