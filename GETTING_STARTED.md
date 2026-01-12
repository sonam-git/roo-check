# Getting Started with RooCheck

Welcome! This guide will help you set up and run the RooCheck application.

## Important: Terminal Setup

If you see a stuck terminal prompt asking about "import alias", please follow these steps:

1. **Close the stuck terminal**: Click on the terminal pane and press `Ctrl+C` (or `Cmd+C` on Mac) to cancel the stuck process
2. **Open a new terminal**: In VS Code, go to Terminal → New Terminal
3. **Navigate to the project**: `cd /Users/sonamjsherpa/Desktop/roocheck`

## Installation Steps

### Option 1: Using the Setup Script (Recommended)

```bash
# Make the script executable (if not already)
chmod +x setup.sh

# Run the setup script
./setup.sh
```

### Option 2: Manual Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Available Commands

Once dependencies are installed, you can use these commands:

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates an optimized production build

### Start Production Server
```bash
npm start
```
Starts the production server (requires `npm run build` first)

### Linting
```bash
npm run lint
```
Runs ESLint to check for code issues

## Using VS Code Tasks

You can also use VS Code's built-in task runner:

1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type "Tasks: Run Task"
3. Select one of:
   - Install Dependencies
   - Start Development Server
   - Build for Production
   - Run Linter

## Project Structure

```
roocheck/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   ├── clans/         # GET /api/clans
│   │   │   └── check/         # POST /api/check
│   │   ├── clans/             # /clans page
│   │   ├── check/             # /check page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── providers.tsx      # Redux Provider
│   ├── components/            # Reusable React components
│   ├── data/                  # Clan data (JSON)
│   ├── store/                 # Redux store & slices
│   └── types/                 # TypeScript definitions
├── public/                     # Static assets
└── .vscode/                   # VS Code configuration
```

## First Run

After installation, when you run `npm run dev`, you should see:

```
  ▲ Next.js 15.1.3
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

Open http://localhost:3000 in your browser to see the application!

## What You'll See

1. **Home Page** (`/`): Introduction to RooCheck and its cultural significance
2. **About Clans** (`/clans`): Educational information about Sherpa clans
3. **Check Relationship** (`/check`): Interactive form to check clan compatibility

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors

If you see "module not found" errors, make sure dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

The application uses TypeScript. If you see type errors, they will be resolved once dependencies are installed.

## Next Steps

1. **Explore the Code**: Start with `src/app/page.tsx` (Home page)
2. **Check the API**: Look at `src/app/api/check/route.ts` for the relationship checking logic
3. **Modify Clan Data**: Edit `src/data/clans.ts` to add or update clan information
4. **Customize Styles**: Adjust colors in `tailwind.config.ts`

## Need Help?

- Check the main [README.md](README.md) for project overview
- Review [.github/copilot-instructions.md](.github/copilot-instructions.md) for coding guidelines
- Ensure Node.js 18+ is installed: `node --version`

## Cultural Note

This application serves the Sherpa community and should be developed with cultural sensitivity. Always maintain respectful language and consult with community elders when making changes to clan-related logic or content.

---

Built with respect for Sherpa tradition 🏔️
