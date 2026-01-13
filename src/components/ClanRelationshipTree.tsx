'use client';

import React from 'react';

interface ClanRelationshipTreeProps {
  personAMajorClan: string;
  personASubClan: string;
  personBMajorClan: string;
  personBSubClan: string;
  allowed: boolean;
}

/**
 * Visual tree component showing how two individuals are connected through their clans
 * Uses a hierarchical tree structure with Tibetan/Buddhist design elements
 */
export default function ClanRelationshipTree({
  personAMajorClan,
  personASubClan,
  personBMajorClan,
  personBSubClan,
  allowed,
}: ClanRelationshipTreeProps) {
  // Determine relationship type for visual styling
  const sameMajorClan = personAMajorClan === personBMajorClan;
  const sameSubClan = personASubClan === personBSubClan;

  return (
    <div className="mt-8 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white/90 to-sage-50/80 rounded-2xl shadow-lg border-2 border-sage-300">
      {/* Tree Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          <span className="text-xl sm:text-2xl text-amber-600" style={{ fontFamily: 'serif' }}>☸</span>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-amber-500 to-transparent"></div>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-earth-800 mb-2" style={{ fontFamily: '"Noto Serif", serif' }}>
          Clan Relationship Tree
        </h3>
        <p className="text-xs sm:text-sm text-sage-600 font-medium px-2">རུ་དང་ཤིང་ཟ་འབྲེལ་བ། • Visual Connection Map</p>
      </div>

      {/* Tree Structure */}
      <div className="relative">
        {/* Root Level - Clan Origins */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-br from-amber-100 to-orange-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md border-2 border-amber-400">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Sherpa Ancestry</p>
            <p className="text-xs sm:text-sm text-amber-900">ཤེར་པ་ • མ་རྒྱུད།</p>
          </div>
        </div>

        {/* Connection Line from Root */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-amber-400 via-sage-400 to-transparent"></div>
        </div>

        {/* Major Clans Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Person A Major Clan */}
          <div className="relative">
            <div className="text-center mb-4">
              {/* Connecting line from center - hidden on mobile, shown on md+ */}
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-sage-400"></div>
              
              <div className={`inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border-2 mt-0 md:mt-4 ${
                sameMajorClan 
                  ? 'bg-gradient-to-br from-red-100 to-orange-100 border-red-400' 
                  : 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400'
              }`}>
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <span className="text-xl sm:text-2xl">🏔️</span>
                  <p className="text-xs font-bold text-earth-600 uppercase tracking-wide">Major Clan (Ru)</p>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-earth-800">{personAMajorClan}</p>
                <p className="text-xs text-earth-600 mt-1">རུ། • Blood Lineage</p>
              </div>

              {/* Label */}
              <div className="mt-2 sm:mt-3 inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                Person A
              </div>
            </div>

            {/* Connection to Sub-Clan */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-px h-6 sm:h-8 bg-blue-400"></div>
            </div>

            {/* Person A Sub-Clan */}
            <div className="text-center">
              <div className={`inline-block px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-md border-2 ${
                sameSubClan && sameMajorClan
                  ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-300'
                  : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300'
              }`}>
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <span className="text-base sm:text-lg">🌳</span>
                  <p className="text-xs font-bold text-sage-600 uppercase tracking-wide">Sub-Clan</p>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-earth-800">{personASubClan}</p>
                <p className="text-xs text-sage-600 mt-1">ཤིང་ཟ། • Bone Branch</p>
              </div>
            </div>
          </div>

          {/* Person B Major Clan */}
          <div className="relative">
            <div className="text-center mb-4">
              {/* Connecting line from center - hidden on mobile, shown on md+ */}
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-sage-400"></div>
              
              <div className={`inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border-2 mt-0 md:mt-4 ${
                sameMajorClan 
                  ? 'bg-gradient-to-br from-red-100 to-orange-100 border-red-400' 
                  : 'bg-gradient-to-br from-pink-100 to-pink-200 border-pink-400'
              }`}>
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <span className="text-xl sm:text-2xl">🏔️</span>
                  <p className="text-xs font-bold text-earth-600 uppercase tracking-wide">Major Clan (Ru)</p>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-earth-800">{personBMajorClan}</p>
                <p className="text-xs text-earth-600 mt-1">རུ། • Blood Lineage</p>
              </div>

              {/* Label */}
              <div className="mt-2 sm:mt-3 inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                Person B
              </div>
            </div>

            {/* Connection to Sub-Clan */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-px h-6 sm:h-8 bg-pink-400"></div>
            </div>

            {/* Person B Sub-Clan */}
            <div className="text-center">
              <div className={`inline-block px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-md border-2 ${
                sameSubClan && sameMajorClan
                  ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-300'
                  : 'bg-gradient-to-br from-pink-50 to-rose-50 border-pink-300'
              }`}>
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <span className="text-base sm:text-lg">🌳</span>
                  <p className="text-xs font-bold text-sage-600 uppercase tracking-wide">Sub-Clan</p>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-earth-800">{personBSubClan}</p>
                <p className="text-xs text-sage-600 mt-1">ཤིང་ཟ། • Bone Branch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Relationship Indicator */}
        <div className="relative mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-dashed border-sage-300">
          <div className="text-center">
            <div className={`inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl border-3 ${
              allowed 
                ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-500' 
                : 'bg-gradient-to-br from-red-100 to-orange-100 border-red-500'
            }`}>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <div className={`h-px w-6 sm:w-8 bg-gradient-to-r from-transparent ${allowed ? 'via-green-500' : 'via-red-500'} to-transparent`}></div>
                <span className={`text-3xl sm:text-4xl ${allowed ? 'text-green-600' : 'text-red-600'}`} style={{ fontFamily: 'serif' }}>༄༅།།</span>
                <div className={`h-px w-6 sm:w-8 bg-gradient-to-l from-transparent ${allowed ? 'via-green-500' : 'via-red-500'} to-transparent`}></div>
              </div>
              
              <p className="text-xs font-bold text-earth-600 uppercase tracking-wide mb-2">Relationship</p>
              
              {sameMajorClan && sameSubClan ? (
                <>
                  <p className="text-xl sm:text-2xl font-bold text-red-700 mb-2">Same Ru & Shingza</p>
                  <p className="text-xs sm:text-sm text-red-800">རུ་དང་ཤིང་ཟ་གཅིག • Blood & Bone Relatives</p>
                  <div className="mt-3 flex items-center justify-center space-x-2 text-red-700">
                    <span className="text-2xl sm:text-3xl">🚫</span>
                    <span className="text-sm sm:text-base font-bold">Marriage Not Allowed</span>
                  </div>
                </>
              ) : sameMajorClan ? (
                <>
                  <p className="text-xl sm:text-2xl font-bold text-red-700 mb-2">Same Major Clan (Ru)</p>
                  <p className="text-xs sm:text-sm text-red-800">རུ་གཅིག • Blood Relatives</p>
                  <div className="mt-3 flex items-center justify-center space-x-2 text-red-700">
                    <span className="text-2xl sm:text-3xl">🚫</span>
                    <span className="text-sm sm:text-base font-bold">Marriage Not Allowed</span>
                  </div>
                </>
              ) : sameSubClan ? (
                <>
                  <p className="text-xl sm:text-2xl font-bold text-red-700 mb-2">Same Sub-Clan (Shingza)</p>
                  <p className="text-xs sm:text-sm text-red-800">ཤིང་ཟ་གཅིག • Bone Relatives</p>
                  <div className="mt-3 flex items-center justify-center space-x-2 text-red-700">
                    <span className="text-2xl sm:text-3xl">🚫</span>
                    <span className="text-sm sm:text-base font-bold">Marriage Not Allowed</span>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xl sm:text-2xl font-bold text-green-700 mb-2">Different Clans</p>
                  <p className="text-xs sm:text-sm text-green-800">རུ་དང་ཤིང་ཟ་ཐ་དད། • No Direct Relation</p>
                  <div className="mt-3 flex items-center justify-center space-x-2 text-green-700">
                    <span className="text-2xl sm:text-3xl">✅</span>
                    <span className="text-sm sm:text-base font-bold">Marriage Allowed</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
