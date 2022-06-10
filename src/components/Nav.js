import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color:'white'
    }
  return (
   <nav>
      <Link to="/" style={navStyle}>
      <h1>
           YayBookStore
       </h1>
      </Link>
       <ul className='nav-links'>
        <Link style={navStyle} to="/about" >
            <li>Books</li>
        </Link>
        <Link to="/shop" style={navStyle} >
              <li>Categories</li>
        </Link>
       </ul>
   </nav>
  );
}

export default Nav;
