/**
 * When sending a request: URL, headers(method)
 * Get response
 * Verify response status
 */
const RequestParent = require('./RequestParent')

class Request extends RequestParent {
    constructor(url, headers = {}) {
        super();
        this.url = url;
        this.headers = headers;
    }

    setMethod(method) {
        this.headers = { ...this.headers, method: method };
    }

    send() {
        console.log(`Sending request with header ${JSON.stringify(this.headers)}`);
        this.reponse = { statusCode: 200 };
    }

    verifyReponseStatus() {
        console.log(`Status code ${this.reponse.statusCode}`);
    }
}

module.exports = Request;