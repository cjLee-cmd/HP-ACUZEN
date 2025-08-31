# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This repository is for implementing a React-based website that replicates the Acuzenic website (https://acuzenic-web.web.app/). The target site is a modern React SPA with internationalization support for Korean and English.

## Target Architecture Requirements

Based on the reference website analysis, this project should implement:

### Core Technologies
- **React 19+** - Modern React with latest features
- **ESM Modules** - ES Module imports, likely using esm.sh CDN or similar
- **Modern Build System** - Vite recommended for fast development
- **Firebase Hosting** - Deployment target (.web.app domain)

### Design System
- **Gradient Backgrounds** - Radial gradients with pastel colors (lavender, light blue, white)
- **Multi-language Typography** - Korean: 'Noto Sans KR', 'Pretendard'; English: 'Poppins', 'Inter'
- **Responsive Layout** - Modern responsive design principles
- **Minimalist Aesthetic** - Clean, modern interface

### Internationalization (i18n)
- **Korean/English Support** - Conditional font loading based on language
- **Language Detection** - Automatic or manual language switching
- **Font Optimization** - Language-specific font loading strategy

## Development Workflow

Since this is currently an empty project, the typical development sequence will be:

1. **Project Initialization**
   ```bash
   npm create vite@latest . --template react
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```

3. **Build Process**
   ```bash
   npm run build
   npm run preview  # Preview production build
   ```

## Implementation Strategy

### Phase 1: Foundation
- Setup React + Vite project structure
- Configure ESM imports and React 19+
- Implement gradient background system
- Setup basic responsive layout

### Phase 2: Design System
- Create typography components with multi-language support
- Implement color system and gradient backgrounds
- Build responsive layout components
- Setup font loading optimization

### Phase 3: Internationalization
- Configure i18n framework (react-i18next recommended)
- Implement language detection and switching
- Setup conditional font loading per language
- Test Korean/English content rendering

### Phase 4: Content & Features
- Implement content sections based on reference site
- Add interactive components and navigation
- Optimize performance and accessibility
- Test responsive behavior across devices

### Phase 5: Deployment
- Configure Firebase hosting
- Setup build optimization for production
- Implement proper caching strategies
- Test deployment and performance

## Key Design Principles

- **Performance First** - Optimize font loading, use modern React patterns
- **Accessibility** - WCAG compliance, semantic markup, keyboard navigation
- **Mobile Responsive** - Mobile-first approach with progressive enhancement
- **Clean Code** - Modern React patterns, component composition, minimal dependencies
- **Internationalization** - Proper i18n implementation for scalable language support

## Special Considerations

### Font Loading Strategy
The reference site uses language-specific font stacks. Implement efficient font loading:
- Preload critical fonts
- Use font-display: swap
- Implement language detection for optimal font selection

### Gradient Implementation
The site features sophisticated gradient backgrounds. Consider:
- CSS custom properties for gradient management
- Responsive gradient scaling
- Performance optimization for complex gradients

### ESM Import Strategy
The reference site uses esm.sh for React imports. Consider:
- CDN vs local dependencies trade-offs
- Import optimization and bundling strategy
- Development vs production import strategies