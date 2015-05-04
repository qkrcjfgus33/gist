<h1><%= title %></h1>
<% _.forEach(viewList, function(key){ %>
<% if(info[key] !== undefined){ %>
<%= transList[key] %> = <%= info[key] %><br>
<% } %>
<% }) %>