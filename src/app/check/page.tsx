'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ClanRelationshipTree from '@/components/ClanRelationshipTree';
import { MajorClan, SubClan, ClanCheckResult } from '@/types/clan';

export default function CheckPage() {
  const [clans, setClans] = useState<MajorClan[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Person A selections
  const [personAMajorClan, setPersonAMajorClan] = useState('');
  const [personASubClan, setPersonASubClan] = useState('');
  
  // Person B selections
  const [personBMajorClan, setPersonBMajorClan] = useState('');
  const [personBSubClan, setPersonBSubClan] = useState('');
  
  // Result
  const [result, setResult] = useState<ClanCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Tree view state
  const [showTree, setShowTree] = useState(false);

  // Fetch clans on mount
  useEffect(() => {
    fetchClans();
  }, []);

  const fetchClans = async () => {
    try {
      const response = await fetch('/api/clans');
      const data = await response.json();
      if (data.success) {
        setClans(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch clans:', err);
    }
  };

  // Get sub-clans for Person A
  const personASubClans: SubClan[] = 
    clans.find(c => c.id === personAMajorClan)?.subClans || [];

  // Get sub-clans for Person B
  const personBSubClans: SubClan[] = 
    clans.find(c => c.id === personBMajorClan)?.subClans || [];

  const handleCheck = async () => {
    setError(null);
    setShowTree(false); // Hide tree when performing new check
    
    if (!personAMajorClan || !personASubClan || !personBMajorClan || !personBSubClan) {
      setError('Please select both major clan and sub-clan for both individuals');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personA: {
            majorClanId: personAMajorClan,
            subClanId: personASubClan,
          },
          personB: {
            majorClanId: personBMajorClan,
            subClanId: personBSubClan,
          },
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.error || 'Failed to check relationship');
      }
    } catch (err) {
      setError('An error occurred while checking the relationship');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPersonAMajorClan('');
    setPersonASubClan('');
    setPersonBMajorClan('');
    setPersonBSubClan('');
    setResult(null);
    setError(null);
    setShowTree(false); // Hide tree when resetting
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Heading with Enhanced Mountain Theme */}
      <div className="text-center mb-10 relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full max-w-md h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent rounded-full blur-sm"></div>
        
        <div className="inline-block relative">
          {/* Glowing background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/20 via-orange-400/30 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative bg-white/95 backdrop-blur-md px-10 py-8 rounded-3xl shadow-2xl border-2 border-amber-400/40">
            {/* Prayer Wheel Icon */}
            <div className="flex justify-center mb-4">
              <span className="text-5xl text-amber-600" style={{ fontFamily: 'serif' }}>☸</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent mb-4" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em' }}>
              Clan Relationship Checker
            </h1>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <span className="text-amber-600 text-2xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent"></div>
            </div>
            
            <p className="text-earth-700 mt-4 font-medium">
              རུ་དང་ཤིང་ཟ་ཞིབ་བཤེར། • Ru & Shingza Check
            </p>
          </div>
        </div>
      </div>

      <Card className="mb-8 shadow-2xl border-2 border-amber-200/50 bg-white/95 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Person A */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-blue-100">
              {/* Man Icon with Enhanced Design */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg"></div>
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-earth-800">Person A</h3>
                <p className="text-sm text-sage-600">First Individual</p>
              </div>
            </div>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="personA-major" className="flex items-center text-sm font-bold text-earth-700 mb-2">
                  <span className="text-amber-600 mr-2">🏔️</span>
                  Major Clan (Ru)
                </label>
                <select
                  id="personA-major"
                  value={personAMajorClan}
                  onChange={(e) => {
                    setPersonAMajorClan(e.target.value);
                    setPersonASubClan('');
                    setResult(null);
                    setShowTree(false);
                  }}
                  className="w-full px-4 py-3 border-2 border-sage-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white hover:border-sage-400 text-earth-800 font-medium shadow-sm"
                >
                  <option value="">Select Major Clan</option>
                  {clans.map((clan) => (
                    <option key={clan.id} value={clan.id}>
                      {clan.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="personA-sub" className="flex items-center text-sm font-bold text-earth-700 mb-2">
                  <span className="text-sage-600 mr-2">🌳</span>
                  Sub-Clan (Shingza)
                </label>
                <select
                  id="personA-sub"
                  value={personASubClan}
                  onChange={(e) => {
                    setPersonASubClan(e.target.value);
                    setResult(null);
                    setShowTree(false);
                  }}
                  disabled={!personAMajorClan}
                  className="w-full px-4 py-3 border-2 border-sage-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-200 bg-white hover:border-sage-400 text-earth-800 font-medium shadow-sm"
                >
                  <option value="">Select Sub-Clan</option>
                  {personASubClans.map((subClan) => (
                    <option key={subClan.id} value={subClan.id}>
                      {subClan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Person B */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-pink-100">
              {/* Woman Icon with Enhanced Design */}
              <div className="relative">
                <div className="absolute inset-0 bg-pink-400/30 rounded-full blur-lg"></div>
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    <circle cx="12" cy="8" r="3"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-earth-800">Person B</h3>
                <p className="text-sm text-sage-600">Second Individual</p>
              </div>
            </div>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="personB-major" className="flex items-center text-sm font-bold text-earth-700 mb-2">
                  <span className="text-amber-600 mr-2">🏔️</span>
                  Major Clan (Ru)
                </label>
                <select
                  id="personB-major"
                  value={personBMajorClan}
                  onChange={(e) => {
                    setPersonBMajorClan(e.target.value);
                    setPersonBSubClan('');
                    setResult(null);
                    setShowTree(false);
                  }}
                  className="w-full px-4 py-3 border-2 border-sage-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white hover:border-sage-400 text-earth-800 font-medium shadow-sm"
                >
                  <option value="">Select Major Clan</option>
                  {clans.map((clan) => (
                    <option key={clan.id} value={clan.id}>
                      {clan.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="personB-sub" className="flex items-center text-sm font-bold text-earth-700 mb-2">
                  <span className="text-sage-600 mr-2">🌳</span>
                  Sub-Clan (Shingza)
                </label>
                <select
                  id="personB-sub"
                  value={personBSubClan}
                  onChange={(e) => {
                    setPersonBSubClan(e.target.value);
                    setResult(null);
                    setShowTree(false);
                  }}
                  disabled={!personBMajorClan}
                  className="w-full px-4 py-3 border-2 border-sage-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-200 bg-white hover:border-sage-400 text-earth-800 font-medium shadow-sm"
                >
                  <option value="">Select Sub-Clan</option>
                  {personBSubClans.map((subClan) => (
                    <option key={subClan.id} value={subClan.id}>
                      {subClan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons with Enhanced Design */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t-2 border-amber-200/50">
          <Button onClick={handleCheck} variant="primary" fullWidth disabled={loading}>
            <span className="flex items-center justify-center">
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Checking...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Check Relationship
                </>
              )}
            </span>
          </Button>
          <Button onClick={handleReset} variant="secondary" fullWidth>
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset
            </span>
          </Button>
        </div>
      </Card>

      {/* Error Message with Enhanced Design */}
      {error && (
        <div className="mt-6 p-5 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl shadow-lg">
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Result Display with Enhanced Tibetan/Buddhist Theme */}
      {result && (
        <Card className={`border-4 shadow-2xl ${result.allowed ? 'border-green-500 bg-gradient-to-br from-green-50/90 to-emerald-50/90' : 'border-red-500 bg-gradient-to-br from-red-50/90 to-orange-50/90'} backdrop-blur-sm`}>
          <div className="text-center mb-8">
            {/* Large Icon with Glow Effect */}
            <div className="relative inline-block mb-6">
              <div className={`absolute inset-0 ${result.allowed ? 'bg-green-400/40' : 'bg-red-400/40'} rounded-full blur-2xl animate-pulse`}></div>
              <div className="relative text-8xl transform hover:scale-110 transition-transform duration-300">
                {result.allowed ? '✅' : '❌'}
              </div>
            </div>
            
            {/* Tibetan Ornament */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className={`h-px w-16 bg-gradient-to-r from-transparent ${result.allowed ? 'via-green-500' : 'via-red-500'} to-transparent`}></div>
              <span className={`text-3xl ${result.allowed ? 'text-green-600' : 'text-red-600'}`} style={{ fontFamily: 'serif' }}>༄༅།།</span>
              <div className={`h-px w-16 bg-gradient-to-l from-transparent ${result.allowed ? 'via-green-500' : 'via-red-500'} to-transparent`}></div>
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${result.allowed ? 'text-green-700' : 'text-red-700'}`} style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif' }}>
              Marriage {result.allowed ? 'Allowed' : 'Not Allowed'}
            </h2>
            <p className="text-xl md:text-2xl text-earth-800 font-semibold bg-white/60 px-6 py-3 rounded-xl inline-block shadow-md">
              {result.reason}
            </p>

            {/* View Tree Button */}
            <div className="mt-6">
              <button
                onClick={() => setShowTree(!showTree)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  {showTree ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  )}
                </svg>
                <span>{showTree ? 'Hide Tree' : 'View Tree'}</span>
                <span className="text-lg" style={{ fontFamily: 'serif' }}>🌲</span>
              </button>
            </div>
          </div>

          {/* Relationship Tree Display */}
          {showTree && (
            <ClanRelationshipTree
              personAMajorClan={clans.find(c => c.id === personAMajorClan)?.name || personAMajorClan}
              personASubClan={clans.find(c => c.id === personAMajorClan)?.subClans.find(s => s.id === personASubClan)?.name || personASubClan}
              personBMajorClan={clans.find(c => c.id === personBMajorClan)?.name || personBMajorClan}
              personBSubClan={clans.find(c => c.id === personBMajorClan)?.subClans.find(s => s.id === personBSubClan)?.name || personBSubClan}
              allowed={result.allowed}
            />
          )}

          {/* Explanation Box */}
          <div className={`p-6 md:p-8 rounded-2xl shadow-lg border-2 ${showTree ? 'mt-8' : ''} ${result.allowed ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300' : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-300'}`}>
            <div className="flex items-start space-x-3 mb-4">
              <svg className={`w-7 h-7 flex-shrink-0 mt-1 ${result.allowed ? 'text-green-600' : 'text-red-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base md:text-lg text-earth-800 leading-relaxed font-medium">
                {result.explanation}
              </p>
            </div>
          </div>

          {/* Important Disclaimer with Mountain Theme */}
          <div className="mt-8 p-6 md:p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-2xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-amber-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2" style={{ fontFamily: 'serif' }}>༄</span>
                  Important Disclaimer
                </p>
                <p className="text-sm md:text-base text-earth-800 leading-relaxed">
                  This tool follows commonly accepted Sherpa clan rules. However, clan traditions may vary by region and family lineage. 
                  <strong className="text-amber-800"> Final confirmation should always involve consultation with family elders</strong> who 
                  possess deep knowledge of your specific clan history and family connections.
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
