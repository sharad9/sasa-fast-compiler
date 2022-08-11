const {c, cpp, node, python, java} = require('compile-run');

const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
var output = "";
java.runFile('abcd.java', (err, result) => {
	if (err) {
		output = err;
	}
	else {
		output = result;
	}
});
app.get("/status", async (req, res) => {
	

	return res.status(200).json({ output: output});
});
app.listen(process.env.PORT || 5000, () => {
	console.log(`Listening on port 5000!`);
});
