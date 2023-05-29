// script.js

// 选择页面元素
const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// 为发送按钮添加事件监听器
sendButton.addEventListener('click', sendMessage);

// 监听用户按下回车键
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// 发送用户消息并获取回复
function sendMessage() {
  const message = userInput.value;

  // 添加用户消息到聊天日志
  appendMessage('user', message);

  // 发送用户消息到 ChatGPT API 并获取回复
  // 这里需要使用您的 ChatGPT API key 进行调用
  // 您需要使用 fetch 或类似的方法将用户消息发送到 API 并处理返回的响应

  // 假设您已经获取了回复
  const reply = '这是 ChatGPT 的回复';

  // 添加 ChatGPT 的回复到聊天日志
  appendMessage('bot', reply);

  // 清空用户输入框
  userInput.value = '';
}

// 添加消息到聊天日志
function appendMessage(role, content) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
  
    const roleElement = document.createElement('span');
    roleElement.classList.add('role');
    roleElement.textContent = role === 'user' ? '用户' : 'ChatGPT';
  
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
  
    messageContainer.appendChild(roleElement);
    messageContainer.appendChild(contentElement);
  
    chatLog.appendChild(messageContainer);
  }