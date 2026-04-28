<!DOCTYPE html>
<html lang="es">
<head>
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-P6DG786J');</script>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>ARMORY · Reproductor de Música Online Sin Anuncios</title>
  <meta name="google-site-verification" content="-9FbGvZm0ZYD9F7A_J0dyfQNj1uISWkX8Z082tdaQYU" />
  <meta name="description" content="ARMORY es el reproductor de música online sin anuncios para Android. Streaming de alta calidad, listas de reproducción personalizadas y experiencia premium 100% gratis." />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  
  <style>
    :root {
      --bg: #0a0a0a;
      --card: #121212;
      --border: hsl(43 30% 18%);
      --primary: hsl(43 74% 52%);
      --primary-hover: hsl(45 95% 65%);
      --foreground: hsl(30 20% 95%);
      --muted: hsl(43 15% 65%);
      --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { 
      font-family: 'Inter', sans-serif; 
      background-color: var(--bg); 
      color: var(--foreground); 
      min-height: 100vh; 
      line-height: 1.6; 
      overflow-x: hidden;
    }
    
    h1, h2, h3, .font-display { font-family: 'Orbitron', sans-serif; }
    a { text-decoration: none; color: inherit; }
    
    /* BOTONES */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem; 
      font-family: 'Orbitron', sans-serif; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.1em; cursor: pointer; transition: var(--transition); border: none;
      padding: 1rem 2.5rem; font-size: 0.9rem; border-radius: 2px;
    }
    .btn-primary { background: var(--primary); color: var(--bg); }
    .btn-primary:hover { background: var(--foreground); color: var(--bg); }
    .btn-outline { background: transparent; color: var(--primary); border: 1px solid var(--primary); }
    .btn-outline:hover { background: var(--primary); color: var(--bg); }
    
    /* NAVEGACIÓN */
    header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      backdrop-filter: blur(10px); background: rgba(10, 10, 10, 0.85);
      border-bottom: 1px solid var(--border);
      padding: 1.25rem 2rem;
      display: flex; justify-content: space-between; align-items: center;
    }
    .logo {
      font-family: 'Orbitron', sans-serif; font-weight: 900; font-size: 1.5rem;
      color: var(--primary); letter-spacing: 0.15em;
    }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; }
    .nav-links a { font-size: 0.85rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; transition: var(--transition); }
    .nav-links a:hover { color: var(--primary); }
    .nav-contact { display: none; }
    @media (min-width: 900px) { .nav-contact { display: flex; } }
    @media (max-width: 900px) { .nav-links { display: none; } }
    
    /* CINTAS ANIMADAS (MARQUEE) */
    .marquee-wrapper {
      overflow: hidden; white-space: nowrap; display: flex; width: 100vw;
      padding: 1.5rem 0; background: var(--bg); border-bottom: 1px solid var(--border);
    }
    .marquee-wrapper.gold { background: var(--primary); color: var(--bg); border: none; }
    .marquee-content {
      display: inline-block; animation: marquee 25s linear infinite;
      font-family: 'Orbitron', sans-serif; font-weight: 900; font-size: 1.5rem; letter-spacing: 0.1em;
    }
    .marquee-content span { margin: 0 2rem; }
    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

    /* HERO */
    .hero {
      padding: 12rem 2rem 6rem; text-align: center; max-width: 1400px; margin: 0 auto;
    }
    .hero-title {
      font-size: clamp(3rem, 8vw, 7rem); line-height: 0.95; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: -0.02em;
    }
    .hero-title .outline {
      color: transparent; -webkit-text-stroke: 2px var(--primary);
    }
    .hero-desc {
      font-size: 1.1rem; color: var(--muted); max-width: 700px; margin: 0 auto 3rem; line-height: 1.8;
    }

    /* SECCIONES DIVIDIDAS (Estilo Bodas / Discotecas) */
    .split {
      display: grid; grid-template-columns: 1fr; border-top: 1px solid var(--border);
    }
    @media (min-width: 900px) {
      .split { grid-template-columns: 1fr 1fr; }
      .split.reverse { direction: rtl; }
      .split.reverse > * { direction: ltr; }
    }
    .split-text {
      padding: 5rem 2rem; display: flex; flex-direction: column; justify-content: center;
    }
    @media (min-width: 900px) { .split-text { padding: 6rem 12%; } }
    .split-title {
      font-size: clamp(2rem, 4vw, 3.5rem); color: var(--primary); margin-bottom: 1.5rem; line-height: 1.1; text-transform: uppercase;
    }
    .split-desc {
      color: var(--muted); font-size: 1.1rem; margin-bottom: 2.5rem; line-height: 1.8;
    }
    .split-image {
      background: var(--card); min-height: 50vh; display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden; border-top: 1px solid var(--border);
    }
    @media (min-width: 900px) {
      .split-image { border-top: none; border-left: 1px solid var(--border); }
      .split.reverse .split-image { border-left: none; border-right: 1px solid var(--border); }
    }
    .img-placeholder {
      width: 80%; aspect-ratio: 16/9; border: 1px dashed var(--primary);
      display: flex; align-items: center; justify-content: center; text-align: center; padding: 2rem;
      color: var(--primary); font-family: 'Orbitron'; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
      background: radial-gradient(circle at center, hsl(43 74% 52% / 0.05), transparent);
    }

    /* GRID DE CARACTERÍSTICAS (Estilo "Hemos trabajado para") */
    .features-section {
      padding: 8rem 2rem; text-align: center; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    }
    .features-header {
      font-family: 'Orbitron', sans-serif; font-size: 1rem; color: var(--primary); letter-spacing: 0.2em; margin-bottom: 4rem; text-transform: uppercase;
    }
    .features-grid {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); max-width: 1200px; margin: 0 auto;
    }
    @media (min-width: 768px) { .features-grid { grid-template-columns: repeat(3, 1fr); } }
    .feature-item {
      padding: 4rem 2rem; background: var(--bg); transition: var(--transition);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .feature-item:hover { background: var(--card); }
    .feature-icon svg { width: 3rem; height: 3rem; fill: var(--primary); margin-bottom: 1.5rem; }
    .feature-name { font-family: 'Orbitron', sans-serif; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--foreground); }

    /* FAQ */
    .faq-section { padding: 8rem 2rem; max-width: 800px; margin: 0 auto; }
    .faq-title { text-align: center; font-size: 2.5rem; color: var(--primary); margin-bottom: 4rem; text-transform: uppercase; }
    .faq-item { border-bottom: 1px solid var(--border); }
    .faq-question {
      width: 100%; background: none; border: none; color: var(--foreground);
      font-family: 'Orbitron', sans-serif; font-size: 1.1rem; text-align: left;
      padding: 2rem 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center;
      transition: var(--transition);
    }
    .faq-question:hover { color: var(--primary); }
    .faq-chevron { width: 1.5rem; height: 1.5rem; fill: none; stroke: currentColor; stroke-width: 2; transition: transform 0.3s; }
    .faq-item.open .faq-chevron { transform: rotate(180deg); color: var(--primary); }
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
    .faq-answer-inner { padding-bottom: 2rem; color: var(--muted); font-size: 1.05rem; line-height: 1.8; }
    .faq-item.open .faq-answer { max-height: 300px; }

    /* GIANT CTA (Estilo Footer Reserva) */
    .giant-cta {
      padding: 12rem 2rem; text-align: center; border-top: 1px solid var(--border);
      background: radial-gradient(circle at 50% 100%, hsl(43 74% 52% / 0.1), transparent 60%);
    }
    .giant-cta-title { font-size: clamp(2.5rem, 6vw, 5rem); margin-bottom: 3rem; text-transform: uppercase; }

    /* FOOTER */
    footer { border-top: 1px solid var(--border); padding: 3rem 2rem; text-align: center; }
    .footer-links { margin-bottom: 2rem; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; }
    .footer-links a { color: var(--muted); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; transition: color 0.3s; }
    .footer-links a:hover { color: var(--primary); }
    .footer-copy { color: hsl(43 15% 30%); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; }
  </style>
</head>
<body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6DG786J"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<header>
  <a href="#top" class="logo">ARMORY</a>
  <ul class="nav-links">
    <li><a href="#experiencia">Experiencia</a></li>
    <li><a href="#caracteristicas">Tecnología</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a href="#descargar" class="btn btn-outline nav-contact">Descargar APK</a>
</header>

<main id="top">

  <section class="hero">
    <h1 class="hero-title">La música<br><span class="outline">en su máxima</span><br>expresión</h1>
    <p class="hero-desc">ARMORY es el reproductor de música online para Android. Streaming de alta calidad, listas de reproducción personalizadas y una experiencia premium 100% gratis. Música blindada en oro y acero.</p>
    <a href="#descargar" class="btn btn-primary">Descargar Ahora</a>
  </section>

  <div class="marquee-wrapper border-top">
    <div class="marquee-content">
      <span>ARMORY - LIVE MUSIC</span><span>SIN ANUNCIOS</span><span>ANDROID APK</span><span>ARMORY - LIVE MUSIC</span><span>SIN ANUNCIOS</span><span>ANDROID APK</span><span>ARMORY - LIVE MUSIC</span><span>SIN ANUNCIOS</span><span>ANDROID APK</span>
    </div>
  </div>

  <section id="experiencia" class="split">
    <div class="split-text">
      <h2 class="split-title">Streaming de alta calidad sin anuncios</h2>
      <p class="split-desc">Reproducción impecable en cualquier dispositivo. ARMORY es el reproductor diseñado para quienes exigen lo mejor: música online, sin pausas comerciales, ofreciendo un entorno inmersivo que no deja indiferente a nadie.</p>
      <div><a href="#descargar" class="btn btn-outline">Más información</a></div>
    </div>
    <div class="split-image">
      <div class="img-placeholder">Sustituir por captura de la app reproduciendo música</div>
    </div>
  </section>

  <section class="split reverse">
    <div class="split-text">
      <h2 class="split-title">Diseño dorado minimalista</h2>
      <p class="split-desc">Una interfaz construida al milímetro. Disfruta de un entorno visual elegante y oscuro, optimizado para no cansar la vista y destacar lo que realmente importa: tu biblioteca musical personalizada.</p>
      <div><a href="#descargar" class="btn btn-outline">Ver galería</a></div>
    </div>
    <div class="split-image">
      <div class="img-placeholder">Sustituir por captura de las playlists</div>
    </div>
  </section>

  <div class="marquee-wrapper gold">
    <div class="marquee-content">
      <span>LA MAGIA DE LA MÚSICA LLEVADA A SU MÁXIMA EXPRESIÓN</span><span>LA MAGIA DE LA MÚSICA LLEVADA A SU MÁXIMA EXPRESIÓN</span><span>LA MAGIA DE LA MÚSICA LLEVADA A SU MÁXIMA EXPRESIÓN</span>
    </div>
  </div>

  <section id="caracteristicas" class="features-section">
    <h3 class="features-header">Tecnología Premium Gratuita</h3>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></div>
        <span class="feature-name">Alta Fidelidad</span>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <span class="feature-name">Sin Interrupciones</span>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 12H3M16 6H3M12 18H3"/></svg></div>
        <span class="feature-name">Playlists Creadas</span>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
        <span class="feature-name">Rendimiento Extremo</span>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M12 12a0 0 0 1 0 .001 0A0 0 0 0 0 12 12zm0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg></div>
        <span class="feature-name">Descubrimiento</span>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg></div>
        <span class="feature-name">UI / UX Premium</span>
      </div>
    </div>
  </section>

  <section id="faq" class="faq-section">
    <h2 class="faq-title">Preguntas Frecuentes</h2>
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question">¿ARMORY es realmente un reproductor de música gratis y sin anuncios?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="faq-answer"><div class="faq-answer-inner">Sí. ARMORY es un reproductor de música online 100% gratis, sin anuncios, sin compras integradas y sin suscripciones. Una experiencia premium sin pagar ni un céntimo.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-question">¿Cuánto pesa la APK de ARMORY para Android?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="faq-answer"><div class="faq-answer-inner">La APK de ARMORY pesa entre 30 y 50 MB, una descarga ligera y rápida de instalar en cualquier Android moderno.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-question">¿Necesito conexión a internet para usar ARMORY?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="faq-answer"><div class="faq-answer-inner">Sí. ARMORY es un reproductor de música online basado en streaming, por lo que requiere conexión a internet para reproducir tu música sin interrupciones.</div></div>
      </div>
    </div>
  </section>

  <section id="descargar" class="giant-cta">
    <h2 class="giant-cta-title"><span class="outline">Equípate</span> con ARMORY</h2>
    <a href="#" download class="btn btn-primary">Descargar APK · v2.0</a>
  </section>

</main>

<footer>
  <div class="footer-links">
    <a href="#">Instagram</a>
    <a href="#">Twitter</a>
    <a href="#">Contacto</a>
    <a href="#">Política de Privacidad</a>
  </div>
  <p class="footer-copy">Copyright 2026 © ARMORY. Todos los derechos reservados.</p>
</footer>

<script>
  // Script del acordeón FAQ
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
</script>
</body>
</html>
