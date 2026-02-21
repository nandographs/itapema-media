import { motion } from 'motion/react';
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
  Image as ImageIcon 
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-lime-400 selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Icon based on reference */}
            <div className="relative w-8 h-8">
              <div className="absolute top-0 left-0 w-5 h-5 bg-lime-400 rounded-tl-xl rounded-br-md rounded-tr-md rounded-bl-md" />
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-lime-400 rounded-br-xl rounded-tl-md rounded-tr-md rounded-bl-md" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-white rounded-sm" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-white rounded-sm" />
            </div>
            <span className="text-xl font-bold tracking-tight">Itapema Media</span>
          </div>
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium">
            Falar com consultor
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 text-lime-400 text-sm font-medium mb-8 border border-lime-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              Ponto Premium Disponível
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
              Sua marca aparecendo <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">
                150 vezes por dia
              </span>
              <br className="hidden md:block" />
              no coração de Itapema.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Anuncie no painel de LED localizado na 2ª Avenida com Rua 246, em frente à Caixa Econômica. O ponto mais estratégico da cidade.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-lime-400 text-black font-semibold text-lg hover:bg-lime-300 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Quero anunciar <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10">
                Ver localização
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location Proof */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Onde sua marca vai brilhar</h2>
              <p className="text-zinc-400 text-lg">Empresário compra movimento. E aqui, o movimento não para.</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126&auto=format&fit=crop" 
                alt="Cruzamento movimentado" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-lime-400 font-medium mb-2">
                  <MapPin className="w-5 h-5" />
                  2ª Avenida x Rua 246
                </div>
                <p className="text-white/90 text-lg">Em frente à Caixa Econômica, ponto de parada obrigatória.</p>
              </div>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.3} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Região extremamente movimentada</h3>
                  <p className="text-zinc-400 leading-relaxed">Localizado no principal eixo comercial de Meia Praia, garantindo que sua mensagem seja vista por milhares de pessoas diariamente.</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center shrink-0">
                  <Navigation className="w-7 h-7 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fluxo constante de veículos</h3>
                  <p className="text-zinc-400 leading-relaxed">O semáforo no cruzamento cria o tempo de retenção perfeito para que motoristas e passageiros leiam e absorvam seu anúncio.</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-7 h-7 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Área comercial ativa</h3>
                  <p className="text-zinc-400 leading-relaxed">Cercado por bancos, farmácias, supermercados e lojas, atingindo um público com alto potencial de consumo.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Números que geram resultado</h2>
              <p className="text-zinc-400 text-lg">Custo aproximado por exibição: <span className="text-lime-400 font-semibold">apenas centavos.</span></p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "150", label: "exibições por dia", icon: Eye },
              { num: "4.500", label: "exibições por mês", icon: TrendingUp },
              { num: "10s", label: "por exibição", icon: Clock },
              { num: "R$ 350", label: "investimento mensal", icon: Zap, highlight: true },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i} className="h-full">
                <div className={`p-8 rounded-3xl border ${stat.highlight ? 'bg-lime-400 text-black border-lime-400' : 'bg-white/5 border-white/10 text-white'} h-full flex flex-col justify-between relative overflow-hidden group`}>
                  <stat.icon className={`w-8 h-8 mb-8 ${stat.highlight ? 'text-black/50' : 'text-lime-400'}`} />
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">{stat.num}</div>
                    <div className={`text-sm font-medium uppercase tracking-wider ${stat.highlight ? 'text-black/70' : 'text-zinc-400'}`}>{stat.label}</div>
                  </div>
                  {stat.highlight && (
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/20 blur-2xl rounded-full pointer-events-none" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-16 md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Não é sobre alugar um telão.<br/>É sobre ocupar a mente do seu cliente.</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Alta visibilidade diária", desc: "Sua marca vista repetidas vezes pelas mesmas pessoas, criando familiaridade." },
              { title: "Presença constante", desc: "Esteja onde seu cliente passa todos os dias indo para o trabalho ou para casa." },
              { title: "Fortalecimento de marca", desc: "Marcas que aparecem em grandes formatos transmitem mais autoridade e confiança." },
              { title: "Lembrança contínua", desc: "Quando o cliente precisar do seu serviço, sua marca será a primeira a vir à mente." },
              { title: "Mídia dinâmica", desc: "Vídeos em movimento chamam muito mais atenção do que imagens estáticas." },
              { title: "Atualização rápida", desc: "Mudou a promoção? Trocamos seu vídeo rapidamente, sem custo de impressão." },
            ].map((benefit, i) => (
              <FadeIn key={i} delay={0.1 * i} className="h-full">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                  <CheckCircle2 className="w-6 h-6 text-lime-400 mb-6" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">O mundo digital está saturado.</h2>
              <p className="text-zinc-400 text-lg">A presença física real corta o ruído e gera impacto imediato.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2} className="h-full">
              <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 h-full">
                <h3 className="text-2xl font-semibold mb-8 text-white/80 flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-zinc-500" />
                  Redes & Tradicional
                </h3>
                <ul className="space-y-6">
                  {[
                    "Depende de algoritmos para ser entregue",
                    "O usuário pode pular ou rolar a tela",
                    "Impulsionamento acaba quando o orçamento termina",
                    "Outdoors de lona são estáticos e caros para trocar",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="p-8 md:p-10 rounded-3xl bg-lime-400/5 border border-lime-400/30 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 blur-3xl rounded-full pointer-events-none" />
                <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                  <MonitorPlay className="w-6 h-6 text-lime-400" />
                  Painel de LED
                </h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    "Presença física real e imponente na rua",
                    "Exposição repetida para o mesmo público diário",
                    "Impacto visual em movimento que atrai o olhar",
                    "Troca de material gratuita e instantânea",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-200">
                      <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Como funciona?</h2>
              <p className="text-zinc-400 text-lg">Simples, rápido e sem burocracia.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {[
              { step: "01", title: "Você envia o material", desc: "Mande seu vídeo de 10 segundos. Se não tiver, indicamos parceiros excelentes para criar.", icon: ImageIcon },
              { step: "02", title: "Entra na programação", desc: "Aprovamos o formato e inserimos sua campanha no loop do painel rapidamente.", icon: Play },
              { step: "03", title: "Sua marca aparece", desc: "Pronto! Sua empresa começa a ser vista 150 vezes por dia no ponto mais quente da cidade.", icon: Eye },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 * i} className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(163,230,53,0.05)]">
                    <item.icon className="w-8 h-8 text-lime-400" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-lime-400 text-black font-bold flex items-center justify-center text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Scarcity */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-400/10 mb-8">
              <Zap className="w-8 h-8 text-lime-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Seja uma das primeiras empresas a ocupar este espaço.</h2>
            <p className="text-xl text-zinc-400 mb-12">
              As vagas no loop são limitadas para garantir a alta frequência de exibição de todos os anunciantes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 opacity-30 grayscale">
              {/* Placeholder for logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-28 bg-white/20 rounded-md" />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-lime-400" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-8">
              Garanta sua vaga no painel mais estratégico de Itapema.
            </h2>
            <button className="px-10 py-5 rounded-full bg-black text-white font-semibold text-xl hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Quero anunciar agora <ArrowRight className="w-6 h-6" />
            </button>
            <p className="mt-8 text-black/70 font-medium text-lg">
              R$ 350/mês • Sem fidelidade abusiva • Resultado real
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-lime-400 rounded-tl-lg rounded-br-sm rounded-tr-sm rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-lime-400 rounded-br-lg rounded-tl-sm rounded-tr-sm rounded-bl-sm" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white rounded-[1px]" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white rounded-[1px]" />
            </div>
            <span className="text-lg font-bold tracking-tight">Itapema Media</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Itapema Media. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-zinc-400 font-medium">
            <a href="#" className="hover:text-lime-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
