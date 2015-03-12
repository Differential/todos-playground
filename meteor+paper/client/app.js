Template.app.created = function() {
  this.filter = new ReactiveVar('all');
};

Template.app.helpers({
  todos: function() {
    var filter = Template.instance().filter.get();
    if (filter == 'active') return Todos.find({ done: false });
    else if (filter == 'completed') return Todos.find({ done: true });
    else return Todos.find();
  }
});

Template.app.events({
  'click .add paper-button': function(e, tpl) {
    $input = tpl.$('.add paper-input');
    if ($input.val()) Todos.insert({ text: $input.val(), done: false });
    $input.val('');
  },
  'click [data-filter], tap [data-filter]': function(e, tpl) {
    var filter = $(e.currentTarget).data('filter');
    tpl.filter.set(filter);
  }
});
