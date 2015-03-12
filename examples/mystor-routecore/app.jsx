/** @jsx React.DOM */

RouteCore.bindGlobals();

var HelloWorld = React.createClass({
  componentDidMount: function() {
    Meteor.setInterval(function() {
      Session.set('value', Session.get('value') + 1);
    }, 1000);
  },

  render: function() {
    var value = Session.get('value');
    return <div>Hello World! Seconds elapsed is: {value}</div>;
  }
});


RouteCore.map(function() {
  this.route('/cow', function() {
    Session.set('value', 0);
    return <HelloWorld/>;
  });
});

