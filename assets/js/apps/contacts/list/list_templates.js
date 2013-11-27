ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _ ){
	/*Templates.listItemView = [
		"<h1><%= firstName %> <%= lastName %></h1>",
		"<p>",
			"<strong>Phone number: </strong><span><%= phoneNumber %></span>",
		"</p>"].join("\n");
	*/

	Templates.listItemView = [
		"<td>",
		"<%=firstName%>",
		"</td><td>",
		"<%=lastName%>",
		"</td><td>",
		"<%=phoneNumber%>",
		"</td>",
		"</td><td>",
		"<button class='btn btn-small'>",
		"<i class='icon-remove'></i>Delete</button>",
		"</td>"
	].join("\n");


	Templates.tablelistView = [
		"<thead>",
		"<tr><th>First Name</th><th>Last Name2</th><th>Phone Number</th><th></th></tr>",
		"</thead>",
		"<tbody>",
		"</tbody"
	].join("\n");

});