import React, { Component } from 'react'
// *****Redux******
import {connect} from 'react-redux';
import { removeTodo } from '../../js/actions/index';
// *******Style*********
import './Task.css';
// *****Bootstrap*******
import {Container , InputGroup,FormControl} from 'react-bootstrap'

function mapDispatchToProps(dispatch) {
    return {
        removeTodo: id => dispatch(removeTodo(id))
    };
}

const mapStateToProps = state => {
    return { todos: state.todos };
};

class connectedTask extends Component {
     doneTask = (id) => {
        
        console.log('this.doneBg');
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
            disabled
            className='todo-item'
            value={this.props.content}
            />
            <InputGroup.Append>
                <img 
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
const Task=connect(mapStateToProps,mapDispatchToProps)(connectedTask)
export default Task