const sequelize = require("../models/connection");
var initModels = require("../models/init-models").initModels;
var models = initModels(sequelize);
let file = models.postcodes;
class UploadRepository {
  create(code) {
    return new Promise((resolve, reject) => {
      file
        .update({
          code:code,
        })
        .then(() => {
          resolve({});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getAllPostCodes() {
return new Promise((resolve,reject)=> {
  file.findAll({limit : 50})
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
})
  }
}


module.exports = UploadRepository;
