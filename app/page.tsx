import Image from "next/image";

const whatsappNumber = "5511949690737";

const whatsappMessages = {
  general:
    "Olá, Ariane! Vi a página do ALAMEDA no DISTRITQ e gostaria de receber as plantas, valores e a disponibilidade atualizada.",
  typologies:
    "Olá, Ariane! Quero comparar as casas e townhouses do ALAMEDA e entender qual opção combina melhor com o meu perfil.",
  visit:
    "Olá, Ariane! Quero conhecer melhor o ALAMEDA no DISTRITQ e saber como agendar uma apresentação.",
};

function wa(message = whatsappMessages.general) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.02 3.2A12.67 12.67 0 0 0 5.25 22.54L3.5 28.8l6.42-1.69A12.68 12.68 0 1 0 16.02 3.2Zm0 23.04a10.49 10.49 0 0 1-5.35-1.46l-.38-.23-3.8 1 1.01-3.7-.25-.38a10.49 10.49 0 1 1 8.77 4.77Zm5.76-7.86c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.84-1.57-1.87-1.75-2.18-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54l-.6-.01c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Button({
  children,
  message = whatsappMessages.general,
  className = "",
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a className={`gradient-button ${className}`} href={wa(message)} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: "ALAMEDA — DISTRITQ",
  description:
    "Projeto residencial de casas e townhouses integrante do DISTRITQ, em Alphaville.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Honório Álvares Penteado, 5236",
    addressLocality: "Santana de Parnaíba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["O que é o ALAMEDA?", "É um projeto residencial de casas e townhouses integrante do DISTRITQ, novo bairro planejado de Alphaville desenvolvido pela Arqos."],
    ["Quais são as metragens?", "As casas possuem 230 ou 280 m². As townhouses variam de 113 a 355 m²."],
    ["Quantas unidades o projeto possui?", "A ficha técnica oficial informa 337 unidades no total."],
    ["Onde fica?", "Na Av. Honório Álvares Penteado, 5236, em Alphaville, Santana de Parnaíba, São Paulo."],
    ["Qual é o valor das unidades?", "Preços, condições comerciais e disponibilidade podem mudar. Solicite a tabela vigente diretamente à Ariane Laurindo."],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

const amenities = [
  "Clube",
  "Piscina",
  "Tênis de saibro",
  "Beach tennis",
  "Fitness externo",
  "Pet place",
  "Praça do Fogo",
  "Minigolfe",
  "Play Água",
  "Bar",
  "Ateliê",
];

const faqs = [
  {
    question: "O que é o ALAMEDA?",
    answer:
      "É um projeto residencial de casas e townhouses integrante do DISTRITQ, novo bairro planejado de Alphaville desenvolvido pela Arqos.",
  },
  {
    question: "Quais são as metragens?",
    answer:
      "As casas possuem 230 ou 280 m². As townhouses variam de 113 a 355 m². A Ariane pode apresentar as opções e plantas disponíveis para cada perfil.",
  },
  {
    question: "Quantas unidades o projeto possui?",
    answer: "A ficha técnica oficial informa 337 unidades no total.",
  },
  {
    question: "O condomínio terá lazer?",
    answer:
      "Sim. O material oficial apresenta clube, piscina, quadras, fitness externo, pet place, Praça do Fogo, minigolfe, Play Água, bar, ateliê e outros espaços de convivência.",
  },
  {
    question: "Quem assina o projeto?",
    answer:
      "A arquitetura é da Perkins&Will, o urbanismo e paisagismo são de Sergio Santana e os interiores são de Fernanda Marques.",
  },
  {
    question: "Onde fica o ALAMEDA?",
    answer:
      "Na Av. Honório Álvares Penteado, 5236, em Alphaville, Santana de Parnaíba/SP, dentro do DISTRITQ.",
  },
  {
    question: "Quais são os valores e as condições?",
    answer:
      "Preços, condições de pagamento e disponibilidade podem mudar. A Ariane fornece a tabela comercial atualizada e ajuda você a comparar as opções.",
  },
  {
    question: "É possível agendar uma apresentação?",
    answer:
      "Sim. Fale com a Ariane pelo WhatsApp para conhecer as modalidades de apresentação e os horários disponíveis.",
  },
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="ALAMEDA, início">
          <span className="brand-name">ALAMEDA</span>
          <span className="brand-place">DISTRITQ · ALPHAVILLE</span>
        </a>
        <nav className="desktop-nav" aria-label="Seções da página">
          <a href="#conceito">Conceito</a>
          <a href="#residencias">Residências</a>
          <a href="#assinaturas">Assinaturas</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a className="header-cta" href={wa()} target="_blank" rel="noreferrer">
          Falar com Ariane <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true">
          <Image src="/distriqt-alameda/images/alameda-hero.jpg" alt="" width={1920} height={1080} priority />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow"><span /> Em breve · Casas &amp; Townhouses</p>
          <h1>
            O novo ícone residencial de Alphaville.
            <em className="gradient-text">Natureza que se torna arquitetura.</em>
          </h1>
          <p className="hero-copy">
            Conheça o ALAMEDA, no DISTRITQ: residências de 113 a 355 m², clube completo e mais de 62 mil m² de áreas comuns externas.
          </p>
          <div className="hero-actions">
            <Button>Receber plantas e valores</Button>
            <p><span className="status-dot" /> Atendimento personalizado pelo WhatsApp com Ariane Laurindo.</p>
          </div>

          <ul className="hero-proof" aria-label="Destaques do empreendimento">
            <li><strong>230 e 280 m²</strong><span>Casas</span></li>
            <li><strong>113 a 355 m²</strong><span>Townhouses</span></li>
            <li><strong>Clube completo</strong><span>Lazer integrado</span></li>
          </ul>
        </div>

        <a className="scroll-cue" href="#conceito" aria-label="Explorar o projeto"><span>Explorar</span><i /></a>
      </section>

      <section className="stats-band" aria-label="Ficha técnica resumida">
        <div><strong>337</strong><span>unidades</span></div>
        <div><strong>106.401 m²</strong><span>de condomínio</span></div>
        <div><strong>62.971 m²</strong><span>de área comum externa</span></div>
        <p>Escala para surpreender.<br />Detalhes para permanecer.</p>
      </section>

      <section className="section concept" id="conceito">
        <div className="section-kicker"><span>01</span><p>Uma nova expressão de morar</p></div>
        <div className="concept-heading">
          <h2>
            Grandioso em escala.
            <em className="gradient-text">Preciso em cada detalhe.</em>
          </h2>
          <div className="concept-copy">
            <p className="lead">
              Um projeto concebido para representar o melhor de morar em Alphaville.
            </p>
            <p>
              O ALAMEDA conecta arquitetura contemporânea, paisagem e bem-estar em um condomínio onde ruas em nível, calçadas largas e eixos visuais valorizam a experiência de quem vive — e de quem caminha.
            </p>
            <a className="inline-link" href={wa()} target="_blank" rel="noreferrer">Quero conhecer o projeto <ArrowIcon /></a>
          </div>
        </div>

        <figure className="statement-image">
          <Image src="/distriqt-alameda/images/alameda-aerea.webp" alt="Perspectiva aérea ilustrada do ALAMEDA integrado à paisagem" width={1920} height={1057} />
          <figcaption><span>Perspectiva artística</span><strong>Arquitetura e natureza<br />em um mesmo horizonte.</strong></figcaption>
        </figure>
      </section>

      <section className="section section-light residences" id="residencias">
        <div className="section-kicker dark"><span>02</span><p>Casas &amp; Townhouses</p></div>
        <div className="residences-title">
          <h2>Escolha a forma de morar que <em>combina com a sua vida.</em></h2>
          <p>Duas experiências residenciais. Uma mesma assinatura de qualidade, privacidade e integração com o verde.</p>
        </div>

        <div className="typology-grid">
          <article className="typology-card typology-primary">
            <div className="typology-number">230 <small>&amp;</small> 280 <sup>m²</sup></div>
            <div>
              <p className="label">Casas · Fase Una</p>
              <h3>Espaço que acolhe. Arquitetura que inspira.</h3>
              <p>Três tipologias com 2, 3 ou 4 suítes e 3 vagas, distribuídas para fortalecer a integração entre residência, paisagismo e rua.</p>
            </div>
          </article>
          <article className="typology-card">
            <div className="typology-number">113 <small>a</small> 355 <sup>m²</sup></div>
            <div>
              <p className="label">Townhouses · Oriz &amp; Lumi</p>
              <h3>Novas perspectivas para diferentes momentos.</h3>
              <p>Uma coleção de metragens pensada para quem quer praticidade, luz natural e a experiência de morar no ALAMEDA.</p>
            </div>
          </article>
        </div>

        <div className="center-cta">
          <Button message={whatsappMessages.typologies}>Comparar plantas pelo WhatsApp</Button>
          <p>A Ariane ajuda você a identificar a tipologia mais adequada ao seu perfil.</p>
        </div>
      </section>

      <section className="section signatures" id="assinaturas">
        <div className="section-kicker"><span>03</span><p>Autoria em cada escala</p></div>
        <div className="signature-heading">
          <h2>Três grandes assinaturas. <em className="gradient-text">Uma experiência coerente.</em></h2>
          <p>Quando arquitetura, paisagem e interiores falam a mesma língua, morar deixa de ser apenas ocupar um endereço.</p>
        </div>
        <div className="signature-grid">
          <article className="signature-card signature-perkinswill">
            <span className="signature-index">A / 01</span>
            <p className="signature-role">Arquitetura</p>
            <h3>Perkins<span>&amp;</span>Will</h3>
            <p>Grandes vãos e linguagem contemporânea para aproximar ambientes, luz e natureza.</p>
          </article>
          <article className="signature-card signature-sergio">
            <span className="signature-index">P / 02</span>
            <p className="signature-role">Urbanismo &amp; Paisagismo</p>
            <h3>Sergio<br />Santana</h3>
            <p>Percursos, eixos visuais e desenho da paisagem conectados à vida cotidiana.</p>
          </article>
          <article className="signature-card signature-fernanda">
            <span className="signature-index">I / 03</span>
            <p className="signature-role">Interiores</p>
            <h3>Fernanda<br />Marques</h3>
            <p>Estética, funcionalidade e experiência em interiores concebidos para permanecer atuais.</p>
          </article>
        </div>
      </section>

      <section className="leisure" id="lazer">
        <figure className="leisure-media">
          <Image src="/distriqt-alameda/images/alameda-piscina.webp" alt="Perspectiva artística da piscina e do paisagismo do ALAMEDA" width={1920} height={1080} />
          <div className="image-caption">Perspectiva artística · Imagem de divulgação ARQOS</div>
        </figure>
        <div className="leisure-content">
          <p className="eyebrow"><span /> Clube &amp; áreas comuns</p>
          <h2>Seu tempo livre merece um <em className="gradient-text">cenário à altura.</em></h2>
          <p>Ambientes para movimento, encontros e contemplação compõem uma experiência de lazer completa, conectada à paisagem.</p>
          <ul className="amenities-list">
            {amenities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
          </ul>
          <Button>Receber a apresentação completa</Button>
        </div>
      </section>

      <section className="section distritq">
        <div className="section-kicker dark"><span>04</span><p>O bairro com um Q a mais</p></div>
        <div className="distritq-layout">
          <div className="distritq-title">
            <p className="oversized-word" aria-hidden="true">DISTRITQ</p>
            <h2>Não é um empreendimento isolado. <em>É parte de um bairro planejado.</em></h2>
          </div>
          <div className="distritq-copy">
            <p>O ALAMEDA integra o DISTRITQ, novo bairro de Alphaville desenvolvido pela Arqos. Uma nova centralidade urbana desenhada para aproximar moradia, serviços, lazer, mobilidade e natureza.</p>
          </div>
        </div>
        <div className="district-pillars">
          <article><strong>+600 mil m²</strong><span>de bairro planejado</span></article>
          <article><strong>Reserva Biológica</strong><span>como vizinha</span></article>
          <article><strong>Cidade de 15 minutos</strong><span>como conceito urbanístico</span></article>
          <article><strong>Mobilidade ativa</strong><span>e percursos caminháveis</span></article>
        </div>
        <p className="edge-note"><span>EDGE</span> Empreendimento em processo de certificação; Fase I das casas com Certificação Preliminar reportada.</p>
      </section>

      <section className="location" id="localizacao">
        <div className="location-media">
          <Image src="/distriqt-alameda/images/alameda-portaria.webp" alt="Perspectiva artística da portaria do ALAMEDA" width={1920} height={1080} />
        </div>
        <div className="location-card">
          <p className="section-number">05 · LOCALIZAÇÃO</p>
          <MapPinIcon />
          <h2>Alphaville ganha um novo jeito de morar.</h2>
          <address>
            Av. Honório Álvares Penteado, 5236<br />
            Alphaville · Santana de Parnaíba/SP
          </address>
          <Button message={whatsappMessages.visit}>Agendar uma apresentação</Button>
        </div>
      </section>

      <section className="section advisor">
        <div className="advisor-image">
          <Image src="/distriqt-alameda/images/ariane-laurindo.webp" alt="Ariane Laurindo, consultora imobiliária em Alphaville e Barueri" width={1942} height={809} />
        </div>
        <div className="advisor-copy">
          <p className="eyebrow dark"><span /> Atendimento consultivo</p>
          <h2>Informação clara para uma <em>decisão importante.</em></h2>
          <p className="advisor-lead">Ariane Laurindo</p>
          <p>Consultoria imobiliária em Alphaville e Barueri para apresentar plantas, metragens, condições comerciais e disponibilidade atualizada do ALAMEDA.</p>
          <ul>
            <li><span>01</span> Entendimento do seu momento e objetivo</li>
            <li><span>02</span> Comparação objetiva entre as tipologias</li>
            <li><span>03</span> Acompanhamento em cada etapa da decisão</li>
          </ul>
          <Button>Falar com Ariane no WhatsApp</Button>
        </div>
      </section>

      <section className="section faq" id="duvidas">
        <div className="faq-heading">
          <p className="section-number">06 · INFORMAÇÃO</p>
          <h2>Tudo o que você precisa saber <em>antes da conversa.</em></h2>
          <p>Valores, condições e disponibilidade são atualizados diretamente pela Ariane.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.question}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true">+</i></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-orbit final-orbit-one" aria-hidden="true" />
        <div className="final-orbit final-orbit-two" aria-hidden="true" />
        <p className="eyebrow"><span /> Seu próximo capítulo</p>
        <h2>O ALAMEDA está prestes a ser revelado. <em className="gradient-text">Esteja entre os primeiros a conhecer.</em></h2>
        <p>Receba plantas, valores e disponibilidade atualizada em um atendimento direto e personalizado.</p>
        <Button>Quero conhecer o ALAMEDA</Button>
        <small>Você será direcionado ao WhatsApp de Ariane Laurindo.</small>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-name">ALAMEDA</span>
          <span className="brand-place">DISTRITQ · ALPHAVILLE</span>
        </div>
        <div className="footer-contact">
          <strong>Ariane Laurindo</strong>
          <a href={wa()} target="_blank" rel="noreferrer">WhatsApp: (11) 94969-0737</a>
        </div>
        <p className="legal">Esta é uma página independente de atendimento imobiliário de Ariane Laurindo. Perspectivas meramente ilustrativas e imagens institucionais de divulgação de seus respectivos autores. Informações, áreas, condições comerciais e disponibilidade sujeitas a alteração sem aviso prévio. Consulte os documentos oficiais e a corretora responsável.</p>
        <p className="copyright">© {new Date().getFullYear()} Ariane Laurindo. Todos os direitos reservados.</p>
      </footer>

      <a className="mobile-whatsapp" href={wa()} target="_blank" rel="noreferrer" aria-label="Receber informações do ALAMEDA pelo WhatsApp com Ariane Laurindo">
        <span className="wa-icon"><WhatsAppIcon /></span>
        <span><small>Atendimento com Ariane</small><strong>Receber plantas e valores</strong></span>
        <ArrowIcon />
      </a>
    </main>
  );
}
