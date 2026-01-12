# Images Folder

This folder is for storing images and other media assets for the RooCheck application.

## 📁 Folder Structure

```
public/
└── images/
    ├── logo/           (App logo and branding)
    ├── icons/          (UI icons and symbols)
    ├── backgrounds/    (Background images)
    └── illustrations/  (Cultural illustrations)
```

## 🖼️ How to Use Images in Next.js

### In React Components:

```tsx
import Image from 'next/image';

// For images in public/images/
<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>

// Or with regular img tag
<img src="/images/your-image.jpg" alt="Description" />
```

### In CSS/Tailwind:

```tsx
<div className="bg-[url('/images/background.jpg')]">
  Content
</div>
```

## 📋 Recommended Image Guidelines

### For RooCheck Application:

1. **Logo/Branding**
   - Format: SVG (preferred) or PNG with transparency
   - Size: 200x200px or vector
   - Location: `public/images/logo/`

2. **Icons**
   - Format: SVG or PNG
   - Size: 24x24px, 48x48px (for retina)
   - Location: `public/images/icons/`

3. **Background Images**
   - Format: WebP (best), JPEG, or PNG
   - Size: Optimized (< 500KB recommended)
   - Location: `public/images/backgrounds/`

4. **Cultural Content**
   - Format: JPEG or PNG
   - Size: Optimized for web
   - Location: `public/images/illustrations/`

## 🎨 Image Optimization Tips

1. **Use Next.js Image Component** for automatic optimization:
   ```tsx
   import Image from 'next/image';
   ```

2. **Optimize before uploading**:
   - Compress images (TinyPNG, ImageOptim)
   - Use appropriate formats (WebP for photos, PNG for graphics, SVG for icons)
   - Resize to needed dimensions

3. **Naming Convention**:
   - Use lowercase
   - Use hyphens, not spaces: `sherpa-mountain.jpg`
   - Be descriptive: `home-hero-background.jpg`

## 🏔️ Suggested Images for RooCheck

### Consider adding:

1. **Logo** (`logo/roocheck-logo.svg`)
   - Main app logo with mountain/cultural theme

2. **Home Page**
   - `backgrounds/mountain-landscape.jpg` - Himalayan mountains
   - `illustrations/sherpa-family.svg` - Cultural illustration

3. **Icons**
   - `icons/clan-icon.svg` - Represents major clan
   - `icons/sub-clan-icon.svg` - Represents sub-clan
   - `icons/check-mark.svg` - For allowed results
   - `icons/cross-mark.svg` - For not allowed results

4. **Educational**
   - `illustrations/family-tree.svg` - Explain clan relationships
   - `illustrations/sherpa-culture.jpg` - Cultural context images

## 🎯 Cultural Sensitivity Note

When adding images:
- Ensure cultural accuracy and respect
- Avoid stereotypical representations
- Credit photographers/artists appropriately
- Obtain proper permissions for cultural imagery
- Consult with community members for authenticity

## 📦 Image Assets Checklist

Recommended images to add:

- [ ] App logo (SVG or PNG)
- [ ] Favicon (favicon.ico)
- [ ] Social media preview image (og-image.jpg)
- [ ] Hero background for home page
- [ ] Cultural illustrations (respectful and accurate)
- [ ] Icon set for UI elements
- [ ] Loading placeholder images

## 🔗 Example Usage in RooCheck

### Home Page Hero:
```tsx
<div className="relative h-96">
  <Image 
    src="/images/backgrounds/khumbu-mountains.jpg"
    alt="Khumbu mountain landscape"
    fill
    className="object-cover"
    priority
  />
</div>
```

### Logo in Header:
```tsx
<Link href="/">
  <Image 
    src="/images/logo/roocheck-logo.svg"
    alt="RooCheck Logo"
    width={40}
    height={40}
  />
</Link>
```

### Result Icons:
```tsx
{result.allowed ? (
  <Image src="/images/icons/check-mark.svg" alt="Allowed" width={64} height={64} />
) : (
  <Image src="/images/icons/cross-mark.svg" alt="Not Allowed" width={64} height={64} />
)}
```

## 📝 Attribution

If using photos or illustrations, create an `ATTRIBUTION.md` file:

```markdown
# Image Attribution

## Mountain Background
- Photo by: [Photographer Name]
- Source: [URL]
- License: [License Type]

## Cultural Illustrations
- Artist: [Artist Name]
- Permission obtained: [Date]
```

---

**Note**: The `public` folder is accessible at the root URL. 
Images in `public/images/logo.png` are accessed as `/images/logo.png` in your code.

🏔️ Keep images optimized and culturally respectful!
