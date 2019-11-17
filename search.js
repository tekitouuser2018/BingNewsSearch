// const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
// let credentials = new CognitiveServicesCredentials('385fd288679a4c388cd9b7671693c4fc');
// let search_term = 'Winter Olympics'

// const NewsSearchAPIClient = require('azure-cognitiveservices-newssearch');
// let client = new NewsSearchAPIClient(credentials);

// client.newsOperations.search(search_term).then((result) => {
//     console.log(result.value);
// }).catch((err) => {
//     throw err;
// });

exports.getNews = function () {

    // 'use strict';
    // let https = require('https');

    const request = require("sync-request");
    // const key = "385fd288679a4c388cd9b7671693c4fc";
    // // const url = "https://api.cognitive.microsoft.com/bing/v7.0/news/search";
    // const url = "https://japaneast.api.cognitive.microsoft.com/";
    // const q = "sports";
    // const count = 10;
    // const offset = 0;
    // const mkt = "ja-jp";
    // const ss = "Off";
    // const query =
    //     `?q=${q}&count=${count}&offset=${offset}&mkt=${mkt}&safeSearch=${ss}`;

    // let subscriptionKey = '385fd288679a4c388cd9b7671693c4fc';
    // let host = 'api.cognitive.microsoft.com';
    // let path = '/bing/v7.0/news/search';
    // let term = 'Microsoft';

    const key = "385fd288679a4c388cd9b7671693c4fc";
    // const url = "https://japaneast.api.cognitive.microsoft.com/bing/v7.0/news/search";
    // const q = "Business";
    // const count = 10;
    // const offset = 0;
    // const mkt = "ja-jp";
    // const ss = "Off";
    // const query =
    //     `?q=${q}&count=${count}&offset=${offset}&mkt=${mkt}&safeSearch=${ss}`;
    // const query = "?category=Business";
    const query = "";
    // const url = "https://api.cognitive.microsoft.com/bing/v7.0/news"
    const url = "https://japaneast.api.cognitive.microsoft.com/bing/v7.0/news";

    var opt = {
        // url: encodeURI(url + query),
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    };

    // https.get(opt, (resp) => {
    //     let data = '';

    //     // A chunk of data has been recieved.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         console.log(JSON.parse(data).explanation);
    //     });

    // }).on("error", (err) => {
    //     console.log("Error: " + err.message);
    // });


    // let response_handler = function (response) {
    //     let body = '';
    // };
    // response.on('data', function (d) {
    //     body += d;
    // });

    // response.on('end', function () {
    //     console.log('\nRelevant Headers:\n');
    //     for (var header in response.headers)
    //         // header keys are lower-cased by Node.js
    //         if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
    //             console.log(header + ": " + response.headers[header]);
    //     body = JSON.stringify(JSON.parse(body), null, '  ');
    //     console.log('\nJSON Response:\n');
    //     console.log(body);
    // });


    // var opt = {
    //     url: encodeURI(url + query),
    //     headers: {
    //         "Ocp-Apim-Subscription-Key": key
    //     }
    // };

    let jsonres = [];

    jsonres = request('GET', url + query, opt);
    // request(opt, (err, res, body) => {
    //     if (err) { return console.log(err); }
    //     // console.log(body.url);
    //     // console.log(body.explanation);
    //     // console.log(JSON.parse(body));

    //     console.log("------ get API process------");
    //     jsonres = JSON.parse(body);

    //     // return JSON.parse(body);

    // });
    console.log("------ get API process------");
    // console.log(JSON.stringify(jsonres.body));
    console.log(Buffer.from(jsonres.body).toString('utf8'));

    return Buffer.from(jsonres.body).toString('utf8');

};