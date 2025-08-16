# ForkLoop - Smart Recipe Discovery & Meal Planning

## About the project

ForkLoop eliminates "what should I cook?" decision fatigue with personalized recipe recommendations. Built on proven React architecture, this application provides intelligent meal suggestions based on your dietary preferences, cooking skill level, available ingredients, and nutritional goals.

**Core Mission:** Transform meal planning from a daily chore into an effortless, personalized experience.

## Key Features

- **Smart Recipe Discovery**: Personalized recommendations using Spoonacular API
- **Dietary Intelligence**: Filter by preferences, restrictions, and nutritional goals  
- **Skill-Based Suggestions**: Recipes matched to your cooking experience level
- **Ingredient-Aware**: Find recipes based on what you already have
- **Personal Collections**: Save, organize, and rate your favorite recipes
- **Meal Planning**: Strategic meal prep and planning tools

## Tech Stack

- **Frontend**: React 18.2.0 + React Router 6.26.1
- **Styling**: CSS Modules with BEM methodology
- **API Integration**: Spoonacular API for recipe data
- **State Management**: React Context for user preferences
- **Authentication**: JWT tokens with localStorage
- **Development**: Create React App with ESLint, Prettier
- **Deployment**: GitHub Pages + Custom server deployment

## Architecture Transformation

Built by strategically transforming proven WTWR architecture:
- `clothingItem.js → recipe.js`
- `Weather API → Spoonacular API` 
- `ItemCard → RecipeCard`
- `Weather conditions → Meal categories`
- `Clothing collections → Recipe collections`

## Stage 1 Development Focus

**Timeline**: 28 days (Frontend + API Integration)
- ✅ Foundation & branding updates
- 🔄 Core components (RecipeCard, search, detail views)  
- 📋 Spoonacular API integration & filtering
- 📋 Polish, responsive design, deployment

### Component Architecture

ForkLoop leverages modular React components for recipe discovery and meal planning:

**Core Components:**
- `RecipeCard` - Individual recipe display and interaction
- `RecipeDetail` - Comprehensive recipe view with ingredients/instructions  
- `SearchFilters` - Dietary preferences, cuisine, cooking time filters
- `RecipeCollection` - Personal saved recipes and meal plans
- `UserProfile` - Dietary preferences and cooking skill management

**Utility Structure:**
```
src/
├── components/           # React components
│   ├── App/             # Main application logic
│   ├── RecipeCard/      # Recipe display components
│   ├── Header/          # Navigation and branding
│   └── Profile/         # User management
├── contexts/            # React context providers
├── utils/               # API utilities (Spoonacular, auth)
├── images/              # Assets and icons
└── vendor/              # Third-party resources
```

**API Integration:**
- `src/utils/SpoonacularApi.jsx` - Recipe data and search
- `src/utils/auth.jsx` - User authentication
- `src/utils/config.jsx` - Environment configuration

## software to install

- nvm
- npm

## Software Installation and Run React App

### Install nvm plugin

- nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash`

### Add Reference to terminal - add to .bashrc, .zshrc etc

open a terminal and copy below and paste the following

```
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

open a new terminal || type `source ~/.bashrc || ~/.zshrc .. etc`

### Install npm with nvm plugin

- open a new terminal

- type : `nvm install npm`

### Have nvm install correct version of node

- type : `cd <root directory> && nvm use`

check installed nvm version

- type : `nvm -ls`

### If nvm version not installed

- type : `nvm install <node version>`

then

- type : `nvm use`

### Install project packages

- type : `npm i || npm install`

## Run Commands

`npm run nvmSelect` - Selects nvm version and runs

`npm run build` - Build Production (Vite + React)

`npm run clean` - Removes build artifacts '/node_modules' && '/build'

`npm run start` - starts React App Interface

Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### Setup Spoonacular API

1. Create account at [Spoonacular](https://spoonacular.com/food-api)
2. Get your API key (150 requests/day free tier)
3. Add API key to environment configuration

### Development Server (Optional)

For local development with mock data:
`npm install -g json-server@^0`

- copy 'mockdb/mockdb.json' to root as `db.json`
- run: `json-server --watch db.json --id \_id --port 3001`

## Project Timeline & Updates

### Stage 1: Frontend + API Integration (28 days)
**Target Completion:** 7 days early (Day 21)

### Development Milestones
- **Week 1:** ✅ Foundation & branding transformation
- **Week 2:** 🔄 Core recipe components & Spoonacular integration
- **Week 3:** 📋 Advanced filtering & user preferences  
- **Week 4:** 📋 Polish, responsive design, deployment

### Success Metrics
- Responsive design (320px+ no horizontal scroll)
- BEM CSS methodology compliance
- React hooks implementation
- Fetch API integration (no third-party request libraries)
- Spoonacular API integration (150 req/day limit)

### Repository Resources
- **Frontend**: [https://github.com/zimmermanjosh/se_project_react]
- **Backend** (Stage 2): [https://github.com/zimmermanjosh/se_project_express]
- **Live Demo**: Coming in Stage 1 completion
