import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    
    const handleRoute = (e) =>{
        e.preventDefault();
        const id = e.currentTarget.id ;
        if(id === 'home'){
            history.push('/');
        }
        else{
            history.push('/'+id);
        }
        
      }
    return(
        <div className='background'>
            <h1 id='home'>Burgaro</h1>
            <div className='menu'>
                
                <h2 id='browse' onClick={handleRoute}>Browse</h2>
                <h2 id='login' onClick={handleRoute}>Login</h2>
                <h2 id='signup' onClick={handleRoute}>Signup</h2>

                
            </div>

        </div>
    )
}

export default Home;