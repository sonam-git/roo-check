<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# RooCheck - Copilot Instructions

## Project Context

This is **RooCheck**, a culturally sensitive web application for the Sherpa community to check clan relationships for marriage eligibility. The project uses Next.js 15 with App Router, TypeScript, Tailwind CSS, and Redux Toolkit.

## Cultural Sensitivity Guidelines

When making changes or suggestions:

1. **Maintain Respectful Tone**: All UI text and code comments should be respectful of Sherpa cultural traditions
2. **Avoid Dating App Aesthetics**: Keep the design calm, professional, and culturally appropriate
3. **Preserve Educational Content**: The app serves an educational purpose about clan relationships
4. **Emphasize Elder Consultation**: Always maintain disclaimers about consulting family elders

## Code Style Preferences

- Use **TypeScript** with strong typing
- Follow **Next.js App Router** conventions
- Use **Tailwind CSS** utility classes for styling
- Implement **Redux Toolkit** for state management
- Write clear comments explaining cultural logic and business rules

## Key Business Rules

The clan relationship checking logic follows these rules:
1. Same Major Clan (Ru) → Marriage NOT allowed (blood relatives)
2. Same Sub-Clan (Shingza) → Marriage NOT allowed (bone relatives)  
3. Different clans → Marriage allowed

## Color Palette

Use earth-tone and sage colors defined in `tailwind.config.ts`:
- Earth tones: `earth-{50-900}` for primary UI elements
- Sage tones: `sage-{50-900}` for secondary elements

## Component Patterns

- Keep components reusable and well-typed
- Use client components (`'use client'`) only when needed for interactivity
- Server components by default for better performance

## Future Scalability

Keep in mind these future enhancements when coding:
- Multilingual support (English, Nepali, Sherpa)
- Database backend integration (currently uses JSON)
- Additional clan data as needed

## Testing and Validation

When modifying clan relationship logic:
- Test all three relationship scenarios
- Ensure error handling for invalid inputs
- Maintain clear, user-friendly error messages
