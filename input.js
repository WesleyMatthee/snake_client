// setup interface to handle user input from stdin
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};
// Stores the active TCP connection object.

const handleUserInput = function(key) {
  //'\u0003' is cntl+c which exits the server
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log('w');
  }
  if (key === 'a') {
    console.log('a');
  }
  if (key === 's') {
    console.log('s');
  }
  if (key === 'd') {
    console.log('d');
  }
  if (key === '1') {
    
    connection.write("Say: Skadoosh!");
  }
  if (key === '2') {
    connection.write("Say: Blurp!");
  }
  if (key === '3') {
    connection.write("Say: Zoink!");
    
  }
};

module.exports = {
  setupInput
};