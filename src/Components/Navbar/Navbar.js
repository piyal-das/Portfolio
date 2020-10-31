import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-info" style={{background:"#6b0e05"}}>
                <a className="navbar-brand text-success" href="#"><h3 className="border border-warning rounded">Piyal Das</h3></a>
                <button className="navbar-toggler border border-warning" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className=""><img width="25px" src="https://mdbootstrap.com/img/svg/hamburger8.svg?color=FFCC00" alt=""/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active text-success mr-5" href="#work"><h5>MY Projects</h5><span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link text-success mr-5" href="#skills"><h5>Skills</h5></a>
                        <a className="nav-item nav-link text-success mr-5" href="#blog"><h5>Blogs</h5></a>
                        <a className="nav-item nav-link text-success mr-5" href="#about"><h5>About</h5></a>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;