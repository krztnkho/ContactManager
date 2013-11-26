ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _ ){
	Templates.listItemView = [
		"<h1><%= firstName %> <%= lastName %></h1>",
		"<p>",
			"<strong>Phone number: </strong><span><%= phoneNumber %></span>",
		"</p>"].join("\n");


});