<table><tbody>
	<tr>
		<td>부이 No</td>
	<% _.forEach(viewList, function(viewItem){ %>
		<td><%= transList[viewItem] %></td>
	<% }); %>
	</tr>
	<% _.forEach(data, function(dataItem, i){ %>
	<% if(dataItem.activity === '1'){ %>
	<tr>
			<td><%= i %></td>
		<% _.forEach(viewList, function(viewItem){ %>
			<td srl="<%= dataItem.srl %>" title="<%= dataItem['name'] %>" infoType="<%= viewItem %>"><%= dataItem[viewItem] %></td>
		<% }); %>
	</tr>
	<% } %>
	<% }); %>
</tbody></table>