export const LoadingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="max-w-3xl rounded-lg px-4 py-3 bg-white border border-gray-200 shadow-sm">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};