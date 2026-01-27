# Color Update Task List
Goal: Replace #FFD700 bright gold with calmer #d4af37 mustard yellow

## Files to Edit:
- [x] src/App.css - Update CSS variables and all #FFD700 references
- [x] src/About.css - Update all #FFD700 references
- [x] src/App.js - Update inline style

## Changes:
1. Update CSS variables:
   - --accent-gold: #FFD700 → #d4af37
   - --gold-light: #FFEB3B → #e8c86e
   - --gold-dark: #FFA000 → #a67c00

2. Replace all direct #FFD700 with #d4af37
3. Update gradients containing yellows
4. Update App.js inline style

## Revert Command (if needed):
git checkout HEAD -- src/App.css src/About.css src/App.js

