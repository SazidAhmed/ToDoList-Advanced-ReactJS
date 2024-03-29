import { Link } from 'react-router-dom'

const Topnav = () => {
  return (  
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/crew" className="nav-link active">Crew</Link>
            </li>
            <li className="nav-item">
              <Link to="/auth" className="nav-link active">Authentication</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Topnav;