/**
 * Represents a sub-clan within a major Sherpa clan
 */
export interface SubClan {
  id: string;
  name: string;
  description?: string;
}

/**
 * Represents a major Sherpa clan with its associated sub-clans
 */
export interface MajorClan {
  id: string;
  name: string;
  description?: string;
  subClans: SubClan[];
}

/**
 * Result of checking clan relationship for marriage eligibility
 */
export interface ClanCheckResult {
  allowed: boolean;
  reason: string;
  explanation: string;
}

/**
 * Request payload for checking clan relationship
 */
export interface ClanCheckRequest {
  personA: {
    majorClanId: string;
    subClanId: string;
  };
  personB: {
    majorClanId: string;
    subClanId: string;
  };
}
