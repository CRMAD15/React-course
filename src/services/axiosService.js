import APIRequest from "../utils/config/axis.config";

export function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    })
}
