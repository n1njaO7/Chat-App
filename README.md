# 💬 Chat-App

A modern, real-time chat application built with **WebSocket technology** for instant messaging. Connect with others seamlessly with a sleek and responsive interface.

[![TypeScript](https://img.shields.io/badge/TypeScript-56.8%25-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

## 🌐 Live Demo

**[Visit the deployed app →](https://ch1tchats-app.netlify.app)**

## ✨ Features

- 🚀 **Real-time Messaging** - Instant message delivery using WebSocket
- 💻 **Full-Stack TypeScript** - Type-safe codebase across client and server
- 🎨 **Modern UI** - Clean and responsive design with CSS
- ⚡ **Fast & Lightweight** - Optimized for performance
- 👥 **Multiple Users** - Support for concurrent connections
- 🔔 **Live Updates** - See messages appear instantly

## 🏗️ Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **CSS** - Styling

### Backend
- **Node.js** - Runtime
- **TypeScript** - Type safety
- **WebSocket** - Real-time communication

## 📊 Repository Composition

- TypeScript: **56.8%**
- CSS: **39.3%**
- JavaScript: **2.4%**
- HTML: **1.5%**

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/n1njaO7/Chat-App.git
   cd Chat-App
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Or install for specific directories
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   - Frontend will be available at `http://localhost:5173`
   - Backend will be available at `http://localhost:3001` (or your configured port)

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
Chat-App/
├── frontend/          # React + TypeScript client
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js + TypeScript server
│   ├── src/
│   └── package.json
└── README.md
```

## 🎯 Usage

1. Open the app in your browser
2. Enter your username
3. Start chatting with connected users in real-time
4. Messages appear instantly across all connected clients

## 🔧 Available Scripts

### Frontend
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start dev server with auto-reload
npm start        # Start production server
```

## 📚 API Documentation

The WebSocket server accepts connections on `/socket` endpoint. Messages are exchanged in real-time using the following events:

- `connect` - User joins the chat
- `message` - Send/receive messages
- `disconnect` - User leaves the chat

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by [@n1njaO7](https://github.com/n1njaO7)

## 🙋 Support

If you find this project useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs or suggesting features via [Issues](https://github.com/n1njaO7/Chat-App/issues)
- 📣 Sharing it with others

---

**Made with ❤️ using TypeScript & WebSocket**
