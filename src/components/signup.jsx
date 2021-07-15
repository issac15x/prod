import React from 'react';


function Signup(){
    return(
        <div className='signup_container'>
            
            <div className = 'formcontainer'>
                <form className='signup_form'>
                    <h1>Sign up</h1>
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button>Signup</button>
                </form>
            </div>
        </div>
    )
}
export default Signup;