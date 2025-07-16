import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Nidum AI</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2025 Nidum AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
