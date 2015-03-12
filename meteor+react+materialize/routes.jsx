/** @jsx React.DOM */

RouteCore.map(function() {
  this.route('/', function() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <span className="brand-logo">Isomorphic Todos</span>
            </div>
          </nav>
        </div>
        <App/>
      </div>
    );
  });
});
