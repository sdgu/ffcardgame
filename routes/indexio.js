module.exports = function(io)
{
	var app = require("express");
	var router = app.Router();

	io.on("connection", function(socket)
	{
		console.log("indexio user connexted");
		socket.on("disconnect", function()
		{
			console.log("disconnexted");
		});
	});

	return router;
}