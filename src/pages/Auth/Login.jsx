import React from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {

    const navigate = useNavigate();

    const Guest_Log = () => {
        navigate('/')
    }

    return (
        <>
            <div>
                <h1>login</h1>
            </div>

            <button className='btn btn-success' onClick={Guest_Log}>Login As Guest</button>
        </>
    )
}

export default login