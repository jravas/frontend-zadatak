var View = require('jquery-simple-view');

// require('fastsearch');

module.exports = View.extend({

    events: {

        // load fastsearch plugin after users start typing in the search box
        'keydown .query': function(e) {

            let that = this
            
            require.ensure([], function() {

                var fastsearch = require('fastsearch');
                
                that.$('.query').fastsearch({

                    onItemSelect: 'fillInput'
    
                });
    
            });
        }
    }

});
