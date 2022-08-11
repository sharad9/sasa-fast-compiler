const {java } = require('compile-run');


const executeJava = async (filepath) => {
	console.log(filepath);
	return new Promise((resolve, reject) => {
	
		java.runFile(filepath, (error, result) => {
				error && reject({ error, error });
				result.stderr && reject(result.stderr);
				resolve(result.stdout);
			}
		)
		
	});
	
};

module.exports = {
	executeJava,
};
