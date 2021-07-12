// Solution to generate an random Name  found at: https://www.codegrepper.com/code-examples/javascript/how+to+generator+a+random+word+of+a+certain+letter+count+javascript
let text = '';
const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 16; i += 1) { 
  text += possible.charAt(Math.floor(Math.random() * possible.length));
 }
// Solution to generate an random Name  found at: https://www.codegrepper.com/code-examples/javascript/how+to+generator+a+random+word+of+a+certain+letter+count+javascript

const socket = window.io();
const nickForm = document.querySelector('#nickForm');
const inputNick = document.querySelector('#nickNameInput');
const inputMessage = document.querySelector('#messageInput');

  let nickname = text;

  nickForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nick = inputNick.value;
  nickname = nick;
  socket.emit('nickName', nickname);
  inputMessage.value = '';
   return false;
  });

const form = document.querySelector('#formM');
form.addEventListener('submit', (e) => {
 e.preventDefault();
 const chatMessage = inputMessage.value;
 socket.emit('message', { chatMessage, nickname });
 inputMessage.value = '';
 return false;
});

const createMessage = (message) => {
const messagesUl = document.querySelector('#messages');
const li = document.createElement('li'); 
  li.setAttribute('data-testid', 'message');
  li.innerText = message;
  messagesUl.appendChild(li);
  };
  
const showUsers = (users) => {
const UsersList = document.querySelector('#userList');
UsersList.innerText = '';
users.forEach((item) => {
const lia = document.createElement('li');
lia.setAttribute('data-testid', 'online-user');
lia.innerText = item;
UsersList.appendChild(lia);
});
 };

socket.emit('online', (nickname));
socket.on('message', (message) => createMessage(message));
socket.on('updateUser', (users) => showUsers(users));
