
exports.getNews = function () {


    const request = require("sync-request");


    const key = "";
    const query = "";
    const url = "https://japaneast.api.cognitive.microsoft.com/bing/v7.0/news";

    var opt = {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    };


    let jsonres = [];

    jsonres = request('GET', url + query, opt);
    console.log("------ get API process------");
    console.log(Buffer.from(jsonres.body).toString('utf8'));

    return Buffer.from(jsonres.body).toString('utf8');

};