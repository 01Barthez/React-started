import React from 'react';
import { Button } from '@/components/ui/button';
import Globe from '@/components/ui/globe';
import { BackgroundBeams } from '@/components/ui/background-beams';

const App: React.FC = () => {
  return (
    <div className='bg-slate-900 flex items-center justify-center min-h-[100vh] flex-col gap-10'>
      <Button
        variant={'outline'}
        className="text-3xl font-bold text-blue-500 p-8"
      >
        Hello world!
      </Button>

      <h2 className='text-3xl font-bold'>I'm Barthez</h2>

      <div className="relative flex size-full">
        <Globe className="top-2" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default App;
