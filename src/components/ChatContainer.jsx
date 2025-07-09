import { FaBalanceScale } from 'react-icons/fa';
import { Message } from './Message';
import { LoadingIndicator } from './LoadingIndicator';

export const ChatContainer = ({ messages, isLoading, exampleQuery, handleExampleClick }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <div className="max-w-md mx-auto">
            <FaBalanceScale className="text-blue-400 text-5xl mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Legal Research Assistant</h2>
            <p className="text-gray-500 mb-6">Ask questions about Indian law and get answers with citations to relevant case law.</p>
            
            <button
              onClick={handleExampleClick}
              className="bg-white border border-gray-200 rounded-lg p-4 text-left hover:bg-gray-50 transition-colors w-full"
            >
              <p className="font-medium text-gray-700">Example query:</p>
              <p className="text-gray-500 text-sm mt-1">{exampleQuery}</p>
            </button>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))
      )}
      
      {isLoading && <LoadingIndicator />}
    </div>
  );
};