# Design Tokens

## Colors
```css
:root {
  /* Primary Colors */
  --primary-blue: #0883fd;
  --light-blue: #85cdfb;
  --dark-navy: #010510;
  --white: #ffffff;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
  --gradient-text: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
  
  /* Background */
  --bg-primary: var(--dark-navy);
  --bg-glass: rgba(255, 255, 255, 0.1);
  --bg-card: rgba(255, 255, 255, 0.05);
}
```

## Typography
```css
:root {
  /* Font Family */
  --font-primary: 'Readex Pro', sans-serif;
  
  /* Font Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 4rem;      /* 64px */
}
```

## Spacing
```css
:root {
  /* Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
  --space-6xl: 160px;
}
```

## Breakpoints
```css
:root {
  /* Responsive Breakpoints */
  --breakpoint-mobile: 320px;
  --breakpoint-tablet: 768px;
  --breakpoint-laptop: 1024px;
  --breakpoint-desktop: 1440px;
}
```

## Effects
```css
:root {
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}
```
