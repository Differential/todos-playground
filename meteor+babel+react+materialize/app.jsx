
Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {

App = React.createClass({
  mixins: [ ReactiveMixin ],

  getReactiveState: function() {
    return { todos: Todos.find().fetch() };
  },

  submit: function() {
    var $input = $(this.refs.text.getDOMNode());
    if ($input.val()) {
      Todos.insert({ text: $input.val(), done: false });
      $input.val('').blur();
    }
  },

  all: function() {
    this.setState({ todos: Todos.find({}) });
  },

  active: function() {
    this.setState({ todos: Todos.find({ done: false }) });
  },

  completed: function() {
    this.setState({ todos: Todos.find({ done: true }) });
  },

  render: function() {
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
          {this.state.todos.map(function(todo) {
            return (
              <Todo key={todo._id} todo={todo} />
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

}
