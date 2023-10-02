const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="./src/assets/tunefy.png" width="50px" alt="logo by freepik" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Tunefy
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Profile</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#"></a>
            <a className="dropdown-item" href="#"></a>
            <a className="dropdown-item" href="#"></a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#"></a>
          </div>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
export default Header