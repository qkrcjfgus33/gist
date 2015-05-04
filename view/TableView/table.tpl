<table><tbody>
	<tr>
	<% _.forEach(viewList, function(viewItem){ %>
		<td><%= transList[viewItem] %></td>
	<% }); %>
	</tr>
	<% _.forEach(data, function(dataItem, i){ %>
	<tr>
		<% _.forEach(viewList, function(viewItem){ %>
			<td srl="<%= dataItem.srl %>" title="<%= dataItem['name'] %>" infoType="<%= viewItem %>"><%= dataItem[viewItem] %></td>
		<% }); %>
	</tr>
	<% }); %>
</tbody></table>