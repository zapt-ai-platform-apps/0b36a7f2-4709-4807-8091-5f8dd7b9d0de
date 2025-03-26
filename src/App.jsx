import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BusinessBasicsPage } from './pages/BusinessBasicsPage';
import { StartupGuidePage } from './pages/StartupGuidePage';
import { FundingPage } from './pages/FundingPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { LocalBusinessesPage } from './pages/LocalBusinessesPage';
import { ToolsPage } from './pages/ToolsPage';
import { ZaptBadge } from './components/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business-basics" element={<BusinessBasicsPage />} />
          <Route path="/startup-guide" element={<StartupGuidePage />} />
          <Route path="/funding" element={<FundingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/local-businesses" element={<LocalBusinessesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
      </main>
      <ZaptBadge />
      <Footer />
    </div>
  );
}