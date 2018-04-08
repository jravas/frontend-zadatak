var View = require('jquery-simple-view');

module.exports = View.extend({

    events: {

        // load fastsearch plugin after users start typing in the search box
        'keydown .query': function(e) {

            let that = this
            
            require.ensure([], function() {

                // load styles
                require('../../scss/partials/_fastSearch.scss')

                var fastsearch = require('fastsearch');
                
                that.$('.query').fastsearch({

                    onItemSelect: 'fillInput'
    
                });
    
            });
        }
    }

});
