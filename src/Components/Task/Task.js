import React, { Component } from 'react'
// *****Redux******
import { connect } from 'react-redux';
import { removeTodo } from '../../js/actions/index';
// *******Style*********
import './Task.css';
// *****Bootstrap*******
import { Container, InputGroup, FormControl } from 'react-bootstrap'

function mapDispatchToProps(dispatch) {
    return {
        removeTodo: id => dispatch(removeTodo(id))
    };
}

const mapStateToProps = state => {
    return { todos: state.todos };
};

class connectedTask extends Component {
    constructor() {
        super();
        this.state = {

            doneStyle: 'todo-item'
        }

    }


    doneTask = (id) => {
        id.persist();
        this.setState({ doneStyle: 'todo-item-done' })
        setTimeout(() => {
            this.deleteTask(id)
            this.setState({ doneStyle: 'todo-item' })
        }, 3000)

        console.log(id);
    }
    deleteTask = (id) => {
        console.log('id from delete', id);
        this.props.removeTodo(id);
    }
    render() {
        return (
            <Container className="task-container">

                <InputGroup>

                    <FormControl
                        id={this.props.id}
                        disabled
                        className={this.state.doneStyle}
                        value={this.props.content}
                    />
                    <InputGroup.Append>
                        <img
                            id={this.props.id}
                            src={require("../../assets/verification-checkmark-symbol-in-black-circular-button.svg")}
                            alt='done-icon'
                            onClick={this.doneTask}
                        />
                        <img
                            src={require("../../assets/delete.svg")}
                            alt='delete-icon'
                            onClick={this.deleteTask}
                        />
                    </InputGroup.Append>
                </InputGroup>
            </Container>

        )
    }
}
const Task = connect(mapStateToProps, mapDispatchToProps)(connectedTask)
export default Task