ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _ ){
	List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: "ContactManager.ContactsApp.List.Templates.listItemView",
		events: {
			"click" : "highlightName",
			"click button" : "deleteButton"
		},
		highlightName : function(e){
			e.preventDefault();
			this.$el.toggleClass("warning");
		},
		clcikButton : function(e){
			e.preventDefault();
			alert("delete button is pressed");
		}
	});

	/*List.Contacts = Marionette.CollectionView.extend({
		tagName: "table",
		className: "table table-hover",
		itemView: List.Contact
	});*/

	List.Contacts = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: "ContactManager.ContactsApp.List.Templates.tablelistView",
		itemView: List.Contact,
		itemViewContainer: "tbody"
	});


});