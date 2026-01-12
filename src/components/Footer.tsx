export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-earth-50 via-sage-50 to-earth-50 border-t-2 border-earth-300/50 mt-16">
      {/* Decorative top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-earth-400 via-amber-500 to-earth-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center space-y-4">
          {/* Tibetan decorative element */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
            <span className="text-2xl text-amber-600" style={{ fontFamily: 'serif' }}>༄༅།།</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          <p className="text-sage-800 font-semibold text-base mb-2">
            RooCheck - རུ་ཅེག
          </p>
          <p className="text-sage-700 text-sm max-w-2xl mx-auto">
            Preserving Sherpa Cultural Heritage with Respect and Care
          </p>
          
          <div className="pt-4 pb-2">
            <p className="text-sage-600 text-sm max-w-2xl mx-auto leading-relaxed bg-white/50 rounded-lg p-4 shadow-sm">
              <svg className="w-5 h-5 inline-block mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              This tool is intended as a reference guide. Please consult with family elders for final confirmation.
            </p>
          </div>
          
          <div className="pt-4 border-t border-earth-200/50">
            <p className="text-sage-500 text-xs">
              © {new Date().getFullYear()} RooCheck. Built with respect for Sherpa tradition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
