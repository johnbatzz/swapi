
const BASE_URL        = "https://swapi.dev/api/";

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  init() {

  },
  /**
   * Send the GET HTTP request
   * @param resource
   * @returns {*}
   */
   get(resource) {
    return new Promise((resolve) => {
      var request = require('request');
      request(resource, function (error, response, body) {
        resolve(JSON.parse(body))
      });
    });
  },
};

export default ApiService;
