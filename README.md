# ChITChAT — Real-time Chat App

![ChITChAT Demo 1](assets/screenshot1.png)

[![Repository stars](https://img.shields.io/github/stars/n1njaO7/Chat-App?style=flat-square)](https://github.com/n1njaO7/Chat-App/stargazers)
[![License](https://img.shields.io/github/license/n1njaO7/Chat-App?style=flat-square)](LICENSE)
[![Languages](https://img.shields.io/github/languages/top/n1njaO7/Chat-App?style=flat-square)](https://github.com/n1njaO7/Chat-App)

A lightweight, fast, and secure real-time chat application built with TypeScript and WebSockets. It supports creating and joining rooms, live messaging between multiple clients, and a clean, responsive dark UI.

Why this project
- Minimal, focused codebase for real-time messaging using WebSockets
- Clear separation between client and server code (TypeScript-first)
- Designed for easy extension — add authentication, persistence, or moderation

Key features
- Real-time messaging with WebSockets
- Create or join rooms with short room codes
- Responsive, dark-themed UI with message bubbles and timestamps
- Room member list and online presence indicator

Screenshots

Left: Create / join UI. Right: In-room chat with message bubbles.

![Create or Join](assets/screenshot1.png)

![In-room chat](assets/screenshot2.png)

Tech stack
- TypeScript — primary language (~56.7%)
- CSS — styling (~39.4%)
- JavaScript — small utility code (~2.4%)
- HTML — markup (~1.5%)

Prerequisites
- Node.js v18+ (LTS recommended)
- npm or yarn

Quick start
1. Clone the repo

   git clone https://github.com/n1njaO7/Chat-App.git
   cd Chat-App

2. Install dependencies

   npm install
   # or
   yarn install

3. Configuration
- Create a `.env` file in the project root (if your project uses env variables). Example variables:

```
PORT=3000
WS_URL=ws://localhost:3000
```

4. Run in development

   npm run dev
   # or
   yarn dev

Adjust the commands according to the scripts defined in package.json.

Development notes
- The repository uses TypeScript for type-safety. Run `npm run build` to compile (if applicable).
- Linting and formatting: add ESLint / Prettier if you'd like a consistent style.

Testing
- No automated tests included yet — contributions adding tests (Jest / Vitest) are welcome.

Contributing
- Open an issue to propose larger changes.
- Fork the repo, create a feature branch, and send a pull request.
- Follow conventional commits and write clear PR descriptions.

Roadmap / Ideas
- Add persistent storage for chat history (Redis or a database)
- Add optional user accounts and authentication
- Add message reactions and typing indicators
- Add deployment guides and dockerization

License
This project has no license file yet. If you want this repo to be open source, I can add an MIT (or another) license for you.

Contact
Created by n1njaO7. For questions or help, open an issue or reach out on GitHub.

---

Notes: I updated README.md with a more polished, professional landing page and placeholders for screenshots (assets/screenshot1.png and assets/screenshot2.png). To complete the change I can upload the two images you provided and commit them into `assets/` (I need the image files as attachments or accessible URLs).