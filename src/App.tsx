import { useState, useEffect, useRef } from 'react';
import { Map, MapMarker, MarkerContent, MapControls } from '@/components/ui/map';
import { motion, useInView } from 'motion/react';
import {
  MapPin,
  TrendingUp,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Play,
  BarChart3,
  Eye,
  MonitorPlay,
  Navigation,
  Users,
  Smartphone,
  Image as ImageIcon,
  Menu,
  X,
  Shield,
  Repeat,
  Video,
  RefreshCw,
  Target,
  Brain
} from 'lucide-react';

// ─── Constants ───
const WHATSAPP_NUMBER = '554792828752';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Tenho interesse em anunciar no painel de LED da Itapema Media.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ─── Reusable Components ───

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SlideIn = ({ children, delay = 0, direction = 'left', className = "" }: { children: React.ReactNode, delay?: number, direction?: 'left' | 'right', className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Animated Counter ───
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref} style={{ display: 'inline-block', minHeight: '1em' }}>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>;
}

// ─── Main App ───
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">

      {/* ════════════ Navbar ════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center group" aria-label="Itapema Media - Início">
            <img src="/images/LOGO-CLEAR.png" alt="Itapema Media" className="h-10 transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400/10 hover:bg-lime-400/20 border border-lime-400/20 transition-all text-sm font-medium text-lime-400 hover:scale-105"
          >
            Falar com consultor
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <a href="#localizacao" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 transition-colors">Localização</a>
              <a href="#numeros" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 transition-colors">Números</a>
              <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 transition-colors">Benefícios</a>
              <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white py-2 transition-colors">Como funciona</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 rounded-full bg-lime-400 text-black font-semibold text-center hover:bg-lime-300 transition-all"
              >
                Falar com consultor
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ════════════ Hero ════════════ */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-lime-400/15 blur-[150px] rounded-full animate-gradient" style={{ backgroundImage: 'radial-gradient(circle, rgba(180,255,57,0.2) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-lime-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">


          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 font-heading">
              Sua marca aparecendo <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 animate-gradient" style={{ backgroundSize: '200% auto' }}>
                150 vezes por dia
              </span>
              <br className="hidden md:block" />
              no coração de Itapema.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Anuncie no painel de LED localizado na <strong className="text-zinc-200">2ª Avenida com Rua 246</strong>, em frente à Caixa Econômica. O ponto mais estratégico da cidade.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-lime-400 text-black font-semibold text-lg hover:bg-lime-300 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 animate-glow-pulse"
              >
                Quero anunciar <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#localizacao"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-white/20"
              >
                <MapPin className="w-5 h-5" /> Ver localização
              </a>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/40 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ Mockup Showcase ════════════ */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-lime-400/10 blur-[180px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="/images/MOCKUP-01 jpg.jpg"
                alt="Painel de LED Itapema Media — Mockup"
                className="hidden md:block w-full h-auto object-cover"
              />
              <img
                src="/images/MOCKUP-01-mobile.jpg"
                alt="Painel de LED Itapema Media — Mockup Mobile"
                className="block md:hidden w-full h-auto object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ Location Proof ════════════ */}
      <section id="localizacao" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-heading">Onde sua marca vai brilhar</h2>
              <p className="text-zinc-400 text-lg">Empresário compra movimento. E aqui, o movimento não para.</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn delay={0.2} className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] group">
              <Map
                center={[-48.60467, -27.12917]}
                zoom={15}
                theme="dark"
                scrollZoom={false}
              >
                <MapMarker longitude={-48.60467} latitude={-27.12917}>
                  <MarkerContent>
                    <div className="relative flex items-center justify-center">
                      {/* Pulsing ring */}
                      <div className="absolute w-10 h-10 rounded-full bg-lime-400/20 animate-ping" />
                      <div className="absolute w-8 h-8 rounded-full bg-lime-400/30" />
                      {/* Center dot */}
                      <div className="relative w-4 h-4 rounded-full bg-lime-400 border-2 border-white shadow-lg shadow-lime-400/50" />
                    </div>
                  </MarkerContent>
                </MapMarker>
                <MapControls position="bottom-right" showZoom={true} />
              </Map>
              {/* Gradient overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                <div className="flex items-center gap-2 text-lime-400 font-medium mb-1">
                  <MapPin className="w-5 h-5" />
                  2ª Avenida x Rua 246
                </div>
                <p className="text-white/90 text-sm">Em frente à Caixa Econômica, ponto de parada obrigatória.</p>
              </div>
            </SlideIn>

            <div className="space-y-8">
              <SlideIn delay={0.3} direction="right" className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center shrink-0 group-hover:bg-lime-400/20 transition-colors">
                  <Users className="w-7 h-7 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Região extremamente movimentada</h3>
                  <p className="text-zinc-400 leading-relaxed">Localizado no principal eixo comercial de Meia Praia, garantindo que sua mensagem seja vista por milhares de pessoas diariamente.</p>
                </div>
              </SlideIn>

              <SlideIn delay={0.4} direction="right" className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center shrink-0 group-hover:bg-lime-400/20 transition-colors">
                  <Navigation className="w-7 h-7 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fluxo constante de veículos</h3>
                  <p className="text-zinc-400 leading-relaxed">O cruzamento movimentado garante que motoristas e passageiros tenham tempo suficiente para ler e absorver seu anúncio.</p>
                </div>
              </SlideIn>

              <SlideIn delay={0.5} direction="right" className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center shrink-0 group-hover:bg-lime-400/20 transition-colors">
                  <BarChart3 className="w-7 h-7 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Área comercial ativa</h3>
                  <p className="text-zinc-400 leading-relaxed">Cercado por bancos, farmácias, supermercados e lojas, atingindo um público com alto potencial de consumo.</p>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ Numbers ════════════ */}
      <section id="numeros" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-heading">Números que geram resultado</h2>
              <p className="text-zinc-400 text-lg">Custo aproximado por exibição: <span className="text-lime-400 font-semibold">7 centavos.</span></p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 150, display: "150", label: "exibições por dia", icon: Eye, suffix: "" },
              { num: 4500, display: "4.500", label: "exibições por mês", icon: TrendingUp, suffix: "" },
              { num: 10, display: "10s", label: "por exibição", icon: Clock, suffix: "s" },
              { num: 350, display: "R$ 350", label: "investimento mensal", icon: Zap, highlight: true, prefix: "R$ ", suffix: "" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i} className="h-full">
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`p-8 rounded-3xl border ${stat.highlight ? 'bg-lime-400 text-black border-lime-400' : 'bg-white/5 border-white/10 text-white hover:border-white/20'} h-full flex flex-col justify-between relative overflow-hidden group cursor-default`}
                >
                  <stat.icon className={`w-8 h-8 mb-8 ${stat.highlight ? 'text-black/50' : 'text-lime-400'}`} />
                  <div>
                    <div className="text-4xl lg:text-5xl font-semibold tracking-tight mb-2">
                      <AnimatedCounter target={stat.num} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                    </div>
                    <div className={`text-sm font-medium uppercase tracking-[0.1em] ${stat.highlight ? 'text-black/70' : 'text-zinc-400'}`}>{stat.label}</div>
                  </div>
                  {stat.highlight && (
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/20 blur-2xl rounded-full pointer-events-none" />
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ Benefits ════════════ */}
      <section id="beneficios" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-16 md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 font-heading">Não é sobre alugar um telão.<br />É sobre ocupar a mente do seu cliente.</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Alta visibilidade diária", desc: "Sua marca vista repetidas vezes pelas mesmas pessoas, criando familiaridade.", icon: Eye },
              { title: "Presença constante", desc: "Esteja onde seu cliente passa todos os dias indo para o trabalho ou para casa.", icon: Target },
              { title: "Fortalecimento de marca", desc: "Marcas que aparecem em grandes formatos transmitem mais autoridade e confiança.", icon: Shield },
              { title: "Lembrança contínua", desc: "Quando o cliente precisar do seu serviço, sua marca será a primeira a vir à mente.", icon: Brain },
              { title: "Mídia dinâmica", desc: "Vídeos em movimento chamam muito mais atenção do que imagens estáticas.", icon: Video },
              { title: "Atualização rápida", desc: "Mudou a promoção? Trocamos seu vídeo rapidamente, sem custo de impressão.", icon: RefreshCw },
            ].map((benefit, i) => (
              <FadeIn key={i} delay={0.1 * i} className="h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-lime-400/30 hover:bg-white/[0.07] transition-all h-full group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ Por que presença física? ════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-heading">Por que quem é visto, é lembrado.</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Presença de rua gera algo que nenhum algoritmo consegue: familiaridade real.</p>
            </div>
          </FadeIn>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Card grande — destaque */}
            <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-8 md:p-10 rounded-3xl bg-lime-400/5 border border-lime-400/20 h-full relative overflow-hidden flex flex-col justify-between cursor-default"
              >
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-400/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-lime-400/15 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-lime-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Impossível de ignorar</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg max-w-lg">
                    Diferente de um post que some no feed em segundos, o painel de LED está ali — grande, luminoso e em movimento. Quem passa, <span className="text-white font-medium">vê</span>. Todos os dias, no mesmo lugar, criando familiaridade e confiança com sua marca.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10 relative z-10">
                  <div className="flex -space-x-1">
                    <div className="w-2 h-2 rounded-full bg-lime-400" />
                    <div className="w-2 h-2 rounded-full bg-lime-300" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-sm text-zinc-500">150 exibições garantidas por dia</span>
                </div>
              </motion.div>
            </FadeIn>

            {/* Card: Sem algoritmo */}
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 h-full transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <Repeat className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sem depender de algoritmo</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Sua marca não precisa "competir" para ser entregue. Ela simplesmente aparece, sempre.</p>
              </motion.div>
            </FadeIn>

            {/* Card: Em movimento */}
            <FadeIn delay={0.3}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 h-full transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <MonitorPlay className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Vídeo em tela grande</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Imagens em movimento em alta resolução capturam o olhar de forma natural e imediata.</p>
              </motion.div>
            </FadeIn>

            {/* Card: Troca rápida */}
            <FadeIn delay={0.35}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 h-full transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <RefreshCw className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Troca instantânea</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Mudou a promoção? Atualizamos seu conteúdo rapidamente, sem custo de impressão ou instalação.</p>
              </motion.div>
            </FadeIn>

            {/* Card: Custo-benefício */}
            <FadeIn delay={0.4}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 h-full transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Centavos por exibição</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Com 4.500 exibições/mês por R$350, cada vez que sua marca aparece custa menos que um clique online.</p>
              </motion.div>
            </FadeIn>

            {/* Card: Público real */}
            <FadeIn delay={0.45}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 h-full transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Público real, local</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Você atinge moradores e frequentadores de Itapema — as pessoas que realmente podem comprar de você.</p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════ How it works ════════════ */}
      <section id="como-funciona" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-heading">Como funciona?</h2>
              <p className="text-zinc-400 text-lg">Simples, rápido e sem burocracia.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />

            {[
              { step: "01", title: "Você envia o material", desc: "Mande seu vídeo de 10 segundos. Se não tiver, indicamos parceiros excelentes para criar.", icon: ImageIcon },
              { step: "02", title: "Entra na programação", desc: "Aprovamos o formato e inserimos sua campanha no loop do painel rapidamente.", icon: Play },
              { step: "03", title: "Sua marca aparece", desc: "Pronto! Sua empresa começa a ser vista 150 vezes por dia no ponto mais quente da cidade.", icon: Eye },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 * i} className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 relative shadow-[0_0_40px_rgba(163,230,53,0.08)]"
                  >
                    <item.icon className="w-8 h-8 text-lime-400" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-lime-400 text-black font-semibold flex items-center justify-center text-sm">
                      {item.step}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ Social Proof / Scarcity ════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-400/10 mb-8"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-8 h-8 text-lime-400" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 font-heading">Seja uma das primeiras empresas a ocupar este espaço.</h2>
            <p className="text-xl text-zinc-400 mb-4">
              As vagas no loop são limitadas para garantir a alta frequência de exibição de todos os anunciantes.
            </p>
            <p className="text-lg text-zinc-500">
              Quanto menos anunciantes, mais vezes <span className="text-lime-400 font-medium">sua marca aparece</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-lime-400 to-emerald-400" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-8 font-heading">
              Garanta sua vaga no painel mais estratégico de Itapema.
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-10 py-5 rounded-full bg-black text-white font-semibold text-xl hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95 shadow-2xl items-center justify-center gap-2"
            >
              Quero anunciar agora <ArrowRight className="w-6 h-6" />
            </a>
            <p className="mt-8 text-black/70 font-medium text-lg">
              R$ 350/mês • Resultado real
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ Footer ════════════ */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src="/images/LOGO-CLEAR.png" alt="Itapema Media" className="h-10" />
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Itapema Media. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-zinc-400 font-medium">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
