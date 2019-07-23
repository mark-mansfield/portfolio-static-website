import React from "react"
import Disclaimer from "./foodDiscalimer"

import ScrollToMenu from "../../scrollToTop/scrollToTop"
const brunch = () => {
  return (
    <div className="venue_menus-list min-viewport-height">
      <div className="venue_menus-group">
        <div className="venue_menus-section">
          <h3 className="venue_menus-title font_title">
            <span className="venue_menus-title-text">Brunch - all day</span>
          </h3>
          <div className="venue_menus-items">
            {/* start men item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Veggie black stone</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    English muffin w mushrooms, tomatoes, poached eggs, cheese
                    &amp; hash browns
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
                    <h4 className="font_title">Black stone eggs</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    english muffin w bacon, tomatoes, poached eggs, cheese &amp;
                    hash browns
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
                    <h4 className="font_title">mojo eggs </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    poached eggs w romesco, shaved prosciutto, baby cavolo nero
                    &amp; mojo verde on sourdough
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

        <div className="venue_menus-section">
          <div className="venue_menus-items">
            {/* start men item */}
            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Winter bowl </h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    jap pumpkin, mushroom, asian grene, furikake rice, poached
                    eggs, miso dressing, toast
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
                    <h4 className="font_title">Breakfast platter</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    seasonal vegetables, avocado, quinoa, almond &amp;
                    cauliflower tabouli, hash, eggs (poached or scrambled),
                    fermented cabbage, labne &amp; olives, tahini, zhoug &amp;
                    za’atar toast (vegan available)
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-price-item font_body">
                    $22/40
                  </div>
                </div>
              </div>
            </div>

            <div className="venue_menus-item">
              <div className="venue_menus-item-content">
                <div className="venue_menus-item-info">
                  <div className="venue_menus-item-title">
                    <h4 className="font_title">Moroccan eggs</h4>
                  </div>

                  <p className="venue_menus-item-desc font_body">
                    slow cooked spiced capsicum &amp; tomatoes w poached egg,
                    tahini, zhoug &amp; za’atar toast
                  </p>
                </div>
                <div className="venue_menus-item-price">
                  <div className="venue_menus-item-additional_prices">
                    <div className="venue_menus-item-price-item font_body">
                      $18
                    </div>
                    <div className="venue_menus-item-price-item font_body">
                      $21
                      <span className="venue_menus-item-price-description">
                        w goats cheese 21
                      </span>
                    </div>
                    <div className="venue_menus-item-price-item font_body">
                      $22
                      <span className="venue_menus-item-price-description">
                        w chorizo
                      </span>
                    </div>
                    <div className="venue_menus-item-price-item font_body">
                      $24
                      <span className="venue_menus-item-price-description">
                        w both extras
                      </span>
                    </div>
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

export default brunch
