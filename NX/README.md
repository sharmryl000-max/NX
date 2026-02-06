# Chess Analysis App

This is the NXrview project structure for a Chess Analysis app.

## Project Structure
```
/NX
  ├── /apps
  │   ├── /chess-app
  │   │   ├── /components
  │   │   │   ├── PositionBuilder
  │   │   │   ├── GameReview
  │   │   │   ├── EngineSelector
  │   │   │   └── Chessboard
  │   │   ├── /pages
  │   │   │   ├── ReviewPage
  │   │   │   ├── EngineSelectionPage
  │   │   │   └── PositionBuilderPage
  │   │   ├── /services
  │   │   │   ├── EngineService
  │   │   │   └── GameService
  │   │   ├── /styles
  │   │   │   └── global.css
  │   │   ├── App.tsx
  │   │   └── index.tsx
  ├── /libs
  │   ├── /chess-engine
  │   │   ├── EngineInterface.ts
  │   │   ├── Stockfish.ts
  │   │   └── LeelaChess.ts
  │   ├── /utils
  │   │   ├── GameUtils.ts
  │   │   └── PositionUtils.ts
  ├── /config
  │   ├── nx.json
  │   ├── workspace.json
  │   ├── tsconfig.base.json
  │   └── eslintrc.json
  └── /tests
      ├── /unit
      │   ├── PositionBuilder.test.ts
      │   ├── GameReview.test.ts
      │   └── EngineService.test.ts
      └── /integration
          ├── App.integration.test.ts
          └── EngineSelectionPage.integration.test.ts
```

## Overview
This project is intended for chess analysis with multiple engines, game reviews, and position configurations.
