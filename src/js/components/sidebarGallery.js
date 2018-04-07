var $ = require('jquery');
var View = require('jquery-simple-view');


module.exports = View.extend({
    
    events: {

        // load litebox plugin after user clicks on image
        'click a': function(e) {

            e.preventDefault();

            let that = this

            var $items = $('.sidebarGallery a');

            require.ensure([], function(callback) {

                var simpleLightbox = require('simple-lightbox');

                $.SimpleLightbox.open({
                    $items: $items,
                    startAt: $items.index($(e.target).parent()),
                    bindToItems: false
                });

            })
            
        }
    }

});