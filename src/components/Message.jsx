import { FiCopy } from 'react-icons/fi';
import { Citation } from './Citation';

export const Message = ({ message }) => {
  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-3xl rounded-lg px-4 py-3 ${message.type === 'user' 
          ? 'bg-[#1a365d] text-white' 
          : 'bg-white border border-gray-200 shadow-sm'}`}
      >
        <div className="flex justify-between items-start">
          <div>
            {message.text.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-2">{paragraph}</p>
            ))}
          </div>
          {message.type === 'assistant' && (
            <button 
              onClick={() => navigator.clipboard.writeText(message.text)}
              className="ml-2 text-gray-400 hover:text-gray-600"
              title="Copy to clipboard"
            >
              <FiCopy size={16} />
            </button>
          )}
        </div>
        
        {message.citations && message.citations.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100 space-y-3">
            <p className="text-sm font-medium text-gray-600">Citations:</p>
            {message.citations.map((citation, index) => (
              <Citation key={index} citation={citation} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};