const UsersModel = require('../models/User');

const getUsers = async (chatMessage, nickname, timestamp) => {
    const data = await UsersModel.getUsers(chatMessage, nickname, timestamp);
    return data;
};

const getAll = async (req, res) => {
    const messages = await UsersModel.getAll();
    res.render('index.ejs', { messages });
};

module.exports = {
    getUsers,
    getAll,
};