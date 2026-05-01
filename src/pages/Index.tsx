import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/e9234494-31a6-4374-b4b7-bda5385165ef/files/ec5ee1ea-e67c-44e9-b328-15f4e101445e.jpg";

const PLATFORMS = [
  { name: "Spotify", emoji: "🎵" },
  { name: "Apple Music", emoji: "🍎" },
  { name: "ВКонтакте", emoji: "🎶" },
  { name: "Яндекс Музыка", emoji: "🎸" },
  { name: "SoundCloud", emoji: "☁️" },
  { name: "Deezer", emoji: "🎧" },
  { name: "Tidal", emoji: "🌊" },
  { name: "YouTube Music", emoji: "▶️" },
];

const PROMOTION_SERVICES = [
  { icon: "Radio", title: "Вывод на радио", desc: "Попадание на федеральные и тематические радиостанции" },
  { icon: "Users", title: "Фиты с артистами", desc: "Организуем коллаборации с нужными исполнителями" },
  { icon: "Bookmark", title: "Пресейвы", desc: "Сбор пресейвов до релиза для взрывного старта" },
  { icon: "Play", title: "Посев в TikTok", desc: "Интеграции у блогеров под ваш звук" },
  { icon: "Music", title: "Плейлисты ВКонтакте", desc: "Посевы в пользовательских плейлистах" },
  { icon: "Headphones", title: "Яндекс Музыка", desc: "Продвижение через закрытые чаты и редакционные плейлисты" },
  { icon: "Target", title: "Таргетированная реклама", desc: "Ведение рекламных кампаний в соцсетях" },
  { icon: "TrendingUp", title: "Топ чартов ВК и Яндекс", desc: "Гарантированный вывод в топ музыкальных чартов" },
];

const GENRES = ["Хип-хоп", "Электронная", "Поп", "R&B", "Рок", "Инди", "Классика", "Джаз"];

function EqBars({ color = "cyan" }: { color?: "cyan" | "purple" }) {
  const heights = [40, 70, 55, 90, 45, 75, 60, 85, 50, 65];
  return (
    <div className="flex items-end gap-[3px] h-12">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[4px] rounded-sm"
          style={{
            height: `${h}%`,
            background: color === "cyan" ? "var(--neon-cyan)" : "var(--neon-purple)",
            animation: `bar-dance ${0.8 + i * 0.1}s ease-in-out infinite`,
            animationDelay: `${i * 0.08}s`,
            opacity: 0.7 + (i % 3) * 0.1,
          }}
        />
      ))}
    </div>
  );
}

function WaveDecor() {
  return (
    <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
      <path
        d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z"
        fill="rgba(0,229,255,0.06)"
      />
      <path
        d="M0,55 C200,20 400,70 600,45 C800,20 1000,65 1200,40 C1320,28 1380,50 1440,45 L1440,80 L0,80 Z"
        fill="rgba(180,74,255,0.04)"
      />
    </svg>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState<"distrib" | "promo" | "produc">("distrib");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["Spotify", "Apple Music"]);
  const [releaseType, setReleaseType] = useState("single");
  const [selectedGenre, setSelectedGenre] = useState("Хип-хоп");
  const [step, setStep] = useState(1);

  const togglePlatform = (name: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen wave-bg text-white font-montserrat">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(8,12,20,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--dark-border)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--neon-cyan)" }}>
            <span className="text-xs font-oswald font-bold" style={{ color: "var(--dark-base)" }}>З</span>
          </div>
          <span className="font-oswald font-bold text-xl tracking-widest neon-text-cyan">ЗВУК</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { id: "distrib", label: "Дистрибьюция" },
            { id: "promo", label: "Продвижение" },
            { id: "produc", label: "Продюсирование" },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id as "distrib" | "promo" | "produc");
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-oswald text-sm tracking-wider transition-all duration-300"
              style={{ color: activeSection === item.id ? "var(--neon-cyan)" : "rgba(255,255,255,0.6)" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="neon-btn-cyan px-5 py-2 rounded-lg text-sm hidden md:block">
          Начать
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,12,20,0.5) 0%, rgba(8,12,20,0.95) 100%)" }} />
        </div>

        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(180,74,255,0.12) 0%, transparent 70%)", filter: "blur(60px)", animationDelay: "1.5s" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <EqBars color="cyan" />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="font-montserrat text-sm font-light tracking-[0.4em] mb-4" style={{ color: "var(--neon-cyan)" }}>
              МУЗЫКАЛЬНАЯ ПЛАТФОРМА
            </p>
            <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-none mb-4">
              ТВО<span className="neon-text-cyan">Й</span> ЗВУК —
            </h1>
            <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-none mb-8">
              <span className="neon-text-purple">МИ</span>РУ
            </h1>
          </div>

          <p className="font-montserrat text-lg md:text-xl font-light mb-12 animate-fade-in"
            style={{ color: "rgba(255,255,255,0.65)", animationDelay: "0.3s" }}>
            Дистрибьюция на все платформы&nbsp;·&nbsp;Продвижение&nbsp;·&nbsp;Продюсирование
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <button
              className="neon-btn-cyan px-10 py-4 rounded-xl text-base"
              onClick={() => document.getElementById("distrib")?.scrollIntoView({ behavior: "smooth" })}
            >
              Выгрузить релиз
            </button>
            <button
              className="px-10 py-4 rounded-xl text-base font-oswald font-semibold tracking-wider transition-all duration-300 border"
              style={{ borderColor: "var(--neon-purple)", color: "var(--neon-purple)" }}
              onClick={() => document.getElementById("promo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Продвижение
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDecor />
        </div>
      </section>

      {/* ===== SECTION 1: ДИСТРИБЬЮЦИЯ ===== */}
      <section id="distrib" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="font-montserrat text-xs tracking-[0.5em] mb-3" style={{ color: "var(--neon-cyan)" }}>01 / ДИСТРИБЬЮЦИЯ</p>
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4">
            ВЫГРУЗИТЬ <span className="neon-text-cyan">РЕЛИЗ</span>
          </h2>
          <div className="section-divider mx-auto w-40 mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="glass-card rounded-2xl p-8 neon-border-cyan border">
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map(s => (
                <button
                  key={s}
                  onClick={() => setStep(s)}
                  className="flex-1 py-2 rounded-lg font-oswald text-sm tracking-wider transition-all"
                  style={{
                    background: step === s ? "var(--neon-cyan)" : "var(--dark-border)",
                    color: step === s ? "var(--dark-base)" : "rgba(255,255,255,0.4)",
                  }}
                >
                  ШАГ {s}
                </button>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="font-oswald text-xl mb-4" style={{ color: "var(--neon-cyan)" }}>Информация о треке</h3>

                <div>
                  <label className="block text-xs tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>НАЗВАНИЕ ТРЕКА</label>
                  <input
                    placeholder="Введите название..."
                    className="w-full rounded-lg px-4 py-3 font-montserrat text-sm outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--dark-border)", color: "white" }}
                    onFocus={e => (e.target.style.borderColor = "var(--neon-cyan)")}
                    onBlur={e => (e.target.style.borderColor = "var(--dark-border)")}
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>ИСПОЛНИТЕЛЬ</label>
                  <input
                    placeholder="Имя артиста..."
                    className="w-full rounded-lg px-4 py-3 font-montserrat text-sm outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--dark-border)", color: "white" }}
                    onFocus={e => (e.target.style.borderColor = "var(--neon-cyan)")}
                    onBlur={e => (e.target.style.borderColor = "var(--dark-border)")}
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>ТИП РЕЛИЗА</label>
                  <div className="flex gap-3">
                    {["single", "ep", "album"].map(t => (
                      <button
                        key={t}
                        onClick={() => setReleaseType(t)}
                        className="flex-1 py-2 rounded-lg font-oswald text-xs tracking-widest uppercase transition-all"
                        style={{
                          background: releaseType === t ? "rgba(0,229,255,0.15)" : "transparent",
                          border: `1px solid ${releaseType === t ? "var(--neon-cyan)" : "var(--dark-border)"}`,
                          color: releaseType === t ? "var(--neon-cyan)" : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {t === "single" ? "Сингл" : t === "ep" ? "EP" : "Альбом"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>ЖАНР</label>
                  <div className="flex flex-wrap gap-2">
                    {GENRES.map(g => (
                      <button
                        key={g}
                        onClick={() => setSelectedGenre(g)}
                        className="px-3 py-1 rounded-full text-xs font-montserrat transition-all"
                        style={{
                          background: selectedGenre === g ? "rgba(0,229,255,0.2)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${selectedGenre === g ? "var(--neon-cyan)" : "var(--dark-border)"}`,
                          color: selectedGenre === g ? "var(--neon-cyan)" : "rgba(255,255,255,0.45)",
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={() => setStep(2)} className="neon-btn-cyan w-full py-3 rounded-xl text-sm mt-2">
                  Далее →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="font-oswald text-xl mb-4" style={{ color: "var(--neon-cyan)" }}>Выбор платформ</h3>

                <div className="grid grid-cols-2 gap-3">
                  {PLATFORMS.map(p => (
                    <button
                      key={p.name}
                      onClick={() => togglePlatform(p.name)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left"
                      style={{
                        background: selectedPlatforms.includes(p.name) ? "rgba(0,229,255,0.12)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${selectedPlatforms.includes(p.name) ? "var(--neon-cyan)" : "var(--dark-border)"}`,
                      }}
                    >
                      <span className="text-lg">{p.emoji}</span>
                      <span className="font-montserrat text-xs" style={{ color: selectedPlatforms.includes(p.name) ? "var(--neon-cyan)" : "rgba(255,255,255,0.6)" }}>
                        {p.name}
                      </span>
                      {selectedPlatforms.includes(p.name) && (
                        <Icon name="Check" size={12} className="ml-auto" style={{ color: "var(--neon-cyan)" }} />
                      )}
                    </button>
                  ))}
                </div>

                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Выбрано: {selectedPlatforms.length} из {PLATFORMS.length} платформ
                </p>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl font-oswald text-sm tracking-wider border transition-all"
                    style={{ borderColor: "var(--dark-border)", color: "rgba(255,255,255,0.5)" }}>
                    ← Назад
                  </button>
                  <button onClick={() => setStep(3)} className="flex-1 neon-btn-cyan py-3 rounded-xl text-sm">
                    Далее →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="font-oswald text-xl mb-4" style={{ color: "var(--neon-cyan)" }}>Загрузка файлов</h3>

                <div
                  className="border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer"
                  style={{ borderColor: "var(--dark-border)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--neon-cyan)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--dark-border)")}
                >
                  <Icon name="Upload" size={32} className="mx-auto mb-3" style={{ color: "var(--neon-cyan)" }} />
                  <p className="font-montserrat text-sm mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Перетащите аудиофайл или нажмите
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>WAV / FLAC · 44.1 kHz · 24 bit</p>
                </div>

                <div
                  className="border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all"
                  style={{ borderColor: "var(--dark-border)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--neon-purple)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--dark-border)")}
                >
                  <Icon name="Image" size={28} className="mx-auto mb-2" style={{ color: "var(--neon-purple)" }} />
                  <p className="font-montserrat text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Обложка · 3000×3000 px · JPG / PNG
                  </p>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl font-oswald text-sm tracking-wider border transition-all"
                    style={{ borderColor: "var(--dark-border)", color: "rgba(255,255,255,0.5)" }}>
                    ← Назад
                  </button>
                  <button className="flex-1 neon-btn-cyan py-3 rounded-xl text-sm">
                    Отправить релиз 🚀
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Info side */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border" style={{ borderColor: "var(--dark-border)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,229,255,0.15)" }}>
                  <Icon name="Globe" size={18} style={{ color: "var(--neon-cyan)" }} />
                </div>
                <div>
                  <p className="font-oswald text-sm tracking-wider">100+ ПЛАТФОРМ</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>по всему миру</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.map(p => (
                  <span key={p.name} className="text-xs px-2 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
                    {p.emoji} {p.name}
                  </span>
                ))}
              </div>
            </div>

            {[
              { icon: "Zap", color: "var(--neon-cyan)", title: "Быстрая модерация", desc: "Релиз выходит в течение 1–3 рабочих дней" },
              { icon: "BarChart2", color: "var(--neon-purple)", title: "Аналитика в реальном времени", desc: "Отслеживайте прослушивания и доход" },
              { icon: "DollarSign", color: "var(--neon-cyan)", title: "100% роялти — ваши", desc: "Мы не забираем процент с ваших доходов" },
            ].map(item => (
              <div key={item.title} className="glass-card rounded-xl p-5 border flex items-start gap-4 transition-all"
                style={{ borderColor: "var(--dark-border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}20` }}>
                  <Icon name={item.icon} size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="font-oswald tracking-wider text-sm mb-1">{item.title}</p>
                  <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: ПРОДВИЖЕНИЕ ===== */}
      <section id="promo" className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, var(--dark-base) 0%, #0a0818 50%, var(--dark-base) 100%)" }}>
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(180,74,255,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-montserrat text-xs tracking-[0.5em] mb-3" style={{ color: "var(--neon-purple)" }}>02 / ПРОДВИЖЕНИЕ</p>
            <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4">
              <span className="neon-text-purple">ПРОДВИЖЕНИЕ</span> МУЗЫКИ
            </h2>
            <p className="font-montserrat text-base font-light max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Комплексный вывод артиста на все ключевые площадки и в топ чарты
            </p>
            <div className="section-divider mx-auto w-40 mt-6"
              style={{ background: "linear-gradient(90deg, transparent, var(--neon-purple), transparent)" }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROMOTION_SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="glass-card rounded-2xl p-6 border cursor-pointer transition-all duration-300"
                style={{ borderColor: "var(--dark-border)", animationDelay: `${i * 0.1}s` }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--neon-purple)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(180,74,255,0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--dark-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(180,74,255,0.15)" }}>
                  <Icon name={service.icon} size={20} style={{ color: "var(--neon-purple)" }} />
                </div>
                <h3 className="font-oswald text-sm tracking-wider mb-2">{service.title}</h3>
                <p className="font-montserrat text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 glass-card rounded-2xl p-8 border neon-border-purple text-center">
            <div className="flex justify-center mb-4">
              <EqBars color="purple" />
            </div>
            <h3 className="font-oswald text-2xl mb-3">ХОЧЕШЬ ПАКЕТ ПРОДВИЖЕНИЯ?</h3>
            <p className="font-montserrat text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Расскажи о своём проекте — подберём оптимальную стратегию
            </p>
            <button className="neon-btn-purple px-10 py-4 rounded-xl text-base">
              Получить предложение
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: ПРОДЮСИРОВАНИЕ ===== */}
      <section id="produc" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="font-montserrat text-xs tracking-[0.5em] mb-3" style={{ color: "var(--neon-pink)" }}>03 / ПРОДЮСИРОВАНИЕ</p>
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4">
            ПРОДЮСИРОВАНИЕ <span style={{ color: "var(--neon-pink)", textShadow: "0 0 20px rgba(255,63,164,0.5)" }}>АРТИСТА</span>
          </h2>
          <div className="section-divider mx-auto w-40 mt-6"
            style={{ background: "linear-gradient(90deg, transparent, var(--neon-pink), transparent)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Сведение и мастеринг */}
          <div
            className="glass-card rounded-2xl p-8 border transition-all duration-300"
            style={{ borderColor: "var(--dark-border)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--neon-pink)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,63,164,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--dark-border)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(255,63,164,0.15)" }}>
              <Icon name="Sliders" size={26} style={{ color: "var(--neon-pink)" }} />
            </div>

            <h3 className="font-oswald text-2xl mb-3" style={{ color: "var(--neon-pink)" }}>
              СВЕДЕНИЕ И МАСТЕРИНГ
            </h3>
            <p className="font-montserrat text-sm font-light leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Профессиональная обработка звука: балансировка частот, динамическая обработка, финальный мастеринг для всех стриминговых платформ.
            </p>

            <div className="space-y-3 mb-8">
              {["Студийное сведение треков", "Мастеринг под стриминги (Spotify, Apple Music)", "Исправление тональности и тайминга", "Stem-мастеринг"].map(feat => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--neon-pink)" }} />
                  <span className="font-montserrat text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{feat}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4 mb-6" style={{ background: "rgba(255,63,164,0.05)", border: "1px solid rgba(255,63,164,0.15)" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: "var(--neon-pink)" }}>
                  <Icon name="Play" size={10} style={{ color: "white" }} />
                </div>
                <span className="font-montserrat text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Пример мастеринга</span>
              </div>
              <div className="flex items-end gap-[2px] h-10">
                {Array.from({ length: 40 }).map((_, i) => {
                  const h = Math.sin(i * 0.4) * 50 + 50;
                  return (
                    <div key={i} className="flex-1 rounded-sm" style={{
                      height: `${h}%`,
                      background: `rgba(255,63,164,${0.3 + (h / 100) * 0.5})`,
                    }} />
                  );
                })}
              </div>
            </div>

            <button
              className="w-full py-3 rounded-xl font-oswald tracking-wider text-sm transition-all"
              style={{ background: "rgba(255,63,164,0.15)", border: "1px solid var(--neon-pink)", color: "var(--neon-pink)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,63,164,0.25)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,63,164,0.15)")}
            >
              Заказать сведение
            </button>
          </div>

          {/* Создание обложки */}
          <div
            className="glass-card rounded-2xl p-8 border transition-all duration-300"
            style={{ borderColor: "var(--dark-border)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--neon-pink)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,63,164,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--dark-border)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(180,74,255,0.15)" }}>
              <Icon name="Palette" size={26} style={{ color: "var(--neon-purple)" }} />
            </div>

            <h3 className="font-oswald text-2xl mb-3" style={{ color: "var(--neon-purple)" }}>
              СОЗДАНИЕ ОБЛОЖКИ
            </h3>
            <p className="font-montserrat text-sm font-light leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Разработка уникального визуального образа для релиза — обложка, которая выделяется в потоке треков и цепляет с первого взгляда.
            </p>

            <div className="space-y-3 mb-8">
              {["Дизайн обложки сингла / альбома", "Адаптация под все форматы платформ", "Фирменный стиль артиста", "Концепт и арт-ворк"].map(feat => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--neon-purple)" }} />
                  <span className="font-montserrat text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{feat}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { bg: "linear-gradient(135deg, #b44aff, #00e5ff)" },
                { bg: "linear-gradient(135deg, #ff3fa4, #b44aff)" },
                { bg: "linear-gradient(135deg, #00e5ff, #ff3fa4)" },
              ].map((c, i) => (
                <div key={i} className="aspect-square rounded-xl flex items-center justify-center"
                  style={{ background: c.bg, opacity: 0.75 }}>
                  <Icon name="Music" size={20} style={{ color: "rgba(255,255,255,0.9)" }} />
                </div>
              ))}
            </div>

            <button
              className="w-full py-3 rounded-xl font-oswald tracking-wider text-sm transition-all"
              style={{ background: "rgba(180,74,255,0.15)", border: "1px solid var(--neon-purple)", color: "var(--neon-purple)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(180,74,255,0.25)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(180,74,255,0.15)")}
            >
              Заказать обложку
            </button>
          </div>
        </div>

        {/* Full package CTA */}
        <div className="mt-10 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(0,229,255,0.08), rgba(180,74,255,0.08), rgba(255,63,164,0.08))", border: "1px solid var(--dark-border)" }}>
          <p className="font-montserrat text-xs tracking-[0.4em] mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>ПОЛНЫЙ ПАКЕТ</p>
          <h3 className="font-oswald text-3xl md:text-4xl mb-4">
            ДИСТРИБЬЮЦИЯ + ПРОДВИЖЕНИЕ + ПРОДЮСИРОВАНИЕ
          </h3>
          <p className="font-montserrat text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Всё в одном месте — от сырого файла до топа чартов
          </p>
          <button className="neon-btn-cyan px-12 py-4 rounded-xl text-base">
            Обсудить полный пакет
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-12 text-center" style={{ borderTop: "1px solid var(--dark-border)" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--neon-cyan)" }}>
            <span className="text-xs font-oswald font-bold" style={{ color: "var(--dark-base)" }}>З</span>
          </div>
          <span className="font-oswald font-bold text-xl tracking-widest neon-text-cyan">ЗВУК</span>
        </div>
        <p className="font-montserrat text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          © 2024 ЗВУК · Музыкальная платформа · Дистрибьюция · Продвижение · Продюсирование
        </p>
      </footer>
    </div>
  );
}
