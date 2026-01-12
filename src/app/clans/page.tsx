import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ClansPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Heading with Background */}
      <div className="text-center mb-12">
        <div className="inline-block bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border-2 border-amber-400/30">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-earth-800 via-amber-700 to-earth-800 bg-clip-text text-transparent" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em' }}>
            Understanding Sherpa Clans
          </h1>
          <div className="flex items-center justify-center space-x-3 mt-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <span className="text-amber-600 text-xl" style={{ fontFamily: 'serif' }}>༄༅།།</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Section 1: What is a Major Clan */}
        <Card>
          <h2 className="text-2xl font-semibold text-earth-700 mb-4">
            What is a Major Clan (Ru)?
          </h2>
          <div className="space-y-3 text-sage-800 leading-relaxed">
            <p>
              A <strong>Major Clan</strong>, known as <em>Ru</em> in Sherpa language, represents 
              a primary ancestral lineage. Each Ru traces back to a common ancestor from many 
              generations ago.
            </p>
            <p>
              While many Sherpa people may share the same surname (like Sherpa or Lama), 
              they often belong to different Ru. The clan system provides a deeper understanding 
              of family connections beyond what surnames reveal.
            </p>
            <p>
              Major clans include names such as Thimmi, Serwa, Chawa, Lama, Golay, Shangwa, 
              Murmin, and Gole, among others. Each represents a distinct ancestral line with 
              its own history and traditions.
            </p>
          </div>
        </Card>

        {/* Section 2: What is a Sub-Clan */}
        <Card>
          <h2 className="text-2xl font-semibold text-earth-700 mb-4">
            What is a Sub-Clan (Shingza)?
          </h2>
          <div className="space-y-3 text-sage-800 leading-relaxed">
            <p>
              A <strong>Sub-Clan</strong>, known as <em>Shingza</em> in Sherpa language, is a 
              smaller branch within a major clan. Think of it as an extended family unit within 
              the larger clan structure.
            </p>
            <p>
              Sub-clans represent more recent family divisions that occurred over generations. 
              While members of a sub-clan belong to the same major clan, they share an even 
              closer ancestral connection.
            </p>
            <p>
              Even if two people belong to different major clans, sharing the same sub-clan 
              still indicates a bone relationship, and marriage would traditionally not be permitted.
            </p>
          </div>
        </Card>

        {/* Section 3: Why Clan Checking Matters */}
        <Card>
          <h2 className="text-2xl font-semibold text-earth-700 mb-4">
            Why Clan Checking Matters in Marriage
          </h2>
          <div className="space-y-3 text-sage-800 leading-relaxed">
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
