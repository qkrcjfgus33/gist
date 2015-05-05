
<table border="1">
<thead>
	<tr>
	<% _.forEach(viewList, function(viewItem){ %>
		<th colspan="2" scope="col"><%= transList[viewItem] %></th>
	<% }); %>
	</tr>
	</thead>
	<tbody>
	<% _.forEach(data, function(dataItem, i){ %>
	<tr>
		<% _.forEach(viewList, function(viewItem){ %>
			<th colspan="2" scope="col" srl="<%= dataItem.srl %>" title="<%= dataItem['name'] %>" infoType="<%= viewItem %>"><%= dataItem[viewItem] %></th>
		<% }); %>
	</tr>
	<% }); %>
</tbody>
</table>