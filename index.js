const axios = require('axios');

const url = 'https://onlinebusiness.icbc.com/deas-api/v1/webLogin/webLogin';

module.exports = function(credentials) {
    axios.put(url, credentials)
    .then((response) => {
        console.log(response.headers.authorization);
    });
}
