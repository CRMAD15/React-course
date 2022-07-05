import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import "../../styles/task.scss"
import { LEVELS } from '../models/levels.enum';



const TaskComponent = ({ task, complete, remove }) => {

    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return (<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break


        }
    }
    console.log(task)
    const taskCompletedIcon = () => {
        if (task.completed) {
            return <i onClick={() => complete(task)} className='bi-toggle-on' style={{ color: 'green' }}></i>
        } else {
            return <i onClick={() => complete(task)} className='bi-toggle-off' style={{ color: 'gray' }}></i>
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold'
    }


    const taskPending = {
        color: 'tomato',
        textDecoration: 'line-through',
        
    }
    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending} >
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* TODO Sustituir por un badge */}
                {taskLevelBadge()}

            </td>
            <td className='align-middle'>
                {/* TODO Sustituir por un Iconos */}
                {
                    taskCompletedIcon()
                }
                <i className='bi-trash' style={{ color: 'tomato', fontSize: 'large' }} onClick={() => remove(task)}></i>

            </td>
        </tr >
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};



export default TaskComponent;
