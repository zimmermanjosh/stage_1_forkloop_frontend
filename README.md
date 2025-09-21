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
- **Deployment**: GitHub Pages (Live: https://zimmermanjosh.github.io/stage_1_forkloop_frontend)

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
- ✅ Core components (RecipeCard, search, detail views)
- ✅ Spoonacular API integration & filtering
- ✅ Polish, responsive design, deployment

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

## Live Deployment

**🚀 Live Site**: [https://zimmermanjosh.github.io/stage_1_forkloop_frontend](https://zimmermanjosh.github.io/stage_1_forkloop_frontend)

### **🔐 Test Credentials for Review**

**Use these credentials to test Save Recipe and Authentication features:**

**Test User 1:**
```
Email: jtest@test.com
Password: test123456
```

**Test User 2:**
```
Username: testuser
Email: testuser@test.com
Password: password123456
Avatar: https://i.pravatar.cc/300?img=50
```

### **🎯 How to Test Authentication & Save Features**

**Step-by-step testing guide:**

1. **Visit the Live Site:** [https://zimmermanjosh.github.io/stage_1_forkloop_frontend](https://zimmermanjosh.github.io/stage_1_forkloop_frontend)

2. **Login Process:**
   - Click "Log in" button in the header
   - Use either test account credentials above
   - The login modal shows both test accounts for convenience
   - Click "Log in" to authenticate

3. **Test Save Recipe Functionality:**
   - Search for recipes using the search bar
   - Click on any recipe card to view details
   - Click "💾 Save Recipe" button in the recipe modal
   - Recipe will be added to your personal collection

4. **Test User-Specific Data:**
   - Login with User 1, save some recipes
   - Logout and login with User 2, save different recipes
   - Each user maintains separate recipe collections
   - Verify recipes are user-specific

5. **Test Profile Management:**
   - Click your avatar in the header when logged in
   - Update your name and avatar URL
   - Changes persist for that user session

**Note:** Mock authentication is enabled for GitHub Pages deployment, so all features work without a backend server.

**Features Available:**
- ✅ Recipe search and discovery
- ✅ Add/delete recipes functionality
- ✅ User authentication (register/login)
- ✅ Personal recipe collections
- ✅ Responsive design across devices
- ✅ Spoonacular API integration

## Testing & Development Tools

ForkLoop includes comprehensive testing components for API and authentication validation:

### Test Routes (Development Only)

**Access these routes after running `npm start`:**

- **Full Test Dashboard**: [http://localhost:3000/tests](http://localhost:3000/tests)
  - Complete testing suite with all functionality
  - Real-time API connection testing
  - Authentication flow validation
  - Visual feedback and detailed results

- **API Tests Only**: [http://localhost:3000/api-test](http://localhost:3000/api-test)
  - Spoonacular API integration testing
  - Recipe search, random recipes, details
  - Connection and response validation

- **Auth Tests Only**: [http://localhost:3000/auth-test](http://localhost:3000/auth-test)
  - User registration and login testing
  - JWT token validation
  - Profile management testing

**Note**: These test routes are built into the application for development purposes and provide interactive testing without needing external testing frameworks.

### Browser Console Testing

Open browser console and run quick tests:

```javascript
// Quick API connectivity test
window.testAPI.runQuickTest();

// Test recipe search functionality
window.testAPI.testSearch("chicken");

// Test random recipe fetching
window.testAPI.testRandom("breakfast");

// Test individual recipe details
window.testAPI.testDetails("715538");

// Run comprehensive API test suite
window.testAPI.runAllTests();
```

### Test Features

- **🧪 API Testing**: Spoonacular integration validation

  - Recipe search with filters (diet, cuisine, cooking time)
  - Random recipe fetching by category
  - Individual recipe detail retrieval
  - Error handling and fallback testing

- **🔐 Authentication Testing**: User system validation

  - User registration flow
  - Login authentication with JWT tokens
  - Token validation and refresh
  - Profile update functionality
  - Complete auth flow testing

- **📊 Visual Results**: Detailed test feedback
  - Real-time loading states
  - Error message display
  - Parsed API response inspection
  - User-friendly result summaries

### Development Benefits

- **Live Testing**: Interactive components for immediate feedback
- **API Validation**: Test Spoonacular integration before deployment
- **Auth Flow Testing**: Complete user registration/login verification
- **Debug Tools**: Quick connection and error diagnosis
- **Data Verification**: Inspect parsed API responses in real-time
- **Error Handling**: Verify fallback mechanisms work correctly

### Test Component Files

The testing infrastructure is built into these components:

```
src/components/
├── TestDashboard/     # Main testing hub (/tests route)
├── ApiTest/          # Spoonacular API testing (/api-test route)
├── AuthTest/         # Authentication testing (/auth-test route)
├── AddRecipeDemo/    # Interactive recipe adding demo
└── MockAuthDemo/     # Mock authentication examples
```

### Using the Test Suite

1. **Start Development Server**: `npm start`
2. **Navigate to Test Routes**: Use URLs above or click links in the app
3. **Interactive Testing**: Click buttons to run specific tests
4. **Console Integration**: Use `window.testAPI` functions for scripted testing
5. **Real-time Results**: View immediate feedback and detailed responses

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
- **Week 2:** ✅ Core recipe components & Spoonacular integration
- **Week 3:** XX Advanced filtering & user preferences
- **Week 4:** 📋 Polish, responsive design, deployment

### Success Metrics

- Responsive design (320px+ no horizontal scroll)
- BEM CSS methodology compliance
- React hooks implementation
- Fetch API integration (no third-party request libraries)
- Spoonacular API integration (150 req/day limit)

### Repository Resources

- **Frontend**: [https://github.com/zimmermanjosh/stage_1_forkloop_frontend]
- **Backend** (Stage 2): [https://github.com/zimmermanjosh/stage_2_forkloop_backend]
- **Live Demo**: https://zimmermanjosh.github.io/stage_1_forkloop_frontend

### Resubmission 

- **checkout**: [new branch update PR - stage-1-frontend-and-api] 