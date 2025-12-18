# Rocket Icon Assets Guide

## Created Assets

### SVG Icons (Ready to Use)
- ✅ `/public/rocket-icon.svg` - Full rocket icon (512x512)
- ✅ `/public/favicon.svg` - Favicon version (32x32 optimized)
- ✅ `/public/apple-touch-icon.svg` - Apple touch icon (180x180)

### HTML Generator
- ✅ `/public/og-image.html` - Open Graph image generator (1200x630)

## Converting SVG to PNG

### Option 1: Online Tools (Easiest)
1. Visit [CloudConvert](https://cloudconvert.com/svg-to-png) or [Convertio](https://convertio.co/svg-png/)
2. Upload the SVG files
3. Set sizes:
   - `favicon.png`: 32x32, 64x64, 128x128, 256x256, 512x512
   - `apple-touch-icon.png`: 180x180
   - `og-image.png`: 1200x630
4. Download and place in `/public/` directory

### Option 2: Using Sharp (Programmatic)
```bash
# Install sharp
bun add -d sharp

# Create conversion script
# See scripts/generate-assets.ts for reference
```

### Option 3: Using ImageMagick
```bash
# Install ImageMagick
brew install imagemagick  # macOS
# or apt-get install imagemagick  # Linux

# Convert SVG to PNG
convert -background none -resize 512x512 public/rocket-icon.svg public/favicon.png
convert -background none -resize 180x180 public/rocket-icon.svg public/apple-touch-icon.png
```

### Option 4: Browser Screenshot (For OG Image)
1. Open `/public/og-image.html` in your browser
2. Use browser DevTools to set viewport to 1200x630
3. Take screenshot or use browser's "Capture screenshot" feature
4. Save as `og-image.png` in `/public/` directory

## Required PNG Files

Create these PNG files and place them in `/public/`:

1. **favicon.png** (multiple sizes recommended)
   - 32x32 (required)
   - 64x64
   - 128x128
   - 256x256
   - 512x512

2. **apple-touch-icon.png**
   - 180x180 (required for iOS)

3. **og-image.png**
   - 1200x630 (required for Open Graph/Twitter Cards)

## Quick Setup Script

If you have Node.js/Bun with sharp installed:

```typescript
import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('public/rocket-icon.svg');

// Generate favicon sizes
[32, 64, 128, 256, 512].forEach(size => {
  sharp(svg)
    .resize(size, size)
    .png()
    .toFile(`public/favicon-${size}x${size}.png`);
});

// Generate apple touch icon
sharp(svg)
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');
```

## Verification Checklist

- [ ] `favicon.png` exists in `/public/`
- [ ] `apple-touch-icon.png` exists in `/public/`
- [ ] `og-image.png` exists in `/public/`
- [ ] Test favicon in browser (should see rocket icon)
- [ ] Test OG image with [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Verify icons appear correctly in browser tabs

## Design Notes

The rocket icon features:
- **Colors**: Cyan theme (#06B6D4, #22D3EE, #67E8F9) matching your brand
- **Style**: Minimal, modern, space-themed
- **Background**: Dark (#0A0A0A) matching your site theme
- **Details**: Window, fins, exhaust flames for visual interest

## Customization

To customize the rocket icon:
1. Edit `/public/rocket-icon.svg` in any SVG editor
2. Adjust colors, size, or details
3. Re-generate PNG files using methods above
4. Update colors in `og-image.html` if needed

