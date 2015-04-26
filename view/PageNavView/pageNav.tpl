<button page-nav="start"  <% if(currentNavNum === 0){ %> disabled <% } %>>
	<<<
</button>
<button page-nav="pre-step" <% if(!hasPreNav){ %> disabled <% } %>>
	<<
</button>
<button page-nav="pre-page" <% if(currentNavNum === 0){ %> disabled <% } %>>
	<
</button>

<% for(var i = startNavNum ; i <= endNavNum ; i++){ %>
<span page-nav="<%= i %>" <% if(currentNavNum === i){ %>class="currentNavNum" <% } %>><%= i+1 %></span>
<% } %>

<button page-nav="next-page" <% if(currentNavNum === endNavNum){ %> disabled <% } %>>
	>
</button>
<button page-nav="next-step" <% if(!hasNextNav){ %> disabled <% } %>>
	>>
</button>
<button page-nav="end" <% if(currentNavNum === endNavNum){ %> disabled <% }  %>>
	>>>
</button>
