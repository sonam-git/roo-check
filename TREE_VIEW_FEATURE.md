# Visual Tree Feature Documentation

## Overview
Added a "View Tree" button to the relationship checker result that displays a visual hierarchical tree showing how two individuals are connected through their clan relationships.

## Implementation Date
January 2026

## Components Added

### ClanRelationshipTree Component
**Location:** `/src/components/ClanRelationshipTree.tsx`

A visual tree component that displays:
- The ancestral root (Sherpa Ancestry)
- Both individuals' Major Clans (Ru) and Sub-Clans (Shingza)
- Color-coded indicators showing the type of relationship
- A relationship indicator at the bottom explaining the connection
- A legend explaining the symbols used

**Props:**
- `personAMajorClan` (string): Name of Person A's major clan
- `personASubClan` (string): Name of Person A's sub-clan
- `personBMajorClan` (string): Name of Person B's major clan
- `personBSubClan` (string): Name of Person B's sub-clan
- `allowed` (boolean): Whether marriage is allowed between them

## UI/UX Features

### View Tree Button
- Located directly below the marriage result heading
- Features a tree emoji (🌲) and collapsible chevron icon
- Smooth hover effects with gradient background (amber to orange)
- Toggle functionality to show/hide the tree
- Automatically resets when:
  - A new check is performed
  - Any clan selection is changed
  - The form is reset

### Tree Design Elements

#### Color Coding
- **Same Major Clan (Not Allowed)**: Red/orange gradient backgrounds
- **Same Sub-Clan (Not Allowed)**: Red/orange gradient backgrounds
- **Different Clans (Allowed)**: Blue/pink for persons, green for allowed relationship
- **Ancestral Root**: Amber/orange to represent cultural heritage

#### Visual Structure
1. **Root Level**: Sherpa Ancestry header with Tibetan script
2. **Major Clan Level**: Two cards side-by-side showing each person's Ru (རུ།)
   - Person A: Blue theme
   - Person B: Pink theme
3. **Sub-Clan Level**: Smaller cards below each major clan showing Shingza (ཤིང་ཟ།)
4. **Relationship Indicator**: Large card at bottom explaining the connection
5. **Spacing**: Proper gap between tree and explanation section when displayed

#### Cultural Elements
- Tibetan script (རུ།, ཤིང་ཟ།) for major and sub-clan labels
- Dharma Wheel (☸) symbol in header
- Tibetan ornamental dividers (༄༅།།)
- Mountain (🏔️) and Tree (🌳) emoji icons
- Traditional Sherpa/Buddhist design aesthetics

### Responsive Design
- Mobile-first approach with optimized spacing and sizing
- Grid layout: 1 column on mobile, 2 columns on medium+ screens
- Text sizes scale appropriately: `text-sm sm:text-base md:text-lg` pattern
- Padding adapts: smaller on mobile (`p-4`), larger on desktop (`md:p-8`)
- Connecting lines hidden on mobile, visible on desktop for cleaner appearance
- Border radius reduces on mobile for better space utilization
- Icon sizes scale down on small screens
- Touch-friendly button and card sizes on all devices
- Proper spacing between tree and result sections

## Technical Implementation

### State Management
- Added `showTree` boolean state in `/src/app/check/page.tsx`
- Tree visibility toggles when button is clicked
- Automatically hides when user changes selections or resets

### Data Flow
1. User performs clan relationship check
2. Result is displayed with "View Tree" button
3. When clicked, component receives:
   - Clan IDs from form selections
   - Resolves IDs to human-readable names using clan data
   - Passes to ClanRelationshipTree component
4. Tree renders with appropriate styling based on relationship type

### Relationship Logic Display
The tree visually represents three relationship scenarios:

1. **Same Ru & Shingza**: Both major and sub-clans match
   - Visual: Red/orange throughout
   - Text: "Blood & Bone Relatives"
   - Icon: 🚫

2. **Same Ru (Different Shingza)**: Major clan matches
   - Visual: Red/orange for major clans
   - Text: "Blood Relatives"
   - Icon: 🚫

3. **Different Clans**: No matching clans
   - Visual: Blue/pink for persons, green for relationship
   - Text: "No Direct Relation"
   - Icon: ✅

## Accessibility Features
- Semantic HTML structure
- Clear visual hierarchy with proper heading levels
- Color is not the only indicator (icons and text also used)
- Screen-reader friendly labels and ARIA semantics
- Keyboard accessible toggle button
- Proper contrast ratios for text readability
- Responsive text sizing for different screen sizes
- Touch targets meet minimum size requirements (44x44px)

## Cultural Sensitivity
- Maintains educational and respectful tone
- Uses traditional Sherpa/Tibetan terminology
- Includes both English and Tibetan script
- Employs culturally appropriate symbols and colors
- Avoids dating app aesthetics

## Future Enhancements
Potential improvements for future versions:
- Animated transitions when tree appears/disappears
- Downloadable/printable tree view
- More detailed genealogical information
- Extended family tree visualization
- Multi-generational ancestry display

## Files Modified
1. `/src/app/check/page.tsx`
   - Added import for ClanRelationshipTree component
   - Added showTree state
   - Added View Tree button
   - Added conditional rendering of tree component
   - Updated all onChange handlers to reset showTree
   - Added conditional spacing (mt-8) to explanation box when tree is visible

2. `/src/components/ClanRelationshipTree.tsx`
   - New component file created
   - Implements visual tree structure
   - Responsive design with Tailwind CSS
   - Cultural design elements integrated
   - Legend section removed for cleaner design

## Testing Checklist
- [x] Tree displays correctly for "Marriage Allowed" scenarios
- [x] Tree displays correctly for "Marriage Not Allowed" (same Ru)
- [x] Tree displays correctly for "Marriage Not Allowed" (same Shingza)
- [x] Button toggles tree visibility correctly
- [x] Tree hides when new check is performed
- [x] Tree hides when selections are changed
- [x] Tree hides when form is reset
- [x] Responsive design works on mobile
- [x] All text is readable and properly formatted
- [x] Cultural elements display correctly
- [x] No console errors or warnings
- [x] Proper TypeScript typing throughout

## Notes
- Component is client-side only ('use client' directive)
- Uses existing clan data structure from `/src/data/clans.ts`
- Integrates seamlessly with existing design system
- Maintains consistency with other page elements
- All Tailwind classes follow project conventions
