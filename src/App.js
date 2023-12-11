import React, { useState } from "react";
import { Monheader } from "./monheader";
import Countdown from "./Countdown"; // Importez le composant Countdown

// fichiers CSS
import "./main.css";
import "./index.css";
import "./App.css";
// importer les images
import Logo from "./images/logo.svg";
import Macdo from "./images/images.jpg";
import Kebab from "./images/kebab.jpg";
import KFC from "./images/kfc.jpeg";
import Sandwich from "./images/sandwich.jpg";
import BurgerBlock from "./burger"; // Corrigez l'importation de BurgerBlock

// Composant App
function App() {
  const [cart, setCart] = useState(0);

  const addToCart = (quantity) => {
    setCart(cart + quantity);
  };

  const removeFromCart = (quantity) => {
    setCart(cart - quantity);
  };

 
  
  // Utilisez la fonction pour générer une valeur aléatoire
  const expirationDate = new Date('2023-12-15T23:59:59').getTime();
  

  return (
    <>
      <Monheader />
      <div className="App">
        <header>
          <div className="container">
            <div className="header">
              <div className="headerlogo">
                <img className="logi" src={Logo} alt="Image du menu" />
              </div>

              <div className="header--address">
                <input type="text" name="" id="" placeholder="*****" />
                <p>to</p>
                <input type="text" name="" id="" placeholder="******" />
              </div>

              <div className="header--buttons">
                <div>
                  <a href="#">Sign In</a>
                  <a href="#">Register</a>
                </div>
                <div className="cart-icon">
                  <div>
                    <iconify-icon
                      icon="ion:cart"
                      width="30"
                      height="30"
                    ></iconify-icon>
                  </div>
                  <div id="cart" className="bubble">
                    {cart}
                  </div>
                </div>
                <div className="header--cart">
                  <svg
                    viewBox="0 0 40 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="shops">
          <div className="container">
            <div className="shops--title">
              <h1>Offres du jour</h1>
            </div>

            <div className="shopsblocks">
              <BurgerBlock
                imagePath={Macdo}
                burgerName="Menu MacDo™"
                price="12,50 €"
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                Countdown expirationDate={expirationDate}/* Passez la date d'expiration comme une prop à BurgerBlock */
              />

                <BurgerBlock
                imagePath={Kebab}
                burgerName="Menu Kebab"
                price="12,50 €"
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                Countdown expirationDate={expirationDate}/* Passez la date d'expiration comme une prop à BurgerBlock */
              />

              <BurgerBlock
                imagePath={KFC}
                burgerName="Menu KFC"
                price="12,50 €"
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                Countdown expirationDate={expirationDate}/* Passez la date d'expiration comme une prop à BurgerBlock */
              />

                <BurgerBlock
                imagePath={Sandwich}
                burgerName="Sandwich MacDo™"
                price="12,50 €"
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                Countdown expirationDate={expirationDate}/* Passez la date d'expiration comme une prop à BurgerBlock */
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;