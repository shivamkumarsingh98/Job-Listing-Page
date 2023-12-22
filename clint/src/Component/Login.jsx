import React from 'react'
import "./Form.css"
import { useState } from 'react'

function Login() {

    const [formData, setformData] = useState({
        Email: "", Password: ""

    })
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name] : e.target.value  })
    }

    const handelSumbit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='fullfront'>
            <div className='fromblock'>
            <h2 className='header'>Create an account</h2>
            <p className='paragraf'>Your personal job finder is here</p>
            <form method="post" action="..\Page\Home\Home">
                <input type='text' placeholder='Email' name='Email' className='enterData' value={formData.Email} onChange={handleChange} /><br />
                <input type='text' placeholder='Password' name='Password' className='enterData' value={formData.Password} onChange={handleChange} /><br />
                <button className='btn' onSubmit={handelSumbit}>Sign in </button>
                <p className='paragraf'>Already have an account?</p>
            </form>
            </div>
            <div className='imageblock'>

            </div>
        </div>
    )
}

export default Login
