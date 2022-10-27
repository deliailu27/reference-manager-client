




const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("6271c5e0c3f16de6713eee2d9911bcc08bd66418605d437c5810b0b2580c1ea4");

const params = {
  engine: "google_scholar",
  q: "biological chemistry"
};

const callback = function(data) {
  console.log(data["organic_results"]);
};

// Show result as JSON
search.json(params, callback);



