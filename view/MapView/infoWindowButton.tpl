<% if(info.activity === "1"){ %>
<input type="button" value="관리" custom-link-popup popup-url="/pages/administration/administration.html?bouy_id=<%= info.id %>">
<input type="button" value="자세히" custom-link-popup popup-url="/pages/detail/detail.html?bouy_id=<%= info.id %>&title=<%= info.name %>">
<input type="button" value="제거" custom-link-popup popup-url="">
<% } else{ %>
<p>추가하시겠습니까?</p>
<input type="button" value="확인" custom-link-popup popup-url="/pages/addbouy/addbouy.html?bouy_id=<%= info.id %>">
<% } %>