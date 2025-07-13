"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Bell,
  Settings,
  Camera,
  Calendar,
  Target,
  Droplets,
  ChevronRight,
  Plus,
  TrendingUp,
  Award,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import LineaMarket from "@/components/LineaMarket";
import MarketsOverview from "@/components/Market.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("lineamarket");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   const { user, setUser } = useAuth();
  const [stats, setStats] = useState({
    daysActive: 24,
    streak: 12,
    progressPhotos: 0,
  });

  const router = useRouter();
  // const Renderer = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "lineamarket":
        return (
          <div
            className={`flex-1 ${
              mobileMenuOpen ? "ml-64" : "ml-0"
            } lg:ml-64 transition-all duration-300`}
          >
            {/* <div className="max-w-7xl mx-auto px-6 py-8"> */}
            <LineaMarket />

            {/* </div> */}
          </div>
        );
      case "market":
        return (
          <div
            className={`flex-1 ${
              mobileMenuOpen ? "ml-64" : "ml-0"
            } lg:ml-64 transition-all duration-300`}
          >
            <MarketsOverview />
          </div>
        );

      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-auto flex flex-col  bg-gradient-to-br from-lightbrown via-white to-blue-50 relative">
      {/* Mobile Header */}
      <header className="lg:hidden w-full  bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 left-0   z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-500" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-500" />
              )}
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-darkbrown to-darkgreen rounded-xl flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <h1
              className={`text-xl font-bold bg-gradient-to-r from-darkbrown to-darkgreen bg-clip-text text-transparent`}
            >
              HEALNET
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-darkbrown transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform mt-15 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6 mt-20">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("lineamarket")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "lineamarket"
                    ? "bg-lightbrown text-darkgreen font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>lineamarket</span>
              </button>
              <button
                onClick={() => setActiveTab("market")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "market"
                    ? "bg-lightbrown text-darkgreen font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>market</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-white border-r border-gray-200 fixed h-full z-30">
          <div className="p-6">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("lineamarket")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "lineamarket"
                    ? "bg-lightbrown text-darkgreen font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>lineamarket</span>
              </button>
              <button
                onClick={() => setActiveTab("market")}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                  activeTab === "market"
                    ? "bg-lightbrown text-darkgreen font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>market</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}

        {/* <Renderer /> */}
        {/* <Renderer activeTab="lineamarket" /> */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
