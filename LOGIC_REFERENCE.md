# Clan Relationship Logic Reference

## Business Rules

The RooCheck application implements the following rules for determining marriage eligibility based on Sherpa clan traditions:

### Rule 1: Same Major Clan (Ru)
**Condition**: Both individuals belong to the same major clan  
**Result**: ❌ Marriage NOT Allowed  
**Reason**: Blood relatives (shared ancestral lineage)

```typescript
if (personA.majorClanId === personB.majorClanId) {
  return {
    allowed: false,
    reason: 'Same Major Clan'
  };
}
```

### Rule 2: Same Sub-Clan (Shingza)
**Condition**: Both individuals belong to the same sub-clan  
**Result**: ❌ Marriage NOT Allowed  
**Reason**: Bone relatives (shared extended family)

```typescript
if (personA.subClanId === personB.subClanId) {
  return {
    allowed: false,
    reason: 'Same Sub-Clan'
  };
}
```

### Rule 3: Different Clans
**Condition**: Different major clans AND different sub-clans  
**Result**: ✅ Marriage Allowed  
**Reason**: No blood or bone relationship

```typescript
// If neither Rule 1 nor Rule 2 applies
return {
  allowed: true,
  reason: 'Different Clans'
};
```

## Implementation

The core logic is implemented in:
- **API Route**: `src/app/api/check/route.ts`
- **Function**: `checkClanRelationship()`

## Example Scenarios

### Scenario 1: Same Major Clan
- Person A: Thimmi (Shingza 1)
- Person B: Thimmi (Shingza 2)
- **Result**: ❌ Not Allowed - Same major clan (Thimmi)

### Scenario 2: Same Sub-Clan
- Person A: Thimmi (Shingza 1)
- Person B: Serwa (Shingza 1)
- **Result**: ❌ Not Allowed - Same sub-clan (Shingza 1)

### Scenario 3: Different Clans
- Person A: Thimmi (Shingza 1)
- Person B: Serwa (Shingza 2)
- **Result**: ✅ Allowed - Different clans and sub-clans

## Data Structure

### Major Clan (MajorClan)
```typescript
{
  id: string;           // e.g., 'thimmi'
  name: string;         // e.g., 'Thimmi'
  description?: string;
  subClans: SubClan[];
}
```

### Sub-Clan (SubClan)
```typescript
{
  id: string;    // e.g., 'thimmi-1'
  name: string;  // e.g., 'Thimmi Shingza 1'
  description?: string;
}
```

### Check Result (ClanCheckResult)
```typescript
{
  allowed: boolean;     // true or false
  reason: string;       // Brief reason
  explanation: string;  // Detailed explanation
}
```

## API Endpoints

### GET /api/clans
Returns all available clans and sub-clans

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "thimmi",
      "name": "Thimmi",
      "subClans": [
        { "id": "thimmi-1", "name": "Thimmi Shingza 1" },
        { "id": "thimmi-2", "name": "Thimmi Shingza 2" }
      ]
    }
  ]
}
```

### POST /api/check
Checks if marriage is allowed between two individuals

**Request:**
```json
{
  "personA": {
    "majorClanId": "thimmi",
    "subClanId": "thimmi-1"
  },
  "personB": {
    "majorClanId": "serwa",
    "subClanId": "serwa-2"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "allowed": true,
    "reason": "Different Clans",
    "explanation": "Person A belongs to the Thimmi clan and Person B belongs to the Serwa clan. Since they come from different major clans and different sub-clans, there is no blood or bone relationship, and marriage is traditionally permitted."
  }
}
```

## Testing the Logic

You can test all three scenarios:

1. **Test Same Major Clan**: Select same clan for both persons (e.g., both Thimmi)
2. **Test Same Sub-Clan**: Select different clans but same sub-clan number
3. **Test Different Clans**: Select different clans and sub-clans

## Adding New Clans

To add new clans, edit `src/data/clans.ts`:

```typescript
{
  id: 'newclan',
  name: 'New Clan Name',
  description: 'Description of the clan',
  subClans: [
    { id: 'newclan-1', name: 'New Clan Shingza 1' },
    { id: 'newclan-2', name: 'New Clan Shingza 2' },
    // Add more sub-clans as needed
  ]
}
```

## Important Notes

1. **Cultural Sensitivity**: This logic reflects traditional Sherpa marriage rules
2. **Elder Consultation**: Always emphasize that final decisions should involve family elders
3. **Regional Variations**: Clan rules may vary by region - this implements commonly accepted rules
4. **Validation**: Always validate that both major clan and sub-clan are selected before checking

## Future Enhancements

Potential improvements to the logic:

1. **Exception Handling**: Add support for special cases or exceptions known to elders
2. **Historical Records**: Track historical marriage patterns for validation
3. **Regional Rules**: Support for region-specific variations in clan rules
4. **Confidence Scoring**: Provide confidence levels based on data completeness
