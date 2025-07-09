import { FiSend, FiMic, FiPlus, FiPaperclip } from 'react-icons/fi';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { useState, useRef, useEffect } from 'react';

export const InputArea = ({ value, onChange, onSubmit, isLoading }) => {
  const textareaRef = useRef(null);
  const [isComposing, setIsComposing] = useState(false);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() && !isLoading) {
      onSubmit(e);
    }
  };

  return (
    <div className="w-full px-4 pt-2 pb-4 bg-white border-t border-gray-200">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        {/* Left side icons */}
        <div className="absolute left-3 flex space-x-2 mt-9">
          <button 
            type="button" 
            className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            title="Attach files"
          >
            <FiPlus className="w-5 h-5" />
          </button>
          <button 
            type="button" 
            className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            title="Attach files"
          >
            <FiPaperclip className="w-5 h-5" />
          </button>
        </div>

        {/* Text input */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="Message Legal Assistant..."
          rows="1"
          className="w-full pl-6 pr-16 py-3 pb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent resize-none overflow-hidden"
          style={{ minHeight: '70px', maxHeight: '200px' }}
        />

        {/* Right side icons */}
        <div className="absolute right-3 flex space-x-1 mt-9 ">
          {value.trim() ? (
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 text-white bg-[#1a365d] rounded-lg hover:bg-[#2c5282] disabled:opacity-50"
            >
              <FiSend className="w-5 h-5" />
            </button>
          ) : (
            <>
              <button 
                type="button" 
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                title="Tools"
              >
                <FaWandMagicSparkles className="w-5 h-5" />
              </button>
              <button 
                type="button" 
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                title="Voice input"
              >
                <FiMic className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </form>
      
      <p className="text-xs text-gray-500 text-center mt-2">
        Legal Assistant can make mistakes. Consider checking important information.
      </p>
    </div>
  );
};