import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FloatingProxy } from '../components/FloatingProxy';
import { Image } from '../components/Image';

function Home() {
  const nav = useNavigate();

  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <button className="btn w-20" onClick={() => nav('item')}>
        go
      </button>
      <div className="flex p-10 flex-row w-full gap-5">
        <FloatingProxy className="rounded-md w-40 h-40 overflow-hidden"></FloatingProxy>
      </div>
    </div>
  );
}

export default Home;

// function getItemId(src: string): string {
//   return src.split('/').pop()!.split('?')[0];
// }
