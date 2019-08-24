import React from 'react'
import Task from '../Task/Task'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return ({ todos: state.todos });
};

const connectedTasks = ({ todos, filterCat }) => {
    return (
        <div>
            {
                todos.map((el, i) => (

                    <Task content={el.CONTENT} id={el.ID} key={i} />))

            }
        </div>
    )
}
const Tasks = connect(mapStateToProps)(connectedTasks)

export default Tasks


