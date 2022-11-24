import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{}}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">     <span className="navbar-toggler-icon"></span>     </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">               </li>
              <li className="nav-item">                </li>
              <li className="nav-item">                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" _lpchecked="1">        <input className="form-control mr-sm-2" type="text" placeholder="Zip Code" aria-label="Zip Code"/>       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>      </form>
          </div>
        </nav>
        <footer className="footer">
          <ul className="list-group" style={{}}>
            <li className="list-group-item">Miami Beach Florida<button type="button" className="btn btn-default" style={{display: 'inline', float: 'right'}}>X</button></li>
            <li className="list-group-item">
              Austin Texas<button type="button" className="btn btn-default" style={{display: 'inline', float: 'right'}}>X</button>
            </li>
            <li className="list-group-item">Williamsburg Virginia<button type="button" className="btn btn-default" style={{display: 'inline', float: 'right'}}>X</button></li>
          </ul>
          <p contenteditable="true" spellcheckker="false">
            <div className="card" style={{'margin-top': '30px'}}>
              <div className="card" style={{'margin-top': '0px'}}>
                <div className="card-body" style={{'margin-top': '0px'}}>
                  <h4 className="card-title">
                    <b>Los Angeles California</b>

                  </h4>
                  <div className="row" style={{}}>
                    <div className="col-sm-4">
                      <h1>
                        72°
                        <h6 style={{}}>Fair</h6>
                      </h1>
                    </div>
                    <div className="col-sm-4 col-5">
                      <h3></h3>
                    </div>
                    <div className="col-sm-4">
                      <h5 style={{}}>Precipitation 7%</h5>
                      <h5 style={{}}>Humidity 90%</h5>
                      <h5 style={{}}>Wind 8 mph</h5>
                      <div className="row" style={{}}>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 col-5"></div>
                        <div className="col-sm-4"></div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary">Add to favorites</a>

                </div>
              </div>
            </div>
            © Firstly NodeJS 2021</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
