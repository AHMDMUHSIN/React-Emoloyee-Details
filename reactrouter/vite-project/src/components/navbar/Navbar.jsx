import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>

<div className="container-fluid navbar-main">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbarmain">
            <div className="container-fluid">
              <div className="navbar-logo">
                <div><a href=""></a></div>
                {/* <div className="nav-head"><a href="">THE ODIN PROJECT</a></div> */}
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse navbar-item" id="navbarNav">
               <div>
                    {/* <a className="nav-link active" aria-current="page" href="./templates/about.html"><span>Home</span></a> */}
                    <Link className='nav-link active' to='/' >Home</Link>
                </div>
                <div>
                    <a className="nav-link active" aria-current="page" href="./templates/about.html"><span>About</span></a>
                </div>
                <div>
                    <a className="nav-link active" aria-current="page" href="https://discord.com/invite/fbFCkYabZB"><span>Community</span></a>
                </div>
                <div>
                    <a className="nav-link active" aria-current="page" href="./templates/support us.html"><span>Support us</span></a>
                </div>
                <div>
                    <a className="nav-link active" aria-current="page" href="./templates/sign in.html"><span>Sign in</span></a>
                </div>
                
                <div>
                    {/* <a className="nav-link active" aria-current="page" href="#"><button>Register</button></a> */}
                    <Link className="nav-link active" to='/register'><button>Register</button></Link>
                </div>
    
              </div>
            </div>
          </nav>
    </div>
   </div>
      {/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <Link className='nav-link active' to='/' >Home</Link>
        <Link className='nav-link active' to='/register' >Register</Link>

       
      </div>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default Navbar
