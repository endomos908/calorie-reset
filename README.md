# Reset Health - PWA Setup Guide

A complete health transformation tracker app built with React + Vite, ready to install on your iPhone home screen.

## 📱 Features
- Dashboard with weight tracking and progress
- AI-powered food scanner (requires backend setup)
- Weekly meal plans with nutritional info
- BP-safe workout routines
- Installable as a Progressive Web App (PWA)

## 📁 Project Structure

You need to create this exact folder structure on your computer:

```
reset-health/
├── public/
│   ├── icon.svg
│   └── manifest.json
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md (this file)
```

## 🚀 Step-by-Step Setup Instructions for Mac

### Step 1: Create the Folder Structure

Open Terminal and run:

```bash
cd Desktop
mkdir reset-health
cd reset-health
mkdir public
mkdir src
```

### Step 2: Create Each File

**For each file below, use this command:**
```bash
nano filename.ext
```

Then paste the content, press `Control + X`, then `Y`, then `Enter` to save.

#### Root Files:

**package.json** - Paste this in the reset-health folder:
```json
{
  "name": "reset-health",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8",
    "vite-plugin-pwa": "^0.17.4"
  }
}
```

**vite.config.js** - Create in reset-health folder
**index.html** - Create in reset-health folder

#### src/ Files:

**src/main.jsx** - Create in the src folder
**src/App.jsx** - Create in the src folder (this is the big one!)

#### public/ Files:

**public/manifest.json** - Create in the public folder
**public/icon.svg** - Create in the public folder

### Step 3: Install Dependencies

Make sure you have Node.js installed first (download from https://nodejs.org)

```bash
cd ~/Desktop/reset-health
npm install
```

This will download all the React and Vite packages you need.

### Step 4: Run the Development Server

```bash
npm run dev
```

You'll see:
```
➜  Local:   http://localhost:3000/
```

Open that URL in your browser!

### Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with production-ready files.

## 📲 Install on iPhone as PWA

1. **Deploy to a web server** (choose one):
   - **Netlify** (easiest): Drag the `dist` folder to netlify.com/drop
   - **Vercel**: Connect your GitHub repo
   - **GitHub Pages**: Push to a GitHub repo and enable Pages

2. **On your iPhone**:
   - Open the deployed URL in Safari
   - Tap the Share button (box with arrow up)
   - Scroll down and tap "Add to Home Screen"
   - Tap "Add" in the top right
   - The app appears on your home screen as "Reset"!

## ⚠️ Important Notes

### Food Scanner API Setup

The food scanner feature needs a backend to work:

1. The current code calls the Anthropic API directly from the browser
2. This **will fail** due to CORS and authentication errors
3. You need to create a backend API endpoint (Node.js, Python, etc.)
4. Store your Anthropic API key securely on the server
5. Update the `scanFood` function in `src/App.jsx` to call your backend

**All other features work perfectly without any backend!**

### File Placement Checklist

Make sure files are in the right place:
- ✅ `package.json` → `reset-health/package.json`
- ✅ `vite.config.js` → `reset-health/vite.config.js`
- ✅ `index.html` → `reset-health/index.html`
- ✅ `main.jsx` → `reset-health/src/main.jsx`
- ✅ `App.jsx` → `reset-health/src/App.jsx`
- ✅ `manifest.json` → `reset-health/public/manifest.json`
- ✅ `icon.svg` → `reset-health/public/icon.svg`

## 🛠️ Tech Stack

- React 18.2.0
- Vite 5.0.8
- vite-plugin-pwa 0.17.4

## 📝 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🎨 Customization

Edit these values in `public/manifest.json` and `vite.config.js`:
- App name: "Reset Health"
- Short name: "Reset"
- Theme color: #070b14 (dark blue-black)
- Background color: #070b14

## 🔧 Troubleshooting

**"Command not found: npm"**
- Install Node.js from https://nodejs.org

**"Cannot find module 'vite'"**
- Run `npm install` first

**Files not in right place**
- Double-check the folder structure above
- Make sure `src/` and `public/` folders exist

**PWA not installing on iPhone**
- Make sure you're using Safari (not Chrome)
- The site must be served over HTTPS
- Check that manifest.json is accessible at /manifest.json

## 📄 License

Built for personal use.

---

**Need help?** All the files you need are included. Just follow the steps above carefully!
