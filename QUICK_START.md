# RooCheck - Quick Start Commands

## 🚀 Start Development Server

```bash
cd /Users/sonamjsherpa/Desktop/roocheck
npm run dev
```

Then open: **http://localhost:3000**

---

## 📦 Available Scripts

### Development
```bash
npm run dev          # Start development server (hot reload)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Quality Checks
```bash
npm run lint         # Check for code quality issues
npm run lint -- --fix  # Auto-fix linting issues
```

---

## 🎨 View the New Design

After running `npm run dev`, visit these pages:

1. **Home Page**: http://localhost:3000
   - See the hero section with Tibetan script
   - Test responsive header and hamburger menu
   - Hover over feature cards

2. **Clans Page**: http://localhost:3000/clans
   - (To be themed next)

3. **Check Relationship**: http://localhost:3000/check
   - (To be themed next)

---

## 🔧 Troubleshooting

### Port Already in Use
If you see "Port 3000 is already in use":

```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run dev
```

### Autoprefixer Errors (from earlier)
If you see autoprefixer warnings:

```bash
npm install --save-dev autoprefixer
```

---

## 📱 Testing Responsive Design

### Browser DevTools
1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar (Cmd+Shift+M)
3. Test these sizes:
   - iPhone SE (375px) - Mobile
   - iPad (768px) - Tablet
   - MacBook Pro (1440px) - Desktop

### Manual Resize
1. Start dev server
2. Slowly resize browser window
3. Watch hamburger menu appear at 768px
4. Test menu interaction

---

## 🎯 What to Test

### Header
- [ ] Logo glows on hover
- [ ] Tibetan script (རུ་ཅེག) displays correctly
- [ ] Desktop navigation has hover effects
- [ ] Mobile hamburger menu opens/closes
- [ ] Header stays sticky on scroll

### Buttons
- [ ] Primary button has gradient (earth→amber)
- [ ] Buttons scale up on hover
- [ ] Shadow grows on hover
- [ ] Click animations work

### Cards
- [ ] Cards have soft shadows
- [ ] Cards lift on hover
- [ ] Cards get golden glow on hover
- [ ] Content is readable

### Footer
- [ ] Decorative Tibetan elements (༄༅།།) display
- [ ] Disclaimer box is visible and styled
- [ ] Matches header gradient

---

## 📝 Quick Edits

### Change Colors
Edit: `tailwind.config.ts`

### Edit Header
Edit: `src/components/Header.tsx`

### Edit Home Page
Edit: `src/app/page.tsx`

### Modify Buttons
Edit: `src/components/Button.tsx`

---

## 🌐 Browser Support

Test in these browsers:
- ✅ Chrome (latest)
- ✅ Safari (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)

Mobile browsers:
- ✅ Safari iOS
- ✅ Chrome Android

---

## 📚 Documentation

- **Design Guide**: `DESIGN_GUIDE.md`
- **Update Summary**: `THEME_UPDATE_SUMMARY.md`
- **Visual Preview**: `VISUAL_PREVIEW_GUIDE.md`
- **Architecture**: `ARCHITECTURE.md`
- **Clan Data**: `CLAN_DATA_REFERENCE.md`

---

## 🐛 Common Issues

### Tibetan Script Not Showing
**Problem**: Seeing boxes (□) instead of Tibetan characters

**Solution**: 
- macOS: Should work by default
- Windows: Install Tibetan language pack
- Linux: `sudo apt-get install fonts-tibetan-machine`

### Gradients Not Smooth
**Problem**: Banding in gradients

**Solution**: Check color bit depth (should be 8-bit or higher)

### Performance Issues
**Problem**: Animations stuttering

**Solution**: 
```bash
# Disable GPU acceleration temporarily
# Or check browser performance settings
```

---

## 🎨 Color Reference Quick Access

### Primary Gradients
```css
/* Buttons */
from-earth-600 to-amber-600   /* Primary */
from-sage-600 to-earth-600    /* Secondary */

/* Background */
from-earth-50 via-sage-50 to-earth-50
```

### Border Accent
```css
from-earth-400 via-amber-500 to-earth-400
```

---

## ⚡ Performance Tips

```bash
# Build and analyze bundle
npm run build

# Check build output for large files
# Look for files > 244 kB (red)
```

---

## 🚀 Ready to Launch?

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Check for errors in console
# Test all pages and interactions
```

---

## 📞 Need Help?

1. Check `TROUBLESHOOTING.md`
2. Review `DESIGN_GUIDE.md`
3. Look at error messages in terminal
4. Check browser console (F12)

---

*Happy coding! 🏔️✨*
