var HelloWorld = ReactMeteor.createClass({

  getMeteorState: function() {
    return { value: Session.get('value') }
  },

  componentDidMount: function() {
    Session.set('value', 0);
    Meteor.setInterval(function() {
      Session.set('value', Session.get('value') + 1);
    }, 1000);
  },

  render: function() {
    return <div>Hello World! Seconds elapsed is: {this.state.value}</div>;
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<HelloWorld/>, document.body);
  });
}

