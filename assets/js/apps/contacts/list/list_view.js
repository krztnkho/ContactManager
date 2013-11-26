ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _ ){
	List.Contact = Marionette.ItemView.extend({
		tagName: "li",
		template: "ContactManager.ContactsApp.List.Templates.listItemView"
	});

	List.Contacts = Marionette.CollectionView.extend({
		tagName: "ul",
		itemView: List.Contact
	});


});