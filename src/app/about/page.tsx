import type { Metadata } from 'next';
import Card from '@/components/Card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About RooCheck - Our Story & Mission | རུ་ཅེག',
  description: 'Learn about RooCheck, created by Sonam J. Sherpa to help the Sherpa community understand clan relationships and preserve cultural heritage. A bridge between tradition and technology.',
  keywords: [
    'About RooCheck',
    'Sonam J. Sherpa',
    'Sherpa community',
    'cultural preservation',
    'Khumbu Nepal',
    'clan knowledge',
    'Sherpa heritage',
  ],
  openGraph: {
    title: 'About RooCheck - Preserving Sherpa Heritage',
    description: 'Created to help the Sherpa community understand clan relationships and honor ancestral traditions.',
    url: 'https://roocheck.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <div className="inline-block bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border-2 border-amber-400/30">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em' }}>
            About RooCheck
          </h1>
          <div className="flex items-center justify-center space-x-3 mt-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <span className="text-amber-600 text-xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">🏔️</div>
            <h2 className="text-3xl font-bold text-earth-800 mb-4">Our Purpose</h2>
          </div>
          <p className="text-lg text-sage-800 leading-relaxed text-center max-w-3xl mx-auto">
            RooCheck was created with a simple but deeply meaningful purpose: to help the Sherpa community—especially the younger generation—better understand clan relationships and avoid unintended cultural and emotional harm.
          </p>
        </Card>

        {/* Our Story */}
        <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
          <h2 className="text-2xl font-semibold text-earth-800 mb-4 flex items-center">
            <span className="text-3xl mr-3">📖</span>
            Our Story
          </h2>
          <div className="space-y-4 text-sage-800 leading-relaxed">
            <p>
              RooCheck was created by <strong className="text-earth-700">Sonam J. Sherpa</strong>, a Full Stack Developer born and raised in the <strong className="text-earth-700">Khumbu region of Nepal</strong>. Growing up within the Sherpa community, Sonam witnessed a recurring challenge faced by many young people.
            </p>
            <p>
              On multiple occasions, young Sherpas entered relationships only to later discover—through their parents or family elders—that they were related by clan, bone, or blood. These realizations often came too late and resulted in painful breakups, emotional distress, and lasting impact on the younger generation.
            </p>
            <p>
              Having lived through these experiences within his own community, Sonam recognized a gap between traditional oral knowledge and the realities of modern life.
            </p>
          </div>
        </Card>

        {/* Why RooCheck Exists */}
        <Card className="bg-gradient-to-br from-amber-50 to-earth-50 shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-amber-200/50">
          <h2 className="text-2xl font-semibold text-earth-800 mb-4 flex items-center">
            <span className="text-3xl mr-3">💡</span>
            Why RooCheck Exists
          </h2>
          <div className="space-y-4 text-sage-800 leading-relaxed">
            <p>
              In today&apos;s world, information about Sherpa history and culture is widely available through Google and social media. However, there has never been a simple, respectful, and accessible way to check clan relationships, which play a crucial role in marriage and family traditions.
            </p>
            <p>
              By combining his background as a Full Stack Developer with his deep cultural understanding, Sonam created RooCheck to:
            </p>
            <ul className="list-none space-y-3 ml-4">
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 text-xl">✓</span>
                <span>Make it easier to check whether two individuals may be related through Sherpa clans</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 text-xl">✓</span>
                <span>Help determine whether marriage is traditionally allowed</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 text-xl">✓</span>
                <span>Encourage awareness of ancestral and family connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 text-xl">✓</span>
                <span>Prevent emotional hardship by promoting early understanding</span>
              </li>
            </ul>
            <div className="bg-white/70 p-5 rounded-lg border-l-4 border-amber-500 mt-6">
              <p className="font-semibold text-earth-800">
                RooCheck is not only about marriage eligibility—it is also about knowing our roots, honoring our ancestors, and preserving cultural wisdom in a modern form.
              </p>
            </div>
          </div>
        </Card>

        {/* Respecting Tradition */}
        <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
          <h2 className="text-2xl font-semibold text-earth-800 mb-4 flex items-center">
            <span className="text-3xl mr-3">🙏</span>
            Respecting Tradition
          </h2>
          <div className="space-y-4 text-sage-800 leading-relaxed">
            <p>
              Sherpa clan knowledge has been passed down orally for generations. Because of this:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sage-700">
              <li>Clan structures may vary by region, family, and lineage</li>
              <li>No digital tool can replace the guidance and wisdom of elders</li>
            </ul>
            <div className="bg-sage-50 border-l-4 border-sage-500 p-5 mt-6 rounded-lg">
              <p className="font-semibold text-sage-900 mb-2">Important:</p>
              <p className="text-sage-800">
                RooCheck follows commonly accepted Sherpa clan rules and is intended as a <strong>guidance tool only</strong>.
              </p>
              <p className="text-sage-800 mt-2">
                <strong>Always consult family elders and study deeply before making any final decisions.</strong>
              </p>
            </div>
          </div>
        </Card>

        {/* Our Commitment */}
        <Card className="bg-gradient-to-br from-sage-50 to-earth-50 shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-sage-200/50">
          <h2 className="text-2xl font-semibold text-earth-800 mb-4 flex items-center">
            <span className="text-3xl mr-3">❤️</span>
            Our Commitment
          </h2>
          <div className="space-y-4 text-sage-800 leading-relaxed">
            <p>RooCheck is built with care, responsibility, and respect:</p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-white/70 rounded-lg">
                <div className="text-4xl mb-3">🙏</div>
                <h3 className="font-semibold text-earth-700 mb-2">Respect</h3>
                <p className="text-sm text-sage-700">For Sherpa culture and long-held traditions</p>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-lg">
                <div className="text-4xl mb-3">💚</div>
                <h3 className="font-semibold text-earth-700 mb-2">Care</h3>
                <p className="text-sm text-sage-700">For the emotional well-being of the younger generation</p>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-lg">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="font-semibold text-earth-700 mb-2">Responsibility</h3>
                <p className="text-sm text-sage-700">To clearly communicate limitations and encourage elder consultation</p>
              </div>
            </div>
            <p className="mt-6 text-center font-semibold text-earth-800">
              This platform serves as a bridge between technology and tradition, supporting the Sherpa community while honoring the values that have guided families for centuries.
            </p>
          </div>
        </Card>

        {/* Message to Community */}
        <Card className="bg-gradient-to-br from-amber-100 to-earth-100 shadow-soft hover:shadow-glow transition-all duration-300 border-2 border-amber-300/50">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-earth-800 mb-6 flex items-center justify-center">
              <span className="text-3xl mr-3">🌟</span>
              A Message to the Community
              <span className="text-3xl ml-3">🌟</span>
            </h2>
            <div className="space-y-4 text-sage-800 leading-relaxed max-w-3xl mx-auto">
              <p className="text-lg">
                RooCheck is offered with <strong className="text-amber-700">humility</strong> and <strong className="text-amber-700">openness</strong>. As our community grows and evolves, this platform will continue to improve with guidance, feedback, and wisdom from elders and community members.
              </p>
              <div className="bg-white/80 p-6 rounded-xl mt-6 border border-amber-300">
                <p className="text-xl font-semibold text-earth-900 italic">
                  Together, we can preserve our heritage while supporting the next generation with clarity, respect, and care.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <span className="text-amber-600 text-2xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <div className="text-center text-sage-600 text-sm italic pt-4">
          <p>Created with love for the Sherpa community 🏔️ རུ་ཅེག</p>
        </div>
      </div>
    </div>
  );
}
