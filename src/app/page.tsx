import type { Metadata } from 'next';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Home - RooCheck | Sherpa Clan Relationship Checker',
  description: 'Discover RooCheck, a digital tool preserving Sherpa clan traditions. Check clan (Ru) and sub-clan (Shingza) relationships for marriage eligibility. Honor ancestral heritage with our culturally sensitive platform.',
  openGraph: {
    title: 'RooCheck - Preserve Sherpa Cultural Heritage',
    description: 'Check Sherpa clan relationships for marriage eligibility. A respectful tool for preserving oral traditions.',
    url: 'https://roo-check.vercel.app/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-50/30 via-sage-50/20 to-earth-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Enhanced Design */}
        <div className="text-center mb-16 relative">
          {/* Decorative prayer flag elements */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-full max-w-2xl h-2 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent rounded-full blur-sm"></div>
          
          <div className="inline-block relative">
            {/* Mandala-inspired decorative circle */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 rounded-full blur-2xl animate-pulse"></div>
            
            <div className="relative bg-white/95 backdrop-blur-md px-10 py-8 rounded-3xl shadow-2xl border-2 border-amber-400/40 hover:border-amber-500/60 transition-all duration-500">
              {/* Top decorative element */}
              <div className="flex justify-center mb-4">
                <span className="text-4xl text-amber-600" style={{ fontFamily: 'serif' }}>☸</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent mb-5 leading-tight drop-shadow-sm" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em', fontWeight: '700' }}>
                Welcome to RooCheck
              </h1>
              
              {/* Tibetan Script with Prayer Flag Colors */}
              <div className="relative mb-4">
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
                  རུ་ཅེག་ལ་དགའ་བསུ
                </span>
              </div>
              
              {/* Bottom decorative element */}
              <div className="flex items-center justify-center space-x-3 mt-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <span className="text-amber-600 text-2xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-earth-900 font-semibold max-w-3xl mx-auto leading-relaxed mt-8 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl inline-block shadow-xl border border-amber-200/50">
            <span className="text-amber-700">🏔️</span> A respectful digital tool to help preserve and honor Sherpa clan traditions <span className="text-amber-700">📿</span>
          </p>
        </div>

        {/* Introduction Card with Enhanced Design */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200/50 bg-white/95 backdrop-blur-sm">
          <div className="flex items-center mb-6 pb-4 border-b-2 border-amber-200/50">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <span className="text-3xl">📿</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-earth-800">
              Understanding Sherpa Clan Relationships
            </h2>
          </div>
        
          <div className="space-y-5 text-sage-800 leading-relaxed text-base md:text-lg">
            <p className="flex items-start">
              <span className="text-amber-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>In Sherpa culture, surnames alone do not tell the full story of family relationships. 
              Many Sherpa people share common surnames like Sherpa or Lama, yet belong to 
              different ancestral clans known as <strong className="text-earth-700 bg-amber-50 px-1 rounded">Ru</strong> (major clans) 
              and <strong className="text-earth-700 bg-amber-50 px-1 rounded">Shingza</strong> (sub-clans).</span>
            </p>
            
            <p className="flex items-start">
              <span className="text-amber-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>Before marriage, it is essential to verify that two individuals do not share the same 
              clan lineage. Marrying within the same clan—whether major or sub-clan—is traditionally 
              not permitted, as it indicates a blood or bone relationship through shared ancestry.</span>
            </p>
            
            <p className="flex items-start">
              <span className="text-amber-600 mr-3 mt-1 flex-shrink-0">▪</span>
              <span>RooCheck was created to help preserve this important cultural knowledge in a digital format, 
              making it easier for the Sherpa community to honor these traditions while adapting to modern life.</span>
            </p>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 mt-6 rounded-r-lg shadow-md">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm md:text-base text-earth-800 font-semibold mb-1">
                    Important Note
                  </p>
                  <p className="text-sm md:text-base text-sage-800">
                    This tool follows commonly accepted Sherpa clan rules. 
                    However, clan knowledge has been passed down orally through generations and may vary 
                    by region and family. <strong>Always consult with family elders for final confirmation.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

      {/* Call to Action Buttons with Enhanced Design */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto mb-16">
        <Button href="/check" variant="primary" fullWidth>
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Check Clan Relationship
          </span>
        </Button>
        <Button href="/clans" variant="secondary" fullWidth>
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Learn About Sherpa Clans
          </span>
        </Button>
      </div>

      {/* Additional Info Section with Mountain Theme */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-earth-200/50 bg-gradient-to-br from-white to-earth-50/30 backdrop-blur-sm group">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/40 transition-all duration-300"></div>
              <div className="relative text-6xl transform group-hover:scale-110 transition-transform duration-300">🏔️</div>
            </div>
            <h3 className="text-xl font-bold text-earth-800 mb-3 flex items-center justify-center">
              <span className="text-amber-600 mr-2" style={{ fontFamily: 'serif' }}>༄</span>
              Cultural Preservation
            </h3>
            <p className="text-sm md:text-base text-sage-700 leading-relaxed">
              Helping to digitally preserve oral traditions passed down through generations in the Himalayan highlands
            </p>
          </div>
        </Card>
        
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-earth-200/50 bg-gradient-to-br from-white to-sage-50/30 backdrop-blur-sm group">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/40 transition-all duration-300"></div>
              <div className="relative text-6xl transform group-hover:scale-110 transition-transform duration-300">👨‍👩‍👧‍👦</div>
            </div>
            <h3 className="text-xl font-bold text-earth-800 mb-3 flex items-center justify-center">
              <span className="text-amber-600 mr-2" style={{ fontFamily: 'serif' }}>༄</span>
              Family Respect
            </h3>
            <p className="text-sm md:text-base text-sage-700 leading-relaxed">
              Honoring the wisdom of elders and maintaining cultural integrity across generations
            </p>
          </div>
        </Card>
        
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-earth-200/50 bg-gradient-to-br from-white to-amber-50/30 backdrop-blur-sm group">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/40 transition-all duration-300"></div>
              <div className="relative text-6xl transform group-hover:scale-110 transition-transform duration-300">🤝</div>
            </div>
            <h3 className="text-xl font-bold text-earth-800 mb-3 flex items-center justify-center">
              <span className="text-amber-600 mr-2" style={{ fontFamily: 'serif' }}>༄</span>
              Community Support
            </h3>
            <p className="text-sm md:text-base text-sage-700 leading-relaxed">
              Making important cultural information accessible to all Sherpa people worldwide
            </p>
          </div>
        </Card>
      </div>
      </div>
    </div>
  );
}
