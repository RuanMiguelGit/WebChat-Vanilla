let users = [];
let currentUser = '';
module.exports = (io) => io.on('connection', (socket) => {
    socket.on('online', (nick) => {
    currentUser = nick;
    users.push(nick);
    io.emit('updateUser', users);
    socket.emit('updateUser', users.reverse());
    });
    
    socket.on('nickName', (nickname) => {
    const index = users.indexOf(currentUser);   
    users[index] = nickname;
    io.emit('updateUser', users);
    socket.emit('updateUser', users.reverse());
    });
    socket.on('disconnect', () => {
    users = users.filter((item) => item !== users[0]);
    io.emit('updateUser', users); 
    });
});