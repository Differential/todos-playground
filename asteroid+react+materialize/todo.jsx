Todo = React.createClass({
  complete: function() {
    var todos = this.props.conn.getCollection('todos')
      , todo = this.props.todo;
    todos.update(todo._id, { done: !todo.done });
  },

  remove: function() {
    var todos = this.props.conn.getCollection('todos')
    todos.remove(this.props.todo._id);
  },

  render: function() {
    var classes = 'collection-item';
    if (this.props.todo.done) {
      classes += ' done';
    }
 
    return (
      <li ref="todo" className={classes}>
          <span className="text">{this.props.todo.text}</span>
          <i onClick={this.complete} className="secondary-content mdi-action-done small"></i>
          <i onClick={this.remove} className="secondary-content mdi-action-delete small"></i>
      </li>
    );
  }
});
