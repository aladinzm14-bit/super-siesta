import './styles.css'

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <div>
          <span className="badge">Élu produit de l’année</span>

          <h1>Super Siesta</h1>

          <p className="subtitle">
            Vente des matelas orthopédiques et ortho-médicaux
          </p>

          <a
            className="btn"
           "href="https://wa.me/21642152160"
          >
            Commander Maintenant
          </a>
        </div>

        <div className="promo">
          <p>Promo jusqu’à</p>
          <h2>-50%</h2>
        </div>
      </header>

      <section className="products">
        <div className="card">
          <img src="/product_0.png" alt="" />
          <h3>Relax+ 13 étoiles</h3>
          <p>Garantie 10 ans</p>
          <button>Acheter</button>
        </div>

        <div className="card">
          <img src="/product_1.png" alt="" />
          <h3>Venise+ Orthopédique</h3>
          <p>Garantie 5 ans</p>
          <button>Acheter</button>
        </div>

        <div className="card">
          <img src="/product_2.png" alt="" />
          <h3>Soft+ 7 étoiles</h3>
          <p>Garantie 3 ans</p>
          <button>Acheter</button>
        </div>
      </section>
    </div>
  )