const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

io.on('connection', (socket) => {
    socket.emit("Connected");
    let newDate = new Date().toLocaleTimeString();
    console.log(`[${newDate}] ${socket.id} Connected`);

    socket.on('location', function(data) {
        console.log("dfdf")
        console.log('location data received:', data);
        io.emit('location2', data)
        // do something with the location data, e.g. store it in a database, or send it to other clients
    });
});

const portInpt = 9000;
http.listen(portInpt, () => {
    console.log(`Server Online: ${portInpt} `);
    console.log("-------------------------");
});

