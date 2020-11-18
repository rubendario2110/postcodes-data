let PostcodeRepository = require("../repository/postcodes");
const log4js = require("log4js");
const resource = require("../resource/resource.json");
log4js.configure(resource.configLog4js);
const log = log4js.getLogger("app");
const apiAdapter = require("../adapter/api.adapter");
const config = require("../config/configRemoteApi");
const remoteApi = apiAdapter(config.remoteCountryService.basePath);
class UploadService {
  postCodes() {
    return new Promise((resolve, reject) => {
      new PostcodeRepository().getAllPostCodes().then((result) => {
        log.debug(result);
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          remoteApi
            .get(
              config.remoteCountryService.basePath +
                "postcodes?lon=" +
                element.log +
                "&lat=" +
                element.lat
            )
            .then((data) => {
              new PostcodeRepository()
                .create(data.data.result[index].postcode)
                .then(() => {
                  resolve({ postcodes: true });
                });
            });
        }
      }).catch((error) => {
        log.error(error);
        reject({ error: error });
      });;
    }).catch((error) => {
      log.error(error);
      reject({ error: error });
    });
  }
}
module.exports = UploadService;
