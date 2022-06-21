import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import "../../npstyles/task.scss"
import { LEVELS } from '../models/levels.enum';


const TaskComponent = ({ task }) => {

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

    const taskCompletedIcon = () => {
        if (task.completed) {
            return <i className='bi-toggle-on' style={{ color: 'green' }}></i>
        } else {
            return <i className='bi-toggle-on' style={{ color: 'gray' }}></i>
        }
    }
    return (

        <tr className='fw-normal'>
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
                <i className='bi-trash' style={{ color: 'tomato', fontSize: 'large' }}></i>

            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
