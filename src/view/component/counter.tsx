/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7A4vFzebz7J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from '@/view/ui/button'
import { CardContent, Card } from '@/view/ui/card'

export function Counter() {
  return (
    <Card className='mx-auto w-full max-w-md'>
      <CardContent className='flex flex-col items-center justify-center gap-6 p-8'>
        <div className='text-6xl font-bold'>42</div>
        <div className='grid grid-cols-2 gap-4'>
          <Button variant='outline'>
            <MinusIcon className='h-5 w-5' />
            Decrement
          </Button>
          <Button variant='outline'>
            <PlusIcon className='h-5 w-5' />
            Increment
          </Button>
          <Button variant='outline'>
            <MinusIcon className='h-5 w-5' />
            Decrement Random
          </Button>
          <Button variant='outline'>
            <PlusIcon className='h-5 w-5' />
            Increment Random
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function MinusIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
    </svg>
  )
}

function PlusIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
      <path d='M12 5v14' />
    </svg>
  )
}
