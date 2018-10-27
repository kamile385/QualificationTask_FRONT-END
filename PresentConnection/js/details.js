$(document).ready(function(){
    var id = window.location.search.split('=')[1];
    $.getJSON('https://jsonplaceholder.typicode.com/posts/'+id, function(data) {
        var text = `<b>User ID:</b> ${data.userId}<br>
                <b>ID:</b> ${data.id}<br>
                <b>Title:</b> ${data.title}<br>
                <b>Body:</b> ${data.body}`

        $(".mypanel").html(text);
    });
});