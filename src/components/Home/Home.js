import img from "./hemant.jpg"
import React from 'react'
import "./Home.css";
export default function Home() {
    
   
    return (
        <div id='home'>
            <img src={img} alt="" />
            <div className='name'>
                <h1>Hi there, I'm Hemant Kumar Jayas</h1>
                <p>I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p>
                <a href="https://drive.google.com/file/d/1DfQVOy8uxb6SM5BcvMyHbFmBAQJRYKrb/view?usp=sharing" target="_blank"><button>Download CV</button></a>
            </div>
        </div>
    )
}

