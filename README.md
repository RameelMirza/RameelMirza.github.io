# Rameel Mirza - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and experience as a full-stack developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Friendly**: Proper meta tags and semantic HTML
- **GitHub Pages Ready**: Easy deployment to GitHub Pages

## 🛠️ Technologies Used

- **React 19** - Modern React with the latest features
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern CSS features
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
rameel-mirza/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.jsx          # Main portfolio component
│   ├── App.css          # Portfolio styles
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rameel-mirza.git
cd rameel-mirza
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📝 Customization

### Personal Information

Edit the following in `src/App.jsx`:

- **Name**: Update the navigation logo and hero title
- **Bio**: Modify the hero description and about section
- **Skills**: Update the skills array
- **Projects**: Replace with your actual projects
- **Contact**: Add your real email and social links

### Styling

- **Colors**: Modify CSS custom properties in `src/App.css`
- **Layout**: Adjust grid layouts and spacing
- **Fonts**: Change font families in the CSS

### Adding a Profile Picture

1. Add your image to `src/assets/`
2. Import it in `App.jsx`
3. Replace the profile placeholder with an `<img>` tag

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "GitHub Actions"
5. The site will be automatically deployed when you push changes

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

3. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## 📱 Sections

- **Home**: Hero section with introduction
- **About**: Personal background and statistics
- **Skills**: Technical skills and technologies
- **Projects**: Showcase of work and achievements
- **Contact**: Contact information and social links

## 🎨 Design Features

- **Fixed Navigation**: Smooth scrolling navigation
- **Gradient Background**: Eye-catching hero section
- **Card-based Layout**: Modern card designs for projects and skills
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile Responsive**: Optimized for mobile devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Rameel Mirza
- Email: rameel@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using React and Vite
