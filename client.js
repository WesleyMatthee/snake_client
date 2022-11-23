// establishes a connection with the game server
const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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
    // setTimeout(() => conn.write("Move: up"), 500);
    // setTimeout(() => conn.write("Move: left"), 600);
    // setTimeout(() => conn.write("Move: down"), 900);
    // setTimeout(() => conn.write("Move: down"), 1100);
    // setTimeout(() => conn.write("Move: left"), 1300);
    
  });
  //Sends a message to the server
  //conn.on("connect", () => {


  //});
  //







  return conn;
};

module.exports = {
  connect
};