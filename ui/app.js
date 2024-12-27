// Replace this with your WebSocket API Gateway URL
const wsApiUrl = 'wss://<YOUR-WEBSOCKET-API-URL>';

// Connect to the WebSocket API Gateway
const socket = new WebSocket(wsApiUrl);

// Select the messages container
const messagesContainer = document.getElementById('messages');

// Add a new message to the UI
const addMessage = (message) => {
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
};

// Clear placeholder message
const clearPlaceholder = () => {
  const placeholder = messagesContainer.querySelector('em');
  if (placeholder) {
    placeholder.remove();
  }
};

// Handle connection open event
socket.onopen = () => {
  console.log('WebSocket connected');
  addMessage('Connected to WebSocket API');
};

// Handle incoming messages
socket.onmessage = (event) => {
  console.log('Message received:', event.data);
  clearPlaceholder();
  addMessage(`Message: ${event.data}`);
};

// Handle connection close event
socket.onclose = () => {
  console.log('WebSocket disconnected');
  addMessage('Disconnected from WebSocket API');
};

// Handle connection error
socket.onerror = (error) => {
  console.error('WebSocket error:', error);
  addMessage('Error occurred. Check the console for details.');
};
