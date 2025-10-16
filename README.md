# CSS Grid React Components 🎨

A modern React application showcasing CSS Grid layout patterns, migrated from vanilla HTML/CSS to a component-based React architecture using Vite.

## 🚀 Live Demo

🔗 **Live Site**: [CSS Grid React Components](https://github.com/KarlaRehren/react-componentes)

## 📋 Project Overview

This project demonstrates the migration of a CSS Grid-based layout from static HTML/CSS to modern React components. It features a responsive grid system with articles, sidebar content, and interactive elements.

### ✨ Key Features

- **Responsive CSS Grid Layout** - Adapts to different screen sizes
- **React Component Architecture** - Modular and reusable components  
- **Vite Development** - Fast development server with HMR
- **Modern CSS** - Grid layout with hover effects and animations
- **Google Fonts Integration** - Beautiful typography with Manjari font
- **Mobile-First Design** - Responsive breakpoints for mobile devices

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main title component
│   ├── MainContainer.jsx   # Grid container component
│   ├── Article.jsx         # Reusable article component
│   ├── Sidebar.jsx         # Sidebar with images
│   ├── RelatedPost.jsx     # Interactive related posts
│   └── Footer.jsx          # Footer component
├── App.jsx                 # Root application component
├── App.css                 # Main styles with CSS Grid
└── main.jsx               # Application entry point
```

## 🛠️ Technologies Used

- **React 18** - Modern React with functional components
- **Vite** - Fast build tool and development server
- **CSS Grid** - Advanced layout system
- **ESLint** - Code quality and consistency
- **Google Fonts** - Web typography

## 🎯 Component Architecture

### Header Component
- Displays the main "CSS GRID" title
- Responsive typography

### MainContainer Component  
- Grid container with 5-column layout
- Houses all content sections
- Responsive grid behavior

### Article Component
- Reusable component with props support
- Dynamic content rendering
- Consistent styling

### Sidebar Component
- Image gallery with descriptions
- Flexbox layout within grid item
- External image integration

### RelatedPost Component
- Interactive hover effects
- Reusable with customizable titles
- Smooth transitions

### Footer Component
- Static footer content
- Full-width grid placement

## 🚀 Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KarlaRehren/react-componentes.git
   cd react-componentes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173/
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application adapts to different screen sizes:

- **Desktop (>768px)**: 5-column grid layout
- **Mobile (≤768px)**: Single-column stacked layout
- **Tablet**: Intermediate responsive behavior

### Breakpoints
```css
@media screen and (max-width: 768px) {
  /* Mobile-first responsive rules */
}
```

## 🎨 Styling Details

### CSS Grid Configuration
- **Grid Template**: `repeat(5, 1fr)`
- **Gap**: `1.6em`
- **Max Width**: `1000px`
- **Responsive**: Column spans adjust for mobile

### Color Scheme
- **Background**: Custom geometric pattern
- **Primary**: Dark theme (`#1e272e`, `#485460`)
- **Accent**: Interactive hover states
- **Typography**: Manjari font family

### Interactive Elements
- **Hover Effects**: Color transitions on related posts
- **Transitions**: Smooth `0.5s ease` animations
- **Visual Feedback**: Cursor pointer states

## 🔧 Development Notes

### Component Props
```jsx
// Article component with custom content
<Article 
  title="Custom Title" 
  paragraphs={["Custom paragraph content"]} 
/>

// RelatedPost with custom title
<RelatedPost title="Custom Post Title" />
```

### CSS Variables
The project uses consistent spacing and color variables for maintainability.

## 📚 Migration Process

This project was migrated from vanilla HTML/CSS to React following these principles:

1. **Component Identification** - Analyzed HTML structure for logical components
2. **Props Design** - Made components reusable with props
3. **Style Preservation** - Maintained original CSS Grid behavior
4. **Modern Tooling** - Integrated Vite for development experience
5. **Documentation** - Added comprehensive comments and documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👩‍💻 Author

**Karla Rehren**
- GitHub: [@KarlaRehren](https://github.com/KarlaRehren)
- Repository: [react-componentes](https://github.com/KarlaRehren/react-componentes)

---

⭐ **Star this repository if you found it helpful!**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
