'use client';
import { useEffect, useRef } from 'react';

export default function BackToTop() {
  const goToTopRef = useRef(null);
  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
      ) {
        goToTopRef.current?.classList.remove('hidden');
      } else {
        goToTopRef.current?.classList.add('hidden');
      }
    };

    return () => {};
  }, [goToTopRef]);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div
        onClick={goToTop}
        ref={goToTopRef}
        title='Go To Top'
        className='fixed z-50 hidden w-10 h-10 bottom-10 right-10 '
      >
        <button className='grid w-full h-full rounded-full shadow-md place-content-center hover:bg-primary text-foreground bg-primary/80'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path d='M12 4l8 8h-6v8h-4v-8H4l8-8z' />
          </svg>
        </button>
        <span className='sr-only'>Go to top</span>
      </div>
    </>
  );
}
