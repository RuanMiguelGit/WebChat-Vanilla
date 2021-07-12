const { getUsers } = require('../controller/User');
const { formatAMPM, timeHours } = require('../utils/dateFormat');

const time = formatAMPM(new Date());
const hour = timeHours(new Date());
const now = `${time} ${hour}`;

module.exports = (io) => io.on('connection', (socket) => {
socket.on('message', (message) => {
io.emit('message', ` ${now} - ${message.nickname}: ${message.chatMessage}`);
getUsers(message.nickname, message.chatMessage, now);
});
});
