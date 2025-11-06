import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';


export const metadata: Metadata = {
  title: 'Thank You | North Star Academy',
  description: 'Thank you for your interest in North Star Academy',
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
}