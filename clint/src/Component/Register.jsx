import React from 'react'
import"./Form.css"
import { useState } from 'react'


function Register() {

  const [formData, setformData] = useState({
    Name:'', Email:'', Mobile:'', Password:''


})
  const handleChange = (e) => { 
    setformData({ ...formData,
      [e.target.name] : e.target.value })
  }

  const handelSumbit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='fullfront'>
      
      <div className='fromblock'>
      <h2 className='header'>Create an account</h2>
      <p className='paragraf'>Your personal job finder is here</p>
      <form method="post" action="/Home">
        <input type='text' placeholder='name' className='enterData' name='Name' value={formData.Name} onChange={handleChange} /><br/>
        <input type='text' placeholder='Email'className='enterData'name='Email' value={formData.Email} onChange={handleChange} /><br/>
        <input type='text' placeholder='Mobile'className='enterData'name='Mobile' value={formData.Mobile} onChange={handleChange} /><br/>
        <input type='text' placeholder='Password'className='enterData'name='Password' value={formData.Password} onChange={handleChange} /><br/>
        <input type='checkbox'className='checkbox' /><br/>
        <button className='btn' onSubmit={handelSumbit}>Create account</button>
        <p className='paragraf'>Already have an account?</p>

      </form>
      </div>
      <div className='imageblock'>

      </div>
    </div>
  )
}

export default Register
