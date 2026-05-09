
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, CheckCircle2, ChevronDown, Headphones, Lock, Menu, Phone, Search, ShieldCheck, ShoppingBag, Star, Truck, Users, Wallet, X } from "lucide-react";

const PHONE_DISPLAY = "42 152 160";
const PHONE = "42152160";
const WHATSAPP = `https://wa.me/216${PHONE}?text=${encodeURIComponent("مرحبا، نحب نطلب منتج Super Siesta")}`;

const productImages = [
  "/images/product_0.png","/images/product_1.png","/images/product_2.png","/images/product_3.png","/images/product_4.png",
  "/images/product_5.png","/images/product_6.png","/images/product_7.png","/images/product_8.png","/images/product_9.png",
  "/images/product_10.png","/images/product_11.png","/images/product_12.png","/images/product_13.png","/images/product_14.png",
  "/images/product_15.png","/images/product_16.png","/images/product_17.png","/images/product_18.png","/images/product_19.png",
  "/images/product_20.png"
];

const products = [
  { name: "Matelas confort plus", ar: "مراتب كونفور بلوس", type: "2 places", price: 299, old: 598, sizes: ["190/140", "190/160", "200/160", "200/180"], badge: "2 places", category: "2 places", imageIndex: 0, details: "راحة يومية وجودة عالية" },
  { name: "Matelas confort plus", ar: "مراتب كونفور بلوس", type: "1 place", price: 199, old: 398, sizes: ["190/80", "190/90", "190/110", "190/120"], badge: "1 place", category: "1 place", imageIndex: 1, details: "مناسبة لغرفة فردية" },
  { name: "Matelas orthopédique soft plus", ar: "مراتب سوفت بلوس", type: "2 places", price: 409, old: 818, sizes: ["190/140", "190/160", "200/160", "200/180"], badge: "2 places", category: "2 places", imageIndex: 2, details: "دعم ممتاز ونوم عميق" },
  { name: "Matelas orthopédique soft plus", ar: "مراتب سوفت بلوس", type: "1 place", price: 259, old: 518, sizes: ["190/80", "190/90", "190/110", "190/120"], badge: "1 place", category: "1 place", imageIndex: 3, details: "دعم مريح للظهر" },
  { name: "Matelas orthopédique venise plus", ar: "مراتب فينيس بلوس", type: "9 étoiles • 2 places", price: 479, old: 958, sizes: ["190/140", "190/160", "200/160", "200/180"], badge: "2 places", category: "2 places", imageIndex: 4, details: "راحة ممتازة وجودة عالية" },
  { name: "Matelas orthopédique venise plus", ar: "مراتب فينيس بلوس", type: "9 étoiles • 1 place", price: 310, old: 620, sizes: ["190/80", "190/90", "190/110", "190/120"], badge: "1 place", category: "1 place", imageIndex: 5, details: "جودة عالية بسعر مناسب" },
  { name: "Matelas orthomédical medico plus", ar: "مراتب ميديكو بلوس", type: "11 étoiles • 2 places", price: 719, old: 1438, sizes: ["190/140", "190/160", "200/160", "200/180"], badge: "2 places", category: "2 places", imageIndex: 6, details: "دعم أورثوميديكال قوي" },
  { name: "Matelas orthomédical medico plus", ar: "مراتب ميديكو بلوس", type: "11 étoiles • 1 place", price: 439, old: 878, sizes: ["190/80", "190/90", "190/110", "190/120"], badge: "1 place", category: "1 place", imageIndex: 7, details: "مريحة ومتينة" },
  { name: "Matelas orthomédical relax plus", ar: "مراتب ريلاكس بلوس", type: "13 étoiles • 2 places", price: 859, old: 1718, sizes: ["190/140", "190/160", "200/160", "200/180"], badge: "2 places", category: "2 places", imageIndex: 8, details: "راحة فاخرة ونوم عميق" },
  { name: "Matelas orthomédical relax plus", ar: "مراتب ريلاكس بلوس", type: "13 étoiles • 1 place", price: 529, old: 1058, sizes: ["190/80", "190/90", "190/110", "190/120"], badge: "1 place", category: "1 place", imageIndex: 9, details: "جودة Premium" },
  { name: "Matelas orthomédical tendresse", ar: "مراتب تندراس", type: "15 étoiles • 2 places", price: 1189, old: 2378, sizes: ["190/140", "190/160", "200/160", "200/180"], badge: "2 places", category: "2 places", imageIndex: 10, details: "أعلى فئة راحة ودعم" },
  { name: "Matelas orthomédical tendresse", ar: "مراتب تندراس", type: "15 étoiles • 1 place", price: 729, old: 1458, sizes: ["190/80", "190/90", "190/110", "190/120"], badge: "1 place", category: "1 place", imageIndex: 11, details: "راحة ممتازة وجودة فاخرة" },
  { name: "Matelas bébé", ar: "مرتبة أطفال", type: "120/60", price: 199, old: 398, sizes: ["120/60"], badge: "Bébé", category: "Enfants", imageIndex: 12, details: "راحة آمنة للأطفال" },
  { name: "Matelas mousse 4 étoiles", ar: "موس 4 نجوم", type: "1 place", price: 79, old: 158, sizes: ["190/65", "190/70", "190/80", "190/90"], badge: "4★", category: "Mousse", imageIndex: 13, details: "موس اقتصادي وعملي" },
  { name: "Matelas mousse 5 étoiles", ar: "موس 5 نجوم", type: "1 place", price: 89, old: 178, sizes: ["190/65", "190/70", "190/80", "190/90"], badge: "5★", category: "Mousse", imageIndex: 14, details: "كثافة أفضل ومتانة" },
  { name: "Matelas mousse 6 étoiles", ar: "موس 6 نجوم", type: "1 place", price: 115, old: 230, sizes: ["190/65", "190/70", "190/80", "190/90"], badge: "6★", category: "Mousse", imageIndex: 15, details: "موس قوي ومريح" },
  { name: "1 oreiller orthopédique", ar: "مخدة واحدة", type: "70x50cm", price: 18, old: 36, sizes: ["70x50"], badge: "1", category: "Oreillers", imageIndex: 16, details: "قابلة للغسل ودعم ممتاز" },
  { name: "Lot de 2 oreillers", ar: "زوج مخادد", type: "70x50cm", price: 35, old: 70, sizes: ["70x50"], badge: "x2", category: "Oreillers", imageIndex: 17, details: "عرض زوج مخادد" },
  { name: "Lot de 5 oreillers", ar: "5 مخادد", type: "70x50cm", price: 85, old: 170, sizes: ["70x50"], badge: "x5", category: "Oreillers", imageIndex: 18, details: "عرض عائلي اقتصادي" },
  { name: "Lot de 6 oreillers", ar: "6 مخادد", type: "70x50cm", price: 99, old: 198, sizes: ["70x50"], badge: "x6", category: "Oreillers", imageIndex: 19, details: "Pack عائلي" },
];

const tabs = [
  { label: "الكل", value: "Tous", icon: ShoppingBag },
  { label: "2 places", value: "2 places", icon: BedDouble },
  { label: "1 place", value: "1 place", icon: BedDouble },
  { label: "Enfants", value: "Enfants", icon: ShieldCheck },
  { label: "Oreillers", value: "Oreillers", icon: BedDouble },
  { label: "Mousse", value: "Mousse", icon: ShoppingBag },
];

export default function App() {
  const [category, setCategory] = useState("Tous");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => products.filter((p) => {
    const okCat = category === "Tous" || p.category === category;
    const okSearch = `${p.name} ${p.ar}`.toLowerCase().includes(search.toLowerCase());
    return okCat && okSearch;
  }), [category, search]);

  return (
    <main dir="rtl" className="site">
      <Header />
      <Hero />
      <Certificates />
      <Countdown />
      <Benefits />
      <DeliveryBar />
      <ProductSection category={category} setCategory={setCategory} filtered={filtered} setSelected={setSelected} search={search} setSearch={setSearch} />
      <FooterTrust />
      <StickyBar />
      {selected && <OrderModal product={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <button className="menu-btn"><Menu /></button>
        <div className="logo">
          <div className="bear">🧸</div>
          <div dir="ltr" className="logo-text"><b>Super</b><strong>Siesta</strong></div>
          <p>Matelas Premium en Tunisie</p>
        </div>
        <div className="award"><span>ÉLU PRODUIT</span><b>2026</b><small>من المستهلك</small></div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="hero-copy">
          <h1>إشتري <span>بأفضل الأسعار</span><br/>في تونس</h1>
          <p>راحة تدوم... جودة تثق فيها</p>
          <div className="hero-benefits">
            <HeroBenefit icon={<Truck/>} title="توصيل مجاني" sub="لكامل تراب الجمهورية" />
            <HeroBenefit icon={<Wallet/>} title="الدفع عند الاستلام" sub="ادفع عند وصول طلبك" />
            <HeroBenefit icon={<ShieldCheck/>} title="ضمان الجودة" sub="مواد أولية صحية" />
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} className="hero-image">
          <img src={productImages[20]} alt="Super Siesta" />
          <div className="rating" dir="ltr">
            <div className="avatars"><Avatar/><Avatar/><Avatar/><Avatar/></div>
            <div><div className="stars">★★★★★</div><b>+15.000 client satisfait</b></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Certificates() {
  return <section className="section-pad"><div className="wrap certs"><Cert code="9001" year="2015" /><Cert code="14001" year="2015" /><Cert code="45001" year="2018" /></div></section>;
}

function Countdown() {
  return (
    <section className="section-pad">
      <div className="wrap countdown">
        <p>🔥 Plus de 200 commandes aujourd’hui</p>
        <span>عرض محدود! لا تفوت الفرصة</span>
        <div className="time-grid" dir="ltr"><TimeBox value="04" label="أيام" /><TimeBox value="16" label="ساعات" /><TimeBox value="39" label="دقائق" /><TimeBox value="28" label="ثواني" /></div>
      </div>
    </section>
  );
}

function Benefits() {
  return <section className="section-pad"><div className="wrap benefits"><Benefit icon={<Truck/>} title="توصيل مجاني" sub="لكامل تراب الجمهورية" /><Benefit icon={<Wallet/>} title="الدفع عند الاستلام" sub="ادفع عند وصول طلبك" /><Benefit icon={<ShieldCheck/>} title="ضمان الجودة" sub="مواد أولية 100% صحية" /><Benefit icon={<Headphones/>} title="خدمة عملاء" sub="متوفرة 7/7" /></div></section>;
}

function DeliveryBar() {
  return <section className="section-pad"><div className="wrap delivery"><Truck/> التوصيل مجاني لكامل تراب الجمهورية</div></section>;
}

function ProductSection({ category, setCategory, filtered, setSelected, search, setSearch }) {
  return (
    <section className="products-section" id="produits">
      <div className="wrap">
        <div className="section-title"><span></span><i></i><h2>منتجاتنا</h2><i></i><span></span></div>
        <div className="tabs">
          {tabs.map((tab) => { const Icon = tab.icon; return <button key={tab.value} onClick={() => setCategory(tab.value)} className={category === tab.value ? "active" : ""}><Icon />{tab.label}</button> })}
        </div>
        <div className="search-box"><Search /><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="إبحث عن منتج..." /></div>
        <div className="product-grid">{filtered.map((product, i) => <ProductCard key={`${product.name}-${i}`} product={product} onBuy={() => setSelected(product)} />)}</div>
      </div>
    </section>
  );
}

function ProductCard({ product, onBuy }) {
  return (
    <motion.article initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="product-card">
      <div className="product-img">
        <div className="badge"><BedDouble />{product.badge}</div>
        <img src={productImages[product.imageIndex]} alt={product.name} />
      </div>
      <div className="product-body">
        <h3>{product.ar}</h3>
        <p>{product.details}</p>
        <div className="sizes">{product.sizes.slice(0,4).map(s => <span key={s}>{s}</span>)}</div>
        <div className="buy-row" dir="ltr">
          <button onClick={onBuy}>عرض المنتج ←</button>
          <div className="price"><b>{product.price} DT</b><del>{product.old} DT</del></div>
        </div>
      </div>
    </motion.article>
  );
}

function FooterTrust() {
  return <section className="footer-trust"><div className="wrap small-trust"><SmallTrust icon={<Lock/>} title="بياناتك 100% محمية" /><SmallTrust icon={<Headphones/>} title="خدمة ما بعد البيع 7/7" /><SmallTrust icon={<Users/>} title="شركة تونسية موثوقة ومعروفة" /></div></section>;
}

function StickyBar() {
  return (
    <div className="stickybar">
      <div className="wrap sticky-inner">
        <a href={`tel:+216${PHONE}`} className="call"><Phone />{PHONE_DISPLAY}</a>
        <a href={WHATSAPP} className="wa">☘</a>
        <a href={WHATSAPP} className="talk">تحدث الآن</a>
      </div>
    </div>
  );
}

function OrderModal({ product, onClose }) {
  return (
    <div className="modal">
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="modal-box">
        <div className="modal-head"><button onClick={onClose}><X /></button><div><p>طلب سريع</p><h3>{product.ar}</h3><span dir="ltr">{product.name}</span></div></div>
        <img src={productImages[product.imageIndex]} alt={product.name} />
        <div className="modal-sizes"><b>المقاسات المتوفرة</b><div>{product.sizes.map((s) => <span key={s}>{s}</span>)}</div></div>
        <div className="modal-price" dir="ltr"><div><b>{product.price} DT</b><del>{product.old} DT</del></div><ChevronDown /></div>
        <a href={WHATSAPP} className="modal-primary">اطلب عبر WhatsApp</a>
        <a href={`tel:+216${PHONE}`} className="modal-secondary">إتصل الآن {PHONE_DISPLAY}</a>
      </motion.div>
    </div>
  );
}

function HeroBenefit({ icon, title, sub }) { return <div className="hero-benefit">{icon}<b>{title}</b><small>{sub}</small></div>; }
function Benefit({ icon, title, sub }) { return <div className="benefit">{icon}<b>{title}</b><small>{sub}</small></div>; }
function TimeBox({ value, label }) { return <div className="time-box"><b>{value}</b><span>{label}</span></div>; }
function Cert({ code, year }) { return <div className="cert" dir="ltr"><div className="medal">SMI<br/>ISO<br/>{code}</div><div><p>SMI Certifié</p><b>ISO {code}</b><span>{year}</span></div></div>; }
function SmallTrust({ icon, title }) { return <div className="small-item">{icon}<b>{title}</b></div>; }
function Avatar() { return <div className="avatar" />; }
