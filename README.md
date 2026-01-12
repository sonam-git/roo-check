# RooCheck - Sherpa Clan Relationship Checker

A culturally sensitive web application designed for the Sherpa community to check clan relationships for marriage eligibility.

## Purpose

RooCheck helps users determine whether two individuals are considered blood or bone relatives under Sherpa clan rules by comparing their Major Clan (Ru) and Sub-Clan (Shingza). This tool preserves important cultural knowledge that has traditionally been passed down orally through generations.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **API**: RESTful API (Next.js API routes)
- **Data Source**: JSON (scalable to database later)

## Features

### Pages

1. **Home Page (`/`)**: Introduction to RooCheck and explanation of why clan checking is important
2. **Sherpa Clans Info Page (`/clans`)**: Educational content about major clans, sub-clans, and cultural traditions
3. **Clan Relationship Checker (`/check`)**: Interactive form to check if two individuals can marry based on their clans

### Core Logic

The application follows these rules:
- ❌ **Same Major Clan** → Marriage NOT allowed (blood relatives)
- ❌ **Same Sub-Clan** → Marriage NOT allowed (bone relatives)
- ✅ **Different Clans** → Marriage allowed

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
roocheck/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── clans/
│   │   │   │   └── route.ts       # GET endpoint for clan data
│   │   │   └── check/
│   │   │       └── route.ts       # POST endpoint for relationship check
│   │   ├── clans/
│   │   │   └── page.tsx           # Clans info page
│   │   ├── check/
│   │   │   └── page.tsx           # Relationship checker page
│   │   ├── layout.tsx             # Root layout with Header/Footer
│   │   ├── page.tsx               # Home page
│   │   ├── providers.tsx          # Redux Provider wrapper
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Card.tsx               # Reusable card component
│   │   ├── Header.tsx             # Navigation header
│   │   └── Footer.tsx             # Footer with disclaimer
│   ├── data/
│   │   └── clans.ts               # Sherpa clan data (JSON format)
│   ├── store/
│   │   ├── store.ts               # Redux store configuration
│   │   ├── clanSlice.ts           # Redux slice for clan state
│   │   └── hooks.ts               # Typed Redux hooks
│   └── types/
│       └── clan.ts                # TypeScript interfaces
├── public/                        # Static assets
├── .github/
│   └── copilot-instructions.md    # Copilot custom instructions
└── README.md
```

## Cultural Sensitivity

This application was built with deep respect for Sherpa cultural traditions:

- **Respectful Design**: Uses calm earth-tone colors and avoids dating-app aesthetics
- **Educational Content**: Provides context about why clan checking matters
- **Elder Consultation**: Includes disclaimers emphasizing the importance of consulting family elders
- **Oral Tradition**: Acknowledges that clan knowledge varies by region and family

## Future Enhancements

- Multilingual support (English, Nepali, Sherpa language)
- Database backend for scalability
- User authentication and clan verification
- Admin panel for clan data management
- Mobile app version

## Important Disclaimer

This tool follows commonly accepted Sherpa clan rules. However, clan traditions may vary by region and family lineage. **Final confirmation should always involve consultation with family elders** who possess deep knowledge of specific clan history.

### Data Source

The clan data (v1.0, January 2026) is based on community oral tradition and represents commonly accepted Sherpa clan structures:

- **Minyagpa** - One of the oldest clans (Khumbu/Solu): Thaktok, Serwa, Khyungba, Gole, Chuserwa
- **Thimmi** - Upper Solu/Rolwaling: Lama, Chhumbi, Nakchung, Phurtewa
- **Chakpa** - Trade/settlements: Yulba, Khangba, Serthok
- **Pinasa** - Multi-regional: Paldor, Nima, Angba
- **Salaka** - Name-based sub-clans: Dorge, Tenzing, Lhakpa

Note: Alternate spellings exist (e.g., Minyagpa/Minyakpa/Minyag), and regional variations may apply.

## Contributing

This project serves the Sherpa community. If you have suggestions for improving the accuracy of clan information or cultural sensitivity, please reach out respectfully.

## License

Built with respect for Sherpa tradition. © 2026 RooCheck.
