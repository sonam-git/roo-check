# 🎨 RooCheck Design Quick Reference

## Color Cheat Sheet

### Primary Palette
| Color | Hex | Use Case |
|-------|-----|----------|
| Earth-50 | `#f9f7f4` | Light backgrounds |
| Earth-600 | `#a6825d` | Primary buttons, accents |
| Earth-800 | `#715844` | Headings, dark text |
| Sage-600 | `#4d6152` | Secondary buttons |
| Amber-500 | `#f59e0b` | Sacred elements, highlights |
| Amber-600 | `#d97706` | Primary accent, hover states |

---

## Icon Meanings

| Icon | Meaning | Use |
|------|---------|-----|
| ☸ | Dharma Wheel | Page headers, sacred sections |
| ༄༅།། | Tibetan Ornament | Decorative dividers |
| 🏔️ | Mountain/Major Clan | Clan sections |
| 🌳 | Tree/Sub-Clan | Sub-clan sections |
| 📿 | Prayer Beads | Cultural elements |
| ✅ | Success | Marriage allowed |
| ❌ | Warning | Marriage not allowed |

---

## Component Classes

### Glassmorphism Card
```jsx
className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-amber-400/40"
```

### Primary Button
```jsx
className="bg-gradient-to-r from-earth-600 to-amber-600 hover:from-earth-700 hover:to-amber-700 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
```

### Gradient Heading
```jsx
className="text-4xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent"
style={{ fontFamily: '"Noto Serif", serif' }}
```

### Tibetan Text
```jsx
className="text-2xl text-amber-600 font-semibold"
style={{ fontFamily: 'serif' }}
```

---

## Animation Classes

| Class | Effect | Usage |
|-------|--------|-------|
| `animate-pulse` | Gentle breathing | Icons, decorative elements |
| `animate-float` | Up/down motion | Badges, floating elements |
| `hover:scale-110` | Enlarge on hover | Interactive cards |
| `hover:-translate-y-2` | Lift on hover | Cards, panels |
| `transition-all duration-300` | Smooth transitions | Most interactive elements |

---

## Spacing Guidelines

### Padding
- Small: `p-4` (16px)
- Medium: `p-6` (24px) - **Default for cards**
- Large: `p-8` (32px)
- Extra Large: `p-10` (40px)

### Margin
- Between elements: `mb-4` or `mb-6`
- Between sections: `mb-8` or `mb-12`
- Page sections: `mb-16`

### Gap (Flex/Grid)
- Tight: `gap-4`
- Normal: `gap-6`
- Spacious: `gap-8`

---

## Responsive Breakpoints

```jsx
<div className="text-lg md:text-xl lg:text-2xl">
  {/* Mobile: lg, Tablet: xl, Desktop: 2xl */}
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
</div>
```

---

## Common Patterns

### Page Header
```jsx
<div className="text-center mb-12 relative">
  <div className="inline-block relative">
    <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/20 via-orange-400/30 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="relative bg-white/95 backdrop-blur-md px-10 py-8 rounded-3xl shadow-2xl border-2 border-amber-400/40">
      <div className="flex justify-center mb-4">
        <span className="text-5xl text-amber-600" style={{ fontFamily: 'serif' }}>☸</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent">
        Page Title
      </h1>
      <div className="flex items-center justify-center space-x-3 mt-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <span className="text-amber-600 text-2xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent"></div>
      </div>
    </div>
  </div>
</div>
```

### Icon Badge
```jsx
<div className="relative inline-block">
  <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-lg"></div>
  <div className="relative w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
    <span className="text-3xl">🏔️</span>
  </div>
</div>
```

### Callout Box
```jsx
<div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-lg">
  <div className="flex items-start space-x-4">
    <svg className="w-6 h-6 text-amber-600" {/* ... */}>
    <div>
      <p className="font-bold text-amber-800 mb-2">Title</p>
      <p className="text-earth-800">Content</p>
    </div>
  </div>
</div>
```

---

## Tibetan Script Reference

| English | Tibetan | Pronunciation |
|---------|---------|---------------|
| Ru (Major Clan) | རུ་ | Ru |
| Shingza (Sub-Clan) | ཤིང་ཟ། | Shingza |
| RooCheck | རུ་ཅེག | Ru-check |
| Welcome | དགའ་བསུ | Ga-su |
| About | གི་སྐོར། | Gi-kor |
| Tashi Delek | བཀྲ་ཤིས་བདེ་ལེགས། | Tashi Delek |

---

## Shadow Hierarchy

| Level | Class | Usage |
|-------|-------|-------|
| Subtle | `shadow-sm` | Input fields |
| Normal | `shadow-md` | Buttons |
| Elevated | `shadow-lg` | Cards at rest |
| Floating | `shadow-xl` | Cards on hover |
| Dramatic | `shadow-2xl` | Page headers, results |
| Glow | `shadow-glow` | Sacred elements |

---

## Border Radius

| Size | Class | Usage |
|------|-------|-------|
| Small | `rounded-lg` | Input fields |
| Medium | `rounded-xl` | Buttons, small cards |
| Large | `rounded-2xl` | Large cards |
| Extra Large | `rounded-3xl` | Page headers |
| Circle | `rounded-full` | Icon badges |

---

## Key Design Rules

1. **Always use gradients** for headings and buttons
2. **Include Tibetan script** for cultural authenticity
3. **Add hover states** to all interactive elements
4. **Use icons** to enhance visual communication
5. **Maintain earth/sage/amber** color harmony
6. **Apply glassmorphism** to elevated elements
7. **Include ☸ or ༄༅།།** in important sections
8. **Ensure 44px minimum** touch target size
9. **Add loading states** for async operations
10. **Use serif fonts** for headings

---

## Quick Copy-Paste

### Dharma Wheel Header
```
☸
```

### Tibetan Ornament
```
༄༅།།
```

### Mountain Icon
```
🏔️
```

### Prayer Beads
```
📿
```

### Success/Error
```
✅ ❌
```

---

## Testing Checklist

- [ ] Works on mobile (< 640px)
- [ ] Works on tablet (768px)
- [ ] Works on desktop (1024px+)
- [ ] All hover states functional
- [ ] Focus states visible
- [ ] Loading states present
- [ ] Colors contrast properly
- [ ] Tibetan text renders
- [ ] Icons visible
- [ ] Animations smooth

---

**Design System Version: 2.0**
**Last Updated: January 2026**
**Theme: Himalayan/Buddhist/Mountain**

བཀྲ་ཤིས་བདེ་ལེགས།
