import { MajorClan } from '@/types/clan';

/**
 * Sherpa Clan Data (Ru and Shingza)
 * 
 * Version: 2.0
 * Last Updated: January 11, 2026
 * Source: Community oral tradition (non-authoritative)
 * 
 * SIX MAJOR CLANS (RU):
 * 1. Thimmi (ཐིམ་མི་)
 * 2. Lama (བླ་མ་)
 * 3. Chawa (རྒྱ་བ་)
 * 4. Ngompa (དངོས་པ་)
 * 5. Parwi-Tso / Ronggi-Sharwa (པར་བི་མཚོ་ / རོང་གི་ཤར་བ་)
 * 6. Minyakpa (མི་ཉག་པ་)
 * 
 * This data represents the major clans (Ru) and sub-clans (Shingza) of the Sherpa community.
 * Clan knowledge has traditionally been passed down orally through generations and may vary
 * by region and family lineage.
 * 
 * IMPORTANT DISCLAIMER:
 * This data represents commonly accepted Sherpa clan structures but may not be exhaustive
 * or authoritative. Regional variations exist, and some families may have different
 * understandings of their clan relationships. Always consult with family elders and
 * community leaders for final confirmation before making important decisions.
 */

export const clanData: MajorClan[] = [
  {
    id: 'thimmi',
    name: 'Thimmi',
    description: 'One of the six major Sherpa clans, common in upper Solu and Rolwaling regions',
    subClans: [
      { id: 'thimmi-paldorje', name: 'Paldorje', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-salaka', name: 'Salaka', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-khampa-che', name: 'Khampa-Che', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-gobarma', name: 'Gobarma', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-chusharwa', name: 'Chusharwa', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-pya-phullo', name: 'Pya-Phullo', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-murmin', name: 'Murmin', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-nawa', name: 'Nawa', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-dhompa', name: 'Dhompa', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-lhungbuwa', name: 'Lhungbuwa', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-shire', name: 'Shire', description: 'Sub-clan of Thimmi' },
      { id: 'thimmi-dotup', name: 'Dotup', description: 'Sub-clan of Thimmi' },
    ]
  },
  {
    id: 'lama',
    name: 'Lama',
    description: 'One of the six major Sherpa clans',
    subClans: [
      { id: 'lama-gonpa', name: 'Lama Gonpa', description: 'Sub-clan of Lama' },
      { id: 'lama-sharwa', name: 'Lama Sharwa', description: 'Sub-clan of Lama' },
    ]
  },
  {
    id: 'chawa',
    name: 'Chawa',
    description: 'One of the six major Sherpa clans',
    subClans: [
      { id: 'chawa-nawa', name: 'Nawa', description: 'Sub-clan of Chawa' },
      { id: 'chawa-lhukpa', name: 'Lhukpa', description: 'Sub-clan of Chawa' },
    ]
  },
  {
    id: 'ngompa',
    name: 'Ngompa',
    description: 'One of the six major Sherpa clans',
    subClans: [
      { id: 'ngompa-chakpa', name: 'Chakpa', description: 'Sub-clan of Ngompa' },
      { id: 'ngompa-tompa', name: 'Tompa', description: 'Sub-clan of Ngompa' },
      { id: 'ngompa-dhakpo', name: 'Dhakpo', description: 'Sub-clan of Ngompa' },
      { id: 'ngompa-zhuwa', name: 'Zhuwa', description: 'Sub-clan of Ngompa' },
      { id: 'ngompa-dhawa', name: 'Dhawa', description: 'Sub-clan of Ngompa' },
    ]
  },
  {
    id: 'parwi-tso',
    name: 'Parwi-Tso',
    description: 'One of the six major Sherpa clans, also known as Ronggi-Sharwa',
    subClans: [
      { id: 'parwi-tso-ronggi', name: 'Ronggi-Sharwa', description: 'Sub-clan of Parwi-Tso' }
    ]
  },
  {
    id: 'minyakpa',
    name: 'Minyakpa',
    description: 'One of the six major Sherpa clans, widely found in Khumbu and Solu regions',
    subClans: [
      { id: 'minyakpa-shire', name: 'Shire', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-taktok', name: 'Taktok', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-pinasa', name: 'Pinasa', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-ngemaray', name: 'Ngemaray', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-pangkarma', name: 'Pangkarma', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-sharwa', name: 'Sharwa', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-dhongpa', name: 'Dhongpa', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-garza', name: 'Garza', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-nyendawa', name: 'Nyendawa', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-sharitokpa', name: 'Sharitokpa', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-gole', name: 'Gole', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-khapa', name: 'Khapa', description: 'Sub-clan of Minyakpa' },
      { id: 'minyakpa-shaore', name: 'Shaore', description: 'Sub-clan of Minyakpa' },
    ]
  },
];

/**
 * Data Source Information
 * 
 * This clan data is based on community oral traditions and represents commonly
 * accepted structures. However, please note:
 * 
 * - Alternate spellings exist for many clan names (e.g., Minyagpa/Minyakpa/Minyag)
 * - Regional variations may exist in clan recognition and relationships
 * - Some sub-clans may have historical connections to other clans
 * - This list may not be exhaustive of all Sherpa clans
 * 
 * Always consult with family elders who possess deep knowledge of your specific
 * clan history and regional traditions.
 */
