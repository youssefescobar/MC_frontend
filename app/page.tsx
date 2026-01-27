'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-primary font-bold text-2xl">Dora Care...</div>
    </div>
  );
}