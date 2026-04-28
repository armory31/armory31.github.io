import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Music, Zap, Shield, ListMusic, Sparkles, Radio } from "lucide-react";
import heroImg from "@/assets/hero-placeholder.webp";
import featureImg from "@/assets/feature-placeholder.webp";

const features = [
  {
    icon: Music,
    title: "Streaming de alta calidad",
    desc: "Reproduce música online en alta fidelidad directamente desde tu Android, sin descargas ni esperas.",
  },
  {
    icon: ListMusic,
    title: "Listas de reproducción personalizadas",
    desc: "Crea, organiza y comparte tus playlists favoritas para cada momento: entrenar, estudiar o viajar.",
  },
  {
    icon: Shield,
    title: "Reproductor sin interrupciones",
    desc: "Disfruta de música gratis sin anuncios, sin pausas y sin distracciones. Una experiencia premium real.",
  },
  {
    icon: Zap,
    title: "Rendimiento optimizado",
    desc: "Arranque instantáneo y consumo mínimo de batería. Diseñado para fluir en cualquier Android moderno.",
  },
  {
    icon: Sparkles,
    title: "Diseño dorado minimalista",
    desc: "Una interfaz negra y dorada cuidada al milímetro que convierte tu reproductor en una pieza de joyería digital.",
  },
  {
    icon: Radio,
    title: "Descubre nueva música",
    desc: "Explora recomendaciones inteligentes y amplía tu biblioteca con artistas que encajan con tu estilo.",
  },
];

const faqs = [
  {
    q: "¿ARMORY es realmente un reproductor de música gratis y sin anuncios?",
    a: "Sí. ARMORY es un reproductor de música online 100% gratis, sin anuncios, sin compras integradas y sin suscripciones. Una experiencia premium sin pagar ni un céntimo.",
  },
  {
    q: "¿Cuánto pesa la APK de ARMORY para Android?",
    a: "La APK de ARMORY pesa entre 30 y 50 MB, una descarga ligera y rápida de instalar en cualquier Android moderno.",
  },
  {
    q: "¿Necesito conexión a internet para usar ARMORY?",
    a: "Sí. ARMORY es un reproductor de música online basado en streaming, por lo que requiere conexión a internet para reproducir tu música sin interrupciones.",
  },
  {
    q: "¿Puedo crear listas de reproducción personalizadas en ARMORY?",
    a: "Por supuesto. ARMORY te permite crear y organizar listas de reproducción personalizadas para cada momento: entrenamiento, estudio, viajes o relajación.",
  },
  {
    q: "¿Por qué elegir ARMORY frente a otros reproductores de música online?",
    a: "ARMORY combina streaming de alta calidad, una experiencia premium sin anuncios y un diseño dorado y minimalista que ningún otro reproductor ofrece gratis. Sin interrupciones, sin tracking, sin compromisos.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ARMORY · Reproductor de Música Online Sin Anuncios para Android</title>
        <meta
          name="description"
          content="ARMORY es el reproductor de música online sin anuncios para Android. Streaming de alta calidad, listas de reproducción personalizadas y experiencia premium 100% gratis."
        />
        <link rel="canonical" href="https://armory.app/" />
      </Helmet>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav aria-label="Navegación principal" className="container mx-auto flex items-center justify-between gap-3 py-3 px-4 sm:py-4">
          <a
            href="#top"
            aria-label="ARMORY · Inicio"
            className="font-display text-lg sm:text-xl font-black tracking-widest text-gradient-fire min-h-[44px] flex items-center"
          >
            ARMORY
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-smooth min-h-[44px] flex items-center">Características</a>
            <a href="#gallery" className="hover:text-primary transition-smooth min-h-[44px] flex items-center">Galería</a>
            <a href="#faq" className="hover:text-primary transition-smooth min-h-[44px] flex items-center">FAQ</a>
            <a href="#download" className="hover:text-primary transition-smooth min-h-[44px] flex items-center">Descargar</a>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-gradient-fire text-primary-foreground font-semibold hover:opacity-90 shrink-0 min-h-[44px] px-4"
          >
            <a href="#download" aria-label="Descargar APK gratis de ARMORY">
              <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />APK
            </a>
          </Button>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section aria-labelledby="hero-title" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="animate-float-up text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs tracking-widest font-display border border-primary/40 text-primary mb-6">
                v2.0 · ANDROID · GRATIS
              </span>
              <h1
                id="hero-title"
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
              >
                Reproductor de Música <br />
                <span className="text-gradient-fire">Online Sin Anuncios</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                ARMORY es el reproductor de música online sin anuncios para Android: streaming de alta calidad,
                listas de reproducción personalizadas y una experiencia premium 100% gratis. Música sin interrupciones,
                blindada en oro y acero.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-fire text-primary-foreground font-bold animate-pulse-fire min-h-[48px] px-6"
                >
                  <a href="#download" aria-label="Descargar APK de ARMORY gratis">
                    <Download className="mr-2 h-5 w-5" aria-hidden="true" />Descargar APK
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-foreground hover:bg-primary/10 min-h-[48px] px-6"
                >
                  <a href="#features">Ver características</a>
                </Button>
              </div>
              <dl className="flex flex-wrap gap-6 sm:gap-8 mt-10 pt-8 border-t border-border text-sm justify-center md:justify-start">
                <div>
                  <dt className="sr-only">Descargas totales</dt>
                  <dd className="font-display text-2xl text-primary">50K+</dd>
                  <dd className="text-muted-foreground">Descargas</dd>
                </div>
                <div>
                  <dt className="sr-only">Valoración media</dt>
                  <dd className="font-display text-2xl text-primary">4.9★</dd>
                  <dd className="text-muted-foreground">Valoración</dd>
                </div>
                <div>
                  <dt className="sr-only">Tamaño de la APK</dt>
                  <dd className="font-display text-2xl text-primary">30-50MB</dd>
                  <dd className="text-muted-foreground">Tamaño</dd>
                </div>
              </dl>
            </div>
            <div
              className="relative animate-float-up max-w-sm sm:max-w-md mx-auto md:max-w-none w-full"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -inset-4 bg-gradient-fire opacity-30 blur-3xl rounded-full" aria-hidden="true" />
              <img
                src={heroImg}
                alt="Interfaz del reproductor de música online ARMORY funcionando en un smartphone Android con diseño dorado y negro"
                width={1536}
                height={1024}
                className="relative rounded-2xl shadow-fire glow-border w-full h-auto"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" aria-labelledby="features-title" className="py-16 sm:py-20 md:py-32 bg-card/30">
          <div className="container mx-auto px-4">
            <header className="max-w-2xl mb-10 sm:mb-16 text-center sm:text-left mx-auto sm:mx-0">
              <span className="font-display text-sm tracking-widest text-primary">// CARACTERÍSTICAS</span>
              <h2 id="features-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                Música gratis con experiencia premium.
              </h2>
              <p className="text-muted-foreground mt-4">
                Todo lo que esperas de un reproductor de pago, sin pagar nada y sin anuncios.
              </p>
            </header>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((f, i) => (
                <article key={i}>
                  <Card className="p-5 sm:p-6 bg-card border-border hover:border-primary/50 transition-smooth group h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-fire flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <f.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" aria-labelledby="gallery-title" className="py-16 sm:py-20 md:py-32">
          <div className="container mx-auto px-4">
            <header className="max-w-2xl mb-10 sm:mb-16 text-center sm:text-left mx-auto sm:mx-0">
              <span className="font-display text-sm tracking-widest text-primary">// GALERÍA</span>
              <h2 id="gallery-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                Capturas del reproductor.
              </h2>
              <p className="text-muted-foreground mt-3">
                Reemplaza estas plantillas con tus propias capturas de ARMORY cuando quieras.
              </p>
            </header>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <figure
                  key={n}
                  className="aspect-[9/16] rounded-xl border border-border bg-card relative overflow-hidden group hover:border-primary/50 transition-smooth"
                >
                  <img
                    src={featureImg}
                    alt={`Captura ${n} del reproductor de música online ARMORY mostrando la interfaz dorada`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1422}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-smooth"
                  />
                  <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 sm:p-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-fire flex items-center justify-center mb-2">
                      <Music className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <span className="font-display text-[10px] sm:text-xs tracking-widest text-primary">
                      PLANTILLA {n.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">Sustituir imagen</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-20 md:py-32">
          <div className="container mx-auto px-4 max-w-3xl">
            <header className="mb-10 sm:mb-12 text-center">
              <span className="font-display text-sm tracking-widest text-primary">// FAQ</span>
              <h2 id="faq-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                Preguntas frecuentes
              </h2>
              <p className="text-muted-foreground mt-3">
                Resolvemos tus dudas sobre ARMORY, el reproductor de música online sin anuncios.
              </p>
            </header>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="font-display text-left hover:text-primary text-sm sm:text-base min-h-[44px] py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section id="download" aria-labelledby="download-title" className="py-16 sm:py-20 md:py-32 bg-card/30">
          <div className="container mx-auto px-4">
            <Card className="relative overflow-hidden p-6 sm:p-10 md:p-16 text-center bg-gradient-to-br from-card to-background border-primary/30">
              <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-fire opacity-20 blur-3xl rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="font-display text-xs sm:text-sm tracking-widest text-primary">
                  // DESCARGA OFICIAL
                </span>
                <h2
                  id="download-title"
                  className="font-display text-3xl sm:text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight"
                >
                  Equípate con <span className="text-gradient-fire">ARMORY</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mb-8">
                  Descarga la APK gratis y disfruta de música online sin anuncios, con experiencia premium real.
                  Instalación rápida y segura, directamente en tu Android.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-fire text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 animate-pulse-fire max-w-full min-h-[56px]"
                >
                  <a
                    href="#"
                    download
                    aria-label="Descargar APK ARMORY versión 2.0 gratis"
                    className="whitespace-normal"
                  >
                    <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 shrink-0" aria-hidden="true" />
                    Descargar APK · v2.0
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">30-50 MB · Android · 100% Gratis</p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 sm:py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="font-display text-lg font-black text-gradient-fire tracking-widest">ARMORY</div>
          <p className="text-xs text-muted-foreground">
            © 2026 ARMORY · Reproductor de música online sin anuncios para Android · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
