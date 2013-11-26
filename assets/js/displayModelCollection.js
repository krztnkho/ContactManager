//create the marionett application
var ContactManager = new Marionette.Application();

ContactManager.addRegions( {
	mainRegion: "#main-region"
} );


ContactManager.Contact = Backbone.Model.extend( {
	defaults: {
		firstName: 'test',
		phoneNumber: "No Phone Number!"
	}
} );

ContactManager.ContactCollection = Backbone.Collection.extend( {
	model: ContactManager.Contact,
	comparator: "firstName"
} );

ContactManager.ContactView = Marionette.ItemView.extend( {
	tagName: "li",
	template: "#contact-list-template"
} );

ContactManager.ContactsView = Marionette.CollectionView.extend( {
	tagName: "ul",
	itemView: ContactManager.ContactView
} );

var contacts = new ContactManager.ContactCollection( [ {
	lastName: "kho",
	firstName: "kristine"
}, {
	firstName: "Bob",
	lastName: "Brigham",
	phoneNumber: "555-0163"
}, {
	firstName: "Alice",
	lastName: "Arten",
	phoneNumber: "555-0184"
}, {
	firstName: "Charlie",
	lastName: "Campbell",
	phoneNumber: "555-0129"
} ] );

ContactManager.on( "initialize:after", function() {
	console.log( "ContactManager has started" );
	var contactView = new ContactManager.ContactsView( {
		collection: contacts
	} );
	ContactManager.mainRegion.show( contactView );
} );

//____________________________________________________________


ContactManager.start();