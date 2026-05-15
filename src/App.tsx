const heroChips = ['节假日提醒', '路线判断', '天气联动', '预算概览'];

const statements = [
  {
    label: '01',
    title: '先决定值不值得出发。',
    text: '把天气、路线与预算放在同一个视角里。',
  },
  {
    label: '02',
    title: '再决定怎么出发。',
    text: '自驾、高铁、飞机，快速对比。',
  },
  {
    label: '03',
    title: '最后留下更顺手的方案。',
    text: '收藏、整理，再继续迭代。',
  },
];

const scenarios = [
  '周末想出去，但不想先做大量功课。',
  '节假日临近，想快速拉出一版可用方案。',
  '出发前先看清天气、路线和预算。',
];

const assetBase = import.meta.env.BASE_URL;

const screenshots = [
  `${assetBase}piggy-assets/Weixin Image_20260515204109_15_186.png`,
  `${assetBase}piggy-assets/Weixin Image_20260515204110_16_186.png`,
  `${assetBase}piggy-assets/Weixin Image_20260515204111_17_186.png`,
  `${assetBase}piggy-assets/Weixin Image_20260515204111_18_186.png`,
  `${assetBase}piggy-assets/Weixin Image_20260515204112_19_186.png`,
  `${assetBase}piggy-assets/Weixin Image_20260515204113_20_186.png`,
  `${assetBase}piggy-assets/Weixin Image_20260515204114_21_186.png`,
  `${assetBase}piggy-assets/Weixin Image_20260515204115_22_186.png`,
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar-wrap">
        <div className="topbar container">
          <div className="brand-block">
            <div className="brand-icon">🐷</div>
            <div className="brand-copy">
              <strong>猪猪的假期</strong>
              <span>Piggy Getaway</span>
            </div>
          </div>
          <nav className="topnav">
            <a href="#overview">概览</a>
            <a href="#design">体验</a>
            <a href="#gallery">截图</a>
            <a href="#scenes">场景</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container" id="overview">
          <div className="hero-copy">
            <div className="kicker">Holiday planning, with less friction</div>
            <h1>
              一次假期，
              <br />
              可以从容开始。
            </h1>
            <p className="hero-description">
              猪猪的假期把节假日提醒、路线、天气和预算收进同一个规划入口。
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#gallery">查看真实截图</a>
              <a className="button-secondary" href="#scenes">它适合谁</a>
            </div>
            <div className="chip-row">
              {heroChips.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual hero-real-visual">
            <div className="device-glow" />
            <div className="hero-shot-stack">
              <div className="hero-shot hero-shot-back">
                <img src={screenshots[1]} alt="Piggy Vacation app screenshot preview 1" />
              </div>
              <div className="hero-shot hero-shot-front">
                <img src={screenshots[3]} alt="Piggy Vacation app screenshot preview 2" />
              </div>
            </div>
          </div>
        </section>

        <section className="statement-section container" id="design">
          <div className="section-intro">
            <div className="kicker subtle">A calmer way to plan</div>
            <h3>不是塞进更多信息，而是把判断顺序排好。</h3>
          </div>
          <div className="statement-grid">
            {statements.map((item) => (
              <article className="statement-card" key={item.label}>
                <span className="statement-label">{item.label}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band container">
          <div className="feature-band-inner">
            <p>节假日提醒</p>
            <p>多交通方案</p>
            <p>天气与路线联动</p>
            <p>预算概览</p>
            <p>收藏与整理</p>
          </div>
        </section>

        <section className="gallery-section container" id="gallery">
          <div className="section-intro left">
            <div className="kicker subtle">Real iPhone Screens</div>
            <h3>这 8 张都是真机截图，直接展示现在的产品状态。</h3>
          </div>
          <div className="screenshot-grid">
            {screenshots.map((src, index) => (
              <article className="screenshot-card" key={src}>
                <div className="screenshot-frame">
                  <img src={src} alt={`Piggy Vacation iPhone screenshot ${index + 1}`} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="scenes-section container" id="scenes">
          <div className="section-intro left">
            <div className="kicker subtle">Designed for short getaways</div>
            <h3>适合这些不想太折腾，却也不想盲目出发的时刻。</h3>
          </div>
          <div className="scene-list">
            {scenarios.map((item, index) => (
              <article className="scene-item" key={item}>
                <span>{`0${index + 1}`}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section container">
          <div className="closing-card">
            <div>
              <div className="kicker light">Later feature</div>
              <h3>行程分享会放在后面，现在先把产品本身介绍清楚。</h3>
            </div>
            <a className="button-primary light" href="#overview">回到顶部</a>
          </div>
        </section>
      </main>
    </div>
  );
}
