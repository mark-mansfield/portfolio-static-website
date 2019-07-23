import React from "react"
import Disclaimer from "./foodDiscalimer"
import ScrollToMenu from "../../scrollToTop/scrollToTop"
const lunch = () => {
  return (
    <div className="venue_menus-list">
      <div className="venue_menus-group">
        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">
            <span className="venue_menus-title-text">Lunch - from 12pm</span>
          </h3>
          <div className="venue_menus-items">
            {/* start men item */}
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

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Spaghettini</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    roasted tomato &amp; basil sugo, buffalo mozzarella
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $22
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Angel hair pasta </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    crab, semi-dried tomato, chilli &amp; saffron
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
                    <h4 className="font_title">Snapper</h4>
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

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      Flat iron steak - chargrilled
                    </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    wild greens, slow roast tomatoes, crispy potatoes, porcini
                    butter
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
                    <h4 className="font_title">Fish pie</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    leek, truffle oil &amp; mash
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
                    <h4 className="font_title">Steak sandwich - grilled</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    beetroot, spanish onion, aioli, kasundi, rocket &amp;
                    homemade pickles
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
                    <h4 className="font_title">Chicken Sandwich - grilled</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    avocado, aioli, homemade tomato relish, rocket &amp;
                    homemade pickles
                  </p>
                </div>
                <div className="venue_menus-item-price-item font_body">$19</div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Chicken burger</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    chilli mayo, cos lettuce, crispy potatoes &amp; homemade
                    pickles
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-additional_prices">
                    <div className="venue_menus-item-price-item font_body">
                      $19
                    </div>
                    <div className="venue_menus-item-price-item font_body">
                      $21
                      <span className="venue_menus-item-price-description">
                        + cheese and bacon cheese
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end menu item */}
          </div>
        </div>

        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">
            <span className="venue_menus-title-text">Salads</span>
          </h3>
          <div className="venue_menus-items">
            {/* start men item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Halloumi salad </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    beetroot, farro, fresh pear, witlof, spinach, spiced
                    walnuts, merlot dressing
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
                    <h4 className="font_title">Brown sugar salad</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    beetroot, crispy polenta, pumpkin, lentils, goats cheese,
                    rocket, salsa &amp; balsamic, dressing
                  </p>
                </div>
                <div className="venue_menus-item-price-item font_body">$18</div>
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
                    <h4 className="font_title">
                      Brunch tabouli with grilled za’atar lemon chicken{" "}
                    </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    quinoa, cauliflower, raw veggies, almonds, heaps of herbs,
                    preserved lemon, pomegranate &amp; tahini dressing
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $21.5
                  </div>
                </div>
              </div>
            </div>
            {/* end menu item */}
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
                    <h4 className="font_title">Warm brownies</h4>
                  </div>
                  <p className="venue_menus-item-desc font_body">
                    brandy cherries &amp; vanilla bean gelato
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $10
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Hazelnut chocolate fondant</h4>
                  </div>
                  <p className="venue_menus-item-desc font_body">
                    salted butterscotch &amp; vanilla ice cream
                  </p>
                </div>
                <div className="venue_menus-item-price-item font_body">$16</div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Affogato</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    vanilla gelato, frangelico
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $14
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Kaffir lime meringue</h4>
                  </div>
                  <p className="venue_menus-item-desc font_body">
                    pineapple ginger sorbet, passion fruit, Thai basil
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $14
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">halloumi</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $3.5
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      grilled chicken w za’atar + lemon{" "}
                    </h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $5
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      flat iron steak, grilled &amp; sliced{" "}
                    </h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $10
                  </div>
                </div>
              </div>
            </div>
            {/* end menu item */}
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
                    <h4 className="font_title">Bread, olives, labne </h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $7.5
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Crispy herb potatoes</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price-item font_body">
                  $7.5
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Mixed leaf salad</h4>
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
                    <h4 className="font_title">poached egg, toast</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $2
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">halloumi</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $3.5
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      grilled chicken w za’atar + lemon{" "}
                    </h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $5
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      flat iron steak, grilled &amp; sliced{" "}
                    </h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $10
                  </div>
                </div>
              </div>
            </div>
            {/* end menu item */}
          </div>
        </div>
      </div>
      <ScrollToMenu />

      <Disclaimer />
    </div>
  )
}

export default lunch
