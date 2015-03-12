var HelloWorld = React.createClass({
  click: function() {
    alert('Thanks!');
  },
  render: function() {
    return <div>Hello World! <button onClick={this.click}>Click me!</button></div>;
  }
});

React.render(<HelloWorld/>, document.body);
