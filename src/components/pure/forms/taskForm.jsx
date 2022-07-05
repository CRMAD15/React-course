import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';


const TaskForm = ({ add, length }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const addTask = (e) => {

        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }

    const normalStyle = {
        color: 'blue',
        fontWeigth: 'blod'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeigth: 'blod',
        textShadow: '2px 2px 2px black'
    }
    const blockingStyle = {
        color: 'tomato',
        fontWeigth: 'blod'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-center mb-4'>

            <div className="form-outline flex-fill">
                <input ref={nameRef} id='inputName' type="text" className='form-control form-control-lg' required autoFocus placeholder='Task name' />
                <input ref={descriptionRef} id='inputDescription' type="text" className='form-control form-control-lg' required placeholder='Task description' />
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
            </div>

            <button type='submit' className='btn btn-success btn-lg ms-2'>
                {length > 0 ? 'Add' : 'Create youe new task'}</button>

        </form>
    );
}
TaskForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
