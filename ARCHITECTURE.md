# RooCheck - System Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                             │
│                      (Next.js App Router)                          │
└────────────────────────────────────────────────────────────────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        ▼                        ▼                        ▼
┌───────────────┐      ┌─────────────────┐      ┌──────────────────┐
│  Home Page    │      │  Clans Info     │      │  Check Page      │
│     (/)       │      │    (/clans)     │      │    (/check)      │
│               │      │                 │      │                  │
│ • Welcome     │      │ • What is Ru?   │      │ • Form: Person A │
│ • Why check?  │      │ • What is       │      │ • Form: Person B │
│ • CTA buttons │      │   Shingza?      │      │ • Check button   │
│               │      │ • Why matters?  │      │ • Result display │
└───────────────┘      └─────────────────┘      └──────────────────┘
                                                          │
                                                          │ (Client-side)
                                                          ▼
┌────────────────────────────────────────────────────────────────────┐
│                       REDUX STATE LAYER                            │
│                   (Client-side State Management)                   │
│                                                                    │
│  • personA: { majorClanId, subClanId }                            │
│  • personB: { majorClanId, subClanId }                            │
│  • checkResult: { allowed, reason, explanation }                  │
│  • loading, error states                                          │
└────────────────────────────────────────────────────────────────────┘
                                 │
                                 │ (API Calls)
                                 ▼
┌────────────────────────────────────────────────────────────────────┐
│                         API LAYER                                  │
│                   (Next.js API Routes)                             │
└────────────────────────────────────────────────────────────────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        ▼                        ▼                        ▼
┌───────────────┐      ┌─────────────────┐      ┌──────────────────┐
│  GET          │      │  POST           │      │  Future:         │
│  /api/clans   │      │  /api/check     │      │  /api/admin      │
│               │      │                 │      │  /api/auth       │
│ Returns all   │      │ Input:          │      │  /api/history    │
│ major clans   │      │  - personA clan │      │  (Not yet impl.) │
│ and sub-clans │      │  - personB clan │      │                  │
│               │      │                 │      │                  │
│               │      │ Logic:          │      │                  │
│               │      │  1. Same major  │      │                  │
│               │      │     → NOT OK    │      │                  │
│               │      │  2. Same sub    │      │                  │
│               │      │     → NOT OK    │      │                  │
│               │      │  3. Different   │      │                  │
│               │      │     → OK        │      │                  │
│               │      │                 │      │                  │
│               │      │ Output:         │      │                  │
│               │      │  - allowed      │      │                  │
│               │      │  - reason       │      │                  │
│               │      │  - explanation  │      │                  │
└───────────────┘      └─────────────────┘      └──────────────────┘
        │                        │
        │                        │
        ▼                        ▼
┌────────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                                 │
│                      (Currently JSON)                              │
│                                                                    │
│  📄 src/data/clans.ts                                             │
│                                                                    │
│  Sherpa Clans (5 major clans - authentic data):                  │
│  ├─ Minyagpa (oldest clan, Khumbu/Solu)                          │
│  │  ├─ Thaktok                                                    │
│  │  ├─ Serwa                                                      │
│  │  ├─ Khyungba                                                   │
│  │  ├─ Gole                                                       │
│  │  └─ Chuserwa                                                   │
│  ├─ Thimmi (upper Solu/Rolwaling)                                │
│  │  ├─ Lama                                                       │
│  │  ├─ Chhumbi                                                    │
│  │  ├─ Nakchung                                                   │
│  │  └─ Phurtewa                                                   │
│  ├─ Chakpa (trade/settlements)                                    │
│  │  ├─ Yulba                                                      │
│  │  ├─ Khangba                                                    │
│  │  └─ Serthok                                                    │
│  ├─ Pinasa (multi-regional)                                       │
│  │  ├─ Paldor                                                     │
│  │  ├─ Nima                                                       │
│  │  └─ Angba                                                      │
│  └─ Salaka (name-based sub-clans)                                │
│     ├─ Dorge                                                      │
│     ├─ Tenzing                                                    │
│     └─ Lhakpa                                                     │
│                                                                    │
│  Source: Community oral tradition (v1.0, Jan 2026)               │
│  🔮 Future: PostgreSQL/MongoDB                                     │
└────────────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                        App Layout                                  │
│                   (src/app/layout.tsx)                             │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │  Header Component (Navigation)                               │ │
│  │  • Logo                                                      │ │
│  │  • Links: Home | About Clans | Check Relationship           │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                                                              │ │
│  │                    Page Content                              │ │
│  │                  (Dynamic per route)                         │ │
│  │                                                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │  Footer Component                                            │ │
│  │  • Cultural disclaimer                                       │ │
│  │  • Copyright                                                 │ │
│  └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

## Reusable Components

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Button    │  │    Card     │  │   Header    │  │   Footer    │
│             │  │             │  │             │  │             │
│ Variants:   │  │ Wrapper     │  │ Navigation  │  │ Disclaimer  │
│ • Primary   │  │ for content │  │ with links  │  │ Copyright   │
│ • Secondary │  │             │  │             │  │             │
│ • Success   │  │ Styled with │  │ Sticky top  │  │ Bottom of   │
│ • Danger    │  │ Tailwind    │  │             │  │ all pages   │
│             │  │             │  │             │  │             │
│ Can be link │  │ Shadow &    │  │ Earth tone  │  │ Earth tone  │
│ or button   │  │ rounded     │  │ colors      │  │ colors      │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
```

## Data Flow

```
User Interaction
      │
      ▼
┌─────────────────┐
│  Check Form     │
│  (Client)       │
│                 │
│ 1. Select       │
│    Person A     │
│    clan         │
│                 │
│ 2. Select       │
│    Person B     │
│    clan         │
│                 │
│ 3. Click        │
│    "Check"      │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Redux Action   │
│  setLoading()   │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  API Call       │
│  POST /api/     │
│  check          │
│                 │
│  Body:          │
│  {              │
│   personA: {...}│
│   personB: {...}│
│  }              │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Server Logic   │
│                 │
│  1. Validate    │
│  2. Check rules │
│  3. Return      │
│     result      │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  Redux Action   │
│  setResult()    │
└─────────────────┘
      │
      ▼
┌─────────────────┐
│  UI Update      │
│                 │
│  Display:       │
│  ✅ Allowed     │
│  or             │
│  ❌ Not Allowed │
│                 │
│  + Explanation  │
│  + Disclaimer   │
└─────────────────┘
```

## Business Logic Flow

```
                   ┌──────────────┐
                   │  API Request │
                   │  Received    │
                   └──────┬───────┘
                          │
                          ▼
                   ┌──────────────┐
                   │  Validation  │
                   │  • Required  │
                   │    fields    │
                   │  • Valid IDs │
                   └──────┬───────┘
                          │
                          ▼
           ┌──────────────────────────────┐
           │  Rule 1: Same Major Clan?    │
           │  (personA.major == personB.) │
           └──────┬───────────────────┬───┘
                  │                   │
             YES  │                   │ NO
                  ▼                   │
           ┌──────────────┐           │
           │  ❌ NOT      │           │
           │  ALLOWED     │           │
           │              │           │
           │  Reason:     │           │
           │  Blood       │           │
           │  relatives   │           │
           └──────────────┘           │
                                      │
                                      ▼
                    ┌─────────────────────────────────┐
                    │  Rule 2: Same Sub-Clan?         │
                    │  (personA.sub == personB.sub)   │
                    └──────┬──────────────────────┬───┘
                           │                      │
                      YES  │                      │ NO
                           ▼                      │
                    ┌──────────────┐              │
                    │  ❌ NOT      │              │
                    │  ALLOWED     │              │
                    │              │              │
                    │  Reason:     │              │
                    │  Bone        │              │
                    │  relatives   │              │
                    └──────────────┘              │
                                                  │
                                                  ▼
                                           ┌──────────────┐
                                           │  ✅ ALLOWED  │
                                           │              │
                                           │  Reason:     │
                                           │  Different   │
                                           │  clans       │
                                           └──────────────┘
```

## Technology Stack

```
┌────────────────────────────────────────────────────────────────┐
│                        Frontend                                │
│  • Next.js 15 (App Router)                                    │
│  • React 19                                                   │
│  • TypeScript 5                                               │
│  • Tailwind CSS 3.4                                           │
│  • Redux Toolkit 2.5                                          │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────┐
│                        Backend                                 │
│  • Next.js API Routes                                         │
│  • Server Components                                          │
│  • RESTful API Design                                         │
└────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────┐
│                        Data                                    │
│  • JSON (Current)                                             │
│  • PostgreSQL/MongoDB (Future)                                │
└────────────────────────────────────────────────────────────────┘
```

## File Structure

```
roocheck/
├── src/
│   ├── app/                  # Next.js pages & routes
│   │   ├── api/             # API endpoints
│   │   │   ├── clans/       # GET clans data
│   │   │   └── check/       # POST check relationship
│   │   ├── clans/           # /clans page
│   │   ├── check/           # /check page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── providers.tsx    # Redux provider
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── data/                # Application data
│   │   └── clans.ts         # Sherpa clan data
│   ├── store/               # Redux state management
│   │   ├── store.ts         # Store configuration
│   │   ├── clanSlice.ts     # Clan state slice
│   │   └── hooks.ts         # Typed hooks
│   └── types/               # TypeScript definitions
│       └── clan.ts          # Clan interfaces
├── public/                   # Static assets
├── .vscode/                 # VS Code configuration
│   ├── tasks.json          # Build tasks
│   └── launch.json         # Debug configurations
├── .github/                 # GitHub files
│   └── copilot-instructions.md
├── Configuration files
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── .eslintrc.json
└── Documentation
    ├── README.md
    ├── GETTING_STARTED.md
    ├── PROJECT_SUMMARY.md
    ├── LOGIC_REFERENCE.md
    ├── ARCHITECTURE.md (this file)
    └── WELCOME.txt
```

## Color Palette

```
Earth Tones (Primary)        Sage Tones (Secondary)
──────────────────────       ──────────────────────
earth-50:  #f9f7f4           sage-50:  #f6f7f6
earth-100: #f0ebe3           sage-100: #e3e7e3
earth-200: #e4dac7           sage-200: #c7d1c8
earth-300: #d4c5a6           sage-300: #a3b4a5
earth-400: #c2ab82           sage-400: #7e9481
earth-500: #b39268           sage-500: #627968
earth-600: #a6825d  ★        sage-600: #4d6152  ★
earth-700: #8a6b4e           sage-700: #3f4e43
earth-800: #715844           sage-800: #354138
earth-900: #5c4839           sage-900: #2d362f

★ = Primary brand colors
```

## Future Enhancements Roadmap

```
Phase 1: Core Features ✅ (COMPLETE)
├─ Home page with introduction
├─ Clans information page
├─ Relationship checker
├─ API routes
└─ Redux state management

Phase 2: Data Enhancement (Future)
├─ Database migration (PostgreSQL/MongoDB)
├─ More detailed clan information
├─ Historical context for each clan
└─ Regional variations

Phase 3: User Features (Future)
├─ User authentication
├─ Save check history
├─ Export results as PDF
└─ Family tree visualization

Phase 4: Internationalization (Future)
├─ English (current)
├─ Nepali language
├─ Sherpa language
└─ Dynamic language switching

Phase 5: Administration (Future)
├─ Admin dashboard
├─ Clan data management
├─ User management
└─ Analytics & reporting

Phase 6: Community Features (Future)
├─ User contributions
├─ Elder verification system
├─ Community feedback
└─ Educational resources
```

---

**Note**: This architecture is designed to be culturally sensitive, scalable, 
and maintainable. Always consult with Sherpa elders when making changes to 
clan-related logic or cultural content.
