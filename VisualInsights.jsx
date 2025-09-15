import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { TrendingUp, Cloud, Hash } from "lucide-react";

const sentimentData = [
  { name: 'In Favour', value: 60, count: 60, color: '#10B981' },
  { name: 'Against', value: 20, count: 20, color: '#EF4444' },
  { name: 'Neutral', value: 20, count: 20, color: '#F59E0B' }
];

const topicsData = [
  { topic: 'CSR Provisions', mentions: 12, sentiment: 'Mixed' },
  { topic: 'Penalty Framework', mentions: 10, sentiment: 'Negative' },
  { topic: 'Digital Procedures', mentions: 8, sentiment: 'Positive' },
  { topic: 'Compliance Timeline', mentions: 7, sentiment: 'Negative' },
  { topic: 'Director Liability', mentions: 6, sentiment: 'Mixed' },
  { topic: 'SME Exemptions', mentions: 5, sentiment: 'Positive' },
];

const keyTerms = [
  { term: 'Section 135', frequency: 18, words: 2, size: 'text-4xl' },
  { term: 'CSR', frequency: 15, words: 1, size: 'text-3xl' },
  { term: 'Penalty', frequency: 12, words: 1, size: 'text-2xl' },
  { term: 'Compliance', frequency: 14, words: 1, size: 'text-3xl' },
  { term: 'Companies Act 2013', frequency: 10, words: 3, size: 'text-2xl' },
  { term: 'Audit', frequency: 8, words: 1, size: 'text-xl' },
  { term: 'Disclosure', frequency: 9, words: 1, size: 'text-xl' },
  { term: 'Governance', frequency: 7, words: 1, size: 'text-lg' },
  { term: 'SME', frequency: 11, words: 1, size: 'text-2xl' },
  { term: 'Timeline', frequency: 6, words: 1, size: 'text-lg' },
  { term: 'Amendment', frequency: 13, words: 1, size: 'text-2xl' },
  { term: 'Startup', frequency: 5, words: 1, size: 'text-base' }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-300 rounded-lg shadow-lg">
        <p className="font-medium">{`${label}: ${payload[0].value}%`}</p>
        <p className="text-sm text-slate-600">{`Count: ${payload[0].payload.count} comments`}</p>
      </div>
    );
  }
  return null;
};

export default function VisualInsights() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          Visual Analytics Dashboard
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Hash className="w-5 h-5 text-purple-600" />
                Sentiment Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {sentimentData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-slate-600">
                      {item.name}: {item.count} comments ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Topic Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart className="w-5 h-5 text-purple-600" />
                Top Discussion Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topicsData.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-medium text-slate-800">{topic.topic}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          topic.sentiment === 'Positive' ? 'bg-green-100 text-green-700' :
                          topic.sentiment === 'Negative' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {topic.sentiment}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${(topic.mentions / 12) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="ml-4 font-medium text-slate-600">{topic.mentions}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Word Cloud */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Cloud className="w-5 h-5 text-indigo-600" />
              Key Terms & Frequency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 min-h-[300px] flex flex-wrap items-center justify-center gap-4">
              {keyTerms.map((term, index) => (
                <span
                  key={index}
                  className={`${term.size} font-bold transition-all duration-300 hover:scale-110 cursor-pointer`}
                  style={{
                    color: `hsl(${(term.frequency * 20) % 360}, 70%, 50%)`,
                    opacity: Math.max(0.6, term.frequency / 18)
                  }}
                  title={`${term.term}: ${term.frequency} mentions, ${term.words} word${term.words > 1 ? 's' : ''}`}
                >
                  {term.term}
                </span>
              ))}
            </div>
            <div className="mt-4 text-center text-sm text-slate-500">
              <p>Hover over terms to see frequency count and word count. Larger text indicates higher frequency of mentions.</p>
            </div>
          </CardContent>
        </Card>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">100</div>
              <div className="text-sm text-slate-600">Total Comments Analyzed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-slate-600">Unique Organizations</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-sm text-slate-600">Act Sections Discussed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
              <div className="text-sm text-slate-600">Classification Accuracy</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
