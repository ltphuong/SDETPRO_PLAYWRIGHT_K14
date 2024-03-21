const Request = require("./Request");

class GetRequest extends Request {
    setMethod(method) {
        console.log('Set method in GET request');
        super.setMethod('GET')
    }
}

module.exports = GetRequest;