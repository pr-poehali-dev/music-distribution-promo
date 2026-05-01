import { useState } from "react";
import Icon from "@/components/ui/icon";

const GOLD_BG = "https://cdn.poehali.dev/projects/e9234494-31a6-4374-b4b7-bda5385165ef/files/89d30891-7abf-4770-ab1c-a366995e5a1d.jpg";
const FOUNDER_PHOTO = "https://cdn.poehali.dev/projects/e9234494-31a6-4374-b4b7-bda5385165ef/bucket/f4ce4ae8-7870-42f0-a67e-ea02a3fe9f39.jpeg";

const ARTISTS = [
  "ТРИ ДНЯ ДОЖДЯ", "NALIM", "SLYKT", "PALMDROPOV",
  "ARTEM SHILOVETS", "OPIUM2K", "044 ROSE", "OM.",
  "YASMI", "DARK WAVE", "NOVELLA", "PRIZRAK",
];

const PROMO_SERVICES = [
  { emoji: "📻", label: "Вывод на радио" },
  { emoji: "🎤", label: "Фиты с артистами" },
  { emoji: "🔖", label: "Пресейвы" },
  { emoji: "🎵", label: "Посев в TikTok" },
  { emoji: "🎧", label: "Плейлисты ВКонтакте" },
  { emoji: "🎸", label: "Яндекс Музыка" },
  { emoji: "🎯", label: "Таргетированная реклама" },
  { emoji: "📈", label: "Топ чартов ВК и Яндекс" },
];

const ADVANTAGES = [
  {
    title: "ВСЕ ПЛОЩАДКИ",
    desc: "ВАШ ТРЕК ПОЯВИТСЯ НА ВСЕХ СУЩЕСТВУЮЩИХ ПЛОЩАДКАХ И БУДЕТ ДОСТУПЕН ВО ВСЁМ МИРЕ, НА ВСЕХ УСТРОЙСТВАХ И ФОРМАТАХ",
  },
  {
    title: "ВАШИ ПРАВА",
    desc: "ВЫ ПОЛНОСТЬЮ СОХРАНЯЕТЕ АВТОРСКИЕ ПРАВА НА СВОЮ МУЗЫКУ И МОЖЕТЕ ВЫВЕСТИ ЗАРАБОТАННУЮ СУММУ В ЛЮБОЕ ВРЕМЯ",
  },
  {
    title: "ПОДДЕРЖКА 24/7",
    desc: "ОТВЕТИМ В ТЕЧЕНИЕ 3 ЧАСОВ. РАБОТАЕМ ПО ДОГОВОРУ. БЕСПЛАТНО ПРОДВИГАЕМ ВАШИ ТРЕКИ В РЕДАКТОРСКИЕ ПЛЕЙЛИСТЫ",
  },
];

type ArtistPos = { top: string; left?: string; right?: string; delay: string; size: string };

function FloatingArtists() {
  const positions: ArtistPos[] = [
    { top: "12%", left: "5%", delay: "0s", size: "13px" },
    { top: "25%", right: "8%", delay: "1.2s", size: "15px" },
    { top: "40%", left: "60%", delay: "2.5s", size: "12px" },
    { top: "60%", left: "15%", delay: "0.8s", size: "14px" },
    { top: "70%", right: "20%", delay: "3s", size: "13px" },
    { top: "80%", left: "40%", delay: "1.8s", size: "11px" },
    { top: "18%", left: "45%", delay: "4s", size: "14px" },
    { top: "50%", right: "5%", delay: "2s", size: "12px" },
  ];
  return (
    <>
      {positions.map((pos, i) => (
        <span
          key={i}
          className="artist-name"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            animationDelay: pos.delay,
            fontSize: pos.size,
          }}
        >
          {ARTISTS[i % ARTISTS.length]}
        </span>
      ))}
    </>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-oswald" style={{ background: "var(--clr-black)", color: "var(--clr-white)" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4"
        style={{ background: "rgba(17,17,17,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-3">
          {/* Gold shard logo */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,0 28,10 22,28 6,28 0,10" fill="#c9a84c" opacity="0.9" />
            <polygon points="14,4 24,12 19,24 9,24 4,12" fill="#111" />
            <text x="14" y="17" textAnchor="middle" fill="#c9a84c" fontSize="7" fontWeight="bold" fontFamily="Oswald">S</text>
          </svg>
          <span className="text-xl font-bold tracking-[0.15em] uppercase">SMART SM</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] p-2"
            aria-label="menu"
          >
            <span className="block w-6 h-[2px] bg-white transition-all" style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span className="block w-6 h-[2px] bg-white transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-[2px] bg-white transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 text-4xl font-bold tracking-widest uppercase"
          style={{ background: "rgba(17,17,17,0.98)" }}>
          {[
            { id: "distrib", label: "Дистрибьюция" },
            { id: "promo", label: "Продвижение" },
            { id: "produc", label: "Продюсирование" },
            { id: "founder", label: "О нас" },
          ].map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="hover:text-brand-red transition-colors">
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 px-5">
        {/* Gold shards bg */}
        <div className="absolute inset-0 overflow-hidden">
          <img src={GOLD_BG} alt="" className="absolute right-0 bottom-0 w-2/3 h-full object-cover opacity-25 mix-blend-luminosity" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(17,17,17,1) 40%, rgba(17,17,17,0.6) 100%)" }} />
        </div>

        <FloatingArtists />

        <div className="relative z-10 max-w-2xl">
          {/* Video block (thumbnail-style) */}
          <div className="mb-10 rounded-lg overflow-hidden relative cursor-pointer group w-full max-w-sm"
            onClick={() => scrollTo("founder")}>
            <img
              src={FOUNDER_PHOTO}
              alt="Александр Травкин — основатель SMART SM"
              className="w-full object-cover"
              style={{ maxHeight: "220px", objectPosition: "top" }}
            />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.3)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: "#c0181b" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-sm tracking-[0.3em] mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
            ПОСМОТРИ ЭТО ВИДЕО
          </p>

          <h1 className="font-bold leading-none tracking-tight mb-2" style={{ fontSize: "clamp(44px, 10vw, 80px)" }}>
            ВЫЛОЖИ<br />ТРЕК НА ВСЕ<br />ПЛОЩАДКИ,
          </h1>
          <h1 className="font-bold leading-none tracking-tight mb-10" style={{ fontSize: "clamp(44px, 10vw, 80px)", color: "var(--clr-gold)" }}>
            И ПРОДАВАЙ<br />СВОЮ МУЗЫКУ<br />ВО ВСЁМ МИРЕ
          </h1>

          <button className="red-btn py-4 px-8 text-lg rounded-sm mb-4 max-w-sm" onClick={() => scrollTo("distrib")}>
            ВЫЛОЖИТЬ МУЗЫКУ
          </button>
          <button className="red-btn py-4 px-8 text-lg rounded-sm max-w-sm"
            style={{ background: "transparent", border: "2px solid var(--clr-red)", color: "var(--clr-white)" }}
            onClick={() => scrollTo("promo")}
          >
            НА ПЛОЩАДКАХ
          </button>
        </div>
      </section>

      {/* ── STATS BEIGE SECTION ── */}
      <section className="beige-section relative overflow-hidden" style={{ clipPath: "polygon(0 4%, 100% 0%, 100% 96%, 0 100%)", padding: "80px 20px" }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <p className="text-5xl font-bold leading-none" style={{ color: "var(--clr-red)" }}>15 845</p>
            <h2 className="font-bold leading-none mt-1" style={{ fontSize: "clamp(32px, 7vw, 56px)" }}>
              АРТИСТОВ<br />ВЫКЛАДЫВАЮТ<br />ТРЕКИ ЧЕРЕЗ НАС
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { shape: "M", label: "БЕСПЛАТНО ПРОДВИГАЕМ ВАШИ ТРЕКИ В РЕДАКТОРСКИЕ ПЛЕЙЛИСТЫ" },
              { shape: "◆", label: "ОТВЕТИМ В ТЕЧЕНИЕ 3 ЧАСОВ, РАБОТАЕМ ПО ДОГОВОРУ" },
              { shape: "◆", label: "ВЫ СОХРАНЯЕТЕ ПРАВА И МОЖЕТЕ ВЫВЕСТИ ЗАРАБОТАННУЮ СУММУ" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl font-bold flex-shrink-0 mt-1" style={{ color: "var(--clr-gold)" }}>
                  {item.shape}
                </span>
                <p className="font-bold text-sm leading-relaxed tracking-wider" style={{ color: "var(--clr-black)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT LABEL ── */}
      <section className="relative px-5 py-20 overflow-hidden">
        <FloatingArtists />
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-bold leading-none mb-6" style={{ fontSize: "clamp(52px, 12vw, 100px)" }}>
            SMART SM
          </h2>
          <p className="font-bold mb-2" style={{ fontSize: "clamp(20px, 5vw, 36px)" }}>
            МУЗЫКАЛЬНАЯ КОМПАНИЯ,<br />ОСНОВАННАЯ АЛЕКСАНДРОМ<br />ТРАВКИНЫМ.
          </p>
          <p className="font-bold" style={{ fontSize: "clamp(20px, 5vw, 36px)", color: "var(--clr-red)" }}>
            ДИСТРИБЬЮЦИЯ + ПРОДВИЖЕНИЕ.
          </p>

          <div className="mt-8 space-y-1">
            {ARTISTS.slice(0, 6).map(a => (
              <p key={a} className="font-bold tracking-widest" style={{ fontSize: "clamp(13px, 3vw, 18px)", color: "rgba(255,255,255,0.18)", animationDelay: "0s" }}>
                {a}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS 2 ── */}
      <section className="relative px-5 py-16 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-30">
          <img src={GOLD_BG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <p className="font-bold text-base tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>БОЛЕЕ</p>
          <p className="font-bold leading-none" style={{ fontSize: "clamp(56px, 16vw, 120px)", color: "var(--clr-red)" }}>15 845</p>
          <h2 className="font-bold leading-none" style={{ fontSize: "clamp(28px, 7vw, 52px)" }}>
            ИСПОЛНИТЕЛЕЙ<br />ВЫКЛАДЫВАЮТ<br />СВОЮ МУЗЫКУ
          </h2>
          <h2 className="font-bold leading-none" style={{ fontSize: "clamp(28px, 7vw, 52px)", color: "var(--clr-red)" }}>
            ЧЕРЕЗ SMART SM.
          </h2>
          <div className="mt-8 space-y-1">
            {ARTISTS.slice(6).map(a => (
              <p key={a} className="font-bold tracking-widest" style={{ fontSize: "clamp(13px, 3vw, 17px)", color: "rgba(255,255,255,0.15)" }}>
                {a}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-bold leading-tight" style={{ fontSize: "clamp(22px, 5vw, 38px)" }}>
              КОЛИЧЕСТВО ТРЕКОВ В<br />НАШЕМ КАТАЛОГЕ
            </h3>
            <h3 className="font-bold leading-tight" style={{ fontSize: "clamp(22px, 5vw, 38px)", color: "var(--clr-red)" }}>
              ПРЕВЫСИЛО 55 361 ПЕСЕН.
            </h3>
            <h3 className="font-bold" style={{ fontSize: "clamp(22px, 5vw, 38px)" }}>
              ЭТО НЕ ПРОСТО ТАК!
            </h3>
          </div>
          <button className="red-btn py-4 rounded-sm mt-8 max-w-sm text-base" onClick={() => scrollTo("distrib")}>
            СПИСОК НАШИХ РЕЛИЗОВ
          </button>
        </div>
      </section>

      {/* ── ПРЕИМУЩЕСТВА ── */}
      <section className="px-5 py-16">
        <p className="text-base tracking-[0.3em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>ПРЕИМУЩЕСТВА</p>
        <h2 className="font-bold mb-10" style={{ fontSize: "clamp(40px, 10vw, 80px)", lineHeight: 0.9 }}>
          SMART SM
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {ADVANTAGES.map((adv, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-start beige-section rounded-sm p-6"
              style={{ width: "clamp(260px, 80vw, 340px)", minHeight: "280px" }}
            >
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(24px, 6vw, 36px)", color: "var(--clr-red)" }}>
                {adv.title}
              </h3>
              <p className="font-bold text-sm leading-relaxed tracking-wider" style={{ color: "var(--clr-black)" }}>
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ДИСТРИБЬЮЦИЯ ── */}
      <section id="distrib" className="px-5 py-16 beige-section relative" style={{ clipPath: "polygon(0 3%, 100% 0%, 100% 97%, 0 100%)", padding: "80px 20px" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>01 / ДИСТРИБЬЮЦИЯ</p>
          <h2 className="font-bold leading-none mb-6" style={{ fontSize: "clamp(36px, 9vw, 70px)", color: "var(--clr-black)" }}>
            ВЫГРУЗИТЬ<br /><span style={{ color: "var(--clr-red)" }}>РЕЛИЗ</span>
          </h2>

          <div className="space-y-4">
            {[
              { label: "НАЗВАНИЕ ТРЕКА", ph: "Введите название..." },
              { label: "ИСПОЛНИТЕЛЬ", ph: "Имя артиста..." },
            ].map(field => (
              <div key={field.label}>
                <label className="block text-xs font-bold tracking-widest mb-2" style={{ color: "rgba(0,0,0,0.45)" }}>
                  {field.label}
                </label>
                <input
                  placeholder={field.ph}
                  className="w-full px-4 py-3 font-oswald text-sm outline-none rounded-sm"
                  style={{ background: "rgba(0,0,0,0.08)", border: "2px solid rgba(0,0,0,0.15)", color: "var(--clr-black)" }}
                  onFocus={e => (e.target.style.borderColor = "var(--clr-red)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-bold tracking-widest mb-2" style={{ color: "rgba(0,0,0,0.45)" }}>
                ТИП РЕЛИЗА
              </label>
              <div className="flex gap-2">
                {["Сингл", "EP", "Альбом"].map(t => (
                  <button key={t} className="flex-1 py-2 rounded-sm font-bold text-sm tracking-wider uppercase transition-all"
                    style={{ background: "rgba(0,0,0,0.1)", border: "2px solid rgba(0,0,0,0.15)", color: "var(--clr-black)" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--clr-red)"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "var(--clr-red)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.1)"; e.currentTarget.style.color = "var(--clr-black)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)"; }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-all"
              style={{ borderColor: "rgba(0,0,0,0.2)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--clr-red)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")}
            >
              <Icon name="Upload" size={28} className="mx-auto mb-2" style={{ color: "var(--clr-red)" }} />
              <p className="font-bold text-sm tracking-wider" style={{ color: "rgba(0,0,0,0.5)" }}>
                ЗАГРУЗИТЬ ТРЕК (WAV / FLAC)
              </p>
            </div>

            <div className="border-2 border-dashed rounded-sm p-6 text-center cursor-pointer transition-all"
              style={{ borderColor: "rgba(0,0,0,0.2)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--clr-gold)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")}
            >
              <Icon name="Image" size={24} className="mx-auto mb-2" style={{ color: "var(--clr-gold)" }} />
              <p className="font-bold text-xs tracking-wider" style={{ color: "rgba(0,0,0,0.4)" }}>
                ОБЛОЖКА · 3000×3000 PX
              </p>
            </div>

            <button className="red-btn py-4 rounded-sm text-base">
              ОТПРАВИТЬ РЕЛИЗ
            </button>
          </div>
        </div>
      </section>

      {/* ── ПРОДВИЖЕНИЕ ── */}
      <section id="promo" className="px-5 py-20 relative overflow-hidden">
        <FloatingArtists />
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>02 / ПРОДВИЖЕНИЕ</p>
          <h2 className="font-bold leading-none mb-10" style={{ fontSize: "clamp(36px, 9vw, 70px)" }}>
            ПРОДВИЖЕНИЕ<br /><span style={{ color: "var(--clr-red)" }}>МУЗЫКИ</span>
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {PROMO_SERVICES.map((s, i) => (
              <div key={i} className="p-4 rounded-sm"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--clr-red)"; e.currentTarget.style.background = "rgba(192,24,27,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              >
                <span className="text-2xl block mb-2">{s.emoji}</span>
                <p className="font-bold text-xs tracking-wider leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <button className="red-btn py-4 rounded-sm text-base max-w-sm">
            ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
          </button>
        </div>
      </section>

      {/* ── ПРОДЮСИРОВАНИЕ ── */}
      <section id="produc" className="beige-section px-5 py-20 relative" style={{ clipPath: "polygon(0 3%, 100% 0%, 100% 97%, 0 100%)", padding: "80px 20px" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>03 / ПРОДЮСИРОВАНИЕ</p>
          <h2 className="font-bold leading-none mb-10" style={{ fontSize: "clamp(36px, 9vw, 70px)", color: "var(--clr-black)" }}>
            ПРОДЮСИРОВАНИЕ<br /><span style={{ color: "var(--clr-red)" }}>АРТИСТА</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "СВЕДЕНИЕ И МАСТЕРИНГ",
                items: ["Студийное сведение треков", "Мастеринг под стриминги", "Stem-мастеринг", "Исправление тональности"],
              },
              {
                title: "СОЗДАНИЕ ОБЛОЖКИ",
                items: ["Дизайн обложки сингла / альбома", "Адаптация под все платформы", "Фирменный стиль артиста", "Концепт и арт-ворк"],
              },
            ].map((block, i) => (
              <div key={i} className="p-6 rounded-sm"
                style={{ background: "rgba(0,0,0,0.06)", border: "2px solid rgba(0,0,0,0.1)" }}>
                <h3 className="font-bold mb-4 text-xl" style={{ color: "var(--clr-red)" }}>{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map(item => (
                    <li key={item} className="flex items-center gap-2 font-bold text-sm tracking-wider" style={{ color: "var(--clr-black)" }}>
                      <span style={{ color: "var(--clr-gold)" }}>◆</span> {item}
                    </li>
                  ))}
                </ul>
                <button className="red-btn py-3 rounded-sm text-sm mt-5">
                  ЗАКАЗАТЬ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section id="founder" className="px-5 py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>ОСНОВАТЕЛЬ</p>
          <h2 className="font-bold leading-none mb-8" style={{ fontSize: "clamp(32px, 8vw, 64px)" }}>
            АЛЕКСАНДР<br />ТРАВКИН
          </h2>

          <div className="rounded-sm overflow-hidden mb-8 relative" style={{ maxWidth: "360px" }}>
            <img
              src={FOUNDER_PHOTO}
              alt="Александр Травкин"
              className="w-full object-cover object-top"
              style={{ maxHeight: "400px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, rgba(17,17,17,0.9), transparent)" }}>
              <p className="font-bold text-lg tracking-widest">АЛЕКСАНДР ТРАВКИН</p>
              <p className="text-sm tracking-wider" style={{ color: "var(--clr-gold)" }}>ОСНОВАТЕЛЬ SMART SM</p>
            </div>
          </div>

          <p className="font-bold leading-relaxed mb-8" style={{ fontSize: "clamp(16px, 4vw, 24px)", color: "rgba(255,255,255,0.75)" }}>
            МЫ ЗАНИМАЕМСЯ ДИСТРИБЬЮЦИЕЙ МУЗЫКИ И МЕНЕДЖМЕНТОМ АРТИСТОВ. SMART SM — ЭТО ТВОЙ ПУТЬ К МИРОВЫМ ПЛОЩАДКАМ.
          </p>

          <button className="red-btn py-4 rounded-sm text-base max-w-sm" onClick={() => scrollTo("distrib")}>
            ВЫЛОЖИТЬ МУЗЫКУ
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-5 py-10 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="font-bold text-2xl tracking-[0.2em] mb-2">SMART SM</p>
        <p className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
          © 2024 SMART SM · ДИСТРИБЬЮЦИЯ · ПРОДВИЖЕНИЕ · ПРОДЮСИРОВАНИЕ
        </p>
        <p className="text-xs mt-1 tracking-wider" style={{ color: "rgba(255,255,255,0.2)" }}>
          ОСНОВАТЕЛЬ — АЛЕКСАНДР ТРАВКИН
        </p>
      </footer>
    </div>
  );
}