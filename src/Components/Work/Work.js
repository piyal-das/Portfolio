import React from 'react';
import webOne from '../../../src/webOne.png'
import webTwo from '../../../src/webTwo.png'
import webThree from '../../../src/webThree.png'


const Work = () => {


    return (
      
        <div id="work" className="mt-5 container" >
            <h1 className="text-center display-3 pb-3" style={{ color: "#05386B"}}>Projects</h1>

            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#6b0544" }}>
                        <img src={webOne} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-success">Creative Agency</h3>
                            <h5 className="card-text text-light">A FrontEnd website that has been used React Node.js mongodb firebase heroku, HTML, CSS and javascript</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/piyal-das/creative-agency-client.git" target="_blank"><button className="btn btn-outline-info btn-sm">Github</button></a>
                         <a href="https://creative-agency-80424.web.app" target="_blank"><button className="btn btn-outline-info btn-sm">Website</button></a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#6b0544" }}>
                        <img src={webThree} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-success">Volunteer Network</h3>
                            <h5 className="card-text text-light">A full stack website that had been used React, Node.js mongodb, firebase and heroku</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href=" https://github.com/piyal-das/volunteer-network-main.git" target="_blank"><button className="btn btn-outline-info btn-sm">Github</button></a>
                         <a href="https://volunteer-network-38ffe.web.app/" target="_blank"><button className="btn btn-outline-info btn-sm">Website</button></a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4 trans-card">
                    <div className="card" style={{ background: "#6b0544" }}>
                        <img src={webTwo} style={{ height: "250px" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-success">Travel Guru</h3>
                            <h5 className="card-text text-light">A TravelBased website that had been developed with React, context api, firebase, HTML, CSS and javascript</h5>
                        </div>
                        <div className="d-flex justify-content-around pb-2">
                         <a href="https://github.com/piyal-das/Travel-guru.git" target="_blank"><button className="btn btn-outline-info btn-sm">Github</button></a>
                         <a href="https://travel-guru-f5a4f.web.app/" target="_blank"><button className="btn btn-outline-info btn-sm">Website</button></a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
     


    );
};

export default Work;