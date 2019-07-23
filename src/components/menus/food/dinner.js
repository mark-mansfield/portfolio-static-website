import React from "react"
import Disclaimer from "./foodDiscalimer"
import ScrollToMenu from "../../scrollToTop/scrollToTop"
const dinner = () => {
  return (
    <div className="venue_menus-list">
      <div className="venue_menus-group">
        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">
            <span className="venue_menus-title-text">Entree</span>
          </h3>
          <div className="venue_menus-items">
            {/* start men item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Roasted cauliflower</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    shawarma spices, almonds, currants, sage brown butter
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $18
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Seared scallops</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    caviar lentils, speck, tarragon, lettuce
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $23
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Roasted figs</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    stracciatella, pistachio, bulgur, balsamic
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $20
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Hand cut steak tartare,</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    wild mushrooms, yolk, potato gaufrette
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $21
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Crispy pork belly</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    boudin noir, parsnip, apple, celery, jus
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $21
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Spanish mackerel tataki</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    corn, cherry tomato, nori crisp, anchoïade
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $21
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">South Australian mussels</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    chilli, tomato, chargrilled sourdough
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $19
                  </div>
                </div>
              </div>
            </div>

            {/* end menu item */}
          </div>
        </div>

        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">
            <span className="venue_menus-title-text">Main</span>
          </h3>
          <div className="venue_menus-items">
            {/* start men item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Chargrilled rib eye</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    shaved mushroom, chive &amp; radish salad choice of: porcini
                    butter, bordelaise sauce, lemon olive oil
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $13/100g
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Lamb rump</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    pistachio salsa verde, chargrilled onion, pumpkin, jus
                  </p>
                </div>
                <div className="venue_menus-item-price-item font_body">$37</div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Green salad</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    cucumber, spinach, peas, broccolini, avo, fennel, celery,
                    pistachio dukkah, tahini, lemon dressing
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $19
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Chargrilled flat iron steak</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    parsnip, watercress, mushroom
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $38
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Charred eggplant</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    crispy furikake rice, green tea dashi, shimeji
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $28
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Squid ink pasta</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    spanner crab, semi-dried tomato, chilli, saffron
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $33
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Fish pie</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    leeks, truffle oil
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $37
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Gold band snapper</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    eggplant, roasted capsicum, okra, basil caper salsa
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $35
                  </div>
                </div>
              </div>
            </div>
            {/* end menu item */}
          </div>
        </div>
      </div>
      <div className="venue_menus-section">
        <h3 className="venue_menus-title font_title">
          <span className="venue_menus-title-text">Sides</span>
        </h3>
        <div className="venue_menus-items">
          {/* start men item */}
          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Pomme purée or crisp herb potatoes
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">
                  $9.5
                </div>
              </div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Wild greens, chilli, confit garlic, pepitas{" "}
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price-item font_body">$12</div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Beetroot, radicchio, pear &amp; walnuts, merlot vinaigrette
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">$12</div>
              </div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Shaved cabbage, red apple, hazelnut, chives
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">$12</div>
              </div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Roasted carrots, baby onions, pistachio, sunflower sprouts
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">$12</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="venue_menus-section">
        <h3 className="venue_menus-title font_title">
          <span className="venue_menus-title-text">Desert</span>
        </h3>
        <div className="venue_menus-items">
          {/* start men item */}
          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Mango sorbet, lime granita, papaya, coconut macaroon
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">$14</div>
              </div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Hazelnut chocolate fondant, salted butterscotch &amp;
                    vanilla ice cream
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price-item font_body">$14</div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Kaffir lime meringue, pineapple ginger sorbet, passion
                    fruit, Thai basil
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">$15</div>
              </div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Affogato, vanilla gelato, frangelico
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">$14</div>
              </div>
            </div>
          </div>

          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">Sorbet or gelato</h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">$14</div>
              </div>
            </div>
          </div>
          <div className="venue_menus-item">
            <div className="venue_menus-item-content">
              <div className="venue_menus-item-info">
                <div className="venue_menus-item-title">
                  <h4 className="font_title">
                    Cheese plate, brown sugar oatcakes, fresh apple
                  </h4>
                </div>
              </div>
              <div className="venue_menus-item-price">
                <div className="venue_menus-item-price-item font_body">
                  $16/24
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end menu item */}
      </div>
      <ScrollToMenu />
      <Disclaimer />
    </div>
  )
}

export default dinner
