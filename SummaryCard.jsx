import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertCircle, CheckCircle, Clock, Lightbulb } from "lucide-react";

export default function SummaryCard() {
  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-slate-900">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            Next_code AI Analysis Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">60</div>
              <div className="text-base text-slate-600">Supportive Comments</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-7 h-7 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-1">20</div>
              <div className="text-base text-slate-600">Critical Concerns</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-7 h-7 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-1">20</div>
              <div className="text-base text-slate-600">Neutral/Mixed Views</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              Key Insights from Stakeholder Feedback
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-slate-800 mb-3">Most Appreciated Changes:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-sm px-3 py-1">CSR Threshold Revision</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-sm px-3 py-1">Digital Filing Procedures</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-sm px-3 py-1">Virtual AGM Provisions</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-sm px-3 py-1">SME Compliance Reduction</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-slate-800 mb-3">Primary Concerns:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-100 text-red-800 border-red-300 text-sm px-3 py-1">Excessive Penalty Provisions</Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-300 text-sm px-3 py-1">Aggressive Timelines</Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-300 text-sm px-3 py-1">Director Liability Risks</Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-300 text-sm px-3 py-1">Administrative Burden</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-slate-800 mb-3">Areas Needing Clarification:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-sm px-3 py-1">Implementation Guidelines</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-sm px-3 py-1">Transition Periods</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-sm px-3 py-1">Sector-Specific Rules</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-sm px-3 py-1">Monitoring Mechanisms</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 md:p-8 text-white shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl">Next_code AI Recommendations</h3>
            </div>
            <div className="text-base md:text-lg leading-relaxed space-y-4">
              <p>
                The analysis of 100 stakeholder comments reveals a predominantly positive outlook (60%), driven by strong appreciation for reforms that reduce administrative burdens and promote digitization. Stakeholders are particularly enthusiastic about changes that benefit SMEs and modernize corporate procedures.
              </p>
              <p>
                However, significant reservations persist, with 20% of comments raising critical concerns about the financial impact of new penalties and the feasibility of proposed timelines. A further 20% express conditional support, contingent on clearer implementation guidelines and phased rollouts.
              </p>
              <p>
                <strong>Our AI recommends a dual-pronged strategy:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li><strong>Maintain Momentum:</strong> Proceed with widely supported measures (e.g., virtual AGMs, digital filings) to build goodwill and demonstrate progress.</li>
                  <li><strong>Address Concerns Proactively:</strong> Initiate targeted working groups to revise the penalty structure and develop practical, phased timelines for technical compliance. This will mitigate risks for SMEs and convert neutral parties into supporters.</li>
                </ol>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
