# Claude Config - ForkLoop Backend Migration

## Project Overview

**Mission**: Transform existing WTWR backend → ForkLoop recipe backend
**Timeline**: Behind schedule, need rapid deployment
**Goal**: Replace clothing items with recipe management system

## Current Status

- ✅ Frontend working with json-server mock backend
- ✅ Delete/save recipe functionality implemented
- 🔄 **NEXT**: Modify existing WTWR backend for recipes

## Backend Architecture (Existing WTWR)

- **Tech Stack**: Node.js + Express + MongoDB + JWT
- **Deployment**: Google Cloud VM + PM2 + nginx + SSL
- **Live API**: https://api.testwtwr.jumpingcrab.com
- **Auth System**: JWT tokens + bcrypt (proven working)

## Required Backend Changes

### 1. Data Model Transformation

```javascript
// FROM: clothingItem.js
{
  name: String,
  weather: String,
  imageUrl: String,
  owner: ObjectId,
  likes: [ObjectId]
}

// TO: recipe.js
{
  title: String,
  category: String, // breakfast/lunch/dinner/snack
  image: String,
  cookingTime: Number,
  difficulty: String, // easy/medium/hard
  servings: Number,
  glutenFree: Boolean,
  dairyFree: Boolean,
  spoonacularScore: Number,
  owner: ObjectId,
  liked: Boolean // simplified from likes array
}
```

### 2. API Endpoints to Update

```
GET    /items        → /recipes    (get all recipes)
POST   /items        → /recipes    (create recipe)
DELETE /items/:id    → /recipes/:id (delete recipe)
PUT    /items/:id/likes → /recipes/:id/like (toggle like)
```

### 3. Controller Updates Needed

- `itemController.js` → `recipeController.js`
- Update validation schemas
- Modify response data structure
- Keep authentication middleware unchanged

### 4. Frontend Integration Points

- **Base URL**: Currently points to localhost:3001 (dev) / production API
- **Auth**: JWT tokens in localStorage (no changes needed)
- **API Calls**: All in `/src/utils/api.jsx` (working correctly)

## Development Plan

1. **Backup**: Create backup of working WTWR backend
2. **Clone/Open**: Backend repo in new VSCode window
3. **Models**: Update clothing → recipe schema
4. **Controllers**: Modify item → recipe logic
5. **Routes**: Update endpoint paths
6. **Test**: Verify with frontend
7. **Deploy**: Push to production server

## Key Files to Modify

```
backend/
├── models/
│   ├── clothingItem.js → recipe.js
├── controllers/
│   ├── itemController.js → recipeController.js
├── routes/
│   ├── items.js → recipes.js
├── middleware/
│   └── auth.js (keep unchanged)
└── app.js (update route imports)
```

## Testing Strategy

- Keep json-server running during development
- Test each endpoint with curl/Postman
- Verify frontend integration
- Deploy to staging environment first

## Notes

- **User auth**: Keep existing JWT system (proven working)
- **Database**: MongoDB connection stays same
- **Deployment**: Reuse existing PM2/nginx setup
- **SSL**: Already configured and working

## Next Action

Open backend repo in VSCode and start with model transformation!
