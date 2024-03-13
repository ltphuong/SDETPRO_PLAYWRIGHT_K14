const Request = require("./Request");

class GetRequest extends Request {
    setMethod(method) {
        console.log('Set method in POST request');
        super.setMethod('POST')
    }
}

module.exports = GetRequest;