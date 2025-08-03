# H-Bot Assets Structure

## Asset Organization

This project uses a page-based asset organization structure for better maintainability and developer experience.

### Folder Structure

```
assets/
├── shared/                 # Shared assets used across multiple pages
│   ├── fonts/             # Web fonts and typography assets
│   ├── icons/             # Common icons (logo, social media, navigation)
│   └── images/            # Shared images and backgrounds
├── pages/                 # Page-specific assets
│   ├── home/              # Home page assets
│   │   ├── icons/         # Home page specific icons
│   │   └── images/        # Home page specific images
│   ├── about/             # About page assets
│   │   ├── icons/         # About page specific icons
│   │   └── images/        # About page specific images
│   ├── services/          # Services page assets
│   │   ├── icons/         # Services page specific icons
│   │   └── images/        # Services page specific images
│   ├── smart-lighting/    # Smart lighting page assets
│   │   ├── icons/         # Smart lighting specific icons
│   │   └── images/        # Smart lighting specific images
│   └── contact/           # Contact page assets
│       ├── icons/         # Contact page specific icons
│       └── images/        # Contact page specific images
└── figma-assets/          # Original Figma exports and design specs
    ├── dev-specs/         # Developer specifications and design tokens
    └── images/            # Raw Figma exports
```

### Usage Guidelines

#### Page-Specific Assets
- Each page has its own asset folder under `assets/pages/[page-name]/`
- Icons and images specific to a single page should be placed in the respective page folder
- Use relative paths in CSS: `url('../assets/pages/home/icons/hero-icon.svg')`

#### Shared Assets
- Common elements like logos, navigation icons, and social media icons go in `assets/shared/`
- Fonts are stored in `assets/shared/fonts/`
- Use relative paths: `url('../assets/shared/icons/logo.svg')`

#### File Naming Convention
- Use kebab-case: `smart-home-icon.svg`
- Be descriptive: `hero-background.jpg` not `bg1.jpg`
- Include size for multiple variants: `logo-small.svg`, `logo-large.svg`

### Font Loading

Fonts are loaded via Google Fonts CDN in production files:
```html
<link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700;800&family=Satoshi:wght@400;500;700&display=swap" rel="stylesheet">
```

### Production Files

All production HTML files are self-contained with:
- ✅ Embedded CSS for fast loading
- ✅ No external dependencies except fonts
- ✅ Optimized for deployment
- ✅ Responsive design included

### Development vs Production

**Development Files:**
- `index.html` (with external CSS/JS)
- `styles.css`
- `script.js`

**Production Files:**
- `home-new-production.html` - Complete home page
- `index-production.html` - About us page
- `services-production.html` - Services page
- `contact-production.html` - Contact page
- `smart-lighting-production.html` - Smart lighting page

### Asset Optimization

All assets are optimized for web:
- SVG icons for scalability
- Compressed images
- WebP format where supported
- Proper alt tags for accessibility
