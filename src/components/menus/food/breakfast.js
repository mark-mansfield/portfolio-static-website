import React from "react"
import Disclaimer from "./foodDiscalimer"
import ScrollToMenu from "../../scrollToTop/scrollToTop"
const breakfast = () => {
  return (
    <div className="venue_menus-list">
      <div className="venue_menus-group">
        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">
            <span className="venue_menus-title-text">Toast w Spreads</span>
          </h3>
          <p className="venue_menus-item-desc font_body">
            w labne, vegemite, homemade jam or ricotta
          </p>
          <div className="venue_menus-items">
            {/* start men item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">rye sourdough</h4>
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
                    <h4 className="font_title">panini</h4>
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
                    <h4 className="font_title">gluten free</h4>
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
                    <h4 className="font_title">sprouted</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $8.5
                  </div>
                </div>
              </div>
            </div>

            {/* end menu item */}
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        />

        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">Plates</h3>
          <div className="venue_menus-items">
            {/* start men item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Corn &amp; zucchini waffle</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    avo salsa, rocket, herbs, jalapeño vinaigrette
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $ 18
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      Basil &amp; feta scrambled eggs
                    </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    w toast, roasted tomato &amp; crispy bacon or smoked salmon
                    or mushrooms
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
                    <h4 className="font_title">
                      Sourdough buttermilk pancakes &amp; maple
                    </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    banana, berries &amp;bacon or seasonal fruit &amp; compote,
                    greek yoghurt or ice cream
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $17
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Free range eggs </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    poached or scrambled w roasted tomatoes &amp; toast
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
                    <h4 className="font_title">Ancient grain porridge</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    w rhubarb compote, apple, hazelnut, brown sugar or honey
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $174
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Organic gluten free granola </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    w roasted pear &amp; rhubarb compote, fresh seasonal fruit,
                    yoghurt &amp; bee pollen
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $16
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      chia, quinoa &amp; coconut bircher{" "}
                    </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    w figs, strawberries, grapes, pepitas, coconut, almonds
                    &amp; sesame seeds
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $18
                  </div>
                </div>
              </div>
            </div>
            {/* end menu item */}
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        />
        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">
            <span className="venue_menus-title-text">Kids</span>
          </h3>
          <div className="venue_menus-items">
            {/* start menu item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Single free range egg </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    fried, scrambled or poached served w toast
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $6
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Avo on turkish</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    w fresh cucumber &amp; tomato
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $6
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">buttermilk pancake or waffle</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-additional_prices">
                    <div className="venue_menus-item-price-item font_body">
                      $6.5
                      <span className="venue_menus-item-price-description">
                        plain w maple on the side
                      </span>
                    </div>
                    <div className="venue_menus-item-price-item font_body">
                      $8.5
                      <span className="venue_menus-item-price-description">
                        + banana and bacon
                      </span>
                    </div>
                    <div className="venue_menus-item-price-item font_body">
                      $8.5
                      <span className="venue_menus-item-price-description">
                        w fresh strawberries
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* end menu item */}
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        />
        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">Sides</h3>
          <div className="venue_menus-items">
            {/* start men item */}

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">
                      extra egg, kasundi, zhoug, piri piri
                    </h4>
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
                    <h4 className="font_title">
                      hash browns, kale, mushrooms, avocado, halloumi, ricotta,
                      labne, olives{" "}
                    </h4>
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
                    <h4 className="font_title">bacon, chorizo</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $4
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">jamon serrano, smoked salmon</h4>
                  </div>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $5
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

export default breakfast
