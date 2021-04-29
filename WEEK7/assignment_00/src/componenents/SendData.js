import React, {useReducer} from 'react';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}
   
export default function SendData() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const API_URL =   new URL (`http://174.138.103.233/api/employees`);

    const handleSubmit = (e)=>{
        e.preventDefault()
            fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json'},
        })
        window.location.reload();
    }
  
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset data-testid="fieldsetTest">
                <legend>USER INFORMATION</legend>
                <label htmlFor='firstName'>First Name</label>
                <input id='firstName' type='text' name ='firstName' onChange={handleChange}></input>
                <label htmlFor='lastName'>Last Name</label>
                <input id='lastName' type='text' name ='lastName' onChange={handleChange}></input>
                <label htmlFor='gender'>Gender</label>
                <input id='gender' type='text' name ='gender' onChange={handleChange}></input>
                <label htmlFor='birthday'>Birthday</label>
                <input id='birthday' type='date' name ='birthday' onChange={handleChange}></input>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name ='email' onChange={handleChange}></input>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' name ='password' onChange={handleChange}></input>
                <label htmlFor='about'>About You</label>
                <input id='about' type='text' name ='about' onChange={handleChange}></input>
            </fieldset>
            <button type='submit'>Submit</button>
        </form>
    )
}
