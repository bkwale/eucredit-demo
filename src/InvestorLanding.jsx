import React from 'react';
import { ChevronRight, Download, Calendar, TrendingUp, Shield, Users, Target } from 'lucide-react';

export default function InvestorLanding({ onBackToDemo }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-700">
        <div className="text-2xl font-bold text-indigo-400">Krevia</div>
        <button
          onClick={onBackToDemo}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
        >
          Back to Demo
        </button>
      </nav>

      {/* HERO: Investment Thesis */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-indigo-400 font-semibold text-sm tracking-widest">THE OPPORTUNITY</span>
          <h1 className="text-6xl font-bold mt-4 leading-tight">
            Portable Credit Identity for 50M Mobile EU Citizens
          </h1>
          <p className="text-xl text-slate-300 mt-6 max-w-3xl leading-relaxed">
            When Europeans move across borders, their credit disappears. Banks say no. Startups fail.
            <span className="text-indigo-300 font-semibold"> Krevia fixes this infrastructure gap.</span>
          </p>
        </div>

        {/* Key Numbers Row */}
        <div className="grid grid-cols-4 gap-6 mt-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-indigo-400 text-sm font-semibold uppercase">TAM</div>
            <div className="text-4xl font-bold mt-2">EUR 2.3B</div>
            <div className="text-slate-400 text-sm mt-1">Annual market opportunity</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-indigo-400 text-sm font-semibold uppercase">Addressable</div>
            <div className="text-4xl font-bold mt-2">50M+</div>
            <div className="text-slate-400 text-sm mt-1">Mobile EU citizens</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-indigo-400 text-sm font-semibold uppercase">Growth</div>
            <div className="text-4xl font-bold mt-2">40%</div>
            <div className="text-slate-400 text-sm mt-1">Annual market growth</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-indigo-400 text-sm font-semibold uppercase">Year 3 ARR</div>
            <div className="text-4xl font-bold mt-2">EUR 72M</div>
            <div className="text-slate-400 text-sm mt-1">at 500K users</div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="px-8 py-20 bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <span className="text-indigo-400 font-semibold text-sm tracking-widest">WHY NOW</span>
          <h2 className="text-4xl font-bold mt-4 mb-12">Why This Market is Exploding</h2>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Market Tailwinds</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span><strong>4.5M+</strong> EU citizens abroad (up 40% since 2010)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span><strong>100K+</strong> digital nomad visa applicants annually</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span><strong>70%</strong> of Gen Z expects multi-country careers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span><strong>PSD2/3</strong> and <strong>eIDAS</strong> create regulatory tailwinds</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Why Incumbents Fail</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong>Banks</strong> are geography-locked (national focus)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong>Fintechs</strong> lack credit authority & data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong>Credit bureaus</strong> are fragmented by country</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong>No one</strong> owns the infrastructure layer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UNIT ECONOMICS */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <span className="text-indigo-400 font-semibold text-sm tracking-widest">VENTURE METRICS</span>
        <h2 className="text-4xl font-bold mt-4 mb-12">Unit Economics That Work</h2>

        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-12">
          <div className="grid grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-indigo-300">Customer Acquisition</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">CAC (Customer Acquisition Cost)</div>
                  <div className="text-5xl font-bold text-indigo-400 mt-2">EUR 8</div>
                  <div className="text-slate-400 text-sm mt-2">Via partnerships + performance marketing</div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-slate-400 text-sm uppercase tracking-wide">Payback Period</div>
                  <div className="text-5xl font-bold text-green-400 mt-2">1.2 months</div>
                  <div className="text-slate-400 text-sm mt-2">Fastest in fintech</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-indigo-300">Lifetime Value</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">LTV (Lifetime Value)</div>
                  <div className="text-5xl font-bold text-indigo-400 mt-2">EUR 120</div>
                  <div className="text-slate-400 text-sm mt-2">EUR 60 subscription + EUR 40 interchange + EUR 20 partnerships</div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-slate-400 text-sm uppercase tracking-wide">LTV:CAC Ratio</div>
                  <div className="text-5xl font-bold text-green-400 mt-2">15:1</div>
                  <div className="text-slate-400 text-sm mt-2">Benchmark is 3:1 (you're 5x better)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <h4 className="text-lg font-semibold mb-6 text-indigo-300">Why This Matters</h4>
            <p className="text-slate-300 leading-relaxed">
              Most SaaS companies struggle to achieve 3:1. Our 15:1 ratio means every EUR 1 you spend on customer acquisition returns EUR 15 in lifetime value.
              <span className="text-indigo-300 font-semibold"> This is venture-scale unit economics that prove product-market fit.</span>
            </p>
          </div>
        </div>
      </section>

      {/* DEFENSIBILITY */}
      <section className="px-8 py-20 bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <span className="text-indigo-400 font-semibold text-sm tracking-widest">COMPETITIVE MOATS</span>
          <h2 className="text-4xl font-bold mt-4 mb-12">Why We Win (And Why You Can't)</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-semibold">Regulatory Licensing</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Operating as a credit reporting intermediary requires 12-18 months of licensing per EU market. We're securing these now in UK/Germany/France.
              </p>
              <p className="text-indigo-300 font-semibold">→ New entrant faces 18+ month delay, starting from behind</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-semibold">Exclusive Partnerships</h3>
              </div>
              <p className="text-slate-300 mb-4">
                We're locking in Equifax, Experian, TransUnion, Plaid, TrueLayer, Wise, Lufthansa, SNCF with revenue-sharing clauses.
              </p>
              <p className="text-indigo-300 font-semibold">→ Economically irrational for them to integrate competitors</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-semibold">Historical Data Moat</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Credit scoring requires 24+ months of user payment history. By Year 2, we'll own normalized data across 26 countries.
              </p>
              <p className="text-indigo-300 font-semibold">→ Competitors need 2+ years just to accumulate from zero</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-semibold">Network Effects</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Users with 12+ months of Krevia history have high switching costs. By Year 3 with 500K+ users, we own EU mobility data.
              </p>
              <p className="text-indigo-300 font-semibold">→ Lenders need us more than we need them</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <span className="text-indigo-400 font-semibold text-sm tracking-widest">PROOF OF EXECUTION</span>
        <h2 className="text-4xl font-bold mt-4 mb-12">We're Not Just an Idea</h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="text-3xl font-bold text-indigo-400 mb-2">✓</div>
            <h3 className="text-lg font-semibold mb-2">MVP Built</h3>
            <p className="text-slate-400">Fully functional prototype live. All Phase 1 features working. Deployed to production.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="text-3xl font-bold text-indigo-400 mb-2">✓</div>
            <h3 className="text-lg font-semibold mb-2">40+ User Interviews</h3>
            <p className="text-slate-400">Across London, Berlin, Paris. 100% pain point confirmation. Product-market fit validated.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="text-3xl font-bold text-indigo-400 mb-2">✓</div>
            <h3 className="text-lg font-semibold mb-2">Team Assembled</h3>
            <p className="text-slate-400">CEO + CTO + COO + PM. 15+ years fintech + compliance + infrastructure experience.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="text-3xl font-bold text-indigo-400 mb-2">✓</div>
            <h3 className="text-lg font-semibold mb-2">Investor Materials Ready</h3>
            <p className="text-slate-400">8-slide pitch deck, financial model, cap table. Professional, polished, ready to present.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="text-3xl font-bold text-indigo-400 mb-2">✓</div>
            <h3 className="text-lg font-semibold mb-2">Early Partnerships</h3>
            <p className="text-slate-400">Discussions initiated with credit bureaus and open banking providers. Technical scoping in progress.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="text-3xl font-bold text-indigo-400 mb-2">✓</div>
            <h3 className="text-lg font-semibold mb-2">Estonia-Based</h3>
            <p className="text-slate-400">Registered and developing in Estonia. Leveraging digital infrastructure and EU regulatory advantages.</p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-8 py-20 bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <span className="text-indigo-400 font-semibold text-sm tracking-widest">EXECUTION ROADMAP</span>
          <h2 className="text-4xl font-bold mt-4 mb-12">Path to Series A</h2>

          <div className="space-y-6">
            <div className="flex gap-8">
              <div className="w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-indigo-400">Q1 2026</div>
                <div className="text-sm text-slate-400 mt-1">Jan - Mar</div>
              </div>
              <div className="flex-grow bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Close Seed Round</h3>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• Secure EUR 200k-EUR 300k funding</li>
                  <li>• Finalize LOIs from 2+ credit bureaus</li>
                  <li>• Complete KYC/AML infrastructure</li>
                  <li>• Launch closed beta waitlist (target: 1,000)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-indigo-400">Q2 2026</div>
                <div className="text-sm text-slate-400 mt-1">Apr - Jun</div>
              </div>
              <div className="flex-grow bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Validate Unit Economics</h3>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• 500+ beta users (London, Berlin, Paris, Barcelona)</li>
                  <li>• 30%+ engagement, EUR 5/month conversion at 25%+</li>
                  <li>• EUR 8 CAC validation via partnerships</li>
                  <li>• Initial licensing approvals in 1-2 markets</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-indigo-400">Q3 2026</div>
                <div className="text-sm text-slate-400 mt-1">Jul - Sep</div>
              </div>
              <div className="flex-grow bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Expand & Prepare</h3>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• 1,500+ beta users across 8+ EU markets</li>
                  <li>• Launch referral program (EUR 10 per convert)</li>
                  <li>• Initiate Series A conversations with proven traction</li>
                  <li>• Full licensing approval in 3+ jurisdictions</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-32 flex-shrink-0">
                <div className="text-2xl font-bold text-indigo-400">Q4 2026</div>
                <div className="text-sm text-slate-400 mt-1">Oct - Dec</div>
              </div>
              <div className="flex-grow bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Public Launch</h3>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• Exit beta → public launch in 5 core EU markets</li>
                  <li>• 10,000+ total users milestone</li>
                  <li>• On pace for EUR 600k ARR with 500K users by Year 3</li>
                  <li>• Series A ready with proven PMF and traction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Invest?</h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
            We're raising EUR 200k-EUR 300k in seed capital to launch beta, validate unit economics, and dominate EU portable credit.
          </p>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <a
              href="/Krevia-Pitch-Deck.pdf"
              download
              className="flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg hover:bg-indigo-50 transition cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Pitch Deck
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>

          <p className="text-sm text-indigo-100 mt-8">
            Questions? Email: founders@krevia.eu
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-12 border-t border-slate-700 text-center text-slate-400 text-sm">
        <p>Krevia | Portable Credit Identity for Mobile EU Citizens | Developed & Registered in Estonia</p>
      </footer>
    </div>
  );
}
