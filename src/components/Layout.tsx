import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full overflow-hidden"
    >
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </motion.div>
  );
} 