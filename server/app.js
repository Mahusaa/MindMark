const express = require("express");
const app = express();


app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.listen(3001, () => {
	console.log("Server running on localhost 3001");
})
