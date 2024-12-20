import React from 'react';
import { Button } from '@/components/ui/button';

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen flex-col gap-10 w-screen'>
      <Button
        variant={'outline'}
        className="text-3xl font-bold text-blue-500 p-8"
      >
        Hello world!
      </Button>

      <h2 className='text-3xl font-bold'>I'm Barthez</h2>
    </div>

  );
};

export default App;
