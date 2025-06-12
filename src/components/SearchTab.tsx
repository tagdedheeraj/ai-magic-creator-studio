
import React from 'react';
import { Search } from 'lucide-react';

const SearchTab: React.FC = () => {
  const popularTags = ['Website Builder', 'Video Editor', 'AI Tools', 'Music Creation', 'React Basics'];

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search courses, tools, tutorials..."
          className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div>
        <h3 className="text-white text-lg font-semibold mb-3">Popular Searches</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
