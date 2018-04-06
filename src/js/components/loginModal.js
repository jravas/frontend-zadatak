var $ = require('jquery');
var View = require('jquery-simple-view');

require('simple-lightbox');

module.exports = View.extend({

    initialize: function(options) {

        // fetch login modal from url
        loginModal = $('<div class="loginModal"></div>').load('./login-modal.html');

        $.simpleLightbox.open({
            content: loginModal,
            elementClass: 'slbContentEl'
        });

    }

});
