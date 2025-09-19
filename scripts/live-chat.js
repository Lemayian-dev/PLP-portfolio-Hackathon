// Live Chat Integration
(function() {
    'use strict';

    // Chat widget configuration
    const chatConfig = {
        position: 'bottom-right',
        primaryColor: '#6b5fff',
        greetingMessage: 'Hi! How can I help you today?',
        placeholder: 'Type your message...',
        autoOpen: false,
        showTypingIndicator: true
    };

    // Create chat widget
    function createChatWidget() {
        const chatWidget = document.createElement('div');
        chatWidget.id = 'live-chat-widget';
        chatWidget.innerHTML = `
            <div class="chat-toggle" id="chat-toggle">
                <i class="fas fa-comments"></i>
                <span class="notification-badge" id="notification-badge" style="display: none;">1</span>
            </div>
            <div class="chat-window" id="chat-window">
                <div class="chat-header">
                    <div class="chat-avatar">
                        <img src="images/Portrait1.jpg" alt="Isaac Lemayian">
                    </div>
                    <div class="chat-info">
                        <h4>Isaac Lemayian</h4>
                        <span class="status">Online</span>
                    </div>
                    <button class="chat-close" id="chat-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <div class="message bot-message">
                        <div class="message-content">
                            <p>${chatConfig.greetingMessage}</p>
                            <span class="message-time">${new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>
                </div>
                <div class="chat-input-container">
                    <div class="typing-indicator" id="typing-indicator" style="display: none;">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <form class="chat-form" id="chat-form">
                        <input type="text" id="chat-input" placeholder="${chatConfig.placeholder}" required>
                        <button type="submit" class="chat-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        `;

        // Add styles
        const chatStyles = `
            #live-chat-widget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                font-family: 'Inter', sans-serif;
            }

            .chat-toggle {
                width: 60px;
                height: 60px;
                background: ${chatConfig.primaryColor};
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(107, 95, 255, 0.3);
                transition: all 0.3s ease;
                position: relative;
            }

            .chat-toggle:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 25px rgba(107, 95, 255, 0.4);
            }

            .chat-toggle i {
                color: white;
                font-size: 24px;
            }

            .notification-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ff4757;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
            }

            .chat-window {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                display: none;
                flex-direction: column;
                overflow: hidden;
            }

            .chat-window.active {
                display: flex;
            }

            .chat-header {
                background: ${chatConfig.primaryColor};
                color: white;
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }

            .chat-avatar img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
            }

            .chat-info h4 {
                margin: 0;
                font-size: 1rem;
                font-weight: 600;
            }

            .status {
                font-size: 0.8rem;
                opacity: 0.8;
            }

            .chat-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                margin-left: auto;
                padding: 0.5rem;
                border-radius: 4px;
                transition: background 0.3s ease;
            }

            .chat-close:hover {
                background: rgba(255, 255, 255, 0.2);
            }

            .chat-messages {
                flex: 1;
                padding: 1rem;
                overflow-y: auto;
                background: #f8f9fa;
            }

            .message {
                margin-bottom: 1rem;
                display: flex;
            }

            .bot-message {
                justify-content: flex-start;
            }

            .user-message {
                justify-content: flex-end;
            }

            .message-content {
                max-width: 80%;
                padding: 0.75rem 1rem;
                border-radius: 18px;
                position: relative;
            }

            .bot-message .message-content {
                background: #f8f9fa;
                color: #333;
                border-bottom-left-radius: 4px;
            }

            .user-message .message-content {
                background: ${chatConfig.primaryColor};
                color: white;
                border-bottom-right-radius: 4px;
            }

            .message-time {
                font-size: 0.7rem;
                opacity: 0.6;
                display: block;
                margin-top: 0.25rem;
                color: #666;
            }

            .chat-input-container {
                padding: 1rem;
                background: white;
                border-top: 1px solid #e9ecef;
            }

            .typing-indicator {
                display: flex;
                gap: 4px;
                margin-bottom: 0.5rem;
                padding: 0.5rem 1rem;
            }

            .typing-indicator span {
                width: 8px;
                height: 8px;
                background: #6c757d;
                border-radius: 50%;
                animation: typing 1.4s infinite ease-in-out;
            }

            .typing-indicator span:nth-child(2) {
                animation-delay: 0.2s;
            }

            .typing-indicator span:nth-child(3) {
                animation-delay: 0.4s;
            }

            @keyframes typing {
                0%, 60%, 100% {
                    transform: translateY(0);
                }
                30% {
                    transform: translateY(-10px);
                }
            }

            .chat-form {
                display: flex;
                gap: 0.5rem;
            }

            #chat-input {
                flex: 1;
                padding: 0.75rem 1rem;
                border: 1px solid #e9ecef;
                border-radius: 20px;
                outline: none;
                font-size: 0.9rem;
            }

            #chat-input:focus {
                border-color: ${chatConfig.primaryColor};
            }

            .chat-send {
                background: ${chatConfig.primaryColor};
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .chat-send:hover {
                background: #5a4fcf;
                transform: scale(1.05);
            }

            @media (max-width: 480px) {
                .chat-window {
                    width: 300px;
                    height: 400px;
                }
            }
        `;

        // Add styles to head
        const styleSheet = document.createElement('style');
        styleSheet.textContent = chatStyles;
        document.head.appendChild(styleSheet);

        // Add widget to body
        document.body.appendChild(chatWidget);

        return chatWidget;
    }

    // Chat functionality
    function initChat() {
        const chatWidget = createChatWidget();
        const chatToggle = document.getElementById('chat-toggle');
        const chatWindow = document.getElementById('chat-window');
        const chatClose = document.getElementById('chat-close');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');
        const typingIndicator = document.getElementById('typing-indicator');
        const notificationBadge = document.getElementById('notification-badge');

        let isOpen = false;
        let hasNewMessage = false;

        // Toggle chat
        chatToggle.addEventListener('click', () => {
            isOpen = !isOpen;
            chatWindow.classList.toggle('active', isOpen);
            
            if (isOpen) {
                hasNewMessage = false;
                notificationBadge.style.display = 'none';
                chatInput.focus();
            }
        });

        // Close chat
        chatClose.addEventListener('click', () => {
            isOpen = false;
            chatWindow.classList.remove('active');
        });

        // Auto-responses
        const responses = {
            'hello': 'Hello! Thanks for reaching out. How can I help you today?',
            'hi': 'Hi there! I\'m here to help. What would you like to know?',
            'price': 'I\'d be happy to discuss pricing! My rates vary based on project scope. Would you like to schedule a call to discuss your specific needs?',
            'cost': 'Great question! I offer competitive rates based on project requirements. Let me know what you\'re looking for and I can provide a detailed quote.',
            'contact': 'You can reach me at lemayian.dev@gmail.com or schedule a call through the contact form on this page. I typically respond within 24 hours.',
            'portfolio': 'You\'re already viewing it! Feel free to explore my projects above. I\'d be happy to discuss any specific project in detail.',
            'experience': 'I have 3+ years of experience in full-stack development and design. I\'ve worked on 110+ projects for 25+ satisfied clients.',
            'services': 'I offer web development, UI/UX design, e-commerce solutions, and digital consulting. What specific service are you interested in?',
            'time': 'Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 1-3 months. I can provide a detailed timeline after discussing your requirements.',
            'default': 'Thanks for your message! I\'ll get back to you soon. In the meantime, feel free to check out my portfolio or contact me directly at lemayian.dev@gmail.com.'
        };

        // Send message
        function sendMessage(text, isUser = true) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
            
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                </div>
            `;
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Show typing indicator
        function showTyping() {
            typingIndicator.style.display = 'flex';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Hide typing indicator
        function hideTyping() {
            typingIndicator.style.display = 'none';
        }

        // Get bot response
        function getBotResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            
            for (const [keyword, response] of Object.entries(responses)) {
                if (keyword !== 'default' && lowerMessage.includes(keyword)) {
                    return response;
                }
            }
            
            return responses.default;
        }

        // Handle form submission
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            
            if (message) {
                sendMessage(message, true);
                chatInput.value = '';
                
                // Show typing indicator
                showTyping();
                
                // Simulate bot response delay
                setTimeout(() => {
                    hideTyping();
                    const response = getBotResponse(message);
                    sendMessage(response, false);
                }, 1000 + Math.random() * 1000);
            }
        });

        // Show notification when chat is closed and new message arrives
        function showNotification() {
            if (!isOpen && !hasNewMessage) {
                hasNewMessage = true;
                notificationBadge.style.display = 'flex';
            }
        }

        // Simulate incoming message after 30 seconds
        setTimeout(() => {
            if (!isOpen) {
                showNotification();
            }
        }, 30000);

        // Auto-open chat on scroll to bottom
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    if (!isOpen && !hasNewMessage) {
                        showNotification();
                    }
                }, 2000);
            }
        });
    }

    // Initialize chat when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChat);
    } else {
        initChat();
    }

    // Export for global access
    window.LiveChat = {
        init: initChat
    };
})();
