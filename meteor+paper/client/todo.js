Template.todo.events({
  'click [icon=delete]': function() {
    Todos.remove({ _id: this._id });
  },
  'click [icon=done]': function(e, tpl) {
    Todos.update({ _id: this._id }, { $set: { done: !this.done }});
    tpl.$('.todo').toggleClass('done');
  }
});

