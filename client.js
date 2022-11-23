// establishes a connection with the game server
const net = require("net");

const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
     host: IP,
     port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //This connect event logs the data sent from the server.
  conn.on("data", (data) => {
    console.log(data);
  });
  //Prints a message to terminal and adds name to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: WRM");
    
    
  });









  return conn;
};

module.exports = {
  connect
};