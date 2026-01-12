'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
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
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Heading with Background */}
      <div className="text-center mb-10">
        <div className="inline-block bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border-2 border-amber-400/30">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em' }}>
            Clan Relationship Checker
          </h1>
          <div className="flex items-center justify-center space-x-3 mt-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <span className="text-amber-600 text-lg" style={{ fontFamily: 'serif' }}>༄༅།།</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Person A */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Man Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-earth-700">Person A</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="personA-major" className="block text-sm font-medium text-sage-700 mb-2">
                  Major Clan (Ru)
                </label>
                <select
                  id="personA-major"
                  value={personAMajorClan}
                  onChange={(e) => {
                    setPersonAMajorClan(e.target.value);
                    setPersonASubClan('');
                    setResult(null);
                  }}
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
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
                <label htmlFor="personA-sub" className="block text-sm font-medium text-sage-700 mb-2">
                  Sub-Clan (Shingza)
                </label>
                <select
                  id="personA-sub"
                  value={personASubClan}
                  onChange={(e) => {
                    setPersonASubClan(e.target.value);
                    setResult(null);
                  }}
                  disabled={!personAMajorClan}
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Woman Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100">
                <svg className="w-7 h-7 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  <circle cx="12" cy="8" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-earth-700">Person B</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="personB-major" className="block text-sm font-medium text-sage-700 mb-2">
                  Major Clan (Ru)
                </label>
                <select
                  id="personB-major"
                  value={personBMajorClan}
                  onChange={(e) => {
                    setPersonBMajorClan(e.target.value);
                    setPersonBSubClan('');
                    setResult(null);
                  }}
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
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
                <label htmlFor="personB-sub" className="block text-sm font-medium text-sage-700 mb-2">
                  Sub-Clan (Shingza)
                </label>
                <select
                  id="personB-sub"
                  value={personBSubClan}
                  onChange={(e) => {
                    setPersonBSubClan(e.target.value);
                    setResult(null);
                  }}
                  disabled={!personBMajorClan}
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Button onClick={handleCheck} variant="primary" fullWidth disabled={loading}>
            {loading ? 'Checking...' : 'Check Relationship'}
          </Button>
          <Button onClick={handleReset} variant="secondary" fullWidth>
            Reset
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}
      </Card>

      {/* Result Display */}
      {result && (
        <Card className={result.allowed ? 'border-2 border-green-500' : 'border-2 border-red-500'}>
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">
              {result.allowed ? '✅' : '❌'}
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${result.allowed ? 'text-green-700' : 'text-red-700'}`}>
              Marriage {result.allowed ? 'Allowed' : 'Not Allowed'}
            </h2>
            <p className="text-lg text-sage-600">{result.reason}</p>
          </div>

          <div className="bg-sage-50 p-6 rounded-lg">
            <p className="text-sage-800 leading-relaxed">
              {result.explanation}
            </p>
          </div>

          <div className="mt-6 p-4 bg-earth-50 border-l-4 border-earth-500 rounded">
            <p className="text-sm text-earth-900">
              <strong>Important Disclaimer:</strong> This tool follows commonly accepted Sherpa 
              clan rules. However, clan traditions may vary by region and family lineage. 
              Final confirmation should always involve consultation with family elders who 
              possess deep knowledge of your specific clan history.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
