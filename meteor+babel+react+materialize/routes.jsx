
FlowRouter.route('/', {
  subscriptions: function(params) {
  },

  action: function() {
    // We render the template with React
    React.render(
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
    , document.body);
  }
});