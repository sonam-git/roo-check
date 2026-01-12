import type { Metadata } from 'next';
import Card from '@/components/Card';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Sherpa Clans Guide - RooCheck | Understanding Ru and Shingza',
  description: 'Learn about Sherpa major clans (Ru) including Minyakpa, Thimmi, Chawa, Lama, Ngompa, and Parwi-Tso, and their sub-clans (Shingza). Comprehensive guide to Sherpa ancestral lineages and clan traditions.',
  keywords: [
    'Sherpa clans',
    'Ru',
    'Shingza',
    'Minyakpa',
    'Thimmi',
    'Chawa',
    'Lama',
    'Ngompa',
    'major clans',
    'sub-clans',
    'Sherpa lineage',
    'clan traditions',
  ],
  openGraph: {
    title: 'Understanding Sherpa Clans - RooCheck',
    description: 'Comprehensive guide to Sherpa major clans (Ru) and sub-clans (Shingza). Learn about ancestral lineages and traditions.',
    url: 'https://roocheck.com/clans',
  },
};

export default function ClansPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Heading with Enhanced Mountain Theme */}
      <div className="text-center mb-12 relative">
        {/* Decorative mountain peaks */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-end space-x-1 opacity-20">
          <div className="w-8 h-12 bg-gradient-to-t from-earth-400 to-earth-300 transform rotate-45"></div>
          <div className="w-10 h-16 bg-gradient-to-t from-earth-500 to-earth-400 transform rotate-45"></div>
          <div className="w-8 h-12 bg-gradient-to-t from-earth-400 to-earth-300 transform rotate-45"></div>
        </div>
        
        <div className="inline-block relative">
          {/* Mandala-inspired glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/20 via-orange-400/30 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative bg-white/95 backdrop-blur-md px-10 py-8 rounded-3xl shadow-2xl border-2 border-amber-400/40">
            {/* Dharma Wheel */}
            <div className="flex justify-center mb-4">
              <span className="text-5xl text-amber-600 animate-pulse" style={{ fontFamily: 'serif' }}>☸</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent mb-4" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em' }}>
              Understanding Sherpa Clans
            </h1>
            
            {/* Tibetan ornament */}
            <div className="flex items-center justify-center space-x-3 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <span className="text-amber-600 text-2xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-lg text-earth-700 mt-4 font-semibold">
              རུ་དང་ཤིང་ཟ། • Ru & Shingza
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Major Clan - Enhanced */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200/50 bg-white/95 backdrop-blur-sm">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
              <span className="text-3xl">🏔️</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-2">
                What is a Major Clan?
              </h2>
              <p className="text-amber-700 font-semibold text-lg" style={{ fontFamily: 'serif' }}>རུ། • Ru</p>
            </div>
          </div>
          <div className="space-y-4 text-sage-800 leading-relaxed text-base md:text-lg">
            <p className="flex items-start">
              <span className="text-amber-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>A <strong className="text-earth-700 bg-amber-50 px-1 rounded">Major Clan</strong>, known as <em className="text-amber-700">Ru</em> in Sherpa language, represents 
              a primary ancestral lineage. Each Ru traces back to a common ancestor from many 
              generations ago.</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>While many Sherpa people may share the same surname (like Sherpa or Lama), 
              they often belong to different Ru. The clan system provides a deeper understanding 
              of family connections beyond what surnames reveal.</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>Major clans include names such as Thimmi, Serwa, Chawa, Lama, Golay, Shangwa, 
              Murmin, and Gole, among others. Each represents a distinct ancestral line with 
              its own history and traditions.</span>
            </p>
          </div>
        </Card>

        {/* Section 2: What is a Sub-Clan - Enhanced */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-sage-200/50 bg-white/95 backdrop-blur-sm">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-sage-500 to-earth-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
              <span className="text-3xl">🌳</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-2">
                What is a Sub-Clan?
              </h2>
              <p className="text-sage-700 font-semibold text-lg" style={{ fontFamily: 'serif' }}>ཤིང་ཟ། • Shingza</p>
            </div>
          </div>
          <div className="space-y-4 text-sage-800 leading-relaxed text-base md:text-lg">
            <p className="flex items-start">
              <span className="text-sage-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>A <strong className="text-earth-700 bg-sage-50 px-1 rounded">Sub-Clan</strong>, known as <em className="text-sage-700">Shingza</em> in Sherpa language, is a 
              smaller branch within a major clan. Think of it as an extended family unit within 
              the larger clan structure.</span>
            </p>
            <p className="flex items-start">
              <span className="text-sage-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>Sub-clans represent more recent family divisions that occurred over generations. 
              While members of a sub-clan belong to the same major clan, they share an even 
              closer ancestral connection.</span>
            </p>
            <p className="flex items-start">
              <span className="text-sage-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>Even if two people belong to different major clans, sharing the same sub-clan 
              still indicates a bone relationship, and marriage would traditionally not be permitted.</span>
            </p>
          </div>
        </Card>

        {/* Section 3: Why Clan Checking Matters - Enhanced */}
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-earth-200/50 bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
              <span className="text-3xl">❤️</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-2">
                Why Clan Checking Matters
              </h2>
              <p className="text-earth-700 font-semibold">Understanding Marriage Traditions</p>
            </div>
          </div>
          <div className="space-y-4 text-sage-800 leading-relaxed text-base md:text-lg">
            <p>
              Sherpa cultural tradition prohibits marriage between individuals who share the 
              same clan lineage. This practice has deep roots in maintaining family health and 
              respecting ancestral wisdom passed down through generations.
            </p>
            <p>
              Marriage within the same clan is considered marriage between blood relatives 
              (same major clan) or bone relatives (same sub-clan). These connections, even if 
              distant, are taken seriously in Sherpa culture.
            </p>
            <p>
              By checking clan relationships before marriage, families honor their ancestors, 
              maintain cultural integrity, and follow the wisdom of elders who have preserved 
              these traditions for centuries.
            </p>
          </div>
        </Card>

        {/* Section 4: Oral Tradition */}
        <Card>
          <h2 className="text-2xl font-semibold text-earth-700 mb-4">
            The Oral Tradition of Clan Knowledge
          </h2>
          <div className="space-y-3 text-sage-800 leading-relaxed">
            <p>
              Traditionally, knowledge about clans has been passed down orally from parents and 
              grandparents to their children. This oral tradition has kept the information alive 
              for countless generations.
            </p>
            <p>
              However, as Sherpa communities have become more dispersed around the world, and as 
              younger generations grow up far from their ancestral villages, this oral knowledge 
              can become harder to access and preserve.
            </p>
            <p>
              RooCheck aims to support—not replace—this oral tradition by providing a digital 
              reference that complements the wisdom of family elders. It serves as a tool to help 
              preserve cultural knowledge while adapting to modern circumstances.
            </p>
            <div className="bg-earth-50 border-l-4 border-earth-500 p-4 mt-4">
              <p className="text-sm font-medium text-earth-900">
                <strong>Remember:</strong> While this tool provides general guidance based on 
                commonly accepted rules, family elders remain the ultimate authority on clan 
                relationships. Always seek their counsel and blessing.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button href="/check" variant="primary">
            Check Clan Relationship Now
          </Button>
        </div>
      </div>
    </div>
  );
}
