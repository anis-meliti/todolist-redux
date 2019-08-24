import React from 'react'
// ******Redux*****
import { connect } from 'react-redux';

// *******Bootstrap*******
import { Container, Row, Col } from 'react-bootstrap';
// *****Style*******
import './MyHeader.css'


const mapStateToProps = state => {
    return { owner: state.owner };
};

const connectedHeader = ({ owner }) => {
    return (
        <Container className='owner-container' >
            <Row>
                <Col className='owner-img' sm={2}>
                    <img src={owner.pic} alt="owner pic" />
                </Col>
                <Col className='welcome-msg' md>
                    <h3> Welcome back {owner.name}</h3>
                    <p>Here is a list of things you need to do </p>
                </Col>
            </Row>
        </Container>
    )
}
const MyHeader = connect(mapStateToProps)(connectedHeader)
export default MyHeader
