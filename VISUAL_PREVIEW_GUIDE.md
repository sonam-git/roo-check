# RooCheck Visual Preview Guide

## What You'll See When You Run `npm run dev`

---

## 🏠 Home Page (/)

### Hero Section
```
┌─────────────────────────────────────────────┐
│              ☸ (subtle)                     │
│                                             │
│         Welcome to RooCheck                 │
│         རུ་ཅེག་ལ་དགའ་བསུ                      │
│                                             │
│  A respectful digital tool to help preserve │
│    and honor Sherpa clan traditions         │
│                                             │
│    ━━━━  ༄༅།།  ━━━━                       │
└─────────────────────────────────────────────┘
```

### Main Content Card
- White card with subtle shadow
- Backdrop blur effect (glassmorphism)
- 📿 emoji next to heading
- Earth-toned text
- Sage green disclaimer box with left border

### Call-to-Action Buttons
```
┌──────────────────────┐  ┌──────────────────────┐
│ Check Clan          │  │ Learn About         │
│ Relationship        │  │ Sherpa Clans        │
│ (gradient: earth→   │  │ (gradient: sage→    │
│  amber)             │  │  earth)             │
└──────────────────────┘  └──────────────────────┘
```

### Feature Cards (3 columns on desktop)
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│     🏔️      │  │  👨‍👩‍👧‍👦      │  │      🤝      │
│ Cultural    │  │   Family     │  │  Community   │
│ Preservation│  │   Respect    │  │   Support    │
│             │  │              │  │              │
│ (hover: lift│  │ (hover: lift │  │ (hover: lift │
│  & glow)    │  │  & glow)     │  │  & glow)     │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## 📱 Mobile View (< 768px)

### Header - Collapsed
```
┌─────────────────────────────────────┐
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │ ← 1px gradient accent
│                                     │
│  🏔️  RooCheck     ☰  │
│     རུ་ཅེག             │
│                                     │
└─────────────────────────────────────┘
```

### Header - Expanded (hamburger clicked)
```
┌─────────────────────────────────────┐
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  🏔️  RooCheck     ✕  │
│     རུ་ཅེག             │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │  🏠  Home                        │ │
│ │                                 │ │
│ │  📖  About Clans                │ │
│ │                                 │ │
│ │  ✓  Check Relationship          │ │
│ │     (gradient button)           │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 💻 Desktop View (> 768px)

### Header
```
┌─────────────────────────────────────────────────────────────┐
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │ ← gradient
│                                                             │
│  🏔️  RooCheck        [Home]  [About Clans]  [Check →]     │
│     རུ་ཅེག                                                  │
│     (glow on                  (pills)       (gradient)      │
│      hover)                                                 │
└─────────────────────────────────────────────────────────────┘
```

### Full Layout
```
┌─────────────────────────────────────────────────────────────┐
│                     HEADER (sticky)                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Subtle gradient background (earth→sage→earth)              │
│                                                             │
│              ☸                                              │
│                                                             │
│         Welcome to RooCheck                                 │
│         རུ་ཅེག་ལ་དགའ་བསུ                                    │
│                                                             │
│    ━━━━  ༄༅།།  ━━━━                                       │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  📿 Understanding Sherpa Clan Relationships         │   │
│  │                                                     │   │
│  │  Content...                                         │   │
│  │                                                     │   │
│  │  ┌───────────────────────────────────────────────┐ │   │
│  │  │ ℹ️  Important: Consult family elders...       │ │   │
│  │  └───────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│        [Check Clan Relationship]  [Learn About Clans]       │
│                                                             │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐              │
│  │ 🏔️ Card  │  │ 👨‍👩‍👧‍👦 Card │  │ 🤝 Card  │              │
│  └───────────┘  └───────────┘  └───────────┘              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │ ← gradient
│                                                             │
│                      ━━━━  ༄༅།།  ━━━━                     │
│                                                             │
│                   RooCheck - རུ་ཅེག                         │
│        Preserving Sherpa Cultural Heritage...               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ℹ️  This tool is intended as a reference guide...   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│         © 2024 RooCheck. Built with respect...              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Preview

### Gradients You'll See

**Header/Footer Background:**
```
earth-50 ──▶ sage-50 ──▶ earth-50
(cream)     (light      (cream)
            green)
```

**Accent Border:**
```
earth-400 ──▶ amber-500 ──▶ earth-400
(tan)        (gold)       (tan)
```

**Primary Button:**
```
earth-600 ──▶ amber-600
(brown)      (gold)
```

**Secondary Button:**
```
sage-600 ──▶ earth-600
(green)     (brown)
```

---

## ✨ Interactive Elements

### Hover Effects

1. **Logo**: Glows with amber tint
2. **Navigation Pills**: White background appears, subtle shadow
3. **Primary Button**: Darker gradient + lifts slightly + shadow grows
4. **Cards**: Lift up, shadow becomes golden glow
5. **Mobile Menu Items**: White background + shadow

### Animations

- **Smooth**: 300ms transitions
- **Scale**: Buttons grow 5% on hover
- **Lift**: Cards move up 4px on hover
- **Glow**: Amber-tinted shadow appears

---

## 📐 Spacing & Layout

### Max Width
- Content container: `max-w-7xl` (1280px)
- Cards: `max-w-4xl` for text-heavy content

### Padding
- Mobile: `px-4` (16px)
- Tablet: `px-6` (24px)
- Desktop: `px-8` (32px)

### Vertical Rhythm
- Section gaps: `mb-16` (64px)
- Card gaps: `mb-12` (48px)
- Text gaps: `space-y-4` (16px)

---

## 🌐 Browser Compatibility

### Tibetan Script Display

**macOS**: ✅ Displays natively
**Windows**: ✅ With language pack installed
**Linux**: ✅ With Tibetan fonts installed
**iOS/Android**: ✅ Native support

If Tibetan characters don't render, they'll fall back gracefully to boxes (□) but won't break the layout.

---

## 🔍 What to Look For

### Good Signs ✅
- Smooth, professional gradient backgrounds
- Tibetan script clearly visible in header
- Buttons have satisfying hover effects
- Cards lift and glow on hover
- Mobile menu slides in smoothly
- Everything is readable and accessible

### Potential Issues ⚠️
- Tibetan script showing as boxes (missing fonts)
- Gradients not appearing (browser support)
- Animations jerky (performance issue)
- Colors too light/dark (monitor calibration)

---

## 🎯 First Impression Goals

When you first load the page, you should feel:
1. **Calm**: Soft colors, gentle gradients, spacious layout
2. **Respected**: Thoughtful use of cultural symbols
3. **Modern**: Contemporary UI with smooth interactions
4. **Trustworthy**: Professional, well-crafted design
5. **Accessible**: Clear hierarchy, readable text

---

## 📸 Screenshot Checklist

If sharing screenshots:
- [ ] Full page scroll (home page)
- [ ] Header in desktop view
- [ ] Header in mobile view
- [ ] Mobile menu expanded
- [ ] Button hover states
- [ ] Card hover effects
- [ ] Footer section

---

## 🚀 Ready to Preview?

```bash
cd /Users/sonamjsherpa/Desktop/roocheck
npm run dev
```

Then open your browser to: **http://localhost:3000**

Try these interactions:
1. Hover over the logo (see the glow!)
2. Hover over navigation items
3. Resize to mobile (< 768px)
4. Click hamburger menu
5. Hover over the three feature cards
6. Click the primary button (gradient!)

---

*Enjoy the beautiful new design! 🏔️✨*
