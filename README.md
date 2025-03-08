# Plenish - Recipe Management App

Plenish is a modern, mobile-responsive recipe management application that helps you organize recipes, plan meals, manage your pantry inventory, and generate smart shopping lists.

## Features

- **Recipe Management**
  - Import recipes from URLs and Instagram
  - Manual recipe entry
  - Organize recipes with tags and categories
  - View detailed recipe information including ingredients, instructions, and cooking times

- **Inventory Management**
  - Track ingredients in your pantry
  - Organize items by category
  - Monitor quantities and expiration dates
  - Smart inventory suggestions

- **Shopping List**
  - Generate lists from recipes
  - Add custom items
  - Mark items as purchased
  - Automatic list organization by category

- **Meal Planning**
  - Plan meals for the week
  - Assign recipes to specific dates and meal types
  - Generate shopping lists from meal plans
  - View nutritional information

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BenGleeson/plenish.git
   cd plenish
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Heroicons
- Headless UI

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API and external service integrations
├── utils/         # Utility functions
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── assets/        # Static assets
└── contexts/      # React context providers
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Recipe data normalization inspired by various open-source projects
- UI design influenced by modern web applications
- Icons provided by Heroicons
