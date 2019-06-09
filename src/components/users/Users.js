import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Loader from '../utils/Loader'
import User from './User'
import '../../styles/Users.css'

const Users = () => {

    const [users, setUsers] = useState([])
   
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(users => setUsers(users))
    }, [])

    let usersArray = users.map(user => <User user={user}/>)
    
    return (
        <div className='container'>
            <h1>Users</h1>
            {
                users.length > 0 ?
                <Row>{usersArray}</Row>
                : <Col xs={1} xsOffset={5}><Loader /></Col>
            }
        </div>
    )
}

export default Users