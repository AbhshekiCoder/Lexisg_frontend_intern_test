import { useState } from 'react';
import { Header } from './components/Header';
import { ChatContainer } from './components/ChatContainer';
import { InputArea } from './components/InputArea';

export default function App() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const exampleQuery = "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?";

  const simulateApiCall = () => {
    return {
      answer:  `Yes, in a motor accident claim under Section 166 of the Motor Vehicles Act, 1988, where the deceased was self-employed and aged 54–55 years at the time of death, the claimant is entitled to an addition towards future prospects.

Legal Position

The Punjab and Haryana High Court, in Dani Devi v. Pritam Singh (FAO No. 4353 of 2012, decided on 13.09.2022), held that:

- "...as the age of the deceased at the time of accident was held to be about 54–55 years, being self-employed, 10% of annual income should have been awarded on account of future prospects."
[Para 7, citing National Insurance Co. Ltd. v. Pranay Sethi, (2017) and Sarla Verma v. DTC, (2009)]

Summary of Entitlement:

- Category: Self-employed
- Age: 54–55 years
- Future Prospects Addition: 10% of the annual income

This is consistent with the principles laid down by the Supreme Court in Pranay Sethi, where future prospects were allowed even for self-employed and fixed-income individuals, based on age bands.`,
      citations: [
        {
          text: "as the age of the deceased at the time of accident was held to be about 54–55 years, being self-employed, 10% of annual income should have been awarded on account of future prospects.",
          source: "Dani Devi v. Pritam Singh",
          link: "#",
          paragraph: "Para 7"
        }
      ]
      
    };
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!query.trim()) return;
  
  setIsLoading(true);
  
  // Add user message
  setMessages(prev => [...prev, {
    id: Date.now(),
    type: 'user',
    text: query
  }]);
  
  // Simulate API call
  setTimeout(() => {
    const response = simulateApiCall();
    setMessages(prev => [...prev, {
      id: Date.now() + 1,
      type: 'assistant',
      text: response.answer,
      citations: response.citations
    }]);
    setQuery('');
    setIsLoading(false);
  }, 1000);
};



  const handleExampleClick = () => {
    setQuery(exampleQuery);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ChatContainer 
        messages={messages} 
        isLoading={isLoading} 
        exampleQuery={exampleQuery} 
        handleExampleClick={handleExampleClick} 
      />
      <InputArea
  value={query} 
  onChange={(e) => setQuery(e.target.value)} 
  onSubmit={handleSubmit} 
  isLoading={isLoading} 
/>

    </div>
  );
}