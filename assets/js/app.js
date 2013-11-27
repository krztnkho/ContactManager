var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion:"#main-region"
});

ContactManager.on("initialize:after", function(e){
	console.log("ContactManager has just started. ");
	ContactManager.ContactsApp.List.Controller.listContacts();

});