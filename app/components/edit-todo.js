import Ember from 'ember';

export default Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
        this.$().addClass('focus'); // headless testing is brittle
    }
});
