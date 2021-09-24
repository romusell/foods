import {Link} from 'react-router-dom'
function Footer (){
    return <footer className="page-footer  teal accent-4">
     <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <Link to="/about" className="grey-text text-lighten-4 right">About</Link>
      </div>
    </div>
  </footer>
 }
 
 export {Footer};