import React from 'react'

import { Container } from 'react-bootstrap';
import MyHeader from './Components/MyHeader/MyHeader'
import Tasks from './Components/Tasks/Tasks'

const Handler = () => {
    return (
        <Container>
            <MyHeader />
            <Tasks />
        </Container>
    )
}

export default Handler
