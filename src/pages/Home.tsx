import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingProxy } from '../components/FloatingProxy';

interface IItemProps {
  src: string;
  setAttrs: React.Dispatch<React.SetStateAction<{}>>;
}

function Home({ src, setAttrs }: IItemProps) {
  const nav = useNavigate();

  const id = getItemId(src);
  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <button className="btn w-20" onClick={() => nav(id)}>
        go
      </button>
      <div className="flex p-10 flex-row w-full gap-5">
        <FloatingProxy setAttrs={setAttrs} className="rounded-md w-40 h-40" />
      </div>
    </div>
  );
}

export default Home;

function getItemId(src: string): string {
  return src.split('/').pop()!.split('?')[0];
}
