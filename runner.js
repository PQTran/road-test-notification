const requestAuthToken = require('./index.js');

const data = {
    'drvrLastName':'X',
    'licenceNumber':'Y',
    'keyword':'Z'
};

requestAuthToken(data);
