import React,{useState,useEffect } from 'react';
import Food from './food.jsx';
import Menu from './menu.jsx';

function Browse(props) {
    let [api, setApi] = useState([
        {id:1,name:'Sandwich',imgsrc:'https://www.eatthis.com/wp-content/uploads/2019/02/sandwich.jpg',price:'5$'},
        {id:2,name:'Waldorf Salad',imgsrc:'https://www.eatthis.com/wp-content/uploads/2019/02/waldorf-salad.jpg',price:'15$'},
        {id:3,name:'French Fries',imgsrc:'https://www.eatthis.com/wp-content/uploads/2018/02/french-fries-side-ketchup.jpg',price:'12$'},
        {id:4,name:'Caesar Salad',imgsrc:'https://www.eatthis.com/wp-content/uploads/2018/12/caesar-salad-with-dressing.jpg',price:'10$'},
        {id:5,name:'Salisbury Steak',imgsrc:'https://www.eatthis.com/wp-content/uploads/2019/02/salisbury-steak.jpg',price:'50$'},
        {id:6,name:'Baked Alaska',imgsrc:'https://www.eatthis.com/wp-content/uploads/2018/11/baked-alaska.jpg',price:'20$'},
        {id:7,name:'Eggs Benedict',imgsrc:'https://www.eatthis.com/wp-content/uploads/2018/09/eggs-benedict.jpg',price:'21$'},
        {id:8,name:'California Roll',imgsrc:'https://www.eatthis.com/wp-content/uploads/2018/08/california-roll.jpg',price:'15$'},
        {id:9,name:'Fettuccine Alfredo',imgsrc:'https://www.eatthis.com/wp-content/uploads/2018/12/bowl-of-fettuccine-alfredo.jpg',price:'51$'},
        {id:10,name:'Sloppy Joe',imgsrc:'https://www.eatthis.com/wp-content/uploads/2019/02/sloppy-joe.jpg',price:'33$'},
        {id:11,name:'Kung Pao Chicken',imgsrc:'https://www.eatthis.com/wp-content/uploads/2019/02/kung-pao-chicken.jpg',price:'10$'},
        {id:12,name:'Chop Suey',imgsrc:'https://www.eatthis.com/wp-content/uploads/media/images/ext/689177305/chop-suey.jpg',price:'12$'},
        {id:13,name:'Nachos',imgsrc:'https://www.eatthis.com/wp-content/uploads/2016/03/eating-nachos-HersonRodriguez-hero-unsplash.jpg',price:'15$'},
        {id:14,name:'Margherita Pizza',imgsrc:'https://www.eatthis.com/wp-content/uploads/2019/02/margherita-pizza.jpg',price:'20$'},
    ]);
    
    
    return( 
        < >
            
            <Menu />
            <div className='form_div'>

                <form>
                    <input type="text" />
                    <button >Search</button>
                </form>
                
            </div>
            <div className='food_divs_container'>
                {api.map(list=>(
                    
                    <Food key={list.id} name={list.name} imgsrc={list.imgsrc} price={list.price}/>
                ))}
            </div>
            
            <footer>
                Devloper : issac15x <br />
                Project Name : Burgaro <br />
                Finished In : 07/15/2021
            </footer>
            
        </>
        
    )
    
}

export default Browse;