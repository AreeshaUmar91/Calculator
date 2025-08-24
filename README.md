# 🧮 CalcPro - Professional Calculator Suite

A modern, professional calculator website featuring both simple and scientific calculators with a beautiful, responsive design. Built with React and modern CSS techniques.



## ✨ Features

### 🎯 **Simple Calculator**
- Basic arithmetic operations (+, -, *, /)
- Clean, intuitive interface
- Professional styling with smooth animations
- Responsive design for all devices

### 🔬 **Scientific Calculator**
- **Trigonometric Functions**: sin, cos, tan, asin, acos, atan
- **Logarithmic Functions**: ln (natural log), log (base-10)
- **Advanced Operations**: Power (^), Square root (√), Factorial (!)
- **Constants**: π (pi), e (Euler's number)
- **Angle Modes**: Switch between degrees and radians
- **Parentheses Support**: Complex expression evaluation
- **Backspace Function**: Easy error correction

### 🎨 **Professional Design**
- Modern glassmorphism UI with backdrop blur effects
- Professional color scheme and typography
- Smooth hover animations and micro-interactions
- Responsive grid layouts
- Professional branding and navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/calculator.git
   cd calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Inter (UI) + JetBrains Mono (Calculator Display)
- **Deployment**: Static hosting ready

## 📁 Project Structure

```
calculator/
├── public/
│   └── vite.svg
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── SimpleCalculator.jsx  # Basic calculator
│   │   └── ScientificCalculator.jsx # Scientific calculator
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   ├── index.css                 # Global styles
│   └── App.css                   # App-specific styles
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                     # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Secondary**: Violet (#8b5cf6)
- **Surface**: White with transparency
- **Text**: Dark slate (#0f172a)
- **Muted**: Medium slate (#334155)

### Typography
- **UI Font**: Inter (400, 500, 600, 700, 800)
- **Calculator Display**: JetBrains Mono (400, 500)

### Components
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Sticky header with active states
- **Forms**: Professional input styling with focus rings

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full feature set with optimal spacing
- **Tablet**: Adapted layouts with touch-friendly elements
- **Mobile**: Mobile-first design with optimized button sizes

## 🔧 Customization

### Modifying Colors
Update the CSS variables in `src/index.css`:

```css
:root {
  --brand-500: #3b82f6;  /* Primary blue */
  --brand-600: #2563eb;  /* Darker blue */
  --accent-500: #8b5cf6; /* Violet accent */
  /* ... other variables */
}
```

### Adding New Calculator Functions
Extend the `ScientificCalculator.jsx` component by adding new buttons and functions to the `safeEvaluate` function.

## 🚀 Deployment

### Static Hosting
The build output is ready for deployment on:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

### Build Command
```bash
npm run build
```

### Environment Variables
No environment variables are required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Google Fonts** for the beautiful typography
- **CSS Working Group** for modern CSS features

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation
- Review the code examples

---

**Made with ❤️ by the Areesha Umar**

*Professional calculators for professionals, students, and enthusiasts.*
