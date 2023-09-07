import "./navbar.scss"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      <img className="logoimg" src="logo.svg" alt=""/>
       <span>E-Shop</span>
      </div>
      <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
         <img src="/app.svg" alt="" className="icon"/>
          <img src="/expand.svg" alt="" className="icon" />
           <div className="notification">
            <img src="/notifications.svg" alt="" />
          <span>1</span>
          </div>

           <div className="user"> 
           <img src="amira.png" alt="" />
           <span>Amira</span>

           </div>
          <img src="/settings.svg" alt="" className="icon"/>
      </div>
      </div>
  )
}


export default Navbar