  
	var http = require("http");
	//create a server object:
	http.createServer(function (req, res) {
		// http header
	res.writeHead(200, { "Content-Type": "text/html" }); 
		var url = req.url;
		if (url === "/about") {
			res.write("<h4>This is the about us page<h4> <br> <h1>Hello World, welcome to WeJapa internship</h1>"); //write a response
			res.end(); //end the response
		}
		//  else if (url === "/contact") {
		// 	res.write("<h1>This is the contact us page<h1>"); //write a response
		// 	res.end(); //end the response
		// } 
		else {
			res.write(
				"<h1>Hello World! welcome to WeJapa internship</h1>"
			); //write a response
			res.end(); //end the response
		}
		})
		.listen(3000, function () {
			console.log("server start at port 3000"); //the server object listens on port 3000
		});