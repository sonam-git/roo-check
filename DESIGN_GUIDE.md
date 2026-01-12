# RooCheck Design Guide

## Himalayan/Buddhist-Inspired Theme

This document outlines the design philosophy and implementation details for RooCheck's culturally-sensitive interface.

---

## Design Philosophy

RooCheck embraces a **Himalayan/Buddhist-inspired aesthetic** that:

1. **Honors Tradition**: Uses earth tones, sage greens, and gold accents that evoke the natural beauty of the Himalayas
2. **Maintains Calm**: Soft gradients, gentle shadows, and spacious layouts create a peaceful user experience
3. **Shows Respect**: Incorporates Tibetan script (རུ་ཅེག) and decorative elements (༄༅།།, ☸) thoughtfully
4. **Stays Modern**: Implements contemporary UI patterns while respecting cultural heritage

---

## Color Palette

### Earth Tones (Primary)
```css
earth-50: #f9f7f4   /* Lightest - backgrounds */
earth-100: #f0ebe3  /* Light backgrounds */
earth-200: #e4dac7  /* Borders, dividers */
earth-300: #d4c5a6  /* Subtle accents */
earth-400: #c2ab82  /* Decorative gradients */
earth-500: #b39268  /* Medium accents */
earth-600: #a6825d  /* Primary buttons, links */
earth-700: #8a6b4e  /* Text, strong emphasis */
earth-800: #715844  /* Headings, dark text */
earth-900: #5c4839  /* Darkest text */
```

### Sage Tones (Secondary)
```css
sage-50: #f6f7f6    /* Lightest backgrounds */
sage-100: #e3e7e3   /* Light backgrounds */
sage-200: #c7d1c8   /* Borders, dividers */
sage-300: #a3b4a5   /* Subtle accents */
sage-400: #7e9481   /* Medium accents */
sage-500: #627968   /* Accent elements */
sage-600: #4d6152   /* Secondary buttons */
sage-700: #3f4e43   /* Text */
sage-800: #354138   /* Strong text */
sage-900: #2d362f   /* Darkest text */
```

### Accent Colors
- **Gold/Amber**: Used for Tibetan script, decorative elements, and highlights
- **White with transparency**: Glassmorphism effects (white/95, white/70)

---

## Typography

### Font Families
- **Primary**: System font stack (default Next.js)
- **Tibetan Script**: `serif` (relies on system fonts with Tibetan support)

### Tibetan Script Elements
- **རུ་ཅེག** (Ru-check): Main heading in Header
- **རུ་ཅེག་ལ་དགའ་བསུ** (Welcome to RooCheck): Hero section on home page
- **༄༅།།** (Decorative divider): Used in headers, footers, and section breaks
- **☸** (Dharma wheel): Subtle decorative element

### Text Hierarchy
```css
- Hero Heading: text-4xl to text-6xl (responsive)
- Page Heading: text-2xl to text-3xl
- Section Heading: text-xl to text-2xl
- Card Heading: text-lg to text-xl
- Body Text: text-base
- Small Text: text-sm
- Micro Text: text-xs
```

---

## Component Styling

### Header
- **Background**: Gradient from earth-50 via sage-50 to earth-50
- **Border**: 2px bottom border (earth-300/50) with 1px gradient accent
- **Height**: 20 (mobile) to 24 (desktop)
- **Logo**: Glow effect on hover with amber tint
- **Navigation**: Rounded pills with hover states
- **Mobile Menu**: Glassmorphism dropdown with icons

### Footer
- **Background**: Same gradient as header
- **Border**: 2px top border with gradient accent
- **Elements**: Tibetan decorative divider, warning box with icon
- **Spacing**: Generous padding (py-10)

### Cards
- **Background**: white/95 with backdrop blur
- **Border**: Subtle border (earth-100/50)
- **Shadow**: Custom `shadow-soft` with hover `shadow-glow`
- **Corners**: rounded-xl (12px)
- **Hover**: Subtle lift effect (-translate-y-1)

### Buttons
- **Primary**: Gradient from earth-600 to amber-600
- **Secondary**: Gradient from sage-600 to earth-600
- **Success**: Gradient from green-600 to emerald-600
- **Danger**: Gradient from red-600 to rose-600
- **Effects**: Scale on hover (1.05), shadow-lg, ring focus states

---

## Custom Tailwind Extensions

### Gradients
```typescript
'himalayan-gradient': linear-gradient(135deg, #f9f7f4 0%, #e3e7e3 50%, #f9f7f4 100%)
'prayer-flag': linear-gradient(90deg, red→orange→yellow→green→blue)
```

### Shadows
```typescript
'soft': Gentle multi-layer shadow for cards
'glow': Amber-tinted glow for interactive elements
```

---

## Layout Patterns

### Page Structure
```
┌─────────────────────────────────┐
│  Header (sticky, gradient)      │ ← 1px gradient accent
├─────────────────────────────────┤
│                                 │
│  Content Area                   │ ← Subtle gradient background
│  (max-w-7xl, centered)          │
│                                 │
├─────────────────────────────────┤
│  Footer (gradient)              │ ← 1px gradient accent
└─────────────────────────────────┘
```

### Responsive Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Desktop**: 768px - 1024px (lg)
- **Large**: > 1024px (xl)

### Mobile-First Approach
- Hamburger menu for screens < 768px
- Stacked layouts on mobile, grid on desktop
- Touch-friendly buttons (min height 44px)

---

## Decorative Elements

### When to Use Tibetan Script
- ✅ Headers and branding
- ✅ Hero sections
- ✅ Decorative dividers
- ❌ Body text (keep accessible)
- ❌ Form labels (clarity first)

### Decorative Symbols
- **༄༅།།** (yig mgo): Section dividers, footer/header accents
- **☸** (dharma wheel): Subtle background elements
- **Prayer flags**: Special occasions (not currently implemented)

---

## Accessibility Guidelines

### Color Contrast
- All text meets WCAG AA standards
- Focus states clearly visible (ring-2 with amber/earth colors)
- Hover states distinct from default states

### Interactive Elements
- Minimum touch target: 44x44px
- Keyboard navigation supported
- ARIA labels on icon-only buttons
- Focus visible on all interactive elements

### Screen Readers
- Semantic HTML structure
- Alt text on all images
- Descriptive link text
- Proper heading hierarchy

---

## Animation & Transitions

### Duration
- **Quick**: 200ms (color changes)
- **Standard**: 300ms (most transitions)
- **Slow**: 500ms (page transitions)

### Easing
- Default: ease-in-out
- Hover effects: scale and shadow transforms
- Menu: slide and fade

### Reduced Motion
Consider users with motion sensitivity:
```css
@media (prefers-reduced-motion: reduce) {
  /* Reduce or disable animations */
}
```

---

## Implementation Examples

### Gradient Background
```tsx
<div className="bg-gradient-to-b from-earth-50/30 via-sage-50/20 to-earth-50/30">
```

### Card with Hover Effect
```tsx
<Card className="shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
```

### Primary Button
```tsx
<Button variant="primary" fullWidth>
  {/* Gradient from earth-600 to amber-600 */}
</Button>
```

### Decorative Divider
```tsx
<div className="flex items-center justify-center space-x-4">
  <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
  <span className="text-amber-600 text-xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
  <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
</div>
```

---

## Cultural Sensitivity Checklist

When adding new design elements:

- [ ] Does it respect Sherpa cultural traditions?
- [ ] Is the tone calm and educational, not commercial?
- [ ] Are Tibetan elements used appropriately and respectfully?
- [ ] Does it emphasize consulting elders?
- [ ] Is it accessible to all users?
- [ ] Does it maintain the app's serious purpose?

---

## Future Enhancements

### Potential Additions
- [ ] Dark mode with adjusted earth tones
- [ ] Prayer flag animation for special occasions
- [ ] Seasonal color variations (subtle)
- [ ] Localized fonts for Nepali and Tibetan
- [ ] Optional pattern overlays (mandalas, knots)

### Performance Considerations
- Use gradients sparingly to avoid repaints
- Lazy load decorative images
- Optimize Tibetan font loading
- Consider system font fallbacks

---

## Resources

### Design Inspiration
- Himalayan natural landscapes
- Buddhist temple architecture
- Traditional Thangka art color palettes
- Tibetan prayer flags

### Technical Resources
- [Tailwind CSS Gradients](https://tailwindcss.com/docs/gradient-color-stops)
- [Tibetan Unicode](https://unicode.org/charts/PDF/U0F00.pdf)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

*This design guide should evolve with the project while maintaining respect for Sherpa cultural heritage.*
