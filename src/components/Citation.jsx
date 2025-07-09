import { FiFileText, FiArrowUp } from 'react-icons/fi';

export const Citation = ({ citation }) => {
  const openCitation = () => {
    window.open(citation.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="flex items-start">
        <FiFileText className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm italic mb-1">"{citation.text}"</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">{citation.source} • {citation.paragraph}</span>
            <button
              onClick={openCitation}
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              View document
              <FiArrowUp className="ml-1 transform rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};