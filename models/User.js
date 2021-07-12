const connection = require('./connection');

const getUsers = async (nickname, chatMessage, timestamp) => {
    const data = await connection()
    .then((db) => db.collection('messages')
    .insertOne({ message: chatMessage, nickname, timestamp }))
    .then((res) => res);
    
    return data; 
};

const getAll = async () => {
    const data = await connection()
    .then((db) => db.collection('messages').find({}).toArray())
    .then((res) => res);
    return data; 
};

module.exports = {
    getUsers,
    getAll,
};