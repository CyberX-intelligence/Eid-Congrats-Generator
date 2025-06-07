# CyberX EID Generator

A modern web application for generating personalized EID (Employee ID) cards with a sleek dark theme and responsive design.

![CyberX EID Generator Preview](public/logo.png)

## Features

- 🎨 Real-time EID card generation
- 🌓 Dark theme with smooth animations
- 📱 Fully responsive design
- 💾 Automatic image download
- ✨ Clean and intuitive user interface
- 🚀 Fast and efficient rendering using HTML5 Canvas

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cyberx-eid-generator.git
   cd cyberx-eid-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter your full name in the input field
2. The EID card will generate in real-time as you type
3. Click the download button to save your EID card as a PNG image

## Project Structure

```
cyberx-eid-generator/
├── public/                 # Static files
│   ├── Cover-image.png     # Background image
│   ├── logo.png           # Application logo
│   ├── favicon.ico        # Browser tab icon
│   └── index.html         # Main HTML file
├── app.js                # Express server
├── package.json          # Project dependencies
├── render.yaml           # Render deployment config
└── README.md            # This file
```

## Deployment

This application is configured for deployment on [Render](https://render.com/). To deploy:

1. Push your code to a GitHub repository
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

## Technologies Used

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Canvas API for image generation
  - Responsive design with CSS Grid and Flexbox
  - Dark theme with CSS variables

- **Backend**:
  - Node.js
  - Express.js

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

---

Developed with ❤️ by [Your Name]
