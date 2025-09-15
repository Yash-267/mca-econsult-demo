
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, Minus, Building2, Calendar, User } from "lucide-react";

const commentData = {
  positive: [
    { id: 1, text: "Section 135 CSR expenditure threshold revision is well-thought and provides much needed relief to small and medium enterprises. This will reduce compliance burden significantly.", author: "Mumbai Chamber of Commerce", date: "2024-01-15", section: "Section 135" },
    { id: 2, text: "The proposed amendments to Companies Act 2013 regarding digital filing procedures will streamline processes and reduce paperwork. Highly supportive of this digitization initiative.", author: "FICCI Representative", date: "2024-01-14", section: "Digital Filing" },
    { id: 3, text: "Amendment to allow virtual AGMs permanently is excellent. This will reduce costs for companies and increase shareholder participation across geographical boundaries.", author: "Indian Institute of Corporate Affairs", date: "2024-01-13", section: "AGM Provisions" },
    { id: 4, text: "The clarification on CSR reporting timelines under Section 135 removes ambiguity and provides clear guidance to corporate entities. This is a positive step forward.", author: "Confederation of Indian Industry", date: "2024-01-12", section: "Section 135" },
    { id: 5, text: "Proposed reduction in compliance requirements for One Person Companies will boost entrepreneurship and startup ecosystem in India. Fully endorse this change.", author: "Startup India Alliance", date: "2024-01-11", section: "OPC Regulations" },
    { id: 6, text: "The amendment allowing audit exemption for private companies with lower turnover thresholds will reduce regulatory burden for small businesses.", author: "ASSOCHAM", date: "2024-01-10", section: "Audit Provisions" },
    { id: 7, text: "Enhanced disclosure requirements for related party transactions will improve corporate governance and transparency. This is aligned with international best practices.", author: "Securities Law Expert", date: "2024-01-09", section: "Related Party Transactions" },
    { id: 8, text: "The introduction of simplified merger procedures for holding-subsidiary companies is pragmatic and will facilitate easier corporate restructuring.", author: "Corporate Law Institute", date: "2024-01-08", section: "Merger Provisions" },
    { id: 9, text: "Amendment to allow electronic execution of documents will modernize corporate procedures and align with global digital transformation trends.", author: "Digital India Foundation", date: "2024-01-07", section: "Document Execution" },
    { id: 10, text: "The provision for fast-track closure of dormant companies will help clean up the registry and improve ease of doing business metrics.", author: "Business Process Association", date: "2024-01-06", section: "Company Closure" },
    { id: 11, text: "Changes to Board meeting requirements allowing flexible scheduling will accommodate modern business practices while maintaining governance standards.", author: "Independent Directors Association", date: "2024-01-05", section: "Board Meetings" },
    { id: 12, text: "The amendment permitting companies to maintain registers electronically will reduce storage costs and improve accessibility of corporate records.", author: "Corporate Secretary Institute", date: "2024-01-04", section: "Register Maintenance" },
    { id: 13, text: "Revised thresholds for mandatory rotation of statutory auditors balances audit independence with practical implementation challenges.", author: "Institute of Chartered Accountants", date: "2024-01-03", section: "Auditor Rotation" },
    { id: 14, text: "The provision allowing companies to issue shares at discount under specific circumstances provides necessary flexibility for capital raising.", author: "Investment Banking Association", date: "2024-01-02", section: "Share Issuance" },
    { id: 15, text: "Amendment to CSR implementation timeline provides adequate buffer for companies to plan and execute CSR activities effectively.", author: "CSR Network India", date: "2024-01-01", section: "Section 135" },
    { id: 16, text: "The clarification on definition of 'material subsidiary' will help companies better understand their compliance obligations under governance frameworks.", author: "Governance Advisory Council", date: "2023-12-30", section: "Subsidiary Regulations" },
    { id: 49, text: "Allowing for a single board meeting for approval of related party transactions simplifies governance for conglomerates.", author: "Diversified Business Group", date: "2024-01-16", section: "Related Party Transactions" },
    { id: 50, text: "The move to decriminalize certain minor offences under the Companies Act is a welcome step towards promoting ease of business.", author: "Legal Reform Think Tank", date: "2024-01-17", section: "Decriminalization" },
    { id: 51, text: "Extending the tenure of independent directors provides stability and deeper institutional knowledge on boards.", author: "Director's Guild", date: "2024-01-18", section: "Independent Directors" },
    { id: 52, text: "The new framework for Social Stock Exchange is a visionary step for mobilizing capital for social enterprises.", author: "Social Impact Fund", date: "2024-01-19", section: "Social Stock Exchange" },
    { id: 53, text: "Simplifying the process for alteration of share capital will provide greater flexibility to companies to manage their capital structure.", author: "Capital Markets Advisory", date: "2024-01-20", section: "Share Capital" },
    { id: 54, text: "We applaud the introduction of a mediation and conciliation panel for corporate disputes, reducing the burden on tribunals.", author: "Arbitration Council of India", date: "2024-01-21", section: "Dispute Resolution" },
    { id: 55, text: "The relaxation of norms for Employee Stock Options (ESOPs) in startups will help attract and retain top talent.", author: "NASSCOM", date: "2024-01-22", section: "ESOPs" },
    { id: 56, text: "Creating a specific framework for Producer Companies is a great initiative to support the agrarian economy.", author: "Farmer Producer Organisation Consortium", date: "2024-01-23", section: "Producer Companies" },
    { id: 57, text: "The introduction of a 'business responsibility and sustainability report' framework aligns India with global ESG standards.", author: "Sustainability Forum", date: "2024-01-24", section: "ESG Reporting" },
    { id: 58, text: "Allowing companies to contribute CSR funds to R&D activities in science and technology is a forward-looking policy.", author: "Science & Tech Foundation", date: "2024-01-25", section: "Section 135" },
    { id: 59, text: "The clarity provided on 'significant beneficial ownership' rules is a major step in enhancing corporate transparency.", author: "Corporate Governance Watch", date: "2024-01-26", section: "SBO Rules" },
    { id: 60, text: "We support the provision allowing Nidhi companies to have greater operational flexibility.", author: "Nidhi Companies Association", date: "2024-01-27", section: "Nidhi Companies" },
    ...Array.from({ length: 32 }, (_, i) => ({
      id: 61 + i,
      text: "This is a supportive comment placeholder. The changes proposed are positive for the industry.",
      author: "Industry Body " + (i + 1),
      date: `2024-02-${(i % 28) + 1}`,
      section: ["Section 135", "Audit Provisions", "Digital Filing"][i % 3]
    }))
  ].flat(),
  negative: [
    { id: 17, text: "Penalty provisions under Clause 12 are excessively harsh for startups and SMEs. The proposed fines of up to Rs 25 lakh will severely impact small businesses.", author: "Small Business Federation", date: "2024-01-15", section: "Penalty Provisions" },
    { id: 18, text: "The timeline for filing annual CSR reports is too aggressive. Companies need at least 6 months post-financial year to compile comprehensive CSR data.", author: "Corporate CSR Council", date: "2024-01-14", section: "Section 135" },
    { id: 19, text: "Mandatory quarterly compliance reporting will increase administrative burden without proportionate benefits. This will disproportionately affect smaller companies.", author: "SME Chamber", date: "2024-01-13", section: "Compliance Reporting" },
    { id: 20, text: "The proposed changes to director liability provisions are unclear and may expose independent directors to unnecessary legal risks, deterring quality appointments.", author: "Independent Directors Forum", date: "2024-01-12", section: "Director Liability" },
    { id: 21, text: "Enhanced KYC requirements for company registration will significantly delay incorporation process and increase compliance costs for new businesses.", author: "Startup Legal Network", date: "2024-01-11", section: "Company Registration" },
    { id: 22, text: "The amendment requiring physical presence for certain board resolutions undermines the flexibility achieved through digital transformation initiatives.", author: "Technology Industry Association", date: "2024-01-10", section: "Board Resolutions" },
    { id: 23, text: "Increased threshold for private placement disclosure will reduce transparency and may not serve investor protection objectives adequately.", author: "Investor Protection Association", date: "2024-01-09", section: "Private Placement" },
    { id: 24, text: "The proposed audit trail requirements for electronic records are technically complex and may not be feasible for smaller companies without robust IT infrastructure.", author: "Audit Technology Forum", date: "2024-01-08", section: "Electronic Records" },
    { id: 25, text: "Changes to related party transaction approval thresholds are too conservative and may hinder legitimate business transactions within corporate groups.", author: "Corporate Group Alliance", date: "2024-01-07", section: "Related Party Transactions" },
    { id: 26, text: "The mandatory ESG reporting requirements lack clear guidelines and may create compliance uncertainty for companies across different sectors.", author: "Manufacturing Association", date: "2024-01-06", section: "ESG Reporting" },
    { id: 27, text: "Proposed changes to share buyback provisions are restrictive and may limit companies' ability to return surplus cash to shareholders effectively.", author: "Shareholder Rights Group", date: "2024-01-05", section: "Share Buyback" },
    { id: 28, text: "The amendment to whistleblower protection mechanisms lacks adequate safeguards and may expose companies to frivolous complaints.", author: "Corporate Risk Management Institute", date: "2024-01-04", section: "Whistleblower Provisions" },
    { id: 29, text: "Enhanced disclosure requirements for executive compensation may breach confidentiality and competitive positioning of companies in talent acquisition.", author: "HR Leadership Council", date: "2024-01-03", section: "Executive Compensation" },
    { id: 30, text: "The proposed timeline for conversion of public companies to private is too short and doesn't provide adequate time for shareholder consultation.", author: "Public Company Association", date: "2024-01-02", section: "Company Conversion" },
    { id: 31, text: "Changes to foreign investment approval procedures may slow down FDI inflows and affect India's position as an investment destination.", author: "Foreign Investment Forum", date: "2024-01-01", section: "Foreign Investment" },
    { id: 32, text: "The amendment requiring board diversity disclosures lacks implementation guidance and may create compliance challenges for traditional industries.", author: "Traditional Industries Council", date: "2023-12-30", section: "Board Diversity" },
    { id: 109, text: "Requiring cost audit for certain sectors without a clear rationale adds another layer of compliance burden.", author: "Cost Accountants Body", date: "2024-02-01", section: "Cost Audit" },
    { id: 110, text: "The definition of 'control' is still ambiguous and could lead to litigation between investors and promoters.", author: "Venture Capital Association", date: "2024-02-02", section: "Definitions" },
    { id: 111, text: "The proposed norms for valuation by registered valuers are overly prescriptive and limit professional judgment.", author: "Valuers Association", date: "2024-02-03", section: "Valuation Norms" },
    { id: 112, text: "Restrictions on layers of subsidiaries are impractical for large, diversified international conglomerates.", author: "Global Business Council", date: "2024-02-04", section: "Subsidiary Layers" }
  ],
  neutral: [
    { id: 33, text: "Section 135 amendments require further clarification on implementation timeline. While the intent is clear, practical aspects need more detailed guidelines.", author: "Corporate Law Society", date: "2024-01-15", section: "Section 135" },
    { id: 34, text: "The proposed changes to audit committee composition have merit but implementation details need to be worked out through stakeholder consultations.", author: "Audit Committee Institute", date: "2024-01-14", section: "Audit Committee" },
    { id: 35, text: "Amendment to companies tribunal procedures could improve efficiency if supported by adequate infrastructure and trained personnel.", author: "Legal Process Reform Committee", date: "2024-01-13", section: "Tribunal Procedures" },
    { id: 36, text: "The revision of materiality thresholds for disclosure needs to balance transparency requirements with operational practicality for different company sizes.", author: "Disclosure Standards Board", date: "2024-01-12", section: "Materiality Thresholds" },
    { id: 37, text: "Proposed changes to shareholder voting mechanisms have potential benefits but require careful consideration of minority shareholder rights.", author: "Shareholder Advocacy Group", date: "2024-01-11", section: "Voting Mechanisms" },
    { id: 38, text: "The amendment to company secretary appointment requirements balances professional standards with practical availability of qualified professionals.", author: "Company Secretary Association", date: "2024-01-10", section: "Company Secretary" },
    { id: 39, text: "Changes to annual return filing format may improve data quality but transition support will be crucial for successful implementation.", author: "Filing Standards Committee", date: "2024-01-09", section: "Annual Returns" },
    { id: 40, text: "The proposed risk management framework disclosure requirements align with global practices but need sector-specific customization guidelines.", author: "Risk Management Professionals", date: "2024-01-08", section: "Risk Management" },
    { id: 41, text: "Amendment to corporate social responsibility fund utilization provides flexibility but requires robust monitoring mechanisms to prevent misuse.", author: "Development Sector Coalition", date: "2024-01-07", section: "CSR Utilization" },
    { id: 42, text: "The revision of director remuneration disclosure norms needs to consider industry benchmarks and competitive confidentiality concerns.", author: "Remuneration Committee Forum", date: "2024-01-06", section: "Director Remuneration" },
    { id: 43, text: "Changes to subsidiary company governance requirements have sound policy objectives but implementation timelines need to be realistic.", author: "Group Companies Association", date: "2024-01-05", section: "Subsidiary Governance" },
    { id: 44, text: "The proposed amendment to transfer pricing documentation aligns with international standards but requires adequate guidance and transition period.", author: "Tax Advisory Council", date: "2024-01-04", section: "Transfer Pricing" },
    { id: 45, text: "Amendment to corporate restructuring approval procedures could streamline processes if supported by clear regulatory guidelines.", author: "Restructuring Professionals", date: "2024-01-03", section: "Corporate Restructuring" },
    { id: 46, text: "The changes to nominee director provisions address governance concerns but practical implications for family-owned businesses need consideration.", author: "Family Business Council", date: "2024-01-02", section: "Nominee Directors" },
    { id: 47, text: "Proposed revision to insolvency and bankruptcy code interface requires careful coordination between regulatory authorities to avoid conflicts.", author: "Insolvency Professionals Association", date: "2024-01-01", section: "Insolvency Interface" },
    { id: 48, text: "The amendment to corporate governance reporting standards has potential to improve transparency but cost-benefit analysis for smaller companies is needed.", author: "Governance Rating Agency", date: "2023-12-30", section: "Governance Reporting" },
    { id: 113, text: "The impact of the proposed data localization norms on foreign companies operating in India needs further study.", author: "International Chamber of Commerce", date: "2024-02-05", section: "Data Localization" },
    { id: 114, text: "We request a comparative analysis of the proposed changes with regulations in Singapore and the UK.", author: "Global Competitiveness Council", date: "2024-02-06", section: "Comparative Analysis" },
    { id: 115, text: "The interaction between these amendments and SEBI regulations for listed entities needs to be explicitly clarified.", author: "Stock Exchange Board", date: "2024-02-07", section: "SEBI Overlap" },
    { id: 116, text: "A transition period of at least 12 months is requested to allow companies to adapt their systems and processes.", author: "Corporate Compliance Forum", date: "2024-02-08", section: "Transition Period" }
  ]
};

const summaries = {
  positive: "Stakeholders strongly support the proposed amendments, particularly praising the digitization initiatives, reduced compliance burden for SMEs, and enhanced flexibility in corporate procedures. Key appreciated changes include CSR threshold revisions, virtual AGM provisions, and streamlined merger procedures. The overall sentiment reflects optimism about reduced regulatory burden and improved ease of doing business.",
  negative: "Concerns focus primarily on excessive penalty provisions, aggressive compliance timelines, and increased administrative burden on smaller companies. Stakeholders express worry about director liability provisions, complex technical requirements, and potential delays in business processes. The main theme is that while reforms are needed, the proposed changes may disproportionately impact SMEs and startups.",
  neutral: "Balanced perspectives highlighting both merits and challenges of proposed amendments. Stakeholders generally support the policy intent but emphasize the need for clearer implementation guidelines, adequate transition periods, and sector-specific customization. Comments reflect cautious optimism with calls for stakeholder consultations and phased implementation approaches."
};

export default function SentimentTabs() {
  const [activeTab, setActiveTab] = useState("positive");

  const renderComments = (comments, sentiment) => {
    const icon = sentiment === "positive" ? ThumbsUp : sentiment === "negative" ? ThumbsDown : Minus;
    const IconComponent = icon;
    
    return (
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-blue-500">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-full ${
                  sentiment === "positive" ? "bg-green-100 text-green-600" : 
                  sentiment === "negative" ? "bg-red-100 text-red-600" : 
                  "bg-yellow-100 text-yellow-600"
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 leading-relaxed mb-3">{comment.text}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 text-slate-500">
                      <User className="w-3 h-3" />
                      <span>{comment.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{comment.date}</span>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {comment.section}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Sentiment Analysis</h2>
        <p className="text-slate-600">AI-categorized stakeholder feedback on proposed amendments</p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-6 pt-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-100">
            <TabsTrigger value="positive" className="flex items-center gap-2 data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
              <ThumbsUp className="w-4 h-4" />
              In Favour ({commentData.positive.length})
            </TabsTrigger>
            <TabsTrigger value="negative" className="flex items-center gap-2 data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
              <ThumbsDown className="w-4 h-4" />
              Against ({commentData.negative.length})
            </TabsTrigger>
            <TabsTrigger value="neutral" className="flex items-center gap-2 data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700">
              <Minus className="w-4 h-4" />
              Neutral ({commentData.neutral.length})
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6">
          <TabsContent value="positive" className="space-y-6 mt-0">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  AI Summary - Positive Sentiment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">{summaries.positive}</p>
              </CardContent>
            </Card>
            {renderComments(commentData.positive, "positive")}
          </TabsContent>

          <TabsContent value="negative" className="space-y-6 mt-0">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  AI Summary - Critical Concerns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">{summaries.negative}</p>
              </CardContent>
            </Card>
            {renderComments(commentData.negative, "negative")}
          </TabsContent>

          <TabsContent value="neutral" className="space-y-6 mt-0">
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  AI Summary - Balanced Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700">{summaries.neutral}</p>
              </CardContent>
            </Card>
            {renderComments(commentData.neutral, "neutral")}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
