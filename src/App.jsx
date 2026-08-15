import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowCounterClockwise,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CaretDown,
  Check,
  Broadcast,
  Buildings,
  CameraSlash,
  Car,
  ChatsCircle,
  CheckCircle,
  Cpu,
  Eye,
  EyeSlash,
  Gauge,
  HandPalm,
  List,
  MagnifyingGlassPlus,
  Minus,
  MoonStars,
  NavigationArrow,
  Pause,
  PhoneCall,
  Play,
  Plus,
  RoadHorizon,
  Scan,
  ShieldCheck,
  SpeakerHigh,
  SteeringWheel,
  Tree,
  Warning,
  WarningOctagon,
  X,
} from "@phosphor-icons/react";
import { acceptanceRows, adasRows, appendix, chapterGroups, checks, cockpitRows, competitorRows, degradationCases, designImplications, dmsDeliveryStages, dmsDriverStateFlow, dmsMetricGroups, dmsPriorityGroups, dmsSystemStateFlow, dmsTrackingEvents, driverStates, escalationRows, eventFields, gazeZones, hmiStates, monitoringRows, qualityRules, remotePermissions, scenarios, startupFaults, systemLayers, ttsRows, vehicles } from "./data";
import RobotBenchmark from "./RobotBenchmark";

const ease = [0.22, 1, 0.36, 1];
gsap.registerPlugin(ScrollTrigger);

const driverStateIconMap = {
  normal: CheckCircle,
  hands: HandPalm,
  gaze: Eye,
  both: EyeSlash,
  fatigue: MoonStars,
  incapacity: WarningOctagon,
  unavailable: CameraSlash,
};

const hmiIconMap = {
  steering: SteeringWheel,
  eye: Eye,
  both: EyeSlash,
  warning: WarningOctagon,
  car: Car,
  sos: PhoneCall,
};

const escalationIconList = [SteeringWheel, Eye, EyeSlash, SpeakerHigh, WarningOctagon, Car];

const scenarioSceneMap = {
  hands: "/assets/dms/simulator/hands-off.png",
  gaze: "/assets/dms/simulator/gaze-off.png",
  both: "/assets/dms/simulator/hands-eyes-off.png",
  fatigue: "/assets/dms/simulator/fatigue.png",
  sleep: "/assets/dms/simulator/sleep.png",
  incapacity: "/assets/dms/simulator/incapacity.png",
};

const driverStateSceneMap = {
  normal: "/assets/dms/home-prd-hero-v2.png",
  hands: "/assets/dms/simulator/hands-off.png",
  gaze: "/assets/dms/simulator/gaze-off.png",
  both: "/assets/dms/simulator/hands-eyes-off.png",
  fatigue: "/assets/dms/simulator/fatigue.png",
  incapacity: "/assets/dms/simulator/incapacity.png",
};

const scenarioSceneMeta = {
  hands: { caption: "双手离开方向盘", alt: "车辆行进中，驾驶员双手离开方向盘" },
  gaze: { caption: "视线偏离前方道路", alt: "车辆行进中，驾驶员双手握盘但头部和视线转向侧方" },
  both: { caption: "手部与视线同时脱离", alt: "车辆行进中，驾驶员视线转向侧方且双手离开方向盘" },
  fatigue: { caption: "头部下垂并持续困倦", alt: "车辆行进中，驾驶员眼睑沉重并出现点头困倦状态" },
  sleep: { caption: "闭眼睡着且无有效操作", alt: "车辆行进中，驾驶员闭眼睡着、头部下垂且双臂松弛" },
  incapacity: { caption: "疑似医疗失能", alt: "车辆行进中，驾驶员双眼紧闭、手按胸口并出现痛苦失能状态" },
};

const roadTypeIconList = [RoadHorizon, Buildings, Tree];
const systemLayerIconList = [Scan, NavigationArrow, Cpu, ChatsCircle];
const degradationIconList = [CameraSlash, EyeSlash, Broadcast, Cpu];

function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  if (window.__portfolioLenis) {
    window.__portfolioLenis.scrollTo(target, { offset: -72, duration: 1.15 });
  } else {
    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }
}

function Reveal({ children, className = "", delay = 0, ...rest }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduced ? 0 : 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

function ZoomableImage({ src, alt, className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={`zoomable-media ${className}`} onClick={() => setOpen(true)} aria-label={`查看原图：${alt}`}>
        <img src={src} alt={alt} />
        <span>查看原图 <MagnifyingGlassPlus size={17} /></span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="image-lightbox" role="dialog" aria-modal="true" aria-label={alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="关闭原图"><X size={22} /></button>
            <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const levelThreeTone = {
  name: "三连急促",
  frequencies: [1080, 1080, 1080, 760, 760, 760],
  interval: 0.22,
  duration: 0.145,
  peak: 0.4,
  oscillator: "square",
  rumble: 86,
  vibration: [150, 55, 150, 55, 150, 90, 260],
};

function playAlertTone(level) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return 0;
  const context = new AudioContext();
  const master = context.createGain();
  const compressor = context.createDynamicsCompressor();
  master.gain.value = level === 3 ? 0.9 : 0.92;
  compressor.threshold.value = -18;
  compressor.knee.value = 12;
  compressor.ratio.value = 5;
  compressor.attack.value = 0.004;
  compressor.release.value = 0.12;
  master.connect(compressor).connect(context.destination);

  const levelThreePreset = levelThreeTone;
  const frequencies = level === 3 ? levelThreePreset.frequencies : level === 2 ? [900, 900, 900] : [760, 760];
  const count = frequencies.length;
  const gap = level === 3 ? levelThreePreset.interval : level === 2 ? 0.5 : 0.24;
  const duration = level === 3 ? levelThreePreset.duration : level === 2 ? 0.35 : 0.12;
  const peak = level === 3 ? levelThreePreset.peak : level === 2 ? 0.24 : 0.14;
  for (let i = 0; i < count; i += 1) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + 0.04 + i * gap;
    oscillator.type = level === 3 ? levelThreePreset.oscillator : level === 2 ? "square" : "sine";
    oscillator.frequency.setValueAtTime(frequencies[i], start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(peak, start + 0.014);
    gain.gain.setValueAtTime(peak, start + Math.max(0.03, duration - 0.045));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain).connect(master);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  if (level === 3) {
    const vibration = context.createOscillator();
    const vibrationGain = context.createGain();
    vibration.type = "triangle";
    vibration.frequency.value = levelThreePreset.rumble;
    vibrationGain.gain.setValueAtTime(0.0001, context.currentTime);
    for (let i = 0; i < count; i += 1) {
      const start = context.currentTime + 0.04 + i * gap;
      vibrationGain.gain.setValueAtTime(0.0001, start);
      vibrationGain.gain.exponentialRampToValueAtTime(0.18, start + 0.025);
      vibrationGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    }
    vibration.connect(vibrationGain).connect(master);
    vibration.start();
    vibration.stop(context.currentTime + count * gap + 0.2);
  }

  if (navigator.vibrate) {
    navigator.vibrate(level === 1 ? [90, 80, 90] : level === 2 ? [180, 90, 180] : levelThreePreset.vibration);
  }
  const totalMs = Math.ceil((0.04 + (count - 1) * gap + duration + 0.24) * 1000);
  window.setTimeout(() => context.close(), totalMs + 180);
  return totalMs;
}

function Intro() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => !sessionStorage.getItem("portfolio-intro-seen"));

  useEffect(() => {
    if (!visible) return;
    const duration = reduced ? 120 : 1450;
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("portfolio-intro-seen", "1");
    }, duration);
    return () => window.clearTimeout(timer);
  }, [reduced, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="intro" exit={{ y: "-100%" }} transition={{ duration: reduced ? 0 : 0.75, ease }}>
          <div className="intro-mark" aria-hidden="true">
            <span />
            <span />
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            智能产品作品集
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Header({ progress, view, onNavigate }) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 150);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const benchmarkIds = new Set(chapterGroups[0].links.map(([linkId]) => linkId));
    const dmsIds = new Set(chapterGroups[1].links.map(([linkId]) => linkId));
    const robotIds = new Set(chapterGroups[2].links.map(([linkId]) => linkId));
    if (id === "home") onNavigate("home");
    else if (id === "robot") onNavigate("robot");
    else if (benchmarkIds.has(id)) onNavigate("benchmark", id);
    else if (dmsIds.has(id)) onNavigate("dms", id);
    else if (robotIds.has(id)) onNavigate("robot", id);
    setMenuOpen(false);
    setMobileOpen(false);
  };

  const visibleGroups = view === "home" ? chapterGroups : view === "benchmark" ? [chapterGroups[0]] : view === "dms" ? [chapterGroups[1]] : [chapterGroups[2]];

  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""}`}>
      <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
      <button className="brand" onClick={() => go("home")}>智能产品作品集</button>
      <nav className="desktop-nav" aria-label="主导航">
        <button onClick={() => go("home")}>首页</button>
        <button onClick={() => go("benchmark")}>六车型对标</button>
        <button onClick={() => go("dms")}>DMS PRD</button>
        <button onClick={() => go("robot")}>机器人对标</button>
        <button className="chapter-trigger" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen}>
          章节目录 <CaretDown size={14} weight="bold" />
        </button>
      </nav>
      <button className="mobile-trigger" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-label="打开章节导航">
        {mobileOpen ? <X size={22} /> : <List size={22} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mega-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease }}>
            <p className="menu-kicker">CONTENTS / 目录</p>
            <div className="mega-grid">
              {visibleGroups.map((group, index) => (
                <div key={group.title}>
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                  {group.links.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}<ArrowUpRight /></button>)}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav className="mobile-menu" aria-label="移动端导航" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {(view === "benchmark"
              ? [["home", "首页"], ["benchmark", "对标总览"], ["dms", "DMS PRD"], ["vehicle-detail", "单车型详情"], ["comparison", "横向对比"], ["conclusion", "综合结论"]]
              : view === "dms"
                ? [["home", "首页"], ["benchmark", "六车型对标"], ["dms", "PRD 总览"], ["dms-degradation", "异常边界"], ["dms-monitoring", "持续监测"], ["dms-timeline", "交互时间轴"], ["dms-appendix", "测试与附录"]]
                : view === "robot"
                  ? [["home", "首页"], ["robot-benchmark", "机器人对标总览"], ["robot-framework", "能力对标框架"], ["robot-company", "四家公司"], ["robot-morphology", "形态选择"], ["robot-comparison", "横向对比"]]
                  : [["home", "首页"], ["benchmark", "六车型对标"], ["dms", "DMS PRD"], ["robot", "机器人对标"]]
            ).map(([id, label]) => (
              <button key={id} onClick={() => go(id)}>{label}<ArrowRight /></button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ onNavigate }) {
  const [active, setActive] = useState("benchmark");
  const cards = [
    { id: "benchmark", no: "01", title: "辅助驾驶与\n智能座舱对标", copy: "从定位、座舱、感知、计算平台到技术路线，建立可比较的车型研究框架。" },
    { id: "dms", no: "02", title: "驾驶员监测系统 PRD", copy: "围绕检查、监测、判断、提醒、车辆处置与远程救援，构建安全闭环。" },
    { id: "robot", no: "03", title: "机器人\n能力与产品对标", copy: "比较四家公司在大模型、运动控制、机械结构与工程化场景上的差异。" },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        <img className={`hero-vehicle-cutout ${active === "benchmark" ? "active" : ""}`} src="/assets/benchmark/cutouts/model-y.png" alt="" />
        <img className={`hero-dms-image ${active === "dms" ? "active" : ""}`} src="/assets/dms/home-prd-hero-v2.png" alt="" />
        <img className={`hero-robot-image ${active === "robot" ? "active" : ""}`} src="/assets/robot/agibot-humanoid.png" alt="" />
        <span />
      </div>
      <div className="hero-copy shell">
        <p className="eyebrow light">INTELLIGENT PRODUCT RESEARCH / 2026</p>
        <h1><span>智能产品</span><span>作品集</span></h1>
        <p className="hero-sub">辅助驾驶 × 智能座舱 × 驾驶员安全 × 具身智能</p>
      </div>
      <div className="hero-cards shell">
        {cards.map((card) => (
          <article
            key={card.id}
            className={`entry-card ${active === card.id ? "active" : ""}`}
            onMouseEnter={() => setActive(card.id)}
            onFocus={() => setActive(card.id)}
            onClick={() => setActive(card.id)}
          >
            <span className="entry-no">{card.no}</span>
            <h2>{card.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <div className="entry-more">
              <p>{card.copy}</p>
              <button onClick={(event) => { event.stopPropagation(); onNavigate(card.id); }}>进入模块 <ArrowRight size={18} /></button>
            </div>
          </article>
        ))}
      </div>
      <button className="scroll-cue" onClick={() => scrollToId("overview")} aria-label="向下阅读"><ArrowDown /></button>
    </section>
  );
}

function Marquee() {
  const row1 = "TESLA · HARMONYOS · VLA · WORLD MODEL · DMS · RMF · SOS · ";
  const row2 = "智能座舱 · 辅助驾驶 · 具身智能 · 运动控制 · 机械结构 · ";
  return (
    <section id="overview" className="marquee-section" aria-label="研究关键词">
      <div className="marquee row-one"><span>{row1.repeat(3)}</span></div>
      <div className="marquee row-two"><span>{row2.repeat(4)}</span></div>
      <div className="top-car" aria-hidden="true"><span /><span /></div>
    </section>
  );
}

function ModuleOverview({ onNavigate }) {
  return (
    <section className="module-overview shell section-space">
      <Reveal className="overview-title">
        <p className="eyebrow">THREE RESEARCH MODULES</p>
        <h2 className="overview-theme-title"><span>智能汽车研究，</span><span>延伸至具身智能。</span></h2>
      </Reveal>
      <Reveal className="overview-grid" delay={0.1}>
        <article className="overview-item">
          <span>01</span>
          <h3 className="safe-break-title"><span>辅助驾驶与</span><span>智能座舱对标</span></h3>
          <p>研究六款代表性车型如何把智能座舱、感知硬件、计算平台与辅助驾驶路线转化为不同的产品优势。</p>
          <button className="text-link" onClick={() => onNavigate("benchmark")}>浏览全部车型 <ArrowRight /></button>
        </article>
        <article className="overview-item dark">
          <span>02</span>
          <h3>DMS PRD</h3>
          <p>把驾驶员异常状态识别、分级提醒、车辆最小风险处置和远程救援组合成一条可验证的安全链路。</p>
          <button className="text-link" onClick={() => onNavigate("dms")}>查看安全闭环 <ArrowRight /></button>
        </article>
        <article className="overview-item robot-overview-item">
          <span>03</span>
          <h3>机器人能力与产品对标</h3>
          <p>以大模型、运动控制和机械结构为统一坐标，比较宇树、智元、云深处和银河通用的产品路径。</p>
          <button className="text-link" onClick={() => onNavigate("robot")}>进入机器人对标 <ArrowRight /></button>
        </article>
      </Reveal>
    </section>
  );
}

function TechHardwareMedia({ media }) {
  return (
    <figure className="compute-media hardware-media">
      <div className="compute-media-visual">
        <img src={media.image} alt={media.alt} loading="lazy" />
        <span className="compute-media-label">{media.label}</span>
      </div>
      <figcaption>
        <p>{media.caption}</p>
        <a href={media.sourceUrl} target="_blank" rel="noreferrer">来源：{media.sourceLabel}<ArrowUpRight size={15} /></a>
      </figcaption>
    </figure>
  );
}

function OfficialDriveMedia({ media, vehicleName }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => setPlaying(false), [media.videoEmbed, vehicleName]);

  return (
    <figure className="drive-media">
      <div className="drive-media-visual">
        {playing ? (
          <iframe
            src={`${media.videoEmbed}&autoplay=1`}
            title={`${vehicleName} 辅助驾驶公开演示`}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img src={media.poster} alt={media.alt} loading="lazy" />
        )}
        <span className="drive-media-label">{media.label}</span>
        {!playing && (
          <button className="drive-play" onClick={() => setPlaying(true)} aria-label={`播放 ${vehicleName} 辅助驾驶公开演示`}>
            <Play size={21} weight="fill" />
            <span>播放实车演示</span>
          </button>
        )}
      </div>
      <figcaption>
        <p>{media.caption}</p>
        <a href={media.sourceUrl} target="_blank" rel="noreferrer">来源：{media.sourceLabel}<ArrowUpRight size={15} /></a>
      </figcaption>
    </figure>
  );
}

function Benchmark() {
  const [active, setActive] = useState(0);
  const [comparisonMode, setComparisonMode] = useState("cockpit");
  const storyRef = useRef(null);
  const carAssetRef = useRef(null);
  const railTrackRef = useRef(null);
  const railTweenRef = useRef(null);
  const reduced = useReducedMotion();
  const current = vehicles[active];
  const comparisonRows = comparisonMode === "cockpit" ? cockpitRows : adasRows;
  const setDirection = (delta) => setActive((value) => (value + delta + vehicles.length) % vehicles.length);

  useLayoutEffect(() => {
    if (!storyRef.current || !carAssetRef.current) return undefined;
    const ctx = gsap.context(() => {
      const car = carAssetRef.current;
      const steps = gsap.utils.toArray(".motion-step, .car-motion-anchor", storyRef.current);
      const comparisonBoundary = document.querySelector("#comparison");
      gsap.set(car, { xPercent: 0, y: 0, rotate: 0, scale: reduced ? 1 : 0.72, transformOrigin: "50% 60%" });
      if (reduced || window.innerWidth <= 640) return;

      gsap.fromTo(car, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9, ease: "power3.out" });
      steps.forEach((step) => {
        const baseX = Number.parseFloat(step.dataset.carX);
        const targetScale = Math.min(Math.max(Number(step.dataset.carScale || 0.78), 0.54), 1.02);
        const targetY = 0;
        const targetShift = Math.sign(baseX || 1) * (window.innerWidth <= 960 ? 2 : 4);
        const shouldHide = step.classList.contains("full-width-step");
        const moveCar = () => gsap.to(car, {
          autoAlpha: shouldHide ? 0 : 1,
          xPercent: targetShift,
          y: targetY,
          scale: targetScale,
          rotate: Number(step.dataset.carRotate || 0),
          duration: 0.95,
          ease: "power3.out",
          overwrite: "auto",
        });
        ScrollTrigger.create({
          trigger: step,
          start: "top 58%",
          end: "bottom 42%",
          onEnter: moveCar,
          onEnterBack: moveCar,
        });
      });

      if (comparisonBoundary) {
        ScrollTrigger.create({
          trigger: comparisonBoundary,
          start: "top bottom",
          onEnter: () => gsap.to(car, { autoAlpha: 0, duration: 0.35, overwrite: "auto" }),
          onLeaveBack: () => gsap.to(car, { autoAlpha: 1, duration: 0.35, overwrite: "auto" }),
        });
      }

      const mediaImage = storyRef.current.querySelector(".compute-media-visual img");
      if (mediaImage) {
        gsap.fromTo(mediaImage, { scale: 1.07, xPercent: -1.5 }, {
          scale: 1,
          xPercent: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: mediaImage.closest(".compute-media"),
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      }
    }, storyRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [active, reduced]);

  useLayoutEffect(() => {
    if (!railTrackRef.current || reduced) return undefined;
    const ctx = gsap.context(() => {
      railTweenRef.current = gsap.to(railTrackRef.current, {
        xPercent: -50,
        duration: 34,
        ease: "none",
        repeat: -1,
      });
    }, railTrackRef);
    return () => {
      railTweenRef.current = null;
      ctx.revert();
    };
  }, [reduced]);

  const animateVehicleHover = (event, entering) => {
    if (reduced) return;
    const target = event.currentTarget;
    const image = target.querySelector(".vehicle-thumb img");
    const indicator = target.querySelector(".vehicle-hover-indicator");
    const dot = target.querySelector(".vehicle-hover-dot");
    gsap.killTweensOf([target, image, indicator, dot]);
    if (entering) {
      railTweenRef.current?.pause();
      gsap.to(target, { y: -12, duration: 0.5, ease: "power3.out" });
      gsap.to(image, { scale: 1.035, duration: 0.55, ease: "power3.out" });
      gsap.to(indicator, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" });
      gsap.fromTo(dot, { y: 4 }, { y: -5, duration: 0.55, repeat: -1, yoyo: true, ease: "sine.inOut" });
    } else {
      gsap.to(target, { y: 0, duration: 0.45, ease: "power3.out" });
      gsap.to(image, { scale: 1, duration: 0.45, ease: "power3.out" });
      gsap.to(indicator, { autoAlpha: 0, y: 7, duration: 0.25, ease: "power2.out" });
      gsap.set(dot, { y: 0 });
    }
  };

  return (
    <section id="benchmark" className="benchmark-section">
      <div className="benchmark-cover full-media">
        <AnimatePresence mode="wait">
          <motion.img className="benchmark-cover-cutout" key={current.id} src={current.cutout} alt={`${current.name} 车型抠图`} initial={{ opacity: 0, x: 40, scale: .94 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -28, scale: .96 }} transition={{ duration: 0.7, ease }} />
        </AnimatePresence>
        <span className="media-scrim" />
        <div className="cover-copy shell">
          <p className="eyebrow light">MODULE 01 / BENCHMARK</p>
          <h2 className="safe-break-title"><span>六车型辅助驾驶</span><span>与智能座舱对标</span></h2>
          <p>以统一维度比较六款车型的座舱体验、辅助驾驶、感知方案与计算平台。</p>
        </div>
      </div>

      <div className="vehicle-rail-wrap shell">
        <div className="vehicle-rail" role="tablist" aria-label="车型快速切换" onPointerEnter={() => railTweenRef.current?.pause()} onPointerLeave={() => railTweenRef.current?.play()} onFocusCapture={() => railTweenRef.current?.pause()} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) railTweenRef.current?.play(); }}>
          <div ref={railTrackRef} className="vehicle-track">
            {[0, 1].map((copyIndex) => (
              <div className="vehicle-set" key={copyIndex} aria-hidden={copyIndex === 1 ? "true" : undefined}>
                {vehicles.map((vehicle, index) => (
                  <button key={`${copyIndex}-${vehicle.id}`} role={copyIndex === 0 ? "tab" : undefined} tabIndex={copyIndex === 0 ? 0 : -1} aria-selected={copyIndex === 0 ? active === index : undefined} className={active === index ? "active" : ""} onClick={() => setActive(index)} onPointerEnter={(event) => animateVehicleHover(event, true)} onPointerLeave={(event) => animateVehicleHover(event, false)} onFocus={(event) => animateVehicleHover(event, true)} onBlur={(event) => animateVehicleHover(event, false)}>
                    <span className="vehicle-thumb"><img src={vehicle.cutout} alt="" /></span>
                    <span className="vehicle-index">0{index + 1}</span>
                    <strong>{vehicle.name}</strong>
                    <small>{vehicle.eyebrow}</small>
                    <span className="vehicle-hover-indicator" aria-hidden="true"><i className="vehicle-hover-dot" /><em>点击查看</em></span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="vehicle-detail" className="vehicle-detail shell section-space">
        <Reveal className="detail-intro">
          <div>
            <p className="eyebrow">VEHICLE PROFILE / 0{active + 1}</p>
            <h2>{current.name}</h2>
            <p className="lead">{current.positioning}</p>
          </div>
          <div className="detail-pills">{current.advantages.map((item) => <span key={item}>{item}</span>)}</div>
        </Reveal>

        <div ref={storyRef} className="vehicle-narrative">
          <div className="vehicle-motion-stage" aria-hidden="true">
            <span className="motion-stage-label">SCROLL / VEHICLE OBJECT</span>
            <div className="floating-car-presence">
              <img ref={carAssetRef} key={current.id} className="floating-car-cutout" src={current.cutout} alt="" onLoad={() => ScrollTrigger.refresh()} />
            </div>
            <span className="motion-car-name">{current.name}</span>
          </div>

          <div className="vehicle-copy-stack">
            <Reveal className="narrative-card opening-card motion-step step-left" data-car-x="24vw" data-car-scale="0.72" data-car-rotate="-1.2">
              <span>01 / 产品定位与优势</span>
              <h3>{current.eyebrow}</h3>
              <p>{current.short}</p>
              <div className="spec-row">{current.advantages.map((item) => <b key={item}>{item}</b>)}</div>
            </Reveal>

            <div className="vehicle-domain cockpit-domain">
              <Reveal className="domain-heading car-motion-anchor" data-car-x="27vw" data-car-y="-18vh" data-car-scale="0.72" data-car-rotate="-.4">
                <span className="domain-icon"><ChatsCircle size={26} weight="duotone" /></span>
                <div><p>CHAPTER A / SMART COCKPIT</p><h3>智能座舱</h3></div>
                <small>显示、语音、生态与乘员场景</small>
              </Reveal>
              <Reveal className="narrative-media-card cockpit-story-card motion-step step-left" data-car-x="25vw" data-car-y="0" data-car-scale="0.76" data-car-rotate="-.8">
                <div className="cockpit-gallery">
                  {current.cockpitViews.map((src, index) => <ZoomableImage key={src} src={src} alt={`${current.name} 智能座舱视图 ${index + 1}`} />)}
                </div>
                <div className="narrative-copy">
                  <span>02 / 智能座舱体验</span>
                  <h3>{current.cockpitHeadline}</h3>
                  <p>{current.cockpitText}</p>
                  <div className="cockpit-detail-grid">
                    {current.cockpitDetails.map((item, index) => (
                      <article key={item.title}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="vehicle-domain adas-domain">
              <Reveal className="domain-heading car-motion-anchor" data-car-x="27vw" data-car-y="-18vh" data-car-scale="0.72" data-car-rotate="-.4">
                <span className="domain-icon"><Scan size={26} weight="duotone" /></span>
                <div><p>CHAPTER B / ASSISTED DRIVING</p><h3>辅助驾驶</h3></div>
                <small>功能、安全、感知、计算与技术路线</small>
              </Reveal>

              <Reveal className="narrative-card adas-overview-card motion-step step-right" data-car-x="-25vw" data-car-y="0" data-car-scale="0.92" data-car-rotate=".8">
                <span>03 / 功能与安全</span>
                <h3>功能覆盖与驾驶责任</h3>
                <p>{current.adas}</p>
                <ul className="editorial-points">{current.adasFunctions.map((item) => <li key={item}>{item}</li>)}</ul>
              </Reveal>

              <Reveal className="drive-evidence-card motion-step full-width-step" data-car-x="25vw" data-car-y="0" data-car-scale="0.84" data-car-rotate="-.7">
                <div className="media-band-head">
                  <span>04 / 辅助驾驶实车表现</span>
                  <div>
                    <h3>实车演示：感知、规划与控制如何连续衔接</h3>
                    <p>结合公开道路演示观察目标识别、轨迹选择、速度控制和驾驶员监督。演示用于说明系统工作方式，实际能力仍受软件版本、开放区域和道路条件限制。</p>
                  </div>
                  <div className="spec-row">{current.adasFunctions.map((item) => <b key={item}>{item}</b>)}</div>
                </div>
                <OfficialDriveMedia media={current.driveMedia} vehicleName={current.name} />
              </Reveal>

              <Reveal className="perception-panel motion-step full-width-step" data-car-x="-25vw" data-car-y="0" data-car-scale="0.82" data-car-rotate=".7">
                <div className={`perception-visual ${current.sensorViews ? "is-stacked" : ""}`}>
                  {(current.sensorViews ?? [current.sensors]).map((src, index) => (
                    <ZoomableImage key={src} src={src} alt={`${current.name} 感知硬件示意${current.sensorViews ? ` ${index + 1}` : ""}`} />
                  ))}
                </div>
                <div className="perception-copy">
                  <span>05 / 感知硬件</span>
                  <h3>感知硬件配置与覆盖范围</h3>
                  <p>{current.perceptionSummary}</p>
                </div>
                <div className="native-table-wrap">
                  <table className="vehicle-spec-table">
                    <caption className="sr-only">{current.name} 感知硬件构成</caption>
                    <thead><tr><th>感知模块</th><th>公开配置 / 产品定义</th></tr></thead>
                    <tbody>{current.hardwareRows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody>
                  </table>
                </div>
              </Reveal>

              <Reveal className="tech-evidence-card computing-focus motion-step full-width-step" data-car-x="25vw" data-car-y="0" data-car-scale="0.88" data-car-rotate="-.7">
                <div className="tech-evidence-copy">
                  <span>06 / 计算与软件</span>
                  <h3>计算平台</h3>
                  <p>{current.platform}</p>
                  <div className="compute-detail-grid">
                    {current.computeDetails.map((item) => (
                      <article key={item.title}>
                        <span>{item.label}</span>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </article>
                    ))}
                  </div>
                  <div className="spec-row">{current.computeSpecs.map((spec) => <b key={spec}>{spec}</b>)}</div>
                </div>
                <TechHardwareMedia media={current.computeMedia} />
              </Reveal>

              <Reveal className="narrative-card tech-focus-card route-focus motion-step step-right" data-car-x="-25vw" data-car-y="0" data-car-scale="0.98" data-car-rotate="1">
                <span>07 / 技术路线与安全边界</span>
                <h3>技术路线</h3>
                <p>{current.routeCondition}</p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="vehicle-pagination">
          <button onClick={() => setDirection(-1)}><ArrowLeft /> 上一车型</button>
          <span>{String(active + 1).padStart(2, "0")} / 06</span>
          <button onClick={() => setDirection(1)}>下一车型 <ArrowRight /></button>
        </div>
      </div>

      <div id="comparison" className="comparison section-space">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow">CROSS-CAR COMPARISON</p><h2 className="safe-break-title"><span>把差异放进</span><span>同一张表。</span></h2></div>
            <p>六款车型围绕座舱显示、语音与生态，以及辅助驾驶感知、计算、模型、功能覆盖和安全要求进行横向对照。</p>
          </Reveal>
          <div className="comparison-switch" role="tablist" aria-label="选择横向对比类型">
            <button role="tab" aria-selected={comparisonMode === "cockpit"} className={comparisonMode === "cockpit" ? "active" : ""} onClick={() => setComparisonMode("cockpit")}>智能座舱横向对比</button>
            <button role="tab" aria-selected={comparisonMode === "adas"} className={comparisonMode === "adas" ? "active" : ""} onClick={() => setComparisonMode("adas")}>辅助驾驶横向对比</button>
          </div>
          <Reveal className="table-wrap">
            <table>
              <caption className="sr-only">六车型{comparisonMode === "cockpit" ? "智能座舱" : "辅助驾驶"}横向对比</caption>
              <thead><tr><th>维度</th>{vehicles.map((vehicle) => <th key={vehicle.id}>{vehicle.name}</th>)}</tr></thead>
              <tbody>{comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={`${cell}-${i}`}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </Reveal>
        </div>
      </div>

      <div id="conclusion" className="benchmark-conclusion shell section-space">
        <Reveal><p className="eyebrow">SYNTHESIS</p><h2 className="safe-break-title"><span>旗舰产品没有单一路径，</span><span>差异来自市场定位与核心场景。</span></h2></Reveal>
        <div className="conclusion-grid">
          <Reveal><span>01</span><h3>生态协同</h3><p>问界 M9、小米 SU7 与蔚来 ES9 通过操作系统、终端协同或服务网络，把车辆体验延伸到手机、家庭与补能服务。</p></Reveal>
          <Reveal delay={0.08}><span>02</span><h3>家庭与安全场景</h3><p>理想 L9 与小鹏 GX 围绕多人出行、后排任务和高风险安全处置，组织座舱硬件与辅助驾驶能力。</p></Reveal>
          <Reveal delay={0.16}><span>03</span><h3>效率与软件</h3><p>Tesla Model Y 以软件、三电效率和数据闭环形成集中化产品逻辑，服务高频通勤与长途补能场景。</p></Reveal>
        </div>
        <Reveal className="design-implication-heading">
          <p className="eyebrow">PRODUCT DESIGN IMPLICATIONS</p>
          <h3>从车型差异提炼产品设计启示</h3>
          <p>产品定义从用户任务和能力边界出发，进一步确定界面、硬件与技术路线的组合方式。</p>
        </Reveal>
        <div className="design-implication-grid">
          <Reveal className="implication-column cockpit-implication">
            <div className="implication-column-head"><ChatsCircle size={28} weight="duotone" /><div><span>CHAPTER A</span><h4>智能座舱</h4></div></div>
            {designImplications.cockpit.map(([title, copy], index) => <article key={title}><b>0{index + 1}</b><div><h5>{title}</h5><p>{copy}</p></div></article>)}
          </Reveal>
          <Reveal className="implication-column adas-implication" delay={0.08}>
            <div className="implication-column-head"><Scan size={28} weight="duotone" /><div><span>CHAPTER B</span><h4>辅助驾驶</h4></div></div>
            {designImplications.adas.map(([title, copy], index) => <article key={title}><b>0{index + 1}</b><div><h5>{title}</h5><p>{copy}</p></div></article>)}
          </Reveal>
        </div>
      </div>

    </section>
  );
}

function Timeline() {
  const [scenarioKey, setScenarioKey] = useState("hands");
  const [recovered, setRecovered] = useState(false);
  const [network, setNetwork] = useState(true);
  const [monitor, setMonitor] = useState(true);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useReducedMotion();
  const frameRef = useRef(null);
  const startedAtRef = useRef(0);
  const scenario = scenarios[scenarioKey];
  const max = Math.max(...scenario.points.map(([time]) => time), 1);
  const elapsed = (progress / 100) * max;
  const currentPoint = scenario.points.reduce((latest, point) => point[0] <= elapsed ? point : latest, scenario.points[0]);
  const currentIndex = Math.max(0, scenario.points.findIndex((point) => point === currentPoint));
  const severity = currentIndex <= 1 ? "monitoring" : currentIndex === 2 ? "level-one" : currentIndex === 3 ? "level-two" : "level-three";
  const sceneMeta = scenarioSceneMeta[scenarioKey] || scenarioSceneMeta.hands;
  const sceneMotionX = scenarioKey === "gaze" || scenarioKey === "both" ? -7 : -3;
  const simulationDuration = 6800;

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    window.cancelAnimationFrame(frameRef.current);
  }, [scenarioKey, recovered, monitor]);

  useEffect(() => {
    if (!playing) return undefined;
    if (reducedMotion) {
      setProgress(100);
      setPlaying(false);
      return undefined;
    }

    const tick = (now) => {
      const next = Math.min(100, ((now - startedAtRef.current) / simulationDuration) * 100);
      setProgress(next);
      if (next < 100) frameRef.current = window.requestAnimationFrame(tick);
      else setPlaying(false);
    };

    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [playing, reducedMotion]);

  const toggleSimulation = () => {
    if (!monitor || recovered) return;
    if (playing) {
      setPlaying(false);
      return;
    }
    const startProgress = progress >= 100 ? 0 : progress;
    if (progress >= 100) setProgress(0);
    startedAtRef.current = performance.now() - (startProgress / 100) * simulationDuration;
    setPlaying(true);
  };

  const resetSimulation = () => {
    setPlaying(false);
    setProgress(0);
    window.cancelAnimationFrame(frameRef.current);
  };

  return (
    <div id="dms-timeline" className="timeline-card">
      <div className="scenario-picker" role="tablist" aria-label="选择驾驶员异常场景">
        {Object.entries(scenarios).map(([key, item]) => <button role="tab" aria-selected={scenarioKey === key} className={scenarioKey === key ? "active" : ""} onClick={() => { setScenarioKey(key); setRecovered(false); }} key={key}>{item.label}</button>)}
      </div>
      <div className="simulator-head">
        <div><span>DRIVER STATE SIMULATION</span><h3>{monitor ? scenario.label : "监测不可用"}</h3></div>
        <div className="sim-controls">
          <label><input type="checkbox" checked={recovered} onChange={(e) => setRecovered(e.target.checked)} /> 驾驶员恢复</label>
          <label><input type="checkbox" checked={!network} onChange={(e) => setNetwork(!e.target.checked)} /> 网络断开</label>
          <label><input type="checkbox" checked={!monitor} onChange={(e) => setMonitor(!e.target.checked)} /> 监测不可用</label>
        </div>
      </div>

      <div className="timeline-track" aria-live="polite">
        {!monitor ? (
          <div className="fault-state"><Broadcast size={30} /><strong>DMS 信号不可用</strong><p>关键点缺失 2 s 进入降级，5 s 判定不可用；系统按独立故障链路处理。</p></div>
        ) : recovered ? (
          <div className="recovery-state"><Check size={30} /><strong>驾驶员状态已恢复</strong><p>恢复条件满足后解除当前告警；60 s 内同类异常复发时延续上一告警等级。</p></div>
        ) : (
          <div className={`timeline-simulator ${severity}`}>
            <div className="driver-action-stage">
              <AnimatePresence mode="wait">
                <motion.img
                  key={scenarioKey}
                  className="scenario-cockpit-image"
                  src={scenarioSceneMap[scenarioKey]}
                  alt={sceneMeta.alt}
                  initial={reducedMotion ? false : { opacity: 0, scale: 1.035 }}
                  animate={!reducedMotion && playing
                    ? { opacity: 1, scale: [1.015, 1.055, 1.015], x: [0, sceneMotionX, 0], y: [0, -2, 0] }
                    : { opacity: 1, scale: 1.015, x: 0, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, scale: 1.025 }}
                  transition={!reducedMotion && playing
                    ? { duration: 2.4, repeat: Infinity, ease: "linear" }
                    : { duration: 0.48, ease }}
                />
              </AnimatePresence>
              <span className="scene-stage-tag">{currentPoint[1]}</span>
              <span className="action-caption"><b>道路行进中</b>{sceneMeta.caption}</span>
            </div>

            <div className="simulation-readout">
              <span>模拟计时</span>
              <strong>{elapsed.toFixed(1)}<small>s</small></strong>
              <b>{currentPoint[1]}</b>
              <div className="simulation-controls">
                <button type="button" onClick={toggleSimulation} aria-label={playing ? "暂停模拟" : progress >= 100 ? "重新播放模拟" : "播放模拟"}>{playing ? <Pause size={18} weight="fill" /> : <Play size={18} weight="fill" />}{playing ? "暂停" : progress >= 100 ? "重播" : "开始模拟"}</button>
                <button type="button" className="reset-simulation" onClick={resetSimulation} aria-label="重置模拟"><ArrowCounterClockwise size={18} /></button>
              </div>
            </div>

            <div className="timeline-progress" aria-label={`当前模拟进度 ${Math.round(progress)}%`}>
              <motion.span className="timeline-progress-fill" animate={{ width: `${progress}%` }} transition={{ duration: 0.08, ease: "linear" }} />
              {scenario.points.map(([time, label], index) => {
                const pointProgress = (time / max) * 100;
                return <span className={`progress-stop ${progress >= pointProgress ? "reached" : ""} stop-${index}`} style={{ left: `${pointProgress}%` }} key={`${time}-${label}`}><i /><small>{time === 0 ? "T0" : `${time}s`}</small><b>{label}</b></span>;
              })}
            </div>
          </div>
        )}
      </div>
      <div className="scenario-note"><ShieldCheck size={22} /><p>{scenario.note}</p></div>
      {!network && <div className="network-note">远程连接失败：车端 RMF 继续执行，SOS 保持重试。</div>}
    </div>
  );
}

function HmiVisualizer() {
  const [activeId, setActiveId] = useState("hor-1");
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);
  const activeState = hmiStates.find((item) => item.id === activeId) || hmiStates[0];
  const ActiveIcon = hmiIconMap[activeState.icon] || Warning;
  const imageAlreadyContainsAlert = ["dca-3", "rmf-3", "sos"].includes(activeState.id);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const previewSound = () => {
    const duration = playAlertTone(activeState.tone);
    setPlaying(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setPlaying(false), Math.max(duration, activeState.tone === 3 ? 1800 : 1500));
  };

  return (
    <div className="hmi-visualizer">
      <div className="hmi-state-picker" role="tablist" aria-label="选择 HMI 告警状态">
        {hmiStates.map((state) => {
          const Icon = hmiIconMap[state.icon] || Warning;
          return <button key={state.id} role="tab" aria-selected={activeId === state.id} className={`${state.theme} ${activeId === state.id ? "active" : ""}`} onClick={() => setActiveId(state.id)}><Icon size={18} /><span><b>{state.code}</b><small>{state.level}</small></span></button>;
        })}
      </div>

      <div className="hmi-preview-layout">
        <div className={`hmi-screen-preview ${activeState.theme} ${playing ? "playing" : ""}`}>
          <AnimatePresence mode="wait">
            <motion.img key={activeState.id} src={activeState.image} alt={`${activeState.code} ${activeState.level}车机显示示意`} initial={{ opacity: 0.25 }} animate={{ opacity: 1 }} exit={{ opacity: 0.25 }} transition={{ duration: 0.35, ease }} />
          </AnimatePresence>
          {!imageAlreadyContainsAlert && (
            <motion.div key={`${activeState.id}-alert`} className="hmi-screen-alert" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
              <span className="hmi-alert-icon"><ActiveIcon size={28} weight="duotone" /></span>
              <span className="hmi-alert-copy"><b>{activeState.title}</b><small>{activeState.detail}</small></span>
              <span className="sound-meter" aria-hidden="true">{[0, 1, 2, 3, 4].map((bar) => <i key={bar} />)}</span>
            </motion.div>
          )}
        </div>

        <aside className="hmi-preview-copy">
          <div className="hmi-preview-code"><span>{activeState.code}</span><b>{activeState.level}</b></div>
          <h3>{activeState.title}</h3>
          <p>{activeState.timing}</p>
          <dl>
            <div><dt>提示形式</dt><dd>{activeState.theme === "level-one" ? "局部小卡片，不遮挡驾驶主信息" : activeState.theme === "level-two" ? "固定增强卡片，持续占位但不扩展全屏" : "持续高优先级卡片，同步车辆处置状态"}</dd></div>
            <div><dt>驾驶员动作</dt><dd>{activeState.detail}</dd></div>
          </dl>
          <button className={playing ? "playing" : ""} onClick={() => previewSound()} aria-label={`试听 ${activeState.code} ${activeState.level}提示音`}><SpeakerHigh size={19} />{playing ? "正在播放" : "试听该状态"}<span className="audio-level">音量 {activeState.tone === 1 ? "Ⅰ" : activeState.tone === 2 ? "Ⅱ" : "Ⅲ"}</span></button>
          <small className="sound-disclaimer">{activeState.tone === 3 ? `三级使用${levelThreeTone.name}告警音，并叠加低频与触觉反馈。` : ""}声音只在点击后播放。</small>
        </aside>
      </div>
    </div>
  );
}

function Accordion({ item, open, onToggle }) {
  return (
    <div className={`accordion-item ${open ? "open" : ""}`}>
      <button onClick={onToggle} aria-expanded={open}>
        <span>{item.title}</span>{open ? <Minus /> : <Plus />}
      </button>
      <AnimatePresence initial={false}>
        {open && <motion.div className="accordion-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }}><p>{item.body}</p></motion.div>}
      </AnimatePresence>
    </div>
  );
}

function DmsModule() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeOverview, setActiveOverview] = useState("check");
  const [activeDegradation, setActiveDegradation] = useState(0);
  const [activeTrackingEvent, setActiveTrackingEvent] = useState(0);
  const trackingEvent = dmsTrackingEvents[activeTrackingEvent];
  const overviewGroups = [
    {
      code: "01 / 识别与判定",
      title: "先确认系统可用，再识别驾驶员状态。",
      modules: [
        { key: "check", index: "01", title: "启动前检查", summary: "关键能力逐项给出可用或不可用结论。", details: ["任一关键能力不可用时拒绝激活", "车机明确说明失败原因与降级状态"], owners: ["DMS", "AD", "HMI", "VEH", "SOS"], image: "/assets/dms/overview/01-check.png", target: "dms-checks", Icon: ShieldCheck },
        { key: "monitor", index: "02", title: "持续监测", summary: "辅助驾驶开启且车速大于 10 km/h 后持续读取人车状态。", details: ["手部、视线、眼睑、头姿与有效操作", "同步判断传感器和关键信号是否可用"], owners: ["DMS", "AD", "VEH"], image: "/assets/dms/overview/02-monitor.png", target: "dms-monitoring", Icon: Scan },
        { key: "judge", index: "03", title: "状态判断", summary: "驾驶员状态与监测可用性并行输出。", details: ["异常状态按风险优先级只输出一个", "监测不可用作为独立故障结果保留"], owners: ["DMS", "AD", "HMI"], image: "/assets/dms/overview/03-judge.png", target: "dms-monitoring", Icon: Gauge },
      ],
    },
    {
      code: "02 / 提醒与处置",
      title: "从可恢复提醒，升级到停车与救援闭环。",
      modules: [
        { key: "remind", index: "04", title: "分级提醒", summary: "按风险进入一级、二级与三级告警。", details: ["HOR、EOR 与组合提醒避免重复播报", "颜色、提示音、TTS 与触觉同步升级"], owners: ["DMS", "HMI", "VEH", "AD"], image: "/assets/dms/overview/04-remind.png", target: "dms-hmi", Icon: SpeakerHigh },
        { key: "vehicle", index: "05", title: "车辆处置", summary: "DCA 过渡至 RMF，车辆稳定减速并寻找安全位置。", details: ["AD 规划停车轨迹，整车执行转向与制动", "无安全区域或系统失效时受控车道内停车"], owners: ["AD", "VEH", "HMI", "DMS"], image: "/assets/dms/overview/05-vehicle.png", target: "dms-rmf", Icon: Car },
        { key: "rescue", index: "06", title: "远程救援", summary: "SOS 与车端 RMF 从同一事件并行启动。", details: ["上传最小必要状态并连接远程坐席", "连接失败保持重试，不中断车端停车"], owners: ["SOS", "HMI", "AD", "VEH"], image: "/assets/dms/overview/06-rescue.png", target: "dms-rmf", Icon: PhoneCall },
      ],
    },
    {
      code: "03 / 异常边界",
      title: "监测失效时，先退化、再限制，最后验证恢复。",
      modules: [
        { key: "degrade", index: "07", title: "异常边界", summary: "按故障原因切换替代信号、辅助驾驶限制与恢复验证。", details: ["方向盘触控只能证明手部接触", "DMS 超时不可继续输出正常状态"], owners: ["DMS", "AD", "HMI", "VEH"], target: "dms-degradation", Icon: CameraSlash },
      ],
    },
  ];
  const overviewModules = overviewGroups.flatMap((group) => group.modules);
  return (
    <section id="dms" className="dms-section">
      <div className="dms-cover">
        <div className="shell dms-cover-grid">
          <div className="dms-cover-copy">
            <p className="eyebrow light">MODULE 02 / PRODUCT REQUIREMENT</p>
            <h2 className="safe-break-title"><span>驾驶员监测</span><span>系统 PRD</span></h2>
            <p>组合驾驶辅助安全管控：从驾驶员状态识别到最小风险停车。</p>
            <div className="dms-cover-facts">
              <span><b>10 km/h</b><small>持续监测启用车速</small></span>
              <span><b>2 条</b><small>驾驶员状态 / 系统可用性并行输出</small></span>
              <span><b>RMF × SOS</b><small>本地安全与远程救援并行</small></span>
            </div>
          </div>
          <motion.div className="dms-overview-map" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <div className="dms-overview-head">
              <div><span>PRD OVERVIEW / SEVEN MODULES</span><h3>全流程概览</h3></div>
              <p>系统从启动条件确认开始，持续识别驾驶员状态；异常升级后，由车端完成最小风险处置，并同步连接远程救援。</p>
            </div>
            <div className="dms-process-flow" aria-label="DMS 主流程图">
              <div className="dms-flow-main" role="list" aria-label="识别与提醒主链路">
                {overviewModules.slice(0, 4).map(({ key, index, title, Icon }, itemIndex) => <div className="dms-flow-item" role="listitem" key={key}><span className="dms-flow-icon"><Icon size={22} weight="duotone" /></span><span><b>{index}</b><strong>{title}</strong></span>{itemIndex < 3 && <ArrowRight className="dms-flow-arrow" size={17} aria-hidden="true" />}</div>)}
              </div>
              <div className="dms-flow-split"><ArrowDown size={17} /><span>持续无响应后并行启动两条安全链路</span></div>
              <div className="dms-flow-branches" role="list" aria-label="车端处置与远程救援并行链路">
                {overviewModules.slice(4, 6).map(({ key, index, title, summary, Icon }) => <div className={`dms-flow-branch branch-${key}`} role="listitem" key={key}><span className="dms-flow-icon"><Icon size={24} weight="duotone" /></span><span><b>{index}</b><strong>{title}</strong><small>{summary}</small></span></div>)}
              </div>
              <div className="dms-flow-boundary"><CameraSlash size={20} weight="duotone" /><span><b>07 / 异常边界</b><small>检查或监测阶段发现不可用</small></span><ArrowRight size={17} /><strong>替代监测</strong><ArrowRight size={17} /><strong>限制 / 退出</strong><ArrowRight size={17} /><strong>验证恢复</strong></div>
            </div>
            {overviewGroups.map((group) => (
              <div className={`overview-module-group ${group.modules.length === 1 ? "single-group" : ""}`} key={group.code}>
                <div className="overview-group-heading"><span>{group.code}</span><h4>{group.title}</h4></div>
                <div className="overview-module-grid">
                  {group.modules.map(({ key, index, title, summary, details, owners, image, target, Icon }) => (
                    <button key={key} className={`overview-module-card ${activeOverview === key ? "active" : ""}`} aria-pressed={activeOverview === key} onPointerEnter={() => setActiveOverview(key)} onFocus={() => setActiveOverview(key)} onClick={() => scrollToId(target)}>
                      {key === "degrade" ? <span className="overview-module-image degradation-overview-art" aria-hidden="true"><CameraSlash size={62} weight="duotone" /><ArrowRight size={22} /><SteeringWheel size={62} weight="duotone" /><ArrowRight size={22} /><Car size={62} weight="duotone" /><i><Icon size={24} weight="duotone" /></i><b>{index}</b></span> : <span className="overview-module-image"><img src={image} alt="" /><i><Icon size={24} weight="duotone" /></i><b>{index}</b></span>}
                      <span className="overview-module-copy"><small>MODULE {index}</small><strong>{title}</strong><em>{summary}</em></span>
                      <span className="overview-module-details"><span>{details.map((item) => <i key={item}>{item}</i>)}</span><span className="owner-chips">{owners.map((owner) => <b key={owner}>{owner}</b>)}</span></span>
                      <span className="overview-module-link">查看本章 <ArrowRight size={16} /></span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="parallel-note"><ShieldCheck size={18} /><span>进入车辆处置后，车端 RMF 与 SOS 远程建联并行启动；远程连接失败不会中断车端减速和停车。</span></div>
          </motion.div>
        </div>
      </div>

      <div id="dms-background" className="dms-background shell section-space">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">BACKGROUND / COMPLIANCE</p><h2 className="safe-break-title"><span>安全目标不是多一次提醒，</span><span>而是形成可执行闭环。</span></h2></div>
          <p>当组合驾驶辅助持续运行而驾驶员无法履行接管责任时，单一告警不足以降低风险。产品必须同时覆盖驾驶员状态识别、可恢复提醒、车辆最小风险处置和远程救援。</p>
        </Reveal>
        <div className="principle-grid">
          <Reveal><span>01</span><h3>监测范围</h3><p>持续监测双手、视线、长闭眼、异常头姿、有效操作与传感器可用性。</p></Reveal>
          <Reveal delay={0.06}><span>02</span><h3>安全闭环</h3><p>正常分心逐级提醒；持续无响应或疑似失能进入 DCA、RMF 与 SOS。</p></Reveal>
          <Reveal delay={0.12}><span>03</span><h3>工程约束</h3><p>本地安全功能离线可用，远程连接失败不得阻断减速与停车；数据最小化并保留审计日志。</p></Reveal>
        </div>
      </div>

      <div className="dms-intro shell section-space">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">PRODUCT LOGIC</p><h2 className="safe-break-title"><span>先确认系统可用，</span><span>再判断人是否可控。</span></h2></div>
          <p>组合驾驶辅助开启后，系统持续监测双手、视线、长闭眼、异常头姿与有效操作。常规分心逐级提醒；持续无响应或疑似失能进入减速、安全停车与远程救援。</p>
        </Reveal>

        <Reveal id="dms-checks" className="check-grid">
          {checks.map(([name, content, result]) => <article key={name}><span>{name}</span><p>{content}</p><b>{result}</b></article>)}
        </Reveal>

        <Reveal className="startup-fault-section">
          <div className="startup-fault-head">
            <div><p className="eyebrow">STARTUP AVAILABILITY</p><h3 className="safe-break-title"><span>启动前定位</span><span>系统不可用原因</span></h3></div>
            <p>遮挡、环境质量、信号超时和设备故障不能归为同一个结果。系统必须输出具体原因，并据此决定拒绝开启、条件降级或仅关闭远程服务。</p>
          </div>
          <div className="startup-fault-grid">
            {startupFaults.map((fault, index) => <article key={fault.code}><div><span>{fault.code}</span><b>{fault.scope}</b></div><h4>{fault.title}</h4><p>{fault.signal}</p><small>{fault.action}</small><i>{String(index + 1).padStart(2, "0")}</i></article>)}
          </div>
          <div className="startup-decision-bar" aria-label="启动判定结果">
            <span><CheckCircle size={19} weight="duotone" /><b>关键链路全部通过</b><small>允许激活组合驾驶辅助</small></span>
            <span><X size={19} /><b>任一安全关键项失败</b><small>拒绝激活并提示具体故障</small></span>
            <span><Broadcast size={19} weight="duotone" /><b>仅 SOS 不可用</b><small>本地功能可运行，远程能力明确降级</small></span>
          </div>
        </Reveal>

        <Reveal id="dms-degradation" className="degradation-section">
          <div className="degradation-heading">
            <div><p className="eyebrow">DEGRADATION / EXCEPTION BOUNDARY</p><h2>异常边界与退化机制</h2></div>
            <p>区分可恢复的图像质量问题、链路超时和硬件故障。替代信号只支持短时确认驾驶员是否有操作回应，不能把不完整监测包装成正常 DMS。</p>
          </div>
          <div className="degradation-layout">
            <figure className="degradation-visual">
              <div className="degradation-visual-art" role="img" aria-label="DMS 摄像头异常后转为低置信度替代监测，并限制辅助驾驶功能"><span><CameraSlash size={64} weight="duotone" /><b>监测异常</b></span><ArrowRight size={24} /><span><SteeringWheel size={64} weight="duotone" /><b>替代信号</b></span><ArrowRight size={24} /><span><Car size={64} weight="duotone" /><b>限制 / 退出</b></span></div>
              <figcaption><span>{degradationCases[activeDegradation].code}</span><strong>{degradationCases[activeDegradation].status}</strong></figcaption>
            </figure>
            <div className="degradation-content">
              <div className="degradation-tabs" role="tablist" aria-label="选择 DMS 异常类型">
                {degradationCases.map((item, index) => {
                  const CaseIcon = degradationIconList[index];
                  return <button id={`degradation-tab-${item.key}`} aria-controls="degradation-panel" key={item.key} role="tab" aria-selected={activeDegradation === index} className={activeDegradation === index ? "active" : ""} onPointerEnter={() => setActiveDegradation(index)} onFocus={() => setActiveDegradation(index)} onClick={() => setActiveDegradation(index)}><CaseIcon size={19} weight="duotone" /><span><b>{item.code}</b>{item.title}</span></button>;
                })}
              </div>
              <AnimatePresence mode="wait">
                <motion.div id="degradation-panel" role="tabpanel" aria-labelledby={`degradation-tab-${degradationCases[activeDegradation].key}`} key={degradationCases[activeDegradation].key} className="degradation-route" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35, ease }}>
                  {[
                    ["01", "故障识别", degradationCases[activeDegradation].symptom],
                    ["02", "临时替代监测", degradationCases[activeDegradation].fallback],
                    ["03", "辅助驾驶限制", degradationCases[activeDegradation].limitation],
                    ["04", "恢复条件", degradationCases[activeDegradation].recovery],
                  ].map(([index, title, body], stepIndex) => <article key={title}><span>{index}</span><h3>{title}</h3><p>{body}</p>{stepIndex < 3 && <ArrowDown className="degradation-arrow" size={18} aria-hidden="true" />}</article>)}
                </motion.div>
              </AnimatePresence>
              <div className="degradation-boundary-note"><WarningOctagon size={22} weight="duotone" /><p><b>替代能力边界</b>电容方向盘只能确认手是否接触，扭矩与踏板只能确认是否有操作；它们都不能证明驾驶员正在看路、保持清醒或具备接管能力。</p></div>
            </div>
          </div>
        </Reveal>

        <Reveal id="dms-state-model" className="dms-state-model">
          <div className="section-heading split-heading compact-heading">
            <div><p className="eyebrow">DUAL STATE MACHINE</p><h2 className="safe-break-title"><span>驾驶员风险与系统可用性</span><span>分别判断、共同决策。</span></h2></div>
            <p>第一条状态机判断驾驶员是否能够继续承担驾驶责任，第二条状态机判断监测与执行链路是否可靠。最终策略同时读取两条结果，避免把“摄像头看不清”误判为“驾驶员正常”。</p>
          </div>
          <div className="state-machine-board">
            <div className="state-machine-lane driver-lane">
              <div className="state-lane-label"><span>DRIVER</span><b>驾驶员状态</b><small>决定提醒等级与车辆介入</small></div>
              <ol>{dmsDriverStateFlow.map((item, index) => <li key={item.code}><span>{item.code}</span><b>{item.title}</b><small>{item.note}</small>{index < dmsDriverStateFlow.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>
            </div>
            <div className="state-machine-lane system-lane">
              <div className="state-lane-label"><span>SYSTEM</span><b>系统可用性</b><small>决定允许、降级、拒绝或退出</small></div>
              <ol>{dmsSystemStateFlow.map((item, index) => <li key={item.code}><span>{item.code}</span><b>{item.title}</b><small>{item.note}</small>{index < dmsSystemStateFlow.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>
            </div>
            <div className="state-decision-rule"><ShieldCheck size={22} weight="duotone" /><div><b>合并决策规则</b><p>驾驶员风险取当前最高等级；系统可用性独立保留。任一安全关键链路不可用时，不用低风险驾驶员状态覆盖故障结论。</p></div></div>
          </div>
          <div className="threshold-governance">
            <span><b>01 / 产品确认阈值</b><small>2 s 为本 PRD 的算法确认初值，不等同于法规规定的提醒时刻</small></span>
            <span><b>02 / 视线脱离上限</b><small>UN R171：车速大于 10 km/h，持续视觉脱离最迟 5 s 发出 EOR</small></span>
            <span><b>03 / 手部离盘上限</b><small>UN R171：持续手部脱离 5 s 发出 HOR；仅在确认视线有效时可再延后最多 5 s</small></span>
          </div>
          <a className="regulation-reference" href="https://unece.org/sites/default/files/2025-03/R171e.pdf" target="_blank" rel="noreferrer">UN Regulation No. 171 · 5.5.4.2.6 <ArrowUpRight size={15} /></a>
        </Reveal>

        <Reveal id="dms-monitoring" className="monitoring-section">
          <div className="section-heading split-heading compact-heading">
            <div><p className="eyebrow">CONTINUOUS MONITORING</p><h2 className="safe-break-title"><span>异常状态均有明确的</span><span>确认与恢复条件。</span></h2></div>
            <p>辅助驾驶开启且车速大于 10 km/h 后进入监测。状态优先级为：疑似失能 ＞ 疲劳/疑似睡着 ＞ 手眼同时脱离 ＞ 单一脱离 ＞ 正常；监测不可用单独处理。</p>
          </div>
          <div className="table-wrap monitoring-table">
            <table>
              <caption className="sr-only">驾驶员持续监测初始阈值</caption>
              <thead><tr><th>监测项</th><th>判定条件</th><th>确认阈值</th><th>恢复或降级</th></tr></thead>
              <tbody>{monitoringRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <div className="gaze-zone-section">
            <div className="gaze-zone-head"><div><span>GAZE REGION CALIBRATION</span><h3 className="safe-break-title"><span>后视镜与短时导航查看</span><span>不应被误报</span></h3></div><p>只有连续离开全部驾驶任务相关区域，才进入 EOR 计时。各区域需按车型、坐姿和屏幕位置标定。</p></div>
            <div className="gaze-zone-grid">
              {gazeZones.map((zone) => <article key={zone.code}><span className="gaze-zone-icon"><Eye size={21} weight="duotone" /></span><div><b>{zone.code}</b><h4>{zone.title}</h4><p>{zone.rule}</p></div><small>{zone.status}</small></article>)}
            </div>
          </div>
          <div className="state-output-head">
            <span>STATE DECISION / 单一输出优先级</span>
            <p>疑似失能 ＞ 疲劳 / 疑似睡着 ＞ 手眼同时脱离 ＞ 单项脱离 ＞ 正常；监测不可用始终作为第二条独立结果。</p>
          </div>
          <div className="driver-state-grid">
            {driverStates.map((state, index) => {
              const StateIcon = driverStateIconMap[state.key] || Warning;
              const stateScene = driverStateSceneMap[state.key];
              return <Reveal key={state.key} delay={Math.min(index * 0.035, 0.18)} className={`driver-state-card state-${state.key}`}><div><span className="state-index">{state.index}</span><span className="state-icon"><StateIcon size={24} weight="duotone" /></span><b>{state.level}</b></div>{stateScene && <span className="driver-state-visual"><img src={stateScene} alt={`${state.title}驾驶场景`} /></span>}<h3>{state.title}</h3><p>{state.trigger}</p><small>{state.recovery}</small></Reveal>;
            })}
          </div>
        </Reveal>

        <Reveal className="escalation-section">
          <div className="section-heading split-heading compact-heading">
            <div><p className="eyebrow">ESCALATION ROUTE</p><h2 className="safe-break-title"><span>一张路线图，</span><span>看清所有升级节点。</span></h2></div>
            <p>2 s 是产品侧异常确认初值。提醒时限按 UN R171 校核：EOR 最迟 5 s；HOR 原则上 5 s，仅在持续确认视线有效时允许延后，且延后不超过 5 s。</p>
          </div>
          <div className="escalation-route" role="list" aria-label="DMS 分级提醒路线">
            {escalationRows.map(([title, trigger, hmi, next], index) => {
              const RouteIcon = escalationIconList[index];
              return <article role="listitem" key={title} className={`escalation-step escalation-${index}`}><div className="route-node"><span>{String(index + 1).padStart(2, "0")}</span><span className="route-symbol"><RouteIcon size={23} weight="duotone" /></span><b>{title}</b></div><dl><div><dt>触发</dt><dd>{trigger}</dd></div><div><dt>声光触觉</dt><dd>{hmi}</dd></div><div><dt>下一步</dt><dd>{next}</dd></div></dl>{index < escalationRows.length - 1 && <ArrowRight className="route-arrow" aria-hidden="true" />}</article>;
            })}
          </div>
        </Reveal>

        <Reveal><Timeline /></Reveal>
      </div>

      <div id="dms-hmi" className="hmi-section section-space">
        <div className="shell">
          <Reveal className="section-heading split-heading light-heading">
            <div><p className="eyebrow light">HMI / ESCALATION</p><h2>分级提醒如何告知驾驶员，并触发安全处置。</h2></div>
            <p>本章展示 HOR、EOR、DCA、RMF 与 SOS 在车机上的提示位置、文案、颜色、声音和驾驶员需要执行的动作。</p>
          </Reveal>
          <Reveal><HmiVisualizer /></Reveal>
          <Reveal className="tts-matrix">
            <div className="matrix-head"><span>TTS / SOUND / HAPTIC</span><p>先播放提示音，间隔约 200～300 ms 后播报 TTS；安全播报暂停导航语音并降低媒体音量。</p></div>
            <div className="table-wrap"><table><caption className="sr-only">DMS 提示音、TTS 与触觉矩阵</caption><colgroup><col /><col /><col /><col /></colgroup><thead><tr><th>事件</th><th>提示音 / 触觉</th><th>TTS 文案</th><th>重复 / 解除</th></tr></thead><tbody>{ttsRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
          </Reveal>
        </div>
      </div>

      <div id="dms-rmf" className="rmf-section shell section-space">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">RMF × SOS</p><h2 className="safe-break-title"><span>两个泳道，</span><span>同一时刻启动。</span></h2></div>
          <p>车端处置是本地安全闭环，远程救援是并行服务链路。网络中断时，车辆仍继续稳定减速、选择安全区域并停车。</p>
        </Reveal>
        <Reveal className="swimlanes">
          <div className="parallel-start"><span>同一事件触发</span><strong>车端与远程并行开始</strong></div>
          <div className="lane-row">
            <div className="lane-label"><span><SteeringWheel size={21} /></span><div><small>LOCAL SAFETY LOOP</small><strong>车端 RMF</strong></div></div>
            <ol className="lane-steps">{["稳定减速", "选择安全区域", "开启双闪", "安全驻车"].map((step, index) => <li key={step}><b>0{index + 1}</b><span>{step}</span></li>)}</ol>
            <p className="lane-status safe">离线可执行</p>
          </div>
          <div className="lane-row remote-row">
            <div className="lane-label"><span><Broadcast size={21} /></span><div><small>REMOTE SERVICE LOOP</small><strong>远程 SOS</strong></div></div>
            <ol className="lane-steps remote">{["创建事件", "连接坐席", "远程评估", "联系救援"].map((step, index) => <li key={step}><b>0{index + 1}</b><span>{step}</span></li>)}</ol>
            <p className="lane-status">失败保持重试</p>
          </div>
          <div className="parallel-rule"><ShieldCheck size={18} /><span>远程连接失败，不解除、不暂停、不替代车端 RMF。</span></div>
        </Reveal>
        <Reveal className="sos-status-route">
          <div><span>01 / 建联</span><b>连接远程救援坐席</b><small>创建 SOS 事件，并上传车辆位置、车速与 RMF 执行状态</small></div><ArrowRight aria-hidden="true" /><div><span>02 / 判断</span><b>坐席远程评估</b><small>通话期间暂停 TTS，坐席结合道路位置与车辆状态判断救援需求</small></div><ArrowRight aria-hidden="true" /><div><span>03 / 处置</span><b>救援任务已受理</b><small>仅在服务端有可靠数据时显示预计到达时间</small></div>
        </Reveal>
        <div className="target-grid">
          {[
            ["高速 / 快速路", "5 km 内存在安全服务区、收费站或停车区，且不需要连续复杂变道时可继续前往；否则优先应急车道或硬路肩。"],
            ["城市道路", "优先路侧且不占主交通流的位置；条件不足时执行受控车道内停车。"],
            ["乡村道路", "选择稳定路肩或加宽区域；避让碰撞之外，减速度不超过 4 m/s²，停车后驻车并开启双闪。"],
          ].map(([title, body], index) => {
            const RoadIcon = roadTypeIconList[index];
            return <Reveal delay={index * .06} key={title}><div className="road-type-head"><span className="road-type-icon"><RoadIcon size={30} weight="duotone" /></span><span>{title}</span></div><p>{body}</p></Reveal>;
          })}
        </div>
      </div>

      <div id="dms-architecture" className="architecture section-space">
        <div className="shell">
          <Reveal className="section-heading split-heading"><div><p className="eyebrow">SYSTEM ARCHITECTURE</p><h2>感知、计算、执行与通信组成安全链。</h2></div><p>四层结构分别承接驾驶员与道路感知、状态计算、车辆控制和远程通信；每一层都需要明确失效、时延、隐私与事件回放要求。</p></Reveal>
          <div className="system-layer-grid">{systemLayers.map((layer, index) => {
            const LayerIcon = systemLayerIconList[index];
            return <Reveal className="system-layer-card" delay={index * .05} key={layer.title}><div className="system-layer-mark"><span>{layer.index}</span><i><LayerIcon size={28} weight="duotone" /></i></div><h3>{layer.title}</h3><ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>;
          })}</div>
          <div className="quality-rule-grid">{qualityRules.map(([title, body], index) => <Reveal delay={Math.min(index * .04, .18)} key={title}><b>{title}</b><p>{body}</p></Reveal>)}</div>
        </div>
      </div>

      <div id="dms-measurement" className="dms-measurement section-space">
        <div className="shell">
          <Reveal className="section-heading split-heading light-heading">
            <div><p className="eyebrow light">METRICS / TRACKING</p><h2 className="safe-break-title"><span>用结果指标验证安全，</span><span>用过程事件定位问题。</span></h2></div>
            <p>指标覆盖安全结果、过程质量、误报体验与数据约束；事件从监测可用性、驾驶员状态一路关联到 RMF 和 SOS，支持按车型、版本与场景回放。</p>
          </Reveal>
          <div className="dms-metric-grid">
            {dmsMetricGroups.map((group, index) => <Reveal className="dms-metric-card" delay={index * .06} key={group.code}><div className="metric-card-head"><span>{group.code}</span><h3>{group.title}</h3><p>{group.summary}</p></div><div className="metric-list">{group.metrics.map(([name, unit, definition]) => <article key={name}><div><b>{name}</b><small>{unit}</small></div><p>{definition}</p></article>)}</div></Reveal>)}
          </div>
          <Reveal className="tracking-explorer">
            <div className="tracking-explorer-head"><div><span>EVENT DICTIONARY</span><h3>核心事件与验收口径</h3></div><p>事件名称、触发、字段、上传、隐私和验收使用同一份字典，避免开发、测试与数据分析各自解释。</p></div>
            <div className="tracking-layout">
              <div className="tracking-tabs" role="tablist" aria-label="选择 DMS 核心埋点事件">
                {dmsTrackingEvents.map((event, index) => <button id={`tracking-tab-${index}`} key={event.id} role="tab" aria-selected={activeTrackingEvent === index} aria-controls="tracking-event-panel" className={activeTrackingEvent === index ? "active" : ""} onPointerEnter={() => setActiveTrackingEvent(index)} onFocus={() => setActiveTrackingEvent(index)} onClick={() => setActiveTrackingEvent(index)}><span>{String(index + 1).padStart(2, "0")}</span><b>{event.title}</b><small>{event.id}</small></button>)}
              </div>
              <AnimatePresence mode="wait">
                <motion.article id="tracking-event-panel" role="tabpanel" aria-labelledby={`tracking-tab-${activeTrackingEvent}`} key={trackingEvent.id} className="tracking-event-panel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35, ease }}>
                  <div className="tracking-event-title"><span>ACTIVE EVENT</span><h4>{trackingEvent.id}</h4><p>{trackingEvent.title}</p></div>
                  <dl>
                    <div><dt>触发条件</dt><dd>{trackingEvent.trigger}</dd></div>
                    <div><dt>关键字段</dt><dd>{trackingEvent.fields}</dd></div>
                    <div><dt>上报策略</dt><dd>{trackingEvent.policy}</dd></div>
                    <div><dt>隐私约束</dt><dd>{trackingEvent.privacy}</dd></div>
                    <div><dt>验收口径</dt><dd>{trackingEvent.acceptance}</dd></div>
                  </dl>
                </motion.article>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <div id="dms-delivery" className="dms-delivery shell section-space">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">PRIORITY / DELIVERY</p><h2 className="safe-break-title"><span>先冻结安全基线，</span><span>再扩展体验与运营能力。</span></h2></div>
          <p>MoSCoW 管理版本范围，KANO 区分安全基本项与体验增强项；同一优先层级在工作量、截止日和依赖明确后再使用 WSJF 排序。</p>
        </Reveal>
        <div className="priority-grid">
          {dmsPriorityGroups.map((group, index) => <Reveal className={`priority-card priority-${group.level.toLowerCase()}`} delay={index * .06} key={group.level}><div><span>{group.level}</span><b>{group.title}</b></div><p>{group.rule}</p><ul>{group.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></Reveal>)}
        </div>
        <Reveal className="delivery-roadmap">
          <div className="delivery-roadmap-head"><div><span>RELEASE GATES</span><h3>跨部门交付路线</h3></div><p>每一阶段都有主责部门和明确退出条件；未通过当前门禁，不进入下一阶段。</p></div>
          <ol>{dmsDeliveryStages.map((stage, index) => <li key={stage.gate}><div className="delivery-gate"><span>{stage.gate}</span><i>{String(index + 1).padStart(2, "0")}</i></div><h4>{stage.title}</h4><p>{stage.owners}</p><small>{stage.exit}</small>{index < dmsDeliveryStages.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>
        </Reveal>
      </div>

      <div id="dms-competitors" className="competitor-section shell section-space">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">DMS BENCHMARK</p><h2>专项对标：提醒、停车与救援闭环。</h2></div>
          <p>竞品比较聚焦驾驶员失能后的处置边界。公开资料未披露的功能不作推断，避免用行业常见能力替代车型事实。</p>
        </Reveal>
        <Reveal className="table-wrap">
          <table className="competitor-table">
            <caption className="sr-only">DMS 专项竞品对比</caption>
            <thead><tr><th>车型</th><th>车端处置</th><th>停车后动作</th><th>公开边界</th></tr></thead>
            <tbody>{competitorRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </Reveal>
      </div>

      <div id="dms-appendix" className="appendix shell section-space">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">TEST / APPENDIX</p><h2>测试、阈值与权限：验证安全闭环。</h2></div>
          <p>本章集中说明初始阈值、测试验收、人因要求、事件字段和远程控制边界。每个条目都可展开查看完整规则。</p>
        </Reveal>
        <div className="accordion-list">
          {appendix.map((item, index) => <Accordion item={item} key={item.title} open={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />)}
        </div>
        <Reveal className="appendix-matrix-block">
          <div className="matrix-head dark"><span>ACCEPTANCE / 验收矩阵</span><p>按“状态注入—判断—交互—车辆处置—远程救援—事件回放”验证完整闭环。</p></div>
          <div className="table-wrap"><table className="acceptance-table"><caption className="sr-only">DMS 验收测试矩阵</caption><thead><tr><th>编号</th><th>测试方法</th><th>成功标准</th></tr></thead><tbody>{acceptanceRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
        </Reveal>
        <div className="governance-grid">
          <Reveal className="governance-card"><div className="matrix-head"><span>REMOTE PERMISSION / 远程权限</span><p>远程协助不能扩大到未经校验的动态控制。</p></div><div className="permission-list">{remotePermissions.map(([action, rule]) => <div key={action}><p>{action}</p><b>{rule}</b></div>)}</div></Reveal>
          <Reveal className="governance-card"><div className="matrix-head"><span>EVENT SCHEMA / 事件字段</span><p>仅记录安全处置、审计与回放所需字段。</p></div><div className="event-field-list">{eventFields.map(([type, fields]) => <div key={type}><b>{type}</b><p>{fields}</p></div>)}</div></Reveal>
        </div>
      </div>

      <div className="roi section-space">
        <div className="shell">
          <Reveal><p className="eyebrow light">SAFETY ROI</p><h2 className="safe-break-title"><span>核心回报：减少事故，</span><span>提高失能处置成功率。</span></h2></Reveal>
          <div className="roi-grid">
            <Reveal><span>100,000 辆</span><p>安全能力覆盖车队</p></Reveal>
            <Reveal delay={0.06}><span>36 起 / 年</span><p>预计减少事故</p></Reveal>
            <Reveal delay={0.12}><span>30%</span><p>事故频次目标降幅</p></Reveal>
            <Reveal delay={0.18}><span>≥ 99.9%</span><p>受控场地 RMF 安全停车成功率目标</p></Reveal>
            <Reveal delay={0.24}><span>≥ 99.5%</span><p>有网条件下 SOS 建联成功率目标</p></Reveal>
          </div>
          <div className="roi-impact-chain"><span><b>01 / 提前识别</b><small>在接管失败前识别分心、疲劳和失能风险</small></span><ArrowRight /><span><b>02 / 阻断升级</b><small>无响应时由 DCA 与 RMF 接管减速和停车</small></span><ArrowRight /><span><b>03 / 缩短救援</b><small>SOS 与车端处置并行，减少停车后的等待时间</small></span></div>
          <p className="roi-note">安全收益测算示例：10 万辆车、单车年行驶 20,000 km，对应车队年里程 20 亿 km；若基线事故率为 6 次 / 亿 km，事故频次降低 30%，预计每年减少约 36 起事故。停车与 SOS 指标为测试验收目标，不代表量产实绩。</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ view, onNavigate }) {
  const isHome = view === "home";
  const footerTitle = isHome ? <>智能产品<br />作品集</> : view === "benchmark" ? <>六车型对标<br />阅读完毕</> : view === "dms" ? <>DMS PRD<br />阅读完毕</> : <>机器人对标<br />阅读完毕</>;
  return (
    <footer>
      <div className="shell footer-grid">
        <div><p className="eyebrow light">{isHome ? "END OF PORTFOLIO" : "END OF DOCUMENT"}</p><h2>{footerTitle}</h2></div>
        <div>
          <p>{isHome ? "三份研究模块，分别进入、分别阅读。" : "滚动到这里仅代表当前文档结束；其他模块不会自动接在下方。"}</p>
          <button onClick={() => isHome ? scrollToId("home") : onNavigate("home")}>{isHome ? "返回顶部" : "返回作品集首页"} <ArrowUpRight /></button>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  const routeFromHash = () => {
    const route = window.location.hash.replace("#/", "");
    return ["benchmark", "dms", "robot"].includes(route) ? route : "home";
  };
  const [view, setView] = useState(routeFromHash);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();
  const viewRef = useRef(view);

  useEffect(() => { viewRef.current = view; }, [view]);

  useEffect(() => {
    const onPopState = () => {
      setView(routeFromHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (nextView, section) => {
    if (nextView === viewRef.current) {
      if (section && section !== nextView) scrollToId(section);
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", nextView === "home" ? "#/" : `#/${nextView}`);
    viewRef.current = nextView;
    setView(nextView);
    window.scrollTo({ top: 0, behavior: "auto" });
    if (section && section !== nextView) {
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => scrollToId(section)));
    }
  };

  useEffect(() => {
    if (reduced) return undefined;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__portfolioLenis = lenis;
    let frame;
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); delete window.__portfolioLenis; };
  }, [reduced]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [view]);

  return (
    <>
      <Intro />
      <Header progress={progress} view={view} onNavigate={navigate} />
      <main className={`page-view page-${view}`}>
        <AnimatePresence mode="wait">
          <motion.div key={view} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.35 }}>
            {view === "home" && <><Hero onNavigate={navigate} /><Marquee /><ModuleOverview onNavigate={navigate} /></>}
            {view === "benchmark" && <Benchmark />}
            {view === "dms" && <DmsModule />}
            {view === "robot" && <RobotBenchmark />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer view={view} onNavigate={navigate} />
    </>
  );
}
