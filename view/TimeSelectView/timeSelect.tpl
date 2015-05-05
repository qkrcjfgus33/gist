<%
var secondUnitNumber;
if(unit == '초'){
	secondUnitNumber = 1000;
}
else if(unit == '분'){
	secondUnitNumber = 1000 * 60;
}
else if(unit == '시간'){
	secondUnitNumber = 1000 * 60 * 60;
}
else{
	unit = '초';
	secondUnitNumber = 1;
}
%>
<select selectTimer>
	<% _.forEach(secondList, function(second){ %>
	<option value="<%= second * secondUnitNumber%>"><%= second %></option>
	<% }); %>
</select>
<span><%= unit %><%= backText %></span>