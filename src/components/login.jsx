import React from 'react';


function Login(){
    return(
        <div className='login_container'>
            
            <div className = 'formcontainer'>
                <form className='login_form'>
                    <h1>Login</h1>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;