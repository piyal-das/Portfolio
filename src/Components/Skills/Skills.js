import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div id="skills" style={{ background: "#6b0544", borderTop: "3px solid #7b9095", borderBottom: "3px solid #7b9095" }} >
            <h1 className="text-center text-warning">My skill</h1>
            <p className="text-center text-warning">There is some skills that I work with & I always look to get new technologies to learn.</p>

            <div className="row row-cols-2 row-cols-md-3 pt-2 text-white alignment">

                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className="d-flex align-items-center">
                        <i className="devicon-react-original display-4"></i>
                    </div>
                    <h5 className="">React</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                       <i className="devicon-javascript-plain display-4"></i>
                    </div>
                    <h5 className="">JavaScript</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i className="devicon-nodejs-plain display-4"></i>
                    </div>
                    <h5 className="">Node.js</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i className="devicon-html5-plain display-4"></i>
                    </div>
                    <h5 className="">HTML</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i className="devicon-css3-plain display-4"></i>

                    </div>
                    <h5 className="">CSS</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i class="devicon-bootstrap-plain display-4"></i>
                    </div>
                    <h5 className="">Bootstrap</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i class="devicon-express-original display-4"></i>
                    </div>
                    <h5 className="">Express</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i class="devicon-mongodb-plain display-4"></i>

                    </div>
                    <h5 className="">Mongodb</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i class="devicon-heroku-original display-4"></i>
                    </div>
                    <h5 className="">Heroku</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i class="devicon-npm-original-wordmark display-4"></i>
                    </div>
                    <h5 className="">npm</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <i class="devicon-visualstudio-plain display-4"></i>

                    </div>
                    <h5 className="">Visual Studio</h5>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center trans-card pb-3">
                    <div className=" d-flex align-items-center">
                    <img width="110px" src='https://firebase.google.com/downloads/brand-guidelines/SVG/logo-knockout.svg' alt=""/>

                    </div>
                  
                </div>
               
            </div>
        </div>

    );
};

export default Skills;