const { cpp } = require('compile-run');


const executeCpp = async (filepath) => {
  console.log(filepath);
  return new Promise((resolve, reject) => {

    cpp.runFile(filepath, (error, result) => {
      error && reject({ error, error });
      result.stderr && reject(result.stderr);
      resolve(result.stdout);
    }
    )

  });

};

module.exports = {
  executeCpp,
};
