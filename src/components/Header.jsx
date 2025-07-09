import { FaBalanceScale } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="bg-[#1a365d] text-white py-4 px-6 flex items-center shadow-md">
      <FaBalanceScale className="text-2xl mr-3" />
      <h1 className="text-xl font-semibold">Legal Research Assistant</h1>
    </header>
  );
};