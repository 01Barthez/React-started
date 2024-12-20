import { useToast } from '@/hooks/use-toast';
import React from 'react'
import { Button } from '@/components/ui/button';
import ModeToogle from './ModeToogle';

const HelloWord: React.FC = () => {
  const { toast } = useToast()
  return (
    <div className='bg-background flex items-center justify-center min-h-[100vh] flex-col gap-10'>
      <ModeToogle />
      <Button
        variant={'outline'}
        className="text-3xl font-bold text-blue-500 shadow-md p-8 duration-300"
        onClick={() => {
          toast({
            title: "Ello every One",
            description: "I'm Barthez, And I'm happy to know that y're here !",
          })
        }}
      >
        Hello world!
      </Button>
      <h2 className='text-3xl font-bold text-foreground'>I'm Barthez Kenwou</h2>
    </div>
  );
}

export default HelloWord
