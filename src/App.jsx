import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, CreditCard, Building2, TrendingUp, Zap, Map, Plane, Train, Lock, ArrowRight, Check, Users, Banknote, Wifi, Clock, AlertCircle, ArrowUpRight } from 'lucide-react';
import InvestorLanding from './InvestorLanding';

const EUCreditPrototype = () => {
  const [currentPhase, setCurrentPhase] = useState('landing');
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    country: '',
    status: '',
    step: 0
  });
  const [cardApplied, setCardApplied] = useState(false);
  const [bankFeatures, setBankFeatures] = useState(false);
  const [creditScore, setCreditScore] = useState(320);
  const [rewardsPoints, setRewardsPoints] = useState(0);
  const [showInvestorCallout, setShowInvestorCallout] = useState(false);
  const [showInvestorPage, setShowInvestorPage] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [autoPlayStep, setAutoPlayStep] = useState(0);
  const [showAutoDemoBriefing, setShowAutoDemoBriefing] = useState(false);

  // Story-driven auto-play demo sequence for investors
  const autoPlaySequence = [
    {
      scene: 'story-setup',
      delay: 3500,
      narrative: '🌍 Meet Sarah. She just moved to Berlin from Estonia for a tech job.'
    },
    {
      scene: 'story-problem',
      delay: 3500,
      narrative: '🏠 She wants to rent her first apartment in Germany. Should be easy, right?'
    },
    {
      scene: 'story-rejection',
      delay: 4000,
      narrative: '🛑 REJECTED. Bank: "No credit history in Germany."'
    },
    {
      scene: 'story-roadblock',
      delay: 4500,
      narrative: '😞 The trap: Sarah has 5 years of excellent credit in Estonia. It doesn\'t travel. She\'s trapped.'
    },
    {
      scene: 'story-traditional',
      delay: 4000,
      narrative: '❌ Traditional "solutions": 20% interest rates, €5,000 deposits, or start from zero again'
    },
    {
      scene: 'story-discovery',
      delay: 3000,
      narrative: '💡 But what if credit could travel with you?'
    },
    {
      scene: 'story-krevia',
      delay: 3000,
      narrative: '✨ Sarah discovers Krevia (built in Estonia 🇪🇪)'
    },
    {
      scene: 'story-solution-1',
      delay: 4000,
      narrative: '🔗 Step 1: Krevia connects to Estonia\'s credit bureau via secure API'
    },
    {
      scene: 'story-solution-2',
      delay: 4000,
      narrative: '🔗 Step 2: Krevia normalizes and connects to Germany\'s credit bureaus'
    },
    {
      scene: 'story-magic',
      delay: 4000,
      narrative: '✨ Magic: 5 years of credit history now visible in Germany instantly'
    },
    {
      scene: 'story-impact',
      delay: 4000,
      narrative: '✅ Apartment approved ✓ | Credit card approved ✓ | Fair rates ✓'
    },
    {
      scene: 'story-payment',
      delay: 3000,
      narrative: '💰 Sarah pays just €5/month. Her credit stays connected across the EU.'
    },
    {
      scene: 'story-portability',
      delay: 3500,
      narrative: '🚀 Next year: Sarah moves to Amsterdam. Her credit automatically travels with her.'
    },
    {
      scene: 'story-business',
      delay: 4000,
      narrative: '💼 Business: €5/month × 50M mobile EU citizens = €2.3B TAM. 100% margin SaaS.'
    },
    {
      scene: 'story-moat',
      delay: 4000,
      narrative: '🛡️ Defensible: Krevia has exclusive APIs to Equifax, Experian, TransUnion across EU'
    },
    {
      scene: 'story-metrics',
      delay: 4000,
      narrative: '📊 Unit Economics: €8 CAC | €120 LTV | 15:1 ratio | Year 3: €72M ARR at 500K users'
    },
    {
      scene: 'story-end',
      delay: 3000,
      narrative: '🎯 Krevia: Infrastructure for EU mobility. Built in Estonia. First-mover advantage.'
    },
  ];

  // Simulate credit score growth
  useEffect(() => {
    if (currentPhase === 'phase1-dashboard' && creditScore < 580) {
      const interval = setInterval(() => {
        setCreditScore(prev => Math.min(prev + 8, 580));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [currentPhase, creditScore]);

  // Auto-play demo progression
  useEffect(() => {
    if (!isAutoPlay) return;

    if (autoPlayStep >= autoPlaySequence.length) {
      setIsAutoPlay(false);
      setAutoPlayStep(0);
      return;
    }

    const currentStep = autoPlaySequence[autoPlayStep];
    setCurrentPhase(currentStep.scene || currentStep.phase);

    const timer = setTimeout(() => {
      setAutoPlayStep(prev => prev + 1);
    }, currentStep.delay);

    return () => clearTimeout(timer);
  }, [isAutoPlay, autoPlayStep]);

  const handlePhase1Signup = (data) => {
    setUserProfile(data);
    setCurrentPhase('phase1-dashboard');
    setCreditScore(320);
  };

  const handleCardApplication = () => {
    setCardApplied(true);
    setRewardsPoints(1250);
    setTimeout(() => {
      setCurrentPhase('phase2-dashboard');
    }, 1500);
  };

  const handleBankEvolution = () => {
    setBankFeatures(true);
    setCurrentPhase('phase3-dashboard');
  };

  // Render Investor Landing Page if requested
  if (showInvestorPage) {
    return (
      <InvestorLanding
        onBackToDemo={() => setShowInvestorPage(false)}
        onShowDemoBriefing={() => setShowAutoDemoBriefing(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Krevia</span>
          </div>
          <div className="flex gap-6 items-center">
            <button
              onClick={() => { setCurrentPhase('landing'); setCreditScore(320); setCardApplied(false); setBankFeatures(false); }}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
            >
              Reset Demo
            </button>
            <button
              onClick={() => setShowInvestorPage(true)}
              className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              💼 Investor View
            </button>
          </div>
        </div>
      </nav>

      {/* Auto-play Demo Briefing Screen */}
      {showAutoDemoBriefing && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 shadow-2xl max-w-md w-full text-white animate-fadeIn">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎬</div>
              <h2 className="text-3xl font-bold mb-2">The Investor Story</h2>
              <p className="text-indigo-100">3 minutes. See the problem, solution, and business case.</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-8 border border-white/20">
              <p className="text-lg font-semibold mb-6">You'll experience:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-start">
                  <span>🌍</span>
                  <span><strong>Scene 1:</strong> Meet Sarah (just landed in Berlin)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span>❌</span>
                  <span><strong>Scene 2:</strong> The problem (credit history doesn't travel)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span>🔗</span>
                  <span><strong>Scene 3:</strong> How Krevia works (API integrations)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span>✅</span>
                  <span><strong>Scene 4:</strong> The solution (unified profile across EU)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span>💰</span>
                  <span><strong>Scene 5:</strong> The business (€5/month, €2.3B TAM, 15:1 LTV:CAC)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20 text-sm">
              <p className="text-indigo-100">Auto-advancing scenes. Sit back and watch the story unfold.</p>
            </div>

            <div className="flex gap-3 flex-col sm:flex-row">
              <button
                onClick={() => {
                  setShowAutoDemoBriefing(false);
                  setIsAutoPlay(true);
                  setAutoPlayStep(0);
                  setCurrentPhase('story-setup');
                }}
                className="flex-1 bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition"
              >
                Start Story
              </button>
              <button
                onClick={() => setShowAutoDemoBriefing(false)}
                className="flex-1 bg-white/20 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/30 transition border border-white/30"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auto-play Demo Narration Overlay - Fades in/out to reveal scenes */}
      {isAutoPlay && autoPlayStep < autoPlaySequence.length && (
        <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center p-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-2xl max-w-md w-full animate-narration">
            <div className="text-sm font-semibold text-center mb-3 text-indigo-100">
              Step {autoPlayStep + 1} / {autoPlaySequence.length}
            </div>
            <p className="text-center text-lg font-semibold leading-relaxed">
              {autoPlaySequence[autoPlayStep]?.narrative}
            </p>
            <div className="mt-6 flex justify-center gap-3 opacity-80">
              <button
                onClick={() => setIsAutoPlay(false)}
                className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition pointer-events-auto text-sm"
              >
                Stop
              </button>
              <button
                onClick={() => {
                  setIsAutoPlay(false);
                  setAutoPlayStep(0);
                  setCurrentPhase('phase1-welcome');
                  setCreditScore(320);
                  setCardApplied(false);
                  setBankFeatures(false);
                }}
                className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition pointer-events-auto text-sm"
              >
                Try Interactive
              </button>
            </div>
            {/* Progress bar */}
            <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-500"
                style={{ width: `${((autoPlayStep + 1) / autoPlaySequence.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Auto-play completion overlay */}
      {!isAutoPlay && autoPlayStep >= autoPlaySequence.length && autoPlayStep > 0 && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 animate-bounce">
            <p className="text-center text-3xl font-bold mb-4">✨ Impressive, right?</p>
            <p className="text-center text-lg mb-6">
              Krevia: TAM €2.3B | LTV:CAC 15:1 | Year 3 ARR €72M
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setAutoPlayStep(0);
                  setIsAutoPlay(true);
                }}
                className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition pointer-events-auto w-full"
              >
                ▶️ Watch Again
              </button>
              <button
                onClick={() => {
                  setAutoPlayStep(0);
                  setCurrentPhase('landing');
                }}
                className="bg-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/30 transition pointer-events-auto w-full border-2 border-white"
              >
                Back to Landing
              </button>
              <button
                onClick={() => setShowInvestorPage(true)}
                className="bg-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/30 transition pointer-events-auto w-full border-2 border-white"
              >
                View Investor Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Investor Callout Overlay */}
      {showInvestorCallout && (
        <div className="fixed top-20 right-6 z-40 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6 max-w-sm shadow-xl">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-amber-900">📊 Investor Notes</h3>
            <button onClick={() => setShowInvestorCallout(false)} className="text-amber-600 text-xl">✕</button>
          </div>
          <div className="text-sm text-amber-900 space-y-2">
            <p><strong>TAM:</strong> €2.3B annually (young EU population + expats)</p>
            <p><strong>Unit Economics:</strong> €60/user/year (€5/month × 12) × 50M target users</p>
            <p><strong>Wedge:</strong> Credit identity + Travel loyalty (unserved gap)</p>
            <p><strong>Moat:</strong> Proprietary EU credit data + airline/rail partnerships</p>
            <p><strong>Path to Profitability:</strong> Year 2 (100% margin subscriptions + card fees + lending)</p>
          </div>
        </div>
      )}

      {/* STORY SCENES FOR INVESTOR DEMO */}

      {/* Story Setup: Meet Sarah */}
      {currentPhase === 'story-setup' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 px-6 py-20">
          <div className="text-center max-w-3xl">
            <div className="mb-8 animate-slideInDown">
              {/* Animated plane/person icon */}
              <div className="text-7xl mb-6 animate-bounce">✈️</div>
              <div className="text-5xl mb-6">👩</div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Meet Sarah</h1>
              <p className="text-2xl text-gray-700 mb-6">She just landed in Berlin from Estonia</p>
              <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-lg">
                <p className="text-indigo-600 font-semibold">New job starts Monday. Dream begins.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Problem: The Dream */}
      {currentPhase === 'story-problem' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-100 px-6 py-20">
          <div className="text-center max-w-3xl">
            <div className="mb-8 animate-slideInDown">
              {/* Apartment graphic */}
              <div className="flex justify-center items-end gap-4 mb-8">
                <div className="text-6xl animate-pulse">🏢</div>
                <div className="text-6xl">👩</div>
                <div className="text-5xl">📋</div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Perfect apartment found in Berlin</h1>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-amber-300 mb-6">
                <p className="text-2xl font-bold text-gray-900 mb-2">€1,200/month</p>
                <p className="text-lg text-gray-700">Modern apartment • Great neighborhood • Ready now</p>
              </div>
              <p className="text-xl text-gray-700 font-semibold">She submits her application with confidence...</p>
            </div>
          </div>
        </div>
      )}

      {/* Story Rejection */}
      {currentPhase === 'story-rejection' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-rose-100 px-6 py-20">
          <div className="text-center max-w-3xl">
            <div className="mb-8 animate-slideInDown">
              {/* Stop sign - animated shake */}
              <div className="text-9xl mb-8 animate-shake inline-block">🛑</div>
              <h1 className="text-6xl font-bold text-red-600 mb-6">APPLICATION DENIED</h1>
              <div className="bg-white rounded-xl p-8 shadow-lg border-4 border-red-400 space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl">❌</span>
                  <p className="text-2xl font-bold text-red-600">No credit history found</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-lg text-red-900 font-semibold">Landlord says:</p>
                  <p className="text-lg text-red-800">"We only accept German credit reports."</p>
                </div>
                <p className="text-gray-600 mt-4">System could not verify creditworthiness</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Roadblock */}
      {currentPhase === 'story-roadblock' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-200 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">The Invisible Wall</h1>

              {/* Visual showing credit not traveling */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Estonia */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-400">
                  <div className="text-5xl mb-3">🇪🇪</div>
                  <p className="font-bold text-lg text-gray-900 mb-2">Estonia</p>
                  <div className="bg-green-50 rounded p-3 mb-2">
                    <p className="text-sm font-semibold text-green-900">Credit Score: 750</p>
                    <p className="text-xs text-green-700">5 years history ✓</p>
                  </div>
                </div>

                {/* Blocked Arrow */}
                <div className="flex flex-col items-center justify-center">
                  <p className="text-4xl mb-2">🚫</p>
                  <p className="text-red-600 font-bold text-lg">BLOCKED</p>
                  <p className="text-xs text-gray-600 mt-2">Systems don't<br/>talk to each other</p>
                </div>

                {/* Germany */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-400">
                  <div className="text-5xl mb-3">🇩🇪</div>
                  <p className="font-bold text-lg text-gray-900 mb-2">Germany</p>
                  <div className="bg-red-50 rounded p-3 mb-2">
                    <p className="text-sm font-semibold text-red-900">Credit Score: ???</p>
                    <p className="text-xs text-red-700">No history found</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-2 border-red-300">
                <p className="text-2xl font-bold text-red-700 mb-2">The Trap</p>
                <p className="text-lg text-gray-800">Sarah has proven financial responsibility in Estonia, but in Germany she's invisible. Treated like a fresh immigrant with zero credit history.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Traditional Solutions */}
      {currentPhase === 'story-traditional' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">The "Solutions" Are Terrible</h1>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 shadow-md border-2 border-red-400 transform hover:scale-105 transition">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">💸</span>
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900">Option 1: Predatory Lender</p>
                      <p className="text-red-600 font-bold text-xl">20% APR</p>
                      <p className="text-xs text-gray-600">Desperate people pay 5x normal rates</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 shadow-md border-2 border-red-400 transform hover:scale-105 transition">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">🏦</span>
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900">Option 2: Huge Security Deposit</p>
                      <p className="text-red-600 font-bold text-xl">€5,000+ locked away</p>
                      <p className="text-xs text-gray-600">Tied up capital defeats the purpose</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 shadow-md border-2 border-red-400 transform hover:scale-105 transition">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">⏰</span>
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900">Option 3: Start From Zero</p>
                      <p className="text-red-600 font-bold text-xl">2-3 years to rebuild</p>
                      <p className="text-xs text-gray-600">Ignore 5 years of perfect payment history</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-8 font-semibold">All three options: Bad for Sarah. Good for no one.</p>
            </div>
          </div>
        </div>
      )}

      {/* Story Discovery */}
      {currentPhase === 'story-discovery' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-100 px-6 py-20">
          <div className="text-center max-w-2xl">
            <div className="mb-8 animate-slideInDown">
              <div className="text-9xl mb-6 animate-bounce transform">💡</div>
              <h1 className="text-6xl font-bold text-yellow-700 mb-4">What if...</h1>
              <div className="bg-white rounded-xl p-8 shadow-2xl border-4 border-yellow-300">
                <p className="text-2xl font-bold text-gray-900 mb-4">Credit could travel with you?</p>
                <p className="text-lg text-indigo-600 font-semibold">What if your history followed you across borders?</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Krevia */}
      {currentPhase === 'story-krevia' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-6 py-20">
          <div className="text-center max-w-3xl">
            <div className="mb-8 animate-slideInDown">
              <div className="text-9xl mb-6 animate-pulse">✨</div>
              <h1 className="text-6xl font-bold text-indigo-600 mb-2">Krevia</h1>
              <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold mb-8">
                🇪🇪 Built in Estonia
              </div>
              <p className="text-2xl text-gray-700 mb-6">The solution designed for mobile Europe</p>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-indigo-300">
                <p className="text-lg text-gray-700">Portable. Digital. Instant.</p>
                <p className="text-lg font-semibold text-indigo-600 mt-2">Everything Sarah needs in one app.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Solution Step 1 */}
      {currentPhase === 'story-solution-1' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">Step 1: Fetch Estonia Credit History</h1>

              {/* API Flow Visualization */}
              <div className="space-y-6">
                <div className="flex justify-center items-center gap-4 flex-wrap">
                  {/* Estonia Bureau */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 border-2 border-blue-400 shadow-lg min-w-[180px]">
                    <p className="text-sm text-gray-600 mb-2">Estonia</p>
                    <p className="text-2xl font-bold text-blue-900">📊 Credit Bureau</p>
                    <p className="text-xs text-gray-500 mt-2">Sarah's 5-year history</p>
                  </div>

                  {/* Arrow with animation */}
                  <div className="flex items-center gap-2">
                    <div className="text-2xl animate-pulse">🔗</div>
                    <div className="text-3xl font-bold text-indigo-600 animate-bounce">→</div>
                  </div>

                  {/* Krevia */}
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-6 border-2 border-indigo-400 shadow-lg text-white min-w-[180px]">
                    <p className="text-sm text-indigo-100 mb-2">Krevia Platform</p>
                    <p className="text-2xl font-bold">🇪🇪 API</p>
                    <p className="text-xs text-indigo-200 mt-2">Secure encrypted connection</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300 mt-8">
                  <p className="text-lg font-semibold text-green-900 mb-2">✓ Connection Established</p>
                  <p className="text-gray-700">Sarah's credit profile safely retrieved and standardized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Solution Step 2 */}
      {currentPhase === 'story-solution-2' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">Step 2: Submit to German Bureau</h1>

              {/* API Flow - Both directions */}
              <div className="space-y-6">
                {/* Top: Estonia Bureau → Krevia */}
                <div className="flex justify-center items-center gap-3">
                  <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-400">
                    <p className="text-sm text-gray-600">Estonia</p>
                    <p className="font-bold text-blue-900">📊 Data</p>
                  </div>
                  <div className="text-2xl animate-bounce">→</div>
                  <div className="bg-indigo-600 text-white rounded-lg p-4 border-2 border-indigo-400">
                    <p className="text-sm text-indigo-100">Krevia</p>
                    <p className="font-bold">⚙️ Normalize</p>
                  </div>
                </div>

                {/* Bottom: Krevia → Germany Bureau */}
                <div className="flex justify-center items-center gap-3">
                  <div className="bg-indigo-600 text-white rounded-lg p-4 border-2 border-indigo-400">
                    <p className="text-sm text-indigo-100">Krevia</p>
                    <p className="font-bold">✓ Unified Profile</p>
                  </div>
                  <div className="text-2xl animate-bounce">→</div>
                  <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-400">
                    <p className="text-sm text-gray-600">Germany</p>
                    <p className="font-bold text-yellow-900">📊 Bureau</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-300 mt-8">
                  <p className="text-2xl font-bold text-purple-900 mb-2">✨ Unified Profile Created</p>
                  <p className="text-lg text-gray-700 mb-4">Sarah's 5-year Estonian credit history now visible in Germany</p>
                  <div className="bg-white rounded p-4 inline-block">
                    <p className="text-center font-mono font-bold text-gray-900">Score: 750 | History: 5 years | Status: ✓ Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Magic */}
      {currentPhase === 'story-magic' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-6 py-20">
          <div className="text-center max-w-3xl">
            <div className="mb-8 animate-slideInDown">
              <div className="text-9xl mb-8 animate-pulse">✨</div>
              <h1 className="text-5xl font-bold text-purple-900 mb-8">The Magic</h1>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-10 shadow-2xl text-white space-y-6">
                <div className="flex justify-center items-center gap-3">
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm opacity-75">Estonia</p>
                    <p className="text-3xl font-bold">750</p>
                  </div>
                  <p className="text-4xl font-bold">+</p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm opacity-75">Germany</p>
                    <p className="text-3xl font-bold">Germany Systems</p>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-6">
                  <p className="text-xl opacity-75 mb-2">Instant Result:</p>
                  <p className="text-4xl font-bold text-yellow-300">Unified EU Profile</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 text-sm">
                  <p className="opacity-90">Sarah's complete credit history now recognized in Germany (and any EU country)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Impact */}
      {currentPhase === 'story-impact' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <h1 className="text-5xl font-bold text-green-700 mb-8">Problem Solved ✨</h1>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-8 shadow-lg border-2 border-green-400">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="text-6xl">🏢</p>
                      <div className="text-left">
                        <p className="text-lg font-bold text-gray-900">Apartment Application</p>
                        <p className="text-sm text-gray-600">Kreuzberg, Berlin</p>
                      </div>
                    </div>
                    <p className="text-5xl font-bold text-green-600 animate-pulse">✅</p>
                  </div>
                  <p className="text-lg font-semibold text-green-700 mt-4">APPROVED - Move in next month!</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-8 shadow-lg border-2 border-green-400">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="text-6xl">💳</p>
                      <div className="text-left">
                        <p className="text-lg font-bold text-gray-900">Credit Card Application</p>
                        <p className="text-sm text-gray-600">€5,000 limit approved</p>
                      </div>
                    </div>
                    <p className="text-5xl font-bold text-green-600 animate-pulse">✅</p>
                  </div>
                  <p className="text-lg font-semibold text-green-700 mt-4">APPROVED - Card activated instantly</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-8 shadow-lg border-2 border-green-400">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="text-6xl">📊</p>
                      <div className="text-left">
                        <p className="text-lg font-bold text-gray-900">Interest Rate</p>
                        <p className="text-sm text-gray-600">Offered rate vs predatory</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">4.5%</p>
                      <p className="text-sm line-through text-red-600">vs 20%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg mt-8 border-2 border-green-300">
                <p className="text-xl font-bold text-gray-900">Same person. Same credit history. Different outcome.</p>
                <p className="text-lg text-green-700 font-semibold mt-2">All because Krevia made her credit portable.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Payment */}
      {currentPhase === 'story-payment' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 px-6 py-20">
          <div className="text-center max-w-3xl">
            <div className="mb-8 animate-slideInDown">
              <p className="text-7xl mb-6">💰</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-8">The Business Model</h1>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-10 shadow-lg text-white space-y-6">
                <div>
                  <p className="text-5xl font-bold text-yellow-300 mb-2">€5</p>
                  <p className="text-2xl font-semibold text-indigo-100">per month</p>
                </div>

                <div className="border-t border-white/30 pt-6">
                  <p className="text-lg mb-4">Sarah's monthly payment to keep her credit connected across the EU</p>
                  <div className="space-y-3 text-left max-w-md mx-auto bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Recurring revenue</span>
                      <span className="font-bold">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-100">Marginal cost</span>
                      <span className="font-bold">~0%</span>
                    </div>
                    <div className="flex justify-between text-yellow-300">
                      <span className="font-bold">Gross margin</span>
                      <span className="font-bold">~95%</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 mt-8">Simple, scalable, defensible.</p>
            </div>
          </div>
        </div>
      )}

      {/* Story Portability */}
      {currentPhase === 'story-portability' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-cyan-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">Portability: The Real Magic</h1>

              {/* Animated journey across EU */}
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 font-semibold">Year 2: Sarah gets a job offer in Amsterdam</p>

                <div className="flex justify-center items-center gap-4 flex-wrap">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-400 shadow-lg">
                    <p className="text-3xl mb-2">🇩🇪</p>
                    <p className="font-bold text-gray-900">Berlin</p>
                    <p className="text-sm text-gray-600">Year 1</p>
                  </div>

                  <div className="text-3xl animate-bounce text-blue-600 font-bold">→</div>

                  <div className="bg-white rounded-lg p-6 border-2 border-blue-400 shadow-lg">
                    <p className="text-3xl mb-2">🇳🇱</p>
                    <p className="font-bold text-gray-900">Amsterdam</p>
                    <p className="text-sm text-gray-600">Year 2+</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 border-2 border-green-400 shadow-lg">
                  <p className="text-xl font-bold text-gray-900 mb-4">Her credit automatically travels with her</p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-lg text-gray-700">
                      <span className="text-2xl">✓</span>
                      <span>6-year credit history now recognized in Netherlands</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg text-gray-700">
                      <span className="text-2xl">✓</span>
                      <span>Apartment approved in 24 hours (not weeks)</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg text-gray-700">
                      <span className="text-2xl">✓</span>
                      <span>Still pays €5/month. Still has full access to finance.</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg text-gray-700">
                      <span className="text-2xl">✓</span>
                      <span>No restart. No rejection. No friction.</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-indigo-600 font-semibold mt-4">50M EU citizens need this. This is the TAM.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Business Case */}
      {currentPhase === 'story-business' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">The Total Addressable Market</h1>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-10 shadow-2xl text-white space-y-8">
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-indigo-100 uppercase tracking-wide">Market Size</p>
                  <div className="text-6xl font-bold text-yellow-300 mb-2">€5</div>
                  <p className="text-2xl">× 50M mobile EU citizens</p>
                  <p className="text-5xl font-bold text-yellow-200 mt-4">€2.3B</p>
                  <p className="text-xl text-indigo-100">Annual TAM</p>
                </div>

                <div className="border-t border-white/30 pt-6 space-y-4">
                  <p className="text-lg font-semibold mb-4">50M users includes:</p>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm opacity-75">📚 Students</p>
                      <p className="font-bold text-lg">15M+</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm opacity-75">💼 Expats</p>
                      <p className="font-bold text-lg">20M+</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm opacity-75">🚀 Digital Nomads</p>
                      <p className="font-bold text-lg">10M+</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm opacity-75">🔄 Growing 40% YoY</p>
                      <p className="font-bold text-lg">Accelerating</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-6">
                  <p className="text-lg font-semibold">100% SaaS margins = €2.1B profit potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Moat */}
      {currentPhase === 'story-moat' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <p className="text-7xl mb-6">🛡️</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-8">Why Krevia Wins</h1>

              <div className="space-y-5">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-8 shadow-lg border-2 border-purple-400 transform hover:scale-105 transition">
                  <div className="flex items-start gap-4">
                    <p className="text-5xl">🔗</p>
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900 mb-2">Exclusive Partnerships</p>
                      <p className="text-gray-700">Equifax, Experian, TransUnion APIs are locked in with revenue-share clauses. Competitors can't replicate in 2+ years.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-8 shadow-lg border-2 border-purple-400 transform hover:scale-105 transition">
                  <div className="flex items-start gap-4">
                    <p className="text-5xl">📊</p>
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900 mb-2">Historical Data Advantage</p>
                      <p className="text-gray-700">By Year 2, Krevia has 24+ months of normalized credit profiles. A competitor launching today needs 2+ years just to catch up.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-8 shadow-lg border-2 border-purple-400 transform hover:scale-105 transition">
                  <div className="flex items-start gap-4">
                    <p className="text-5xl">🌍</p>
                    <div className="text-left">
                      <p className="text-lg font-bold text-gray-900 mb-2">Network Effects</p>
                      <p className="text-gray-700">500K+ users = data gravity. Lenders will NEED Krevia's data more than Krevia needs them. We become the infrastructure layer.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mt-8 border-2 border-indigo-300">
                <p className="text-lg font-bold text-gray-900">This moat doesn't just exist—it gets stronger every quarter</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Metrics */}
      {currentPhase === 'story-metrics' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-6 py-20">
          <div className="text-center max-w-4xl">
            <div className="mb-8 animate-slideInDown">
              <p className="text-7xl mb-6">📊</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-8">Unit Economics</h1>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-300">
                  <p className="text-gray-600 text-xs uppercase font-semibold mb-2">Customer Acquisition</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">€8</p>
                  <p className="text-sm text-gray-700">CAC via partnerships</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-emerald-300">
                  <p className="text-gray-600 text-xs uppercase font-semibold mb-2">Lifetime Value</p>
                  <p className="text-4xl font-bold text-emerald-600 mb-2">€120</p>
                  <p className="text-sm text-gray-700">LTV (24 months)</p>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg p-6 shadow-lg text-white border-2 border-green-400">
                  <p className="text-xs uppercase font-semibold mb-2 text-green-100">The Ratio</p>
                  <p className="text-4xl font-bold text-yellow-300 mb-2">15:1</p>
                  <p className="text-sm text-green-100">vs 3:1 benchmark ✓</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-10 shadow-2xl text-white mb-8">
                <p className="text-lg font-semibold text-green-100 mb-2">YEAR 3 PROJECTION</p>
                <p className="text-5xl font-bold text-yellow-300 mb-3">€72M ARR</p>
                <div className="flex justify-center gap-6 text-lg">
                  <div>
                    <p className="text-green-100 text-sm">500K Users</p>
                    <p className="font-bold">Active</p>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm">€5/month</p>
                    <p className="font-bold">Recurring</p>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm">95%+ margins</p>
                    <p className="font-bold">SaaS</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                <p className="text-gray-900 font-bold">Profitability by Year 2 with unit economics like this</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story End */}
      {currentPhase === 'story-end' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 px-6 py-20">
          <div className="text-center max-w-3xl text-white">
            <div className="mb-8 animate-slideInDown">
              <div className="text-8xl mb-8 animate-pulse">🎯</div>
              <h1 className="text-6xl font-bold mb-4">Krevia</h1>
              <p className="text-2xl text-indigo-100 mb-8 font-semibold">Built in Estonia 🇪🇪</p>

              <div className="space-y-6 text-lg mb-12">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-xl font-semibold text-indigo-50 mb-2">Infrastructure Layer</p>
                  <p className="text-indigo-100">For EU mobility. Making credit portable across borders.</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-xl font-semibold text-indigo-50 mb-2">First-Mover Advantage</p>
                  <p className="text-indigo-100">Only company normalizing credit across 26 EU states with exclusive APIs</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-xl font-semibold text-indigo-50 mb-2">Defensible Moat</p>
                  <p className="text-indigo-100">Partnerships + historical data + network effects = 2+ year competitive advantage</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-xl font-semibold text-indigo-50 mb-2">Massive TAM</p>
                  <p className="text-indigo-100">€2.3B annually. 50M users × €120 LTV = €5.8B+ lifetime value</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-xl font-semibold text-indigo-50 mb-2">Unit Economics</p>
                  <p className="text-indigo-100">15:1 LTV:CAC | 95% margins | €72M ARR by Year 3</p>
                </div>
              </div>

              <div className="border-t border-white/30 pt-8 mt-8">
                <p className="text-3xl font-bold text-yellow-300 mb-2">Ready to invest?</p>
                <p className="text-lg text-indigo-100">Let's make credit portable across Europe.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Landing Page */}
      {currentPhase === 'landing' && (
        <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 inline-flex bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              🚀 Building Credit Identity Across the EU
            </div>

            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Credit. No Borders.
            </h1>

            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              The first EU-wide credit identity platform for young people, expats, and migrants. Build portable credit. Earn rewards. Travel smarter.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Unified Credit Profile</p>
                <p className="text-sm text-gray-600 mt-2">Normalized across 26 EU states</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CreditCard className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Digital Card</p>
                <p className="text-sm text-gray-600 mt-2">With travel rewards built-in</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Full Bank</p>
                <p className="text-sm text-gray-600 mt-2">Multicurrency + BNPL + lending</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowAutoDemoBriefing(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 text-lg inline-flex items-center gap-3 shadow-lg"
              >
                ▶️ Watch Demo (90 sec)
              </button>
              <button
                onClick={() => setCurrentPhase('phase1-welcome')}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 text-lg inline-flex items-center gap-3 shadow-lg"
              >
                Start Interactive Demo <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
              👉 See the full 3-phase journey: Credit Building → Digital Card with Rewards → Full Pan-EU Bank
            </p>
          </div>
        </div>
      )}

      {/* Phase 1: Welcome */}
      {currentPhase === 'phase1-welcome' && (
        <Phase1Welcome onProceed={() => setCurrentPhase('phase1-signup')} />
      )}

      {/* Phase 1: Signup */}
      {currentPhase === 'phase1-signup' && (
        <Phase1Signup onComplete={handlePhase1Signup} />
      )}

      {/* Phase 1: Dashboard */}
      {currentPhase === 'phase1-dashboard' && (
        <Phase1Dashboard
          userProfile={userProfile}
          creditScore={creditScore}
          onProceedToCard={() => setCurrentPhase('phase2-welcome')}
        />
      )}

      {/* Phase 2: Welcome */}
      {currentPhase === 'phase2-welcome' && (
        <Phase2Welcome onProceed={() => setCurrentPhase('phase2-card')} />
      )}

      {/* Phase 2: Card Application */}
      {currentPhase === 'phase2-card' && (
        <Phase2CardApplication onApply={handleCardApplication} cardApplied={cardApplied} />
      )}

      {/* Phase 2: Dashboard */}
      {currentPhase === 'phase2-dashboard' && (
        <Phase2Dashboard
          userProfile={userProfile}
          rewardsPoints={rewardsPoints}
          onProceedToBank={() => setCurrentPhase('phase3-welcome')}
        />
      )}

      {/* Phase 3: Welcome */}
      {currentPhase === 'phase3-welcome' && (
        <Phase3Welcome onProceed={() => setCurrentPhase('phase3-features')} />
      )}

      {/* Phase 3: Features */}
      {currentPhase === 'phase3-features' && (
        <Phase3Features onActivate={handleBankEvolution} />
      )}

      {/* Phase 3: Dashboard */}
      {currentPhase === 'phase3-dashboard' && (
        <Phase3Dashboard userProfile={userProfile} rewardsPoints={rewardsPoints} />
      )}
    </div>
  );
};

// ============ PHASE 1 COMPONENTS ============

const Phase1Welcome = ({ onProceed }) => (
  <div className="min-h-screen flex items-center justify-center px-6 py-20">
    <div className="max-w-2xl text-center">
      <div className="mb-8">
        <div className="inline-flex bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
          Phase 1: Credit Identity
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Build Your Portable EU Credit Score</h2>
        <p className="text-xl text-gray-600 mb-8">
          In Europe, your credit history is locked to your country. We're changing that. Build a unified credit identity that works across all 26 EU states.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600">
          <h3 className="font-bold text-gray-900 mb-2">€48 Locked Loan</h3>
          <p className="text-sm text-gray-600">Credit builder that you can't spend</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600">
          <h3 className="font-bold text-gray-900 mb-2">€5/month Service Fee</h3>
          <p className="text-sm text-gray-600">24-month credit building • Reports to EU bureaus</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-gray-900 mb-2">26 EU States</h3>
          <p className="text-sm text-gray-600">Your credit profile travels with you</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-gray-900 mb-2">Real-time Scoring</h3>
          <p className="text-sm text-gray-600">Credit score grows with each payment</p>
        </div>
      </div>

      <button
        onClick={onProceed}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 text-lg inline-flex items-center gap-3 shadow-lg w-full justify-center"
      >
        Create Your Profile <ChevronRight className="w-5 h-5" />
      </button>

      <p className="text-xs text-gray-500 mt-6 max-w-2xl mx-auto">
        💡 <strong>Full App KYC:</strong> The production version will require government ID verification, proof of address, and banking data integration for compliance. This prototype demonstrates the user experience with basic onboarding.
      </p>
    </div>
  </div>
);

const Phase1Signup = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: '',
    email: '',
    country: '',
    status: ''
  });

  const steps = [
    {
      title: "What's your name?",
      field: 'name',
      placeholder: 'e.g., Anna Schmidt',
      examples: ['Students', 'Remote workers', 'Recent graduates']
    },
    {
      title: "What's your email?",
      field: 'email',
      placeholder: 'anna@example.com',
      examples: ['We keep it secure', 'Verified with banking data']
    },
    {
      title: "Where are you in the EU?",
      field: 'country',
      placeholder: 'Select your country',
      examples: ['We normalize credit across all states']
    },
    {
      title: "Who are you?",
      field: 'status',
      placeholder: 'Select your profile',
      examples: ['Students', 'Expats', 'Migrants', 'Remote workers']
    }
  ];

  const countries = ['Estonia', 'Germany', 'France', 'Italy', 'Spain', 'Poland', 'Netherlands', 'Belgium', 'Other EU Country'];
  const statuses = ['Student', 'Young Professional', 'Expat', 'Migrant', 'Remote Worker'];

  const currentStep = steps[step];
  const isComplete = Object.values(data).every(v => v !== '');

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else if (isComplete) {
      onComplete(data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <div className="flex gap-2 mb-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{currentStep.title}</h2>
          <p className="text-sm text-gray-600 mt-3">
            {currentStep.examples[Math.floor(Math.random() * currentStep.examples.length)]}
          </p>
        </div>

        <div className="mb-8">
          {step === 0 || step === 1 ? (
            <input
              type={step === 1 ? 'email' : 'text'}
              placeholder={currentStep.placeholder}
              value={data[currentStep.field]}
              onChange={(e) => setData({...data, [currentStep.field]: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
              autoFocus
            />
          ) : (
            <select
              value={data[currentStep.field]}
              onChange={(e) => setData({...data, [currentStep.field]: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
              defaultValue=""
            >
              <option value="">{currentStep.placeholder}</option>
              {(step === 2 ? countries : statuses).map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={!data[currentStep.field]}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition text-lg"
        >
          {step === steps.length - 1 ? 'Complete Profile' : 'Next'}
        </button>
      </div>
    </div>
  );
};

const Phase1Dashboard = ({ userProfile, creditScore, onProceedToCard }) => (
  <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome, {userProfile.name}! 👋</h2>
      <p className="text-gray-600">Your EU credit profile is live. Watch your score grow as you use the platform.</p>
    </div>

    <div className="grid grid-cols-3 gap-6 mb-12">
      {/* Credit Score Card */}
      <div className="col-span-2 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
        <p className="text-sm opacity-90 mb-2">EU Credit Score</p>
        <h3 className="text-6xl font-bold mb-4">{creditScore}</h3>
        <div className="w-full bg-white/20 rounded-full h-3 mb-4">
          <div
            className="bg-white rounded-full h-3 transition-all duration-300"
            style={{width: `${(creditScore / 850) * 100}%`}}
          />
        </div>
        <p className="text-sm opacity-90">
          {creditScore < 400 ? 'Building foundation' : creditScore < 550 ? 'Good progress' : 'Excellent credit'}
        </p>
      </div>

      {/* Credit Building Service */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Banknote className="w-5 h-5 text-indigo-600" />
          <p className="text-sm text-gray-600">Credit Building Service</p>
        </div>
        <p className="text-3xl font-bold text-gray-900 mb-2">€5</p>
        <p className="text-xs text-gray-500 mb-4">/month • Reports to EU bureaus</p>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Monthly service fee</span>
              <span className="font-semibold">€5</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Duration</span>
              <span className="font-semibold">24 months</span>
            </div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-2">
            <p className="text-xs text-indigo-700 font-semibold">€120 total • 100% margin SaaS</p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-12">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-600" />
          Countries Recognized
        </h4>
        <div className="space-y-2">
          {[userProfile.country, 'France', 'Italy', '23 more EU states...'].map((c, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500" />
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          Credit Growth
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Initial score</span>
            <span className="font-semibold text-gray-900">300</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Current score</span>
            <span className="font-semibold text-green-600">+{creditScore - 300}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-sm">
            <span className="text-gray-600 font-semibold">30-day velocity</span>
            <span className="font-bold text-indigo-600">↑ {Math.round((creditScore - 300) * 1.2)}/mo</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Banknote className="w-5 h-5 text-indigo-600" />
          Loan Repayment Progress
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-gray-600">Total loan</span>
            <span className="font-semibold text-gray-900">€48</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 rounded-full h-3 transition-all duration-300"
              style={{width: `${((creditScore - 320) / 260) * 100}%`}}
            />
          </div>
          <div className="flex justify-between items-center text-xs text-gray-600 mt-2">
            <span>Paid: €{Math.round(((creditScore - 320) / 260) * 48)}</span>
            <span>Remaining: €{Math.round(48 - ((creditScore - 320) / 260) * 48)}</span>
          </div>
          <div className="text-xs text-gray-600 mt-3 pt-3 border-t">
            ~{Math.max(0, 24 - Math.round(((creditScore - 320) / 260) * 24))} months remaining
          </div>
        </div>
      </div>
    </div>

    {/* Investor Callout */}
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-12">
      <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
        <AlertCircle className="w-5 h-5" />
        💼 Investor: Business Model (Phase 1)
      </h4>
      <ul className="space-y-2 text-sm text-amber-900">
        <li>✓ €5/month × 24 months = €120 pure recurring revenue per user (100% margin SaaS)</li>
        <li>✓ No capital requirement (€48 loan is virtual/on-paper only)</li>
        <li>✓ Each user lifetime value: €120 subscription revenue + credit data + upsell opportunities</li>
        <li>✓ Target: 50K users in 6 months (students + expats + young professionals)</li>
        <li>✓ Unit acquisition cost: €8 (viral referrals + EU startup programs)</li>
        <li>✓ At 600K users: €72M ARR from subscriptions (€5 × 12 months × 600K users)</li>
      </ul>
    </div>

    <button
      onClick={onProceedToCard}
      className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg text-lg"
    >
      Proceed to Phase 2: Digital Card 💳
    </button>
  </div>
);

// ============ PHASE 2 COMPONENTS ============

const Phase2Welcome = ({ onProceed }) => (
  <div className="min-h-screen flex items-center justify-center px-6 py-20">
    <div className="max-w-2xl text-center">
      <div className="mb-8">
        <div className="inline-flex bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
          Phase 2: Digital Card + Rewards
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">The EU Card with Travel Built-In</h2>
        <p className="text-xl text-gray-600 mb-8">
          Now that your credit is established, unlock the EU's first digital card designed for travelers and mobile workers. Earn points on trains, flights, and cross-border spending.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
          <Plane className="w-6 h-6 text-blue-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Airline Partner Rewards</h3>
          <p className="text-sm text-gray-600">Earn on flights with 20+ EU carriers</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
          <Train className="w-6 h-6 text-blue-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Rail Network Bonus</h3>
          <p className="text-sm text-gray-600">1.5x points on Eurostar + national trains</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600">
          <Map className="w-6 h-6 text-indigo-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Travel Perks</h3>
          <p className="text-sm text-gray-600">Concierge, travel insurance, lounge access</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600">
          <TrendingUp className="w-6 h-6 text-indigo-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Behavior-Based Upgrades</h3>
          <p className="text-sm text-gray-600">Better rates as you spend responsibly</p>
        </div>
      </div>

      <button
        onClick={onProceed}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 text-lg inline-flex items-center gap-3 shadow-lg w-full justify-center"
      >
        Apply for Your Card <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const Phase2CardApplication = ({ onApply, cardApplied }) => {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        {!cardApplied ? (
          <>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Apply for Your Digital Card</h2>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-4">Based on your EU credit profile, you qualify for:</p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-gray-600 mb-2">Card Tier</p>
                    <p className="text-xl font-bold text-blue-600">Premium</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-gray-600 mb-2">Credit Limit</p>
                    <p className="text-xl font-bold text-blue-600">€5,000</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-gray-600 mb-2">APR</p>
                    <p className="text-xl font-bold text-blue-600">12.9%</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Instant digital card activation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">3% cash back on travel (flights, trains, hotels)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">1.5% on all other purchases</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Annual €50 travel insurance credit</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">No annual fee for first year</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-amber-900">
                  <strong>💳 Behavior-Based Upgrades:</strong> Spend >€500/month with zero missed payments? Auto-upgrade to Platinum (5% travel cashback, higher limit) in 3 months.
                </p>
              </div>

              <button
                onClick={onApply}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg text-lg"
              >
                Accept & Activate Card
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Card Activated! 🎉</h3>
              <p className="text-gray-600">Your digital card is ready to use. Loading your dashboard...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Phase2Dashboard = ({ userProfile, rewardsPoints, onProceedToBank }) => (
  <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-900 mb-2">Your Digital Card is Live 💳</h2>
    <p className="text-gray-600 mb-12">Spend smart. Earn rewards everywhere you travel.</p>

    <div className="grid grid-cols-3 gap-6 mb-12">
      {/* Card Visual */}
      <div className="col-span-2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl h-64 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
        <div>
          <p className="text-sm opacity-75">EU DIGITAL CARD</p>
          <p className="text-2xl font-bold mt-12">5478 •••• •••• 9201</p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-75">CARD HOLDER</p>
            <p className="font-semibold">{userProfile.name}</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-75">VALID THRU</p>
            <p className="font-semibold">12/27</p>
          </div>
        </div>
      </div>

      {/* Rewards Points */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <Zap className="w-8 h-8 text-yellow-500 mb-3" />
        <p className="text-sm text-gray-600 mb-2">Reward Points</p>
        <h3 className="text-4xl font-bold text-gray-900">{rewardsPoints.toLocaleString()}</h3>
        <p className="text-xs text-gray-500 mt-4">= €{Math.round(rewardsPoints / 100)}.00 in travel rewards</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-12">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Recent Spending</h4>
        <div className="space-y-4">
          {[
            { merchant: 'Lufthansa Flight', amount: '€245', points: 735, category: '✈️' },
            { merchant: 'Booking.com Hotel', amount: '€189', points: 567, category: '🏨' },
            { merchant: 'Grocery Store', amount: '€48', points: 72, category: '🛒' },
          ].map((tx, i) => (
            <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="text-sm font-semibold text-gray-900">{tx.category} {tx.merchant}</p>
                <p className="text-xs text-gray-600">{tx.amount}</p>
              </div>
              <p className="text-sm font-semibold text-blue-600">+{tx.points}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Partner Network</h4>
        <div className="space-y-3">
          {[
            { name: 'Lufthansa + Star Alliance', bonus: '3x points' },
            { name: 'Eurostar & SNCF Trains', bonus: '1.5x points' },
            { name: 'Booking.com & Hotels.com', bonus: '2x points' },
            { name: 'Ryanair & EasyJet', bonus: '3x points' },
          ].map((p, i) => (
            <div key={i} className="flex justify-between items-center">
              <p className="text-sm text-gray-700">{p.name}</p>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">{p.bonus}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Investor Callout */}
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-12">
      <h4 className="font-bold text-amber-900 mb-3">💼 Investor: Expanding Revenue (Phase 2)</h4>
      <ul className="space-y-2 text-sm text-amber-900">
        <li>✓ Card issuing fees from partner banks (0.5-1% of volume)</li>
        <li>✓ Interchange revenue (1.5-3% on €5B projected volume)</li>
        <li>✓ Partner referral fees (Lufthansa, SNCF, Booking.com pay for user acquisition)</li>
        <li>✓ Projected Phase 2 revenue: €120M+ annually at scale</li>
      </ul>
    </div>

    <button
      onClick={onProceedToBank}
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg text-lg"
    >
      Proceed to Phase 3: Full Pan-EU Bank 🏦
    </button>
  </div>
);

// ============ PHASE 3 COMPONENTS ============

const Phase3Welcome = ({ onProceed }) => (
  <div className="min-h-screen flex items-center justify-center px-6 py-20">
    <div className="max-w-2xl text-center">
      <div className="mb-8">
        <div className="inline-flex bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
          Phase 3: Pan-EU Digital Bank
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">The Full Platform Emerges</h2>
        <p className="text-xl text-gray-600 mb-8">
          Beyond credit identity and cards—a complete digital bank for a mobile Europe. Multicurrency accounts, cross-border lending, BNPL, insurance, and all your mobility data in one place.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 border-l-4 border-purple-600">
          <Banknote className="w-6 h-6 text-purple-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Multicurrency Accounts</h3>
          <p className="text-sm text-gray-600">Hold EUR, GBP, CHF, USD + 20 more at real rates</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-purple-600">
          <Building2 className="w-6 h-6 text-purple-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Cross-Border Lending</h3>
          <p className="text-sm text-gray-600">Borrow in your country, repay from another</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600">
          <Zap className="w-6 h-6 text-indigo-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">BNPL + Overdrafts</h3>
          <p className="text-sm text-gray-600">Portable credit that travels with you</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600">
          <Lock className="w-6 h-6 text-indigo-600 mb-3" />
          <h3 className="font-bold text-gray-900 mb-2">Integrated Loyalty</h3>
          <p className="text-sm text-gray-600">Credit + insurance + mobility in one dashboard</p>
        </div>
      </div>

      <button
        onClick={onProceed}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 text-lg inline-flex items-center gap-3 shadow-lg w-full justify-center"
      >
        See the Full Bank <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const Phase3Features = ({ onActivate }) => (
  <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-900 mb-12">Full Pan-EU Bank Features</h2>

    <div className="grid grid-cols-2 gap-6 mb-12">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Banknote className="w-5 h-5 text-purple-600" />
          Multicurrency Accounts
        </h4>
        <div className="space-y-3">
          {['EUR', 'GBP', 'CHF', 'USD', 'PLN', 'SEK'].map(c => (
            <div key={c} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{c}</span>
              <span className="font-mono text-gray-900">0.00</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ArrowUpRight className="w-5 h-5 text-purple-600" />
          Cross-Border Transfers
        </h4>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600 mb-2">Send to any EU bank (SEPA instant)</p>
            <p className="text-2xl font-bold text-purple-600">€0 fee</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 mt-4">
            <p className="text-xs text-purple-900">Mid-market rates + 0% markup</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Wifi className="w-5 h-5 text-purple-600" />
          Buy Now, Pay Later
        </h4>
        <div className="space-y-3">
          <p className="text-sm text-gray-600">Split purchases into installments</p>
          <div className="bg-purple-50 rounded-lg p-3">
            <p className="text-sm font-semibold text-purple-900">0% APR for 3 months</p>
            <p className="text-xs text-purple-700">Then 6.99% if extended</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-600" />
          Travel Insurance
        </h4>
        <div className="space-y-3">
          <p className="text-sm text-gray-600">Bundled coverage included</p>
          <div className="space-y-2 text-xs text-gray-600">
            <p>✓ Flight delays & cancellations</p>
            <p>✓ Medical emergency abroad</p>
            <p>✓ Luggage protection</p>
          </div>
        </div>
      </div>
    </div>

    {/* Investor Callout */}
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-12">
      <h4 className="font-bold text-amber-900 mb-3">💼 Investor: Path to €1B+ Bank (Phase 3)</h4>
      <ul className="space-y-2 text-sm text-amber-900">
        <li>✓ Lending margins: €300M+ annually on €10B AUM (3-4% spread)</li>
        <li>✓ Insurance partnerships: €50M+ in commissions (travel, auto, pet)</li>
        <li>✓ Subscription: €5-10/month for premium (vs €2 in Phase 1)</li>
        <li>✓ Path to profitability: Year 3-4 with 5M active users</li>
        <li>✓ Exit opportunity: Core bank to major EU fintech or traditional bank by Year 5</li>
      </ul>
    </div>

    <button
      onClick={onActivate}
      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg text-lg"
    >
      Activate Full Bank Features
    </button>
  </div>
);

const Phase3Dashboard = ({ userProfile, rewardsPoints }) => (
  <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Your Pan-EU Bank Dashboard 🏦</h2>
      <p className="text-gray-600">Credit identity + Card + Full banking. All in one platform.</p>
    </div>

    <div className="grid grid-cols-4 gap-6 mb-12">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
        <p className="text-sm opacity-90 mb-2">Total Assets</p>
        <h3 className="text-3xl font-bold">€45,230</h3>
        <p className="text-xs opacity-75 mt-3">+12% vs last month</p>
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Credit Score</p>
        <h3 className="text-3xl font-bold text-purple-600">680</h3>
        <p className="text-xs text-green-600">✓ Excellent</p>
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Reward Points</p>
        <h3 className="text-3xl font-bold text-purple-600">{rewardsPoints.toLocaleString()}</h3>
        <p className="text-xs text-gray-600">€{Math.round(rewardsPoints / 100)}.00 value</p>
      </div>
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Insurance Status</p>
        <h3 className="text-lg font-bold text-green-600">Active ✓</h3>
        <p className="text-xs text-gray-600">Full coverage</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-6 mb-12">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Multicurrency Balances</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">EUR</span>
            <span className="font-semibold text-gray-900">€25,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">GBP</span>
            <span className="font-semibold text-gray-900">£8,500</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">USD</span>
            <span className="font-semibold text-gray-900">$12,000</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Active Lending</h4>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600 mb-1">BNPL Installment</p>
            <p className="font-semibold text-gray-900">€450/month remaining</p>
            <p className="text-xs text-gray-500">3 payments left • 0% APR</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 mt-3">
            <p className="text-sm font-semibold text-green-900">On-time payment record</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Next Steps</h4>
        <div className="space-y-2">
          <button className="w-full text-left text-sm text-indigo-600 hover:text-indigo-700 font-semibold py-2 px-3 rounded hover:bg-indigo-50 transition">
            → Invite friends for bonus
          </button>
          <button className="w-full text-left text-sm text-indigo-600 hover:text-indigo-700 font-semibold py-2 px-3 rounded hover:bg-indigo-50 transition">
            → Book travel with rewards
          </button>
          <button className="w-full text-left text-sm text-indigo-600 hover:text-indigo-700 font-semibold py-2 px-3 rounded hover:bg-indigo-50 transition">
            → Upgrade to Platinum
          </button>
        </div>
      </div>
    </div>

    {/* Why This Works */}
    <div className="grid grid-cols-2 gap-6 mb-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-200">
        <h4 className="font-bold text-gray-900 mb-4">🎯 Why This Works for Users</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✓ One account for all 26 EU countries</li>
          <li>✓ No foreign exchange fees on travel</li>
          <li>✓ Instant cross-border payments</li>
          <li>✓ Rewards that actually matter (travel focused)</li>
          <li>✓ Insurance bundled, not optional</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
        <h4 className="font-bold text-gray-900 mb-4">🏆 Why This Works for Business</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✓ $1B+ TAM (10M+ young/mobile users)</li>
          <li>✓ Recurring revenue across all phases</li>
          <li>✓ Network effects (more users = better card benefits)</li>
          <li>✓ Defensible: partnerships hard to replicate</li>
          <li>✓ Exit potential to major bank by Year 5</li>
        </ul>
      </div>
    </div>

    {/* Final Investor Summary */}
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">💼 Full Financial Model (3-Year Projection)</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4">
          <p className="text-xs text-gray-600 mb-2">YEAR 1</p>
          <p className="text-2xl font-bold text-gray-900">€8.4M</p>
          <p className="text-xs text-gray-600">Revenue (100K users)</p>
        </div>
        <div className="bg-white rounded-lg p-4">
          <p className="text-xs text-gray-600 mb-2">YEAR 2</p>
          <p className="text-2xl font-bold text-gray-900">€65M</p>
          <p className="text-xs text-gray-600">Revenue (600K users)</p>
        </div>
        <div className="bg-white rounded-lg p-4">
          <p className="text-xs text-gray-600 mb-2">YEAR 3</p>
          <p className="text-2xl font-bold text-gray-900">€280M</p>
          <p className="text-xs text-gray-600">Revenue (2M users)</p>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-4">
          <p className="text-xs text-green-900 mb-2">PROFITABILITY</p>
          <p className="text-2xl font-bold text-green-700">Year 3</p>
          <p className="text-xs text-green-700">EBITDA margin +42%</p>
        </div>
      </div>
    </div>
  </div>
);

export default EUCreditPrototype;
