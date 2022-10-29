import React from "react"

export default function Menu() {
    return (
        <div className="menu">
            <main>
                <section>
                    <h2>Meat Mains</h2>
                        <article className="item">
                            <p className="meat">Thai Mango Chicken</p><p className="price">7.99</p>
                        </article>
                        <article className="item">
                            <p className="meat">Santa Barbara Chicken</p><p className="price">7.99</p>
                        </article>
                        <article className="item">
                            <p className="meat">General Thai Chicken</p><p className="price">7.99</p>
                        </article>
                        <article className="item">
                            <p className="meat">Bangkok Chicken</p><p className="price">7.99</p>
                        </article>
                        <article className="item">
                            <p className="meat">Red Curry Chicken</p><p className="price">7.99</p>
                        </article>
                        <article className="item">
                            <p className="meat">Green Curry Chicken</p><p className="price">7.99</p>
                        </article>
                        <article className="item">
                            <p className="meat">Thai Chill Fish</p><p className="price">7.99</p>
                        </article>
                </section>
                <section>
                    <h2>Veggie</h2>
                        <article className="item">
                            <p className="veggie">Sweet Potato</p><p className="price">5.99</p>
                        </article>
                        <article className="item">
                            <p className="veggie">Eggplant Tofu</p><p className="price"> 5.99 </p>
                            </article>
                        <article className="item">
                            <p className="veggie">Chill Green Bean</p><p className="price"> 5.99 </p>
                        </article>
                        <article className="item">
                            <p className="veggie">Veggie Mix</p><p className="price"> 5.99 </p>
                        </article>
                        <article className="item">
                            <p className="veggie">Spring Roll</p><p className="price"> 1.90 </p>
                        </article>
                </section>
                <section>
                    <h2>Rice or Noodle Mains</h2>
                        <article className="item">
                            <p className="main">Thai Basil Fried Rice</p><p className="price">5.99</p>
                        </article>
                        <article className="item">
                            <p className="main">Pineapple Fried Rice</p><p className="price"> 5.99 </p>
                        </article>
                        <article className="item">
                            <p className="main">Classic Pad Thai(Spicy or Not Spicy)</p><p className="price"> 5.99 </p>
                        </article>
                        <article className="item">
                            <p className="main">White Rice</p><p className="price"> 2.00 </p>
                        </article>
                </section>
                <section>
                    <h2>Drinks</h2>
                        <article className="item">
                            <p className="drink">Apple Juice</p><p className="price">2.69</p>
                        </article>
                        <article className="item">
                            <p className="drink">Orange Juice</p><p className="price"> 2.69 </p>
                        </article>
                        <article className="item">
                            <p className="drink">Iced Tea</p><p className="price"> 2.69 </p>
                        </article>
                        <article className="item">
                            <p className="drink">Pop</p><p className="price"> 1.99 </p>
                        </article>
                </section>
            </main>
    <hr class="bottom-line" />
    <footer>
      <p>
        <a href="https://www.tsawwassenmills.com/" target="_blank">Visit the mall website</a>
      </p>
      <p class="address">5000 CANOE PASS WAY</p>
    </footer>
  </div>
    )
}