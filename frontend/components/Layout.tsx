import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title ? `${title} - Personal Blog` : 'Personal Blog'}</title>
        <meta name="description" content="A personal blog platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-teal-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold cursor-pointer">Personal Blog</a>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" legacyBehavior>
                  <a className={`hover:text-gray-300 ${router.pathname === '/' ? 'underline' : ''}`}>Home</a>
                </Link>
              </li>
              {!token && (
                <>
                  <li>
                    <Link href="/login" legacyBehavior>
                      <a className={`hover:text-gray-300 ${router.pathname === '/login' ? 'underline' : ''}`}>Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" legacyBehavior>
                      <a className={`hover:text-gray-300 ${router.pathname === '/signup' ? 'underline' : ''}`}>Sign Up</a>
                    </Link>
                  </li>
                </>
              )}
              {token && (
                <li>
                  <Link href="/dashboard" legacyBehavior>
                    <a className={`hover:text-gray-300 ${router.pathname === '/dashboard' ? 'underline' : ''}`}>Dashboard</a>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Personal Blog. All rights reserved (Mitansh Joshi).</p>
      </footer>
    </div>
  );
};

export default Layout;