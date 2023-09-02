'use client';
import TestButton from '@/app/components/Button';
import { useEffect } from 'react';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestButton />
    </div>
  );
}
