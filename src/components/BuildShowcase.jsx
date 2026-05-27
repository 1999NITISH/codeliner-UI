import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  X,
  Clock,
  Calendar,
  User,
  Share2,
  Volume2,
  VolumeX,
  Check,
  TrendingUp,
  Cpu,
  Award
} from "lucide-react";

// ==========================================
// 1. TYPE DECLARATIONS
// ==========================================
// Removed TypeScript declarations because this file is plain JSX.

// ==========================================
// 2. STATIC KNOWLEDGE DATABASE
// ==========================================
const INSIGHTS_DATA = [
  {
    id: "digital-bank-transition",
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    readTime: "6 min read",
    hasIllustration: true,
    summary: "A strategic roadmap for legacy institutions to migrate to agile, cloud-native architectures without disrupting current retail operations.",
    content: [
      "In the modern economic landscape, traditional financial institutions face an existential choice: modernize or risk obsolescence. The transition from a legacy brick-and-mortar bank to a high-speed, digital-first entity is not merely a software upgrade; it is a fundamental shift in business model, operations, and technical culture.",
      "The first pillar of this transition is legacy core modernization. Many commercial banks still run on mainframe COBOL databases designed in the 1980s. Attempting to build real-time mobile services on top of a batch-processed ledger is a recipe for system latency and user frustration. Modern leaders must implement an 'integration layer' first, leveraging high-performance APIs, before systematically decoupling and replacing core ledger components.",
      "Another critical vector is user onboarding. Traditional banks rely on physical branch verification, which introduces friction and escalates acquisition costs. A true digital bank must deploy automated KYC (Know Your Customer) systems, using biometrics and digital identity verification, reducing typical onboarding times from days to a matter of minutes.",
      "Finally, cloud-native architecture is non-negotiable. Operating on secure cloud infrastructure allows a fintech or modern digital bank to scale instances dynamically, deploy code continuous-deployment pipelines multiple times a day, and reduce compute overhead. Navigating the strict regulatory and compliance landscape during this transition requires airtight security, detailed telemetry, and end-to-end encryption."
    ]
  },
  {
    id: "legacy-core-architecture",
    category: "GETTING STARTED",
    title: "Overcoming legacy barriers and real-time core ledgers",
    author: "David Grohl",
    date: "17/08/24",
    readTime: "8 min read",
    hasIllustration: false,
    summary: "Breaking down the key challenges of migrating monolithic banking systems to distributed microservices with zero operational downtime.",
    content: [
      "Monolithic tech stacks have locked traditional financial systems in rigid operating silos for decades. Moving away from these legacy frameworks requires a deep understanding of data consistency models, eventual consistency, and transaction isolation levels.",
      "To transition without downtime, digital banks deploy a 'strangler fig' application pattern. By gradually delegating traffic to new distributed microservices while the legacy core continues to operate in the background, architects ensure that core accounting services remain secure and active throughout the multi-phase deployment.",
      "Data synchronization is the hardest part of this journey. Running dual core systems means transactions in the new cloud database must immediately reflect in the legacy ledger. This requires highly reliable, real-time CDC (Change Data Capture) pipelines that stream ledger changes safely across legacy and modern cloud environments.",
      "Understanding these technical foundations empowers engineering leads to build resilient financial services that scale to handle millions of concurrent transactions with sub-millisecond settlement times."
    ]
  },
  {
    id: "customer-centric-onboarding",
    category: "GETTING STARTED",
    title: "Reimagining customer onboarding for digital banking",
    author: "David Grohl",
    date: "17/08/24",
    readTime: "5 min read",
    hasIllustration: false,
    summary: "Designing compliance-safe, frictionless user flows that utilize automated biometrics, document extraction, and risk profiling.",
    content: [
      "Customer acquisition is the primary battleground for digital-first retail banking. If your digital KYC funnel takes more than three minutes or demands unnecessary paperwork, user abandonment rates soar past fifty percent.",
      "Leading digital banks employ frictionless, secure onboarding flows. These platforms leverage optical character recognition (OCR) to extract driver identity card data, perform automatic liveness and selfie matching, and instantly screen candidate profiles against global AML and sanctions watchlists.",
      "This process must be governed by strict data privacy guardrails. All uploaded documents must be encrypted at-rest using customer-managed keys and stored only in secure vaults with strict access privilege auditing.",
      "By combining intuitive user interface design with high-performance automated ingestion webhooks, digital banks convert signups into funded accounts at three times the rate of legacy brick-and-mortar operations."
    ]
  }
];

// ==========================================
// 3. MINIMAL GEOMETRIC SYMBOL
// ==========================================
function FintechChevronIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-10 h-10 md:w-11 md:h-11 text-sky-400 select-none pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Left corner chevron */}
      <path
        d="M 16 34 C 16 22, 22 16, 34 16 M 26 40 C 26 30, 30 26, 40 26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top Right corner chevron */}
      <path
        d="M 84 34 C 84 22, 78 16, 66 16 M 74 40 C 74 30, 70 26, 60 26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom Right corner chevron */}
      <path
        d="M 84 66 C 84 78, 78 84, 66 84 M 74 60 C 74 70, 70 74, 60 74"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom Left corner chevron */}
      <path
        d="M 16 66 C 16 78, 22 84, 34 84 M 26 60 C 26 70, 30 74, 40 74"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ==========================================
// 4. ARTICLE DETAIL SLIDE-OUT DRAWER
// ==========================================
function ArticleDrawer({ article, onClose }) {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setSynth(window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, [article, synth]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const toggleSpeech = () => {
    if (!synth) return;

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
    } else {
      const textToRead = `${article.title}. Written by ${article.author}. ${article.content.join(" ")}`;
      const newUtterance = new SpeechSynthesisUtterance(textToRead);
      newUtterance.rate = 1.05;
      newUtterance.onend = () => setIsPlaying(false);
      newUtterance.onerror = () => setIsPlaying(false);
      synth.speak(newUtterance);
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end" id="article-drawer-container">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#020813]/80 backdrop-blur-md cursor-pointer"
        id="drawer-backdrop"
      />

      {/* Drawer content panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="relative w-full max-w-2xl h-full bg-[#040f21] border-l border-sky-950/50 shadow-2xl overflow-y-auto flex flex-col z-10"
        id="drawer-panel"
      >
        {/* Sticky action header */}
        <div className="sticky top-0 z-20 bg-[#040f21]/90 backdrop-blur-md border-b border-sky-950/50 px-6 py-4 flex items-center justify-between" id="drawer-header">
          <div className="flex items-center space-x-2" id="drawer-header-left">
            <span className="text-[10px] tracking-widest font-mono text-sky-400 font-semibold px-2 py-1 bg-sky-950/40 rounded-md border border-sky-800/20">
              {article.category}
            </span>
            <span className="text-xs text-slate-500 font-mono">|</span>
            <span className="text-xs text-sky-400/70 font-mono flex items-center gap-1">
              <Clock size={12} /> {article.readTime}
            </span>
          </div>

          <div className="flex items-center space-x-3" id="drawer-header-right">
            {/* Audio narration triggers */}
            <button
              onClick={toggleSpeech}
              title={isPlaying ? "Stop listening" : "Listen to article"}
              className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                isPlaying
                  ? "bg-sky-500/10 border-sky-500/40 text-sky-400"
                  : "bg-sky-950/20 border-slate-800/40 text-slate-400 hover:text-sky-400 hover:border-sky-500/20"
              }`}
              id="speech-toggle-btn"
            >
              {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              title="Copy article link"
              className="p-2 rounded-lg bg-sky-950/20 border border-slate-800/40 text-slate-400 hover:text-sky-400 hover:border-sky-500/20 transition-all duration-200 cursor-pointer flex items-center gap-1"
              id="share-btn"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
              {copied && <span className="text-[10px] font-mono text-emerald-400">Copied</span>}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-sky-950/20 border border-slate-800/40 text-slate-400 hover:text-rose-400 hover:border-rose-500/20 transition-all duration-200 cursor-pointer"
              id="close-drawer-btn"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="flex-1 px-8 py-10" id="drawer-body">
          <div className="max-w-xl mx-auto" id="drawer-article-container">
            {/* Metadata row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 mb-6" id="article-metadata">
              <span className="flex items-center gap-1.5 text-sky-400/80">
                <User size={13} /> {article.author}
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {article.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight font-display" id="article-title">
              {article.title}
            </h1>

            {/* Divider */}
            <div className="h-0.5 w-12 bg-sky-500/30 mb-8 rounded-full" id="article-divider" />

            {/* Lead paragraph / Summary summary */}
            <p className="text-lg text-slate-300 leading-relaxed font-light border-l-2 border-sky-500/55 pl-4 mb-8 italic" id="article-summary">
              {article.summary}
            </p>

            {/* Paragraph contents */}
            <div className="space-y-6 text-slate-300 leading-relaxed text-base" id="article-paragraphs">
              {article.content.map((paragraph, index) => (
                <p key={index} id={`para-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info brand block */}
        <div className="bg-[#030b19] border-t border-sky-950/50 p-6 text-center" id="drawer-footer">
          <p className="text-xs text-sky-500/50 font-mono">FINTECH INSIGHTS INTEL SERIES</p>
        </div>
      </motion.div>
    </div>
  );
}

// ==========================================
// 5. INSIGHTS INDEX OVERVIEW MODAL
// ==========================================
function InsightsOverviewModal({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4" id="overview-modal-container">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#020813]/90 backdrop-blur-lg cursor-pointer"
        id="modal-backdrop"
      />

      {/* Modal element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative w-full max-w-4xl max-h-[85vh] bg-[#041022] border border-sky-950/70 shadow-2xl rounded-2xl overflow-y-auto flex flex-col z-10"
        id="modal-panel"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#041022]/95 backdrop-blur-md border-b border-sky-950/50 px-6 py-5 flex items-center justify-between" id="modal-header">
          <div>
            <h2 className="text-xl font-medium tracking-tight text-white font-display" id="modal-title">
              Fintech Intelligence Hub
            </h2>
            <p className="text-xs text-sky-400/70 font-mono mt-1" id="modal-subtitle">
              REAL-TIME INSIGHT ANALYTICS & DIGITAL TRANSITION FORECASTS
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-sky-950/20 border border-slate-800/40 text-slate-400 hover:text-rose-400 hover:border-rose-500/20 transition-all duration-200 cursor-pointer"
            id="close-modal-btn"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content body */}
        <div className="p-8 space-y-8 overflow-y-auto flex-1" id="modal-body">
          {/* Quick numbers/intelligence row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="stats-grid">
            <div className="p-5 bg-sky-950/10 border border-sky-900/20 rounded-xl flex items-start gap-4" id="stat-card-1">
              <div className="p-2.5 bg-sky-500/10 rounded-lg text-sky-400" id="stat-icon-1">
                <TrendingUp size={18} />
              </div>
              <div id="stat-info-1">
                <p className="text-[10px] font-mono tracking-wider text-sky-400/60 uppercase">DITIGIZATION RATE</p>
                <p className="text-2xl font-mono font-medium text-white mt-1">84.2%</p>
                <p className="text-xs text-emerald-400 font-mono mt-0.5">↑ +5.4% YoY Growth</p>
              </div>
            </div>

            <div className="p-5 bg-sky-950/10 border border-sky-900/20 rounded-xl flex items-start gap-4" id="stat-card-2">
              <div className="p-2.5 bg-sky-500/10 rounded-lg text-sky-400" id="stat-icon-2">
                <Cpu size={18} />
              </div>
              <div id="stat-info-2">
                <p className="text-[10px] font-mono tracking-wider text-sky-400/60 uppercase">ACTIVE CLOUD CORES</p>
                <p className="text-2xl font-mono font-medium text-white mt-1">1,424</p>
                <p className="text-xs text-sky-400/60 font-mono mt-0.5">Monitored migrations</p>
              </div>
            </div>

            <div className="p-5 bg-sky-950/10 border border-sky-900/20 rounded-xl flex items-start gap-4" id="stat-card-3">
              <div className="p-2.5 bg-sky-500/10 rounded-lg text-sky-400" id="stat-icon-3">
                <Award size={18} />
              </div>
              <div id="stat-info-3">
                <p className="text-[10px] font-mono tracking-wider text-sky-400/60 uppercase">TRANSITION SPEED</p>
                <p className="text-2xl font-mono font-medium text-white mt-1">18 Months</p>
                <p className="text-xs text-sky-400/60 font-mono mt-0.5">Average system payoff</p>
              </div>
            </div>
          </div>

          {/* Quick summaries section */}
          <div id="articles-index-section">
            <h3 className="text-sm font-semibold tracking-wider text-sky-400 font-mono mb-4 uppercase" id="index-title">
              INDEX OF FEATURED INSIGHT STORIES
            </h3>
            <div className="divide-y divide-sky-950/50" id="articles-list">
              {articles.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectArticle(item);
                    onClose();
                  }}
                  className="py-4 hover:bg-sky-950/10 transition-all duration-150 cursor-pointer flex items-center justify-between group px-3 -mx-3 rounded-lg"
                  id={`index-item-${item.id}`}
                >
                  <div className="max-w-[85%]" id={`index-content-${item.id}`}>
                    <div className="flex items-center gap-2" id={`index-tag-row-${item.id}`}>
                      <span className="text-[9px] font-mono text-sky-400/80 uppercase">{item.category}</span>
                      <span className="text-[9px] font-mono text-slate-600">•</span>
                      <span className="text-[9px] font-mono text-slate-500">{item.readTime}</span>
                    </div>
                    <h4 className="text-base font-semibold text-slate-200 mt-1 mr-4 group-hover:text-white transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-mono">By {item.author} ({item.date})</p>
                  </div>
                  <div className="text-slate-500 group-hover:text-sky-400 transform group-hover:translate-x-1 transition-all" id={`index-arrow-${item.id}`}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#030b19] border-t border-sky-950/50 px-6 py-4 flex items-center justify-between text-xs text-slate-500" id="modal-footer">
          <span className="font-mono">STATUS: SYNCED</span>
          <span className="font-mono">SYS_VER // v2.4.1</span>
        </div>
      </motion.div>
    </div>
  );
}

// ==========================================
// 6. MAIN SYSTEM APP INSTANCE
// ==========================================
export default function BuildShowcase() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  // Articles mapping matches precisely:
  // Featured primary horizontal (Card 1 index 0)
  // Half-screen card twins block (Card 2, Card 3 index 1, 2)
  const featuredArticle = INSIGHTS_DATA[0];
  const gridArticles = INSIGHTS_DATA.slice(1, 3);

  return (
    <div className="relative min-h-screen bg-[#020813] text-slate-100 flex items-center justify-center py-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 select-none overflow-hidden" id="app-root">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[45vw] h-[45vw] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none z-0" id="ambient-glow-left" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[35vw] h-[35vw] bg-[#00b4ff]/5 rounded-full blur-[120px] pointer-events-none z-0" id="ambient-glow-right" />

      {/* Main Grid Content Area */}
      <div className="relative w-full max-w-[1300px] z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.65fr] gap-x-16 xl:gap-x-24 gap-y-12 items-center" id="main-grid">
        
        {/* LEFT COLUMN PANEL: Pure Hero Header Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8 lg:gap-10"
          id="left-content-panel"
        >
          {/* Headline matches pixel spacing */}
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-sans font-medium tracking-tight text-white leading-[1.125] max-w-sm md:max-w-md lg:max-w-sm text-left select-none" id="fintech-headline">
            
            Get yourself up-to-speed on all the things happening in fintech
          </h1>

          {/* Core insights panel action button */}
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.985 }}
            onClick={() => setIsOverviewOpen(true)}
            className="group px-7 py-3 rounded-md border border-slate-800 bg-[#051125]/10 hover:border-sky-500/40 hover:bg-sky-950/20 text-slate-200 hover:text-white transition-all duration-300 font-mono text-[10px] uppercase tracking-widest cursor-pointer shadow-sm relative overflow-hidden"
            id="insights-hub-btn"
          >
            <span className="relative z-10 flex items-center gap-2">
              Insights
              
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-sky-500/5 to-transparent transition-transform duration-500" />
          </motion.button>
        </motion.div>

        {/* RIGHT COLUMN PANEL: Content Cards Layout Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-6"
          id="right-content-panel"
        >
          {/* CARD 1: Large Featured Aspect Panel */}
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group block overflow-hidden bg-[#041022]/40 hover:bg-[#05142a]/60 border border-slate-900/60 hover:border-sky-950/40 rounded-2xl transition-all duration-300 shadow-xl"
            id={`card-${featuredArticle.id}`}
          >
            <div className="flex flex-col sm:flex-row h-full min-h-[220px]" id="card-1-layout">
              {/* Geometric Left Bracket (2x2 symbol glyph matrix matching screenshot perfectly) */}
              <div className="w-full sm:w-[220px] lg:w-[240px] aspect-square flex-shrink-0 bg-[#051126] flex items-center justify-center p-6 relative overflow-hidden border-b sm:border-b-0 sm:border-r border-slate-950/20" id="card-1-illustration">
                <div
  className="grid grid-cols-2 gap-7 relative z-10"
  id="icons-grid-container"
>
  {[1, 2, 3, 4].map((num) => (
    <img
      src="/Vector.png"
      alt={`icon${num}`}
      className="w-24 h-24 object-contain"
    />
  ))}

  
</div>
                {/* Embedded gradient glow to overlay depth */}
                <div className="absolute inset-0 bg-radial from-sky-500/10 to-transparent pointer-events-none" />
              </div>

              {/* Text metadata element content details */}
              <div className="flex-grow p-6 sm:p-7 flex flex-col justify-between" id="card-1-content">
                <div id="card-1-upper">
                  <span className="text-[10px] tracking-widest font-mono font-semibold text-sky-400 lg:text-[10.5px] uppercase select-none">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-xl font-sans font-medium tracking-tight text-white leading-snug mt-2.5 group-hover:text-sky-100 transition-colors">
                    {featuredArticle.title}
                  </h2>
                </div>

                {/* Lower Action bar */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 gap-x-2" id="card-1-lower">
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-sky-400/50 flex items-center gap-1.5 uppercase select-none">
                    {featuredArticle.author}
                    <span className="text-slate-700 font-mono">•</span>
                    {featuredArticle.date}
                  </span>

                  <button
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="self-start sm:self-auto min-w-[120px] px-5 py-2 rounded-md border border-slate-800/80 bg-slate-900/5 hover:border-sky-500/40 text-slate-300 group-hover:text-white transition-all duration-300 font-mono text-[10px] uppercase tracking-widest cursor-pointer hover:bg-sky-950/10 text-center"
                    id={`btn-read-${featuredArticle.id}`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARDS 2 & 3: Double Grid Cards row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="cards-bottom-row">
            {gridArticles.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between p-6 sm:p-7 min-h-[220px] bg-[#041022]/40 hover:bg-[#05142a]/60 border border-slate-900/60 hover:border-sky-950/40 rounded-2xl transition-all duration-300 shadow-xl"
                id={`card-${article.id}`}
              >
                <div id={`card-inner-${article.id}`}>
                  <span className="text-[10px] tracking-widest font-mono font-semibold text-sky-400 uppercase select-none">
                    {article.category}
                  </span>
                  <h2 className="text-lg font-sans font-medium tracking-tight text-white leading-snug mt-2.5 group-hover:text-sky-100 transition-colors">
                    {article.title}
                  </h2>
                </div>

                <div className="mt-6 flex flex-col justify-end" id={`card-footer-${article.id}`}>
                  <span className="text-[10.5px] font-mono font-medium text-sky-400/50 block mb-4 uppercase select-none">
                    {article.author}
                    <span className="mx-2 text-slate-800">•</span>
                    {article.date}
                  </span>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full py-2.5 rounded-md border border-slate-800/80 bg-slate-900/5 hover:border-sky-500/40 text-slate-300 group-hover:text-white transition-all duration-300 font-mono text-[10px] uppercase tracking-widest cursor-pointer hover:bg-sky-950/10 text-center"
                    id={`btn-read-${article.id}`}
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Trigger and Hub Toggle link */}
          <div className="flex justify-end mt-2" id="trigger-all-insights">
            <button
              onClick={() => setIsOverviewOpen(true)}
              className="group flex items-center gap-2 font-mono text-[10.5px] tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer"
              id="read-all-trigger-btn"
            >
              <span className="border-b border-sky-400 pb-0.5" id="read-underline-txt">
                READ
              </span>
              <span>ALL INSIGHTS</span>
              <ArrowRight size={13} className="text-sky-400 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </motion.div>
      </div>

      {/* Slide-out & modal overlay views code blocks */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleDrawer
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOverviewOpen && (
          <InsightsOverviewModal
            isOpen={isOverviewOpen}
            onClose={() => setIsOverviewOpen(false)}
            articles={INSIGHTS_DATA}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
