$(document).ready(function(){
	$.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
		var user_data = '';
		$.each(data, function(key, value){
			user_data += '<tr class="clickable-row" data-href="details.html?id='+value.id+'">';
			user_data += '<td>'+value.userId+'</td>';
			user_data += '<td>'+value.id+'</td>';
			user_data += '<td>'+value.title+'</td>';
			user_data += '<td>'+value.body+'</td>';
			user_data += '</tr>';
		});
		$('#user-table').append(user_data);

		$(".clickable-row").click(function() {
		    window.location = $(this).data("href");
		});
	});
});