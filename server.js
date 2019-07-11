const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// axios.get('https://www.marketwatch.com/latest-news?mod=top_nav').then( (response) => {
//     var $ = cheerio.load(response.data);

//     var results = [];

//     $("h3.article__headline").each(function(i, element) {
//         var title = $(element).text();
//         var link = $(element).children().attr("href");

//         results.push({title, link});
//     });

//     $("h3.article__headline").each(function(i, element) {
//         var title = $(element).text();
//         var link = $(element).children().attr("href");
//         var summ = $("p").children().attr("article__summary");

//         results.push({title, link, summ});
//     });
//     console.log(results);
// });

app.get("/scrape", (req, res) => {
    axios.get('https://www.marketwatch.com/latest-news?mod=top_nav').then( (response) => {
        var $ = cheerio.load(response.data);

        $("h3.article__headline").each(function(i, element) {
            var result = {};
            result.title = $(this).text();
            result.link = $(this).children().attr("href");
            console.log(result);
        })
        res.send("Completed the extract")
    })
});

app.listen(PORT, console.log(`Server is now listening on: ${PORT}`));
