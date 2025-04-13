# 🖥️ Tauri Greet App

A simple desktop application built with **React + TypeScript (Vite)** on the frontend and **Rust + Tauri** on the backend. This app allows users to enter their name and get a personalized greeting, showcasing how to use Tauri’s `invoke` API to connect frontend and backend.

## 🚀 Features

- Lightweight and fast desktop app  
- Built with modern web technologies  
- Secure Rust backend powered by Tauri  
- Beginner-friendly codebase

## 📦 Installation

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [Rust](https://www.rust-lang.org/tools/install)
- Tauri CLI (install globally using the command below):

```bash
npm install -g @tauri-apps/cli
```

## 🛠 Usage

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tauri-greet-app.git
cd tauri-greet-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app in development mode

```bash
npm run tauri dev
```

This will start both the frontend (Vite) and the backend (Rust with Tauri), and open a native desktop window.

### 4. Build the app for production

To create a standalone executable:

```bash
npm run tauri build
```

The output will be located in:

```
src-tauri/target/release/bundle/
```

## 🧪 Try It Out

1. Start the app
2. Enter your name
3. Click the “Greet” button
4. See a personalized greeting returned from Rust backend
