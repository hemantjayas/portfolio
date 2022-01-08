import img1 from "./pulse.png"
import img2 from "./health.jpg"
import React from 'react'
import("./Proj.css")
export default function Proj(props) {
    return (
        <div className='proj'>
            <h1>My Recent Work</h1>
            <div className="projCont">
                <div className="final">
                    <div className="img"><img src={img2} alt="" /></div>

                    <h2>HealthKart clone</h2>
                    <p>HealthKart.com is India's largest online health and fitness store for men and women. Shop online from the latest collections of health, fitness and similar products featuring the best brands.</p>
                    <h3>Tech Stack</h3>

                    <div className="tech">
                        <div>
                            <i class="fab fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div>
                            <i class="fab fa-css3"></i>
                            <p>CSS</p>
                        </div>
                        <div>
                            <i class="fab fa-js"></i>
                            <p>JavaScript</p>
                        </div>

                    </div>
                    <div className='buttons'>
                    <a href="https://hemantjayas.github.io/HealthKart/" target="_blank" rel="noreferrer"><button>Preview</button></a>
                        <a href="https://github.com/hemantjayas/HealthKart" target="_blank" rel="noreferrer"><button>Code</button></a>
                    </div>
                </div>
                <div className="final">
                    <div className="img"><img src={img1} alt="" /></div>

                    <h2>Pulseplus clone</h2>
                    <p>
Pulse Pharmacy is a leading Online Pharmacy in India that offers prescription medicines and OTC products all over India. Pulse Pharmacy is to ensure health to all the individuals.</p>
                    <h3>Tech Stack</h3>

                    <div className="tech">
                        <div>
                            <i class="fab fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div>
                            <i class="fab fa-css3"></i>
                            <p>CSS</p>
                        </div>
                        <div>
                            <i class="fab fa-js"></i>
                            <p>JavaScript</p>
                        </div>

                    </div>
                    <div className='buttons'>
                    <a href="https://hemantjayas.github.io/PulsePlus/" target="_blank" rel="noreferrer"><button>Preview</button></a>
                        <a href="https://github.com/hemantjayas/PulsePlus" target="_blank" rel="noreferrer"><button>Code</button></a> 
                    </div>
                </div>
            </div>

        </div>
    )
}
