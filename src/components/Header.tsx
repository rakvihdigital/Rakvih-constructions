"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mockSearchResults = [
    { title: "Residential Construction", link: "/services" },
    { title: "Commercial Construction", link: "/services" },
    { title: "The Celestia Residences", link: "/projects" },
    { title: "Riverside Elevated Corridor", link: "/projects" },
    { title: "Company Vision & Mission", link: "/about" },
    { title: "Our Core Values", link: "/about" },
    { title: "Construction Process", link: "/process" },
    { title: "Latest Insights", link: "/insights" },
  ];

  const filteredResults = searchQuery.trim() === ''
    ? []
    : mockSearchResults.filter(res => res.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-black/60 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="w-full px-2 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo-transparent.png" alt="Rakvih Logo" width={160} height={50} className="object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-gold transition-colors">Projects</Link>
            <Link href="/process" className="hover:text-gold transition-colors">Process</Link>
            <Link href="/insights" className="hover:text-gold transition-colors">Insights</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button
              className="text-white hover:text-gold transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/contact" className="hidden lg:flex items-center gap-2 border border-gold/50 text-gold px-4 py-2 rounded hover:bg-gold hover:text-dark-bg transition-all text-sm font-medium">
              START A PROJECT
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle & Mobile Search */}
          <div className="md:hidden flex items-center gap-4">
            <button
              className="text-white hover:text-gold transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-bg border-b border-white/10 px-6 py-4 flex flex-col gap-4 max-h-[calc(100vh-64px)] overflow-y-auto animate-fade-in-up">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-gold">About</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-gold">Services</Link>
            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-gold">Projects</Link>
            <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-gold">Process</Link>
            <Link href="/insights" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-gold">Insights</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-gold">Contact</Link>
            <div className="pt-4 mt-2 border-t border-white/10">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 border border-gold/50 text-gold px-5 py-3 rounded hover:bg-gold hover:text-dark-bg transition-all text-sm font-medium w-full">
                START A PROJECT
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Centered Modal Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-dark-bg/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-dark-card border border-white/10 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[80vh]">
            <div className="p-4 border-b border-white/10 flex items-center relative">
              <Search className="w-5 h-5 text-gold absolute left-6" />
              <input
                autoFocus
                type="text"
                placeholder="Search projects, services..."
                className="w-full bg-transparent text-lg text-white font-light py-2 pl-10 pr-10 focus:outline-none placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="text-gray-400 hover:text-white transition-colors absolute right-6"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto">
              {searchQuery && filteredResults.length > 0 ? (
                <div className="space-y-1">
                  <p className="text-gold font-bold text-[10px] tracking-wider uppercase mb-3 px-2">Results</p>
                  {filteredResults.map((res, idx) => (
                    <Link
                      key={idx}
                      href={res.link}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="group flex items-center justify-between px-3 py-3 hover:bg-white/5 rounded-md transition-colors"
                    >
                      <h3 className="text-base text-gray-300 group-hover:text-white transition-colors">{res.title}</h3>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gold transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              ) : searchQuery ? (
                <p className="text-gray-500 text-sm text-center py-8">No results found for "{searchQuery}".</p>
              ) : (
                <div className="text-gray-500 text-sm py-2">
                  <p className="mb-3 px-2 font-medium">Popular Searches</p>
                  <div className="flex flex-wrap gap-2 px-2">
                    {["Residential", "Commercial", "Process", "Careers", "Contact"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="bg-white/5 border border-white/10 px-3 py-1.5 text-xs hover:border-gold hover:text-gold transition-colors rounded-full"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
