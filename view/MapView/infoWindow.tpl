<h1><%= title %></h1>
<% _.forEach(viewList, function(key){ %>
<%= transList[key] %> = <%= info[key] %><br>
<% }) %>