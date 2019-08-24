import React, { Component } from 'react';
// *****Bootstrap *****
import { Modal, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTodo } from '../../js/actions/index'


function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
}
const mapStateToProps = state => {
    return { todos: state.todos };
};

class connectedPopup extends Component {
    constructor({ todos }, props) {
        super();
        this.previousID = todos.length - 1;
        this.state = {
            id: this.previousID,
            content: ''

        }


    }

    onChangeHandler = event => {
        let content = event.target.value;
        this.setState({
            id: this.state.id + 1,
            content: content
        })

        console.log('previousId', this.state.id);
    }
    addNewItem = () => {
        const ID = this.state.id;
        const CONTENT = this.state.content;
        console.log("CONTENT", CONTENT);
        console.log("new ID", ID);
        this.props.addTodo({ ID, CONTENT });
        this.setState({ content: '' })

    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new task...
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        onChange={this.onChangeHandler}
                        required
                        placeholder='Add new task...'
                        aria-label="Task"
                        aria-describedby="inputGroup-sizing-default"
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.addNewItem}>Add Task</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const Popup = connect(mapStateToProps, mapDispatchToProps)(connectedPopup)
export default Popup;
