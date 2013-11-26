ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _ ){

	var alertPrivate = function(msg){
		alert("Private alert: "+msg);
	};

	Entities.alertPublic = function(msg){
		alert("I will now call alertPrivate");
		alertPrivate(msg);
	};


	Entities.Contact = Backbone.Model.extend({
		defaults: {
			firstName: '-',
			lastName: '-',
			phoneNumber: 'No phone number'
		}
	});

	Entities.ContactCollection= Backbone.Collection.extend({
		model: Entities.Contact,
		comparator: function(contact){
			return contact.get("firstName")+" "+contact.get("lastName");
		}

	});

	var contacts;

	var initializeContacts = function () {
		 contacts = new Entities.ContactCollection([{
		 		id: 1,
				firstName: "Alice",
				lastName: "Arten",
				phoneNumber: "555-0184"
			},{
				id: 2,
				firstName: "Bob",
				lastName: "Brigham",
				phoneNumber: "555-0163"
			},{
				id: 3,
				firstName: "Charlie",
				lastName: "Campbell",
				phoneNumber: "555-0129"
			}
			]);
	};

	var API = {
		getContactEntities : function(){
			if(contacts==undefined){
				initializeContacts();
			}
			return contacts;
		}
	};

	ContactManager.reqres.setHandler("contact:entities", function(){
		return API.getContactEntities();
	});

});


