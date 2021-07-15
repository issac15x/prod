import React,{useState,useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom';

function Menu(){
    let [menuvis,isVis] = useState('menu_invis');
    let [menuiconvis,isiconVis] = useState('menu_iconvis');

    useEffect(() => {
        console.log('start mount');
      },[]);
    useEffect(() => {
        console.log(menuvis);
      },[menuvis]);

    const menu_apply = ()=>{
        menuvis==='menu_invis'? isVis('menu_vis'): isVis('menu_invis');   
        menuiconvis==='menu_iconvis'? isiconVis('menu_iconinvis'): isiconVis('menu_iconvis');   

    } 
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
        <>
            <div className={menuvis}>
                <img src="https://img.icons8.com/color/96/000000/xbox-x--v1.png" alt ='close' onClick={menu_apply}  />
                <h2 id='home' onClick={handleRoute}>Home</h2>
                <h2 id='login' onClick={handleRoute}>Login</h2>
                <h2 id='signup' onClick={handleRoute}>Signup</h2>
            </div>
            <div className='searchtext'>
                
                <img className={menuiconvis} src="https://img.icons8.com/color/96/000000/hamburger.png" alt ='menu' width='70px' height='70px' onClick={menu_apply} />
                
            </div>
        </>
    )
}

export default Menu;