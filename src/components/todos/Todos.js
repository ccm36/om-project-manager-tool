import React, { useState } from 'react'
import Loader from '../utils/Loader'
import '../../styles/Todos.css'

const Todos = () => {
    const [ incompleteTasks, setIncompleteTasks ] = useState([])
    const [ completeTasks, setCompleteTasks ] = useState([])
    const [ userId, setUserId ] = useState('')

    return (
        <div>Todos</div> 
    )
}

export default Todos