# Images Directory

This directory contains exported images and assets from the Figma design.

## Expected Assets
- `hero-background.png` - Hero section background image
- `mission-image.jpg` - Mission section illustration
- `service-icons/` - Directory containing service icons
- `logo.svg` - Company logo in SVG format
- `screenshots/` - Design screenshots for reference

## Image Specifications
- Format: PNG for images with transparency, JPG for photos
- Resolution: 2x for retina displays
- Optimization: Compressed for web delivery
- Alt text: All images should have descriptive alt attributes

## Usage
Images should be referenced in the main HTML file with proper responsive attributes:
```html
<img src="figma-assets/images/example.jpg" alt="Description" loading="lazy">
```

## Note
Actual image files should be exported from Figma and placed in this directory.
Use Figma's export feature to generate optimized web assets.
