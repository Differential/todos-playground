/** @jsx React.DOM */

Todo = React.createClass({
  complete: function() {
    var todo = this.props.todo;
    Todos.update({ _id: todo._id }, { $set: { done: !todo.done }});
  },

  remove: function() {
    Todos.remove({ _id: this.props.todo._id });
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
