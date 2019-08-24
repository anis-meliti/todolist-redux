import React from 'react'

import { Container } from 'react-bootstrap';
import MyHeader from './Components/MyHeader/MyHeader'
import Tasks from './Components/Tasks/Tasks'
import AddNewTask from './Components/AddNewTask/Addnewtask';

const Handler = () => {
    return (
        <Container>
            <MyHeader />
            <Tasks />
            <AddNewTask />
        </Container>
    )
}

export default Handler
