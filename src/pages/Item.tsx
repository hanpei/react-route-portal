import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingProxy } from '../components/FloatingProxy';

export function Item() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <button className="btn w-20" onClick={() => nav('/')}>
        back
      </button>
      <div className="flex p-10">
        <div className="flex-1 text-gray-700 ml-6 text-lg">
          <p>
            Sunt est quidem. Natus molestias ab consectetur quasi et eos.
            Aspernatur rerum cum odit. Debitis ipsa quaerat ipsum adipisci.
            Facere exercitationem et fuga. Neque non illum.
          </p>
          <p>
            Sunt est quidem. Natus molestias ab consectetur quasi et eos.
            Aspernatur rerum cum odit. Debitis ipsa quaerat ipsum adipisci.
            Facere exercitationem et fuga. Neque non illum.
          </p>
        </div>
        <FloatingProxy className="w-80 h-80 rounded-[50%] overflow-hidden"></FloatingProxy>
      </div>
    </div>
  );
}
