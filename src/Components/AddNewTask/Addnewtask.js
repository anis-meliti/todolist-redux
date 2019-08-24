import React, { Component } from 'react'
//*********** Bootstrap ********
import { ButtonToolbar } from 'react-bootstrap'

// ****Components****
import Popup from './Popup'

class AddNewTask extends Component {

    constructor() {
        super();
        this.state = {
            modalShow: false
        }
    }

    render() {

        return (

            <ButtonToolbar className='add-btn'>
                <img
                    src={require('../../assets/plus-circle-solid.svg')}
                    alt='plus icon'
                    onClick={() => this.setState({ modalShow: true })}
                />
                <Popup
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                />
            </ButtonToolbar>
        );
    }
}

export default AddNewTask
