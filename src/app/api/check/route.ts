import { NextRequest, NextResponse } from 'next/server';
import { clanData } from '@/data/clans';
import { ClanCheckRequest, ClanCheckResult } from '@/types/clan';

/**
 * POST /api/check
 * Checks if two people can marry based on their clan relationships
 * 
 * Business Rules:
 * 1. If both share the same Major Clan → Marriage NOT allowed (blood relatives)
 * 2. If both share the same Sub-Clan → Marriage NOT allowed (bone relatives)
 * 3. If Major Clans differ → Marriage allowed
 */
export async function POST(request: NextRequest) {
  try {
    const body: ClanCheckRequest = await request.json();
    
    const { personA, personB } = body;
    
    // Validate input
    if (!personA.majorClanId || !personA.subClanId || 
        !personB.majorClanId || !personB.subClanId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please select both major clan and sub-clan for both individuals',
        },
        { status: 400 }
      );
    }
    
    // Find clan information
    const personAClan = clanData.find(c => c.id === personA.majorClanId);
    const personBClan = clanData.find(c => c.id === personB.majorClanId);
    
    if (!personAClan || !personBClan) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid clan selection',
        },
        { status: 400 }
      );
    }
    
    // Check relationship rules
    const result: ClanCheckResult = checkClanRelationship(
      personA,
      personB,
      personAClan.name,
      personBClan.name
    );
    
    return NextResponse.json({
      success: true,
      data: result,
    });
    
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to check clan relationship',
      },
      { status: 500 }
    );
  }
}

/**
 * Core logic for checking clan relationship
 */
function checkClanRelationship(
  personA: { majorClanId: string; subClanId: string },
  personB: { majorClanId: string; subClanId: string },
  personAClanName: string,
  personBClanName: string
): ClanCheckResult {
  
  // Rule 1: Same Major Clan = NOT allowed (blood relatives)
  if (personA.majorClanId === personB.majorClanId) {
    return {
      allowed: false,
      reason: 'Same Major Clan',
      explanation: `Both individuals belong to the ${personAClanName} clan. According to Sherpa tradition, marriage within the same major clan (Ru) is not permitted as it indicates a blood relationship through shared ancestry.`,
    };
  }
  
  // Rule 2: Same Sub-Clan = NOT allowed (bone relatives)
  if (personA.subClanId === personB.subClanId) {
    return {
      allowed: false,
      reason: 'Same Sub-Clan',
      explanation: `Both individuals belong to the same sub-clan (Shingza). Even though their major clans differ, sharing the same sub-clan indicates a bone relationship, and marriage is not traditionally permitted.`,
    };
  }
  
  // Rule 3: Different clans = Allowed
  return {
    allowed: true,
    reason: 'Different Clans',
    explanation: `Person A belongs to the ${personAClanName} clan and Person B belongs to the ${personBClanName} clan. Since they come from different major clans and different sub-clans, there is no blood or bone relationship, and marriage is traditionally permitted.`,
  };
}
