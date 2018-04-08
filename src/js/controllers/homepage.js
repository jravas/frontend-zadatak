var $ = require('jquery');var $ = require('jquery');
var View = require('jquery-simple-view');
var MainNav = require('../components/mainNav');
var MainSearch = require('../components/mainSearch');
var SidebarGallery = require('../components/sidebarGallery')

module.exports = View.extend({

    delegatedEvents: false,

    initialize: function() {

        this.setupBaseComponents();

    },

    events: {
        'click .mainHeader .signIn': function(e) {

            e.preventDefault();
            this.showLoginModal();

        }
    },

    setupBaseComponents: function() {

        this.mainNav = this.addView(new MainNav({$el: $('.mainNav')}));
        this.mainSearch =  this.addView(new MainSearch({$el: $('.mainSearch')}));
        this.sidebarGallery = this.addView(new SidebarGallery({$el: $('.sidebarGallery')}));

        return this;

    },

    showLoginModal: function(e) {

        require.ensure([], function() {

            var LoginModal = require('../components/loginModal');
            new LoginModal();

        });

    }

});
