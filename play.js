const { connect } = require("./client");
const { setupInput } = require("./input");



console.log('Connecting ...');
const tcpConn = connect();

setupInput(tcpConn);