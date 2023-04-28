$(document).ready(function() {
    $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('input[name="q"]').val();
    $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1',
    data: {q: searchTerm,
    key: 'AIzaSyD0WdI8JGB4J17VkjNg0LsPChsVknYFbag',
    cx: '038965194dc9c4792'},
    dataType: 'json',
    success: function(data) {
    var results = data.items;
    $('#search-results').empty();
    $.each(results, function(index, result) {
    var title = result.title;
    var url = result.link;
    var snippet = result.snippet;
    var html = '<div class="search-result"><h2><a href="' +
    url + '">' + title + '</a></h2><p>' + snippet + '</p></div>';
    $('#search-results').append(html);
    });
    }
    });
    });
    });