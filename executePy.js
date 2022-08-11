const { python } = require('compile-run');


const executePy = async (filepath) => {
  console.log(filepath);
  return new Promise((resolve, reject) => {

    python.runFile(filepath, (error, result) => {
      error && reject({ error, error });
      result.stderr && reject(result.stderr);
      resolve(result.stdout);
    }
    )

  });

};

module.exports = {
  executePy,
};
