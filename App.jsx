import './styles.css'

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Super Siesta</h1>

        <p className="subtitle">
          Vente des matelas orthopédiques et ortho-médical
        </p>

        <a className="btn" href="https://wa.me/21642152160">
          Commander Maintenant
        </a>
      </header>

      <section className="products">
        <div className="card">
          <img src="/product_0.png" alt="Relax+" />
          <h2>Relax+ 13 étoiles</h2>
          <p>Garantie 10 ans</p>
        </div>

        <div className="card">
          <img src="/product_1.png" alt="Ortho Medical" />
          <h2>Ortho Médical</h2>
          <p>Confort Premium</p>
        </div>

        <div className="card">
          <img src="/product_2.png" alt="Luxury" />
          <h2>Luxury Sleep</h2>
          <p>Qualité Supérieure</p>
        </div>

        <div className="card">
          <img src="/product_3.png" alt="Classic" />
          <h2>Classic Confort</h2>
          <p>Garantie 5 ans</p>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Livraison Rapide</h3>
          <p>Disponible sur toute la Tunisie</p>
        </div>

        <div className="feature">
          <h3>Paiement à la Livraison</h3>
          <p>Simple et sécurisé</p>
        </div>

        <div className="feature">
          <h3>Qualité Premium</h3>
          <p>Confort et durabilité garantis</p>
        </div>
      </section>

      <footer className="footer">
        <p>Super Siesta Distribution</p>
        <p>42 152 160</p>
      </footer>
    </div>
  )
}