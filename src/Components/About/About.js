import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            
         <div id="about" className="text-center footerPart p-4 text-warning" style={{ background:"#6b0544", borderTop:"#05386B 3px solid", marginBottom:'15px !important'}}>
            <h3>About Me</h3>
            <h1>Piyal Das</h1>
            <p className="text-justify container" style={{ marginBottom:0}}>Customer Service to Web Developer. That journey was not too easy. But Now my passion become my profession. I really love to solve new problems every day. I love to learn new technologies. I always try my level best to fulfill my client's requirements and that's my first priority.</p>
            <br/>
            <h4> Contact me</h4>
            <div className="mt-3">
               <a href="https://github.com/piyal-das" target="_blank" className="text-decoration-none" > <i  className=" text-white devicon-github-plain display-4 p-2 "></i></a>
               <a href="https://www.linkedin.com/in/piyal-das-00a5a91b9/" target="_blank" className="text-decoration-none"><i className="text-white devicon-linkedin-plain display-4 p-2"></i></a>
            </div>
         </div>
        </div>
    );
};

export default About;