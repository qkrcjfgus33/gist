<table><tbody>
	<tr>
	<% _.forEach(transList, function(viewItem, key){ %>
		<th><%= viewItem %></th>
	<% }); %>
	</tr>
	<% _.forEach(data, function(dataItem, i){ %>
	<tr>
		<% _.forEach(transList, function(v, viewItem){ %>
			<td srl="<%= dataItem.srl %>" title="<%= dataItem['name'] %>" infoType="<%= viewItem %>"><%= dataItem[viewItem] %></td>
		<% }); %>
	</tr>
	<% }); %>
</tbody></table>