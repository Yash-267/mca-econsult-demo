import React from "react";
import { TrendingUp, Code, FileCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-700 rounded-xl flex items-center justify-center">
              <Code className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                MCA e-Consultation Sentiment Dashboard
              </h1>
              <p className="text-slate-600 mt-1">
                Powered by Next_code AI - Advanced analysis of stakeholder feedback
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-slate-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Live Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <FileCheck className="w-5 h-5" />
              <span className="font-medium">100 Comments Analyzed</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
