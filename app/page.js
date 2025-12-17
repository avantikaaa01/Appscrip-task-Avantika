import ProductList from "../components/product-list/product-list";

export default function Page() {
  return (
    <main className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">LOGO</div>

          <nav className="nav">
            <a>SHOP</a>
            <a>SKILLS</a>
            <a>STORIES</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
          </nav>

          <div className="icons">
            🔍 🤍 🛒
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere.</p>
      </section>

      {/* FILTER BAR */}
      <section className="filter-bar">
        <span>SHOW FILTER</span>
        <span>RECOMMENDED ⌄</span>
      </section>

      {/* MAIN CONTENT */}
      <section className="layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <ul>
            <li>CUSTOMIZABLE</li>
            <li>IDEAL FOR</li>
            <li>OCCASION</li>
            <li>WORK</li>
            <li>FABRIC</li>
            <li>SEGMENT</li>
          </ul>
        </aside>

        {/* PRODUCTS */}
        <section className="products">
          <ProductList />
        </section>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Product Store. All rights reserved.</p>
      </footer>
    </main>
  );
}
