import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MagnifyingGlassPlus, X } from "@phosphor-icons/react";
import {
  robotCompanies,
  robotComparisonRows,
  robotConclusions,
  robotFramework,
  robotMorphologies,
  robotProductImages,
  robotProducts,
} from "./robotData";

const robotEase = [0.22, 1, 0.36, 1];

function RobotReveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduced ? 0 : 0.75, delay, ease: robotEase }}
    >
      {children}
    </motion.div>
  );
}

function RobotImage({ src, alt, className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={`robot-image ${className}`} onClick={() => setOpen(true)} aria-label={`查看原图：${alt}`}>
        <img src={src} alt={alt} loading="lazy" />
        <span>查看原图 <MagnifyingGlassPlus size={16} /></span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="robot-lightbox" role="dialog" aria-modal="true" aria-label={alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <button onClick={() => setOpen(false)} aria-label="关闭原图"><X size={22} /></button>
            <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FrameworkDiagram() {
  const [active, setActive] = useState("brain");
  const activeItem = robotFramework.find((item) => item.id === active);
  return (
    <section id="robot-framework" className="robot-framework section-space">
      <div className="shell">
        <RobotReveal className="robot-section-heading">
          <p className="eyebrow">BENCHMARK FRAMEWORK / 对标框架</p>
          <h2>从大模型、运动控制<br />与机械结构展开对标。</h2>
          <p>大模型负责理解和规划任务，运动控制负责实时执行，机械结构决定机器人能够进入哪些作业环境。</p>
        </RobotReveal>
        <div className="robot-framework-map" role="tablist" aria-label="机器人大模型、运动控制与机械结构对标框架">
          {robotFramework.map((item, index) => (
            <div className="robot-framework-node-wrap" key={item.id}>
              <button
                role="tab"
                aria-selected={active === item.id}
                className={`robot-framework-node ${active === item.id ? "active" : ""}`}
                onMouseEnter={() => setActive(item.id)}
                onFocus={() => setActive(item.id)}
                onClick={() => setActive(item.id)}
              >
                <small>{item.english}</small>
                <span>{item.no}</span>
                <strong>{item.label}</strong>
                <p>{item.summary}</p>
              </button>
              {index < robotFramework.length - 1 && <div className="robot-framework-arrow" aria-hidden="true"><i /><ArrowRight /></div>}
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} className="robot-framework-detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: robotEase }}>
            <b>{activeItem.label} / 判断重点</b>
            <p>{activeItem.detail}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CompanyDetail() {
  const [activeId, setActiveId] = useState(robotCompanies[0].id);
  const active = robotCompanies.find((company) => company.id === activeId);
  const reduced = useReducedMotion();
  const railCopies = reduced ? [0] : [0, 1];
  return (
    <section id="robot-company" className="robot-company-section section-space">
      <div className="shell">
        <RobotReveal className="robot-section-heading light-heading">
          <p className="eyebrow light">COMPANY PROFILES / 四家公司</p>
          <h2>四家公司产品<br />与技术路线。</h2>
          <p>分别呈现产品定位、大模型与任务规划、运动控制、机械结构，以及已公开的灵巧手和末端执行器配置。</p>
        </RobotReveal>
        <div className="robot-company-rail" role="tablist" aria-label="四家公司循环切换">
          <div className="robot-company-track">
            {railCopies.map((copyIndex) => (
              <div className="robot-company-set" key={copyIndex} aria-hidden={copyIndex > 0 || undefined}>
                {robotCompanies.map((company) => (
                  <button
                    key={`${copyIndex}-${company.id}`}
                    role="tab"
                    tabIndex={copyIndex > 0 ? -1 : 0}
                    aria-selected={copyIndex === 0 ? activeId === company.id : undefined}
                    className={`robot-company-rail-card ${activeId === company.id ? "active" : ""}`}
                    onClick={() => setActiveId(company.id)}
                  >
                    <span className="robot-company-rail-image"><img src={company.railImage} alt="" /></span>
                    <span className="robot-company-rail-index">{company.index}</span>
                    <b>{company.name}</b>
                    <small>{company.focus}</small>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.article key={active.id} className="robot-company-profile" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: robotEase }}>
            <div className="robot-company-intro">
              <div>
                <p className="eyebrow">{active.index} / {active.english}</p>
                <h3>{active.name}</h3>
                <p className="robot-company-lead">{active.summary}</p>
                <div className="robot-morph-tags">{active.morphologies.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="robot-position-card">
                <small>核心竞争力</small>
                <strong>{active.focus}</strong>
                <p>{active.strength}</p>
              </div>
            </div>
            <div className="robot-company-media-grid">
              <RobotImage src={active.hero} alt={`${active.name}代表机器人完整产品形象`} className={`primary company-product-image company-${active.id}`} />
              <RobotImage src={active.secondary} alt={`${active.name}另一类代表产品或末端执行器`} className={`secondary company-secondary-image company-${active.id}`} />
            </div>
            <div id="robot-brain-control" className="robot-capability-chain">
              <div className="robot-capability-card brain-card">
                <span>01 / 大模型与任务规划</span>
                <h4>{active.brain.title}</h4>
                <p>{active.brain.copy}</p>
                <small>{active.brain.evidence}</small>
              </div>
              <div className="robot-chain-link" aria-hidden="true"><i /><ArrowRight /></div>
              <div className="robot-capability-card control-card">
                <span>02 / 运动控制与执行</span>
                <h4>{active.control.title}</h4>
                <p>{active.control.copy}</p>
                <small>{active.control.evidence}</small>
              </div>
              <div className="robot-chain-link" aria-hidden="true"><i /><ArrowRight /></div>
              <div className="robot-capability-card body-card">
                <span>03 / 机械结构</span>
                <h4>机械结构与产品配置</h4>
                <p>{active.body}</p>
                <div>{active.products.map((product) => <b key={product}>{product}</b>)}</div>
              </div>
            </div>
            {active.endEffectors.length > 0 && <section className="robot-end-effector-section" aria-labelledby={`robot-end-effector-${active.id}`}>
              <div className="robot-end-effector-heading">
                <div>
                  <p className="eyebrow">DEXTEROUS HAND / END EFFECTOR</p>
                  <h4 id={`robot-end-effector-${active.id}`}>灵巧手与末端执行器</h4>
                </div>
                <p>只展示官方资料能够确认的型号、适配关系和接口；未公开的配置不作推断。</p>
              </div>
              <div className={`robot-end-effector-grid count-${active.endEffectors.length}`}>
                {active.endEffectors.map((item, itemIndex) => (
                  <article className="robot-end-effector-card" key={item.name}>
                    {item.imageAvailable === false ? (
                      <div className="robot-end-effector-no-photo" role="img" aria-label={`${item.name} 官方未发布可独立核验的产品图`}>
                        <small>OFFICIAL SPECIFICATION</small>
                        <strong>{item.visualLabel}</strong>
                        <span>{item.name}</span>
                        <p>官方开发文档已列出配置名称与自由度，暂无独立产品图。</p>
                      </div>
                    ) : (
                      <RobotImage src={item.image} alt={item.imageAlt || `${active.name} ${item.name}`} className={`robot-end-effector-image end-effector-${active.id}-${itemIndex}`} />
                    )}
                    <div className="robot-end-effector-copy">
                      <small>{item.kind}</small>
                      <h5>{item.name}</h5>
                      <strong>{item.spec}</strong>
                      <p>{item.compatibility}</p>
                      <a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceLabel}<ArrowUpRight size={15} /></a>
                    </div>
                  </article>
                ))}
              </div>
            </section>}
            <div className="robot-official-sources" aria-label={`${active.name}官方资料`}>
              <span>官方资料</span>
              {active.sources.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={13} /></a>)}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

function MorphologySection() {
  return (
    <section id="robot-morphology" className="robot-morphology section-space">
      <div className="shell">
        <RobotReveal className="robot-section-heading">
          <p className="eyebrow">MORPHOLOGY / 形态选择</p>
          <h2>面向不同的<br />机器人作业场景。</h2>
          <p>双足适配人类工位，四足面向复杂地形，纯轮式突出结构化场地中的移动效率与双臂作业空间。</p>
        </RobotReveal>
        <div className="robot-morphology-grid">
          {robotMorphologies.map((item, index) => (
            <RobotReveal key={item.id} className={`robot-morph-card morph-${item.id}`} delay={index * 0.06}>
              <span>0{index + 1}</span>
              <div className="robot-morph-photo"><img src={item.image} alt={item.imageAlt} loading="lazy" /></div>
              <h3>{item.label}</h3>
              <strong>{item.strength}</strong>
              <dl>
                <div><dt>适用任务</dt><dd>{item.scenarios}</dd></div>
                <div><dt>结构代价</dt><dd>{item.cost}</dd></div>
                <div><dt>代表机型</dt><dd>{item.examples}</dd></div>
              </dl>
            </RobotReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const [mode, setMode] = useState("intelligence");
  const modeLabels = { intelligence: "模型与运动控制", structure: "机械结构", coverage: "形态覆盖" };
  return (
    <section id="robot-comparison" className="robot-comparison section-space">
      <div className="shell">
        <RobotReveal className="robot-section-heading comparison-heading">
          <div>
            <p className="eyebrow">CROSS-COMPANY COMPARISON</p>
            <h2>四家公司<br />横向对比。</h2>
          </div>
          <p>核心差异集中在模型路线、运动控制、结构形态和工程化重点。表内字段保持同一比较口径。</p>
        </RobotReveal>
        <div className="robot-comparison-tabs" role="tablist" aria-label="横向对比维度">
          {Object.entries(modeLabels).map(([id, label]) => <button key={id} role="tab" aria-selected={mode === id} className={mode === id ? "active" : ""} onClick={() => setMode(id)}>{label}</button>)}
        </div>
        <div className="robot-table-wrap">
          <table className="robot-comparison-table">
            <thead><tr><th>比较维度</th>{robotCompanies.map((company) => <th key={company.id}>{company.name}</th>)}</tr></thead>
            <tbody>{robotComparisonRows[mode].map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <div className="robot-comparison-mobile">
          {robotComparisonRows[mode].map((row) => (
            <article key={row[0]}>
              <h3>{row[0]}</h3>
              {robotCompanies.map((company, index) => <div key={company.id}><b>{company.name}</b><p>{row[index + 1]}</p></div>)}
            </article>
          ))}
        </div>
        <RobotReveal className="robot-product-matrix">
          <div className="robot-matrix-heading"><div><p className="eyebrow">PRODUCT MATRIX</p><h3>代表机型与结构参数</h3></div><p>参数按文档公开口径呈现；同一型号的可选配置、交付版本和应用包需要在采购前重新核验。</p></div>
          <div className="robot-table-wrap product-table-wrap">
            <table className="robot-product-table">
              <thead><tr><th>公司</th><th>机型</th><th>形态</th><th>自由度 / 重量</th><th>末端、感知与续航</th><th>任务定位</th></tr></thead>
              <tbody>{robotProducts.map((row) => {
                const thumbnail = robotProductImages[`${row[0]}-${row[1]}`];
                return <tr key={`${row[0]}-${row[1]}`}>{row.map((cell, index) => index === 1 ? <th key={index}><span className="robot-model-cell">{thumbnail && <img src={thumbnail} alt={`${row[0]} ${cell} 完整本体`} loading="lazy" />}<span>{cell}</span></span></th> : index < 3 ? <th key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>;
              })}</tbody>
            </table>
          </div>
          <div className="robot-product-mobile">
            {robotProducts.map((row) => <article key={`${row[0]}-${row[1]}`}><small>{row[0]} / {row[2]}</small><h4>{robotProductImages[`${row[0]}-${row[1]}`] && <img src={robotProductImages[`${row[0]}-${row[1]}`]} alt={`${row[0]} ${row[1]} 完整本体`} loading="lazy" />}{row[1]}</h4><p><b>结构参数</b>{row[3]}</p><p><b>末端、感知与续航</b>{row[4]}</p><p><b>任务定位</b>{row[5]}</p></article>)}
          </div>
        </RobotReveal>
      </div>
    </section>
  );
}

function ConclusionSection() {
  return (
    <section id="robot-conclusion" className="robot-conclusion section-space">
      <div className="shell">
        <RobotReveal className="robot-section-heading light-heading">
          <p className="eyebrow light">SYNTHESIS / 综合结论</p>
          <h2>四家公司核心能力<br />与适用场景总结。</h2>
          <p>从大模型与任务规划、运动控制、机械结构和工程化资料，归纳各公司的重点能力与更适合优先验证的作业场景。</p>
        </RobotReveal>
        <div className="robot-conclusion-grid">
          {robotConclusions.map((item, index) => (
            <RobotReveal key={item[0]} className="robot-conclusion-card" delay={index * 0.06}>
              <span>0{index + 1}</span>
              <h3>{item[0]}</h3>
              <strong>{item[1]}</strong>
              <p>{item[2]}</p>
            </RobotReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RobotBenchmark() {
  return (
    <>
      <section id="robot-benchmark" className="robot-cover">
        <div className="robot-cover-media" aria-hidden="true">
          <img src="/assets/robot/unitree-humanoid.png" alt="" />
          <img src="/assets/robot/agibot-humanoid.png" alt="" />
          <img src="/assets/robot/deep-dr02.png" alt="" />
          <img src="/assets/robot/galbot-g1.png" alt="" />
        </div>
        <div className="robot-cover-scrim" />
        <div className="shell robot-cover-copy">
          <p className="eyebrow light">MODULE 03 / EMBODIED INTELLIGENCE</p>
          <h1>机器人<br />能力与产品对标</h1>
          <p>宇树科技、智元机器人、云深处科技、银河通用</p>
          <div className="robot-cover-facts"><span><b>4</b><small>家公司</small></span><span><b>3</b><small>层能力框架</small></span><span><b>3</b><small>类本体形态</small></span></div>
        </div>
      </section>
      <FrameworkDiagram />
      <CompanyDetail />
      <MorphologySection />
      <ComparisonSection />
      <ConclusionSection />
    </>
  );
}
