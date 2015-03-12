App = React.createClass({
  todos: function() {
    var query = {};
    if (this.state.filter == 'active') {
      query = { done: false };
    }
    else if (this.state.filter == 'completed') {
      query = { done: true };
    }

    return _(this.state.todos).where(query);
  },

  getInitialState: function() {
    return { filter: 'all', todos: [] };
  },

  componentDidMount: function() {
    var todos = this.props.conn.getCollection('todos')
      , res = todos.reactiveQuery({})
      , _this = this;

    res.on('change', function() {
      _this.setState({ todos: res.result });
    });
  },

  submit: function() {
    var todos = this.props.conn.getCollection('todos')
      , $input = $(this.refs.text.getDOMNode());

    if ($input.val()) {
      todos.insert({
        text: $input.val(),
        done: false
      });
      $input.val('').blur();
    }
  },

  all: function() {
    this.setState({ filter: 'all' });
  },

  active: function() {
    this.setState({ filter: 'active' });
  },

  completed: function() {
    this.setState({ filter: 'completed' });
  },

  render: function() {
    var _this = this;
    return (
      <div>
        <div className="row">
          <div className="input-field col s8">
            <input id="text" type="text" ref="text" className="validate"/>
            <label htmlFor="text">What needs to be done?</label>
          </div>
          <div className="input-field col s4">
            <a onClick={this.submit} className="btn waves-effect waves-light">ADD</a>
          </div>
        </div>
        <ul className="collection">
          {this.todos().map(function(todo) {
            return (
              <Todo conn={_this.props.conn} key={todo._id} todo={todo} />
            );
          })}
        </ul>
        <div className="footer row">
          <ul className="tabs">
            <li onClick={this.all} className="tab col s4"><a href="#">ALL</a></li>
            <li onClick={this.active} className="tab col s4"><a href="#">ACTIVE</a></li>
            <li onClick={this.completed} className="tab col s4"><a href="#">COMPLETED</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

$(function() {
  var conn = new Asteroid('localhost:3000');

  $.when(function() {
    return conn.subscribe('todos').ready;
  })
  .then(function() {
    React.render(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <span className="brand-logo">Isomorphic Todos</span>
            </div>
          </nav>
        </div>
        <App conn={conn} />
      </div>,
      document.getElementById('renderUntoMe')
    );
  });
});
