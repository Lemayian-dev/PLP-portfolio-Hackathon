import React, { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Zap,
  Mail,
  Database,
  MessageSquare,
  FileText,
  Users,
  ArrowRight,
  Bot,
  Workflow,
  Sparkles,
  BrainCircuit,
  Clock,
  TrendingUp,
} from "lucide-react";

/* ───── Animated flowing-dots SVG connector ───── */
const FlowConnector: React.FC<{
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay?: number;
  color?: string;
}> = ({ from, to, delay = 0, color = "#3b82f6" }) => {
  const midX = (from.x + to.x) / 2;
  const path = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {/* Faint line */}
      <path d={path} fill="none" stroke={color} strokeWidth="2" opacity="0.15" />
      {/* Animated travelling dot */}
      <circle r="4" fill={color} opacity="0.9">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={path}
        />
      </circle>
      <circle r="7" fill={color} opacity="0.25">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={path}
        />
      </circle>
    </svg>
  );
};

/* ───── Single workflow node ───── */
interface NodeProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  color: string; // tailwind ring colour class
  bgColor: string;
  glowColor: string;
  delay?: number;
}

const WorkflowNode: React.FC<NodeProps> = ({
  icon,
  label,
  sublabel,
  color,
  bgColor,
  glowColor,
  delay = 0,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`relative flex flex-col items-center gap-2 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90"
      }`}
    >
      {/* Glow */}
      <div
        className={`absolute -inset-3 rounded-2xl blur-xl opacity-30 ${glowColor}`}
      />
      {/* Node body */}
      <div
        className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${bgColor} border ${color} flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
      >
        {icon}
      </div>
      <span className="text-xs sm:text-sm font-semibold text-white text-center leading-tight whitespace-nowrap">
        {label}
      </span>
      {sublabel && (
        <span className="text-[10px] sm:text-xs text-gray-400 text-center leading-snug -mt-1">
          {sublabel}
        </span>
      )}
    </div>
  );
};

/* ───── Interactive workflow canvas ───── */
const WorkflowCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 900, h: 320 });

  useEffect(() => {
    const measure = () => {
      if (canvasRef.current) {
        setDims({
          w: canvasRef.current.offsetWidth,
          h: canvasRef.current.offsetHeight,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Responsive node positions – 5 columns
  const cols = 5;
  const gapX = dims.w / (cols + 1);
  const cY = dims.h / 2 - 10; // center vertical

  const positions = [
    { x: gapX * 1, y: cY },
    { x: gapX * 2, y: cY - 40 },
    { x: gapX * 3, y: cY },
    { x: gapX * 4, y: cY - 40 },
    { x: gapX * 5, y: cY },
  ];

  return (
    <div
      ref={canvasRef}
      className="relative w-full mx-auto"
      style={{ height: "320px", maxWidth: "960px" }}
    >
      {/* Connector lines */}
      {positions.length > 1 && (
        <>
          <FlowConnector from={positions[0]} to={positions[1]} delay={0} color="#3b82f6" />
          <FlowConnector from={positions[1]} to={positions[2]} delay={0.6} color="#8b5cf6" />
          <FlowConnector from={positions[2]} to={positions[3]} delay={1.2} color="#10b981" />
          <FlowConnector from={positions[3]} to={positions[4]} delay={1.8} color="#f59e0b" />
        </>
      )}

      {/* Nodes */}
      <div
        className="absolute"
        style={{
          left: positions[0].x,
          top: positions[0].y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <WorkflowNode
          icon={<Mail className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" />}
          label="Trigger"
          sublabel="Email / Webhook"
          color="border-blue-500/40"
          bgColor="bg-blue-950/60"
          glowColor="bg-blue-500"
          delay={100}
        />
      </div>

      <div
        className="absolute"
        style={{
          left: positions[1].x,
          top: positions[1].y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <WorkflowNode
          icon={<BrainCircuit className="h-7 w-7 sm:h-8 sm:w-8 text-purple-400" />}
          label="AI Model"
          sublabel="Claude / GPT"
          color="border-purple-500/40"
          bgColor="bg-purple-950/60"
          glowColor="bg-purple-500"
          delay={400}
        />
      </div>

      <div
        className="absolute"
        style={{
          left: positions[2].x,
          top: positions[2].y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <WorkflowNode
          icon={<Database className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-400" />}
          label="Process"
          sublabel="Filter & Enrich"
          color="border-emerald-500/40"
          bgColor="bg-emerald-950/60"
          glowColor="bg-emerald-500"
          delay={700}
        />
      </div>

      <div
        className="absolute"
        style={{
          left: positions[3].x,
          top: positions[3].y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <WorkflowNode
          icon={<MessageSquare className="h-7 w-7 sm:h-8 sm:w-8 text-amber-400" />}
          label="Respond"
          sublabel="Slack / Email"
          color="border-amber-500/40"
          bgColor="bg-amber-950/60"
          glowColor="bg-amber-500"
          delay={1000}
        />
      </div>

      <div
        className="absolute"
        style={{
          left: positions[4].x,
          top: positions[4].y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <WorkflowNode
          icon={<FileText className="h-7 w-7 sm:h-8 sm:w-8 text-rose-400" />}
          label="Log & Report"
          sublabel="Dashboard"
          color="border-rose-500/40"
          bgColor="bg-rose-950/60"
          glowColor="bg-rose-500"
          delay={1300}
        />
      </div>
    </div>
  );
};

/* ───── Main section ───── */
const Automations: React.FC = () => {
  const useCases = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: "Smart Email Automation",
      description:
        "Incoming emails are categorized by AI, auto-drafted with personalised replies, and routed to the right team — zero manual sorting.",
      stat: "85% faster response",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: "Lead Qualification & CRM Sync",
      description:
        "New leads are scored by AI, enriched with public data, and pushed straight into your CRM with follow-up tasks created automatically.",
      stat: "3× more qualified leads",
    },
    {
      icon: <FileText className="h-6 w-6 text-emerald-400" />,
      title: "Document Processing & Summaries",
      description:
        "PDFs, invoices, and contracts are parsed by AI, key data extracted, and summaries delivered to Slack or email within seconds.",
      stat: "20 hrs saved / week",
    },
    {
      icon: <Bot className="h-6 w-6 text-amber-400" />,
      title: "Custom AI Chatbots & Agents",
      description:
        "Build intelligent agents that answer customer questions, book appointments, and hand off complex cases to your team seamlessly.",
      stat: "24/7 instant support",
    },
  ];

  const platforms = [
    { name: "n8n", color: "text-rose-400 border-rose-500/30 bg-rose-950/30" },
    { name: "Zapier", color: "text-orange-400 border-orange-500/30 bg-orange-950/30" },
    { name: "Bitflows", color: "text-blue-400 border-blue-500/30 bg-blue-950/30" },
    { name: "Claude", color: "text-amber-300 border-amber-500/30 bg-amber-950/30" },
    { name: "OpenAI", color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30" },
    { name: "DeepSeek", color: "text-purple-400 border-purple-500/30 bg-purple-950/30" },
  ];

  const stats = [
    { icon: <Clock className="h-5 w-5" />, value: "500+", label: "Hours Saved for Clients" },
    { icon: <Workflow className="h-5 w-5" />, value: "30+", label: "Workflows Built" },
    { icon: <TrendingUp className="h-5 w-5" />, value: "95%", label: "Automation Success Rate" },
  ];

  return (
    <section
      id="automations"
      className="automations-section py-20 sm:py-28 bg-[#0c1019] relative overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-blue-950/50 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            AI-Powered Workflow Automation
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Automations That Work While You Sleep
          </h2>
          <p className="section-text text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I design intelligent automation pipelines that connect your tools to advanced AI models — eliminating repetitive work and letting your team focus on what actually matters.
          </p>
        </div>

        {/* ─── Live Workflow Visualiser ─── */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            How a Typical Workflow Looks
          </h3>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-4 sm:p-8 overflow-hidden">
            {/* Top bar mimicking n8n / workflow editor */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-gray-500 font-mono">
                workflow_email_automation.json
              </span>
            </div>
            <WorkflowCanvas />
          </div>
        </div>

        {/* ─── Stats Row ─── */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 max-w-3xl mx-auto px-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-4 sm:p-6 rounded-xl bg-gray-800/30 border border-gray-700/40 backdrop-blur-sm"
            >
              <div className="flex justify-center text-blue-400 mb-2">{s.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ─── Use Cases Grid ─── */}
        <div className="mb-16 sm:mb-20 px-4">
          <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
            What I Automate for Clients
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-800/80 border border-gray-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {uc.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{uc.title}</h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <TrendingUp className="h-3 w-3" />
                      {uc.stat}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Platforms & Models ─── */}
        <div className="text-center mb-16 sm:mb-20 px-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Platforms & AI Models I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {platforms.map((p, i) => (
              <span
                key={i}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold border backdrop-blur-sm transition-transform duration-200 hover:scale-105 ${p.color}`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="text-center px-4">
          <div className="inline-block bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 sm:p-10 max-w-2xl">
            <Cpu className="h-10 w-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ready to Automate Your Business?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              Let's build a smarter workflow together. I'll audit your current processes, identify
              the biggest time-wasters, and design an automation system that pays for itself.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <Zap className="h-5 w-5" />
              Let's Talk Automation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations;
