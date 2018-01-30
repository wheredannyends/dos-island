const server = require("http").Server();
const port = 10001;

var io = require("socket.io")(server);

var usernames = [],
	msgs = [];

io.on("connection", function(socket){
   console.log("user is connected");
    
    socket.on("username", (data) => {
        console.log("user is given username: "+data);
		usernames.push(data);
		
		io.emit("usersjoined", usernames);
    })
    
    socket.on("disconnect", () => {
        console.log("User has disconnected");
    })
	
	socket.on("sendMsg", (data) => {
		console.log("User has sent message");
		msgs.push(data);
		
		io.emit("msgsent", msgs);
	});
});

server.listen(port, (err)=>{
    if(err){
        console.log("Error: "+err);
        return false;
    }
    console.log("Socket port is running");
});