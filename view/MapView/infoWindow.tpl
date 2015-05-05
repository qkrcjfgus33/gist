<h1><%= title %></h1>
<% _.forEach(transList, function(val, key){ %>
<% if(info[key] !== undefined){ %>
<%= val %> = <%= info[key] %><br>
<% } %>
<% }) %>