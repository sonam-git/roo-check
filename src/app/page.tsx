import type { Metadata } from 'next';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Home - RooCheck | Sherpa Clan Relationship Checker',
  description: 'Discover RooCheck, a digital tool preserving Sherpa clan traditions. Check clan (Ru) and sub-clan (Shingza) relationships for marriage eligibility. Honor ancestral heritage with our culturally sensitive platform.',
  openGraph: {
    title: 'RooCheck - Preserve Sherpa Cultural Heritage',
    description: 'Check Sherpa clan relationships for marriage eligibility. A respectful tool for preserving oral traditions.',
    url: 'https://roocheck.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-50/30 via-sage-50/20 to-earth-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Decorative element */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="text-6xl text-amber-400/30" style={{ fontFamily: 'serif' }}>☸</div>
          </div>
          
          <div className="inline-block bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border-2 border-amber-400/30">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent mb-4 leading-tight drop-shadow-sm" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em', fontWeight: '700' }}>
              Welcome to RooCheck
            </h1>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              རུ་ཅེག་ལ་དགའ་བསུ
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-earth-900 font-semibold max-w-3xl mx-auto leading-relaxed mt-6 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl inline-block shadow-lg">
            A respectful digital tool to help preserve and honor Sherpa clan traditions
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <span className="text-amber-600 text-xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>

        {/* Introduction Card */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-soft hover:shadow-glow transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="text-3xl mr-4">📿</div>
            <h2 className="text-2xl font-semibold text-earth-800">
              Understanding Sherpa Clan Relationships
            </h2>
          </div>
        
        <div className="space-y-4 text-sage-800 leading-relaxed">
          <p>
            In Sherpa culture, surnames alone do not tell the full story of family relationships. 
            Many Sherpa people share common surnames like Sherpa or Lama, yet belong to 
            different ancestral clans known as <strong className="text-earth-700">Ru</strong> (major clans) 
            and <strong className="text-earth-700">Shingza</strong> (sub-clans).
          </p>
          
          <p>
            Before marriage, it is essential to verify that two individuals do not share the same 
            clan lineage. Marrying within the same clan—whether major or sub-clan—is traditionally 
            not permitted, as it indicates a blood or bone relationship through shared ancestry.
          </p>
          
          <p>
            RooCheck was created to help preserve this important cultural knowledge in a digital format, 
            making it easier for the Sherpa community to honor these traditions while adapting to modern life.
          </p>
          
          <div className="bg-sage-50 border-l-4 border-sage-500 p-4 mt-6">
            <p className="text-sm text-sage-800">
              <strong>Important:</strong> This tool follows commonly accepted Sherpa clan rules. 
              However, clan knowledge has been passed down orally through generations and may vary 
              by region and family. Always consult with family elders for final confirmation.
            </p>
          </div>
        </div>
      </Card>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
        <Button href="/check" variant="primary" fullWidth>
          Check Clan Relationship
        </Button>
        <Button href="/clans" variant="secondary" fullWidth>
          Learn About Sherpa Clans
        </Button>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
          <div className="text-center">
            <div className="text-5xl mb-4">🏔️</div>
            <h3 className="text-lg font-semibold text-earth-800 mb-2">
              Cultural Preservation
            </h3>
            <p className="text-sm text-sage-700 leading-relaxed">
              Helping to digitally preserve oral traditions passed down through generations
            </p>
          </div>
        </Card>
        
        <Card className="shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-lg font-semibold text-earth-800 mb-2">
              Family Respect
            </h3>
            <p className="text-sm text-sage-700 leading-relaxed">
              Honoring the wisdom of elders and maintaining cultural integrity
            </p>
          </div>
        </Card>
        
        <Card className="shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
          <div className="text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold text-earth-800 mb-2">
              Community Support
            </h3>
            <p className="text-sm text-sage-700 leading-relaxed">
              Making important cultural information accessible to all Sherpa people
            </p>
          </div>
        </Card>
      </div>
      </div>
    </div>
  );
}
