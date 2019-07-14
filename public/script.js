$.getJSON("/all", function(data) {
    for (var i = 0; i < 10; i++) {
        $("#allNews").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
});