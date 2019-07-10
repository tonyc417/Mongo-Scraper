const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');


const PORT = process.env.PORT || 3000;

axios.get('https://www.marketwatch.com/latest-news?mod=top_nav').then( (response) => {
    var $ = cheerio.load(response.data);

    var results = [];

    $("h3.article__headline").each(function(i, element) {
        var title = $(element).text();
        var link = $(element).children().attr("href");

        results.push({title, link});
    });
    console.log(results);
});