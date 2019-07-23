import React from "react"
import { TweenMax } from "gsap/all"
import { Transition } from "react-transition-group"
// import "../../../styles/menus.css"
class Drinks extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      general: true,
      wine_by_glass: false,
      wine_by_bottle: false,
      digestifs: false,
    }
  }

  clearComponents(ref) {
    this.setState({
      general: false,
      wine_by_glass: false,
      wine_by_bottle: false,
      digestifs: false,
    })
    this.toggleComponent(ref)
  }

  toggleComponent(ref) {
    if (ref === "general") {
      this.setState({ general: !this.state.general })
    }
    if (ref === "wine_by_glass") {
      this.setState({ wine_by_glass: !this.state.wine_by_glass })
    }
    if (ref === "wine_by_bottle") {
      this.setState({ wine_by_bottle: !this.state.wine_by_bottle })
    }

    if (ref === "digestifs") {
      this.setState({ digestifs: !this.state.digestifs })
    }
  }

  render() {
    //   state prop refs
    const { general } = this.state
    const { wine_by_glass } = this.state
    const { wine_by_bottle } = this.state
    const { digestifs } = this.state

    // parent is the controller
    // menu is divided up into Transition components to enable css transitions and GSAP alpha annimations
    // we toggle child state to load specific child component

    // parent
    return (
      <div
        className="minViewPortHeight main-column-width"
        role="navigation"
        aria-labelledby="drinks_navigation"
      >
        <div id="drinks_navigation" role="menu">
          {/* drinks menu nav */}
          <div className="spacer">
            <h1>Drinks</h1>
            <sub>Try &amp; discover</sub>
            <div className="menu-wrap">
              <div className="menu-nav-bar" id="drinks-menu">
                <ul role="tablist" aria-controls="menuInfo">
                  <li className="nav-item">
                    <button
                      role="menuitem"
                      onClick={this.clearComponents.bind(this, "general")}
                      className={
                        general
                          ? "simple-button-lge highlight "
                          : "simple-button-lge"
                      }
                      disabled={general}
                    >
                      cocktails / beers / ciders / hard
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      role="menuitem"
                      onClick={this.clearComponents.bind(this, "wine_by_glass")}
                      className={
                        wine_by_glass
                          ? "simple-button-lge highlight "
                          : "simple-button-lge"
                      }
                      disabled={wine_by_glass}
                    >
                      wine by the glass
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      role="menuitem"
                      onClick={this.clearComponents.bind(
                        this,
                        "wine_by_bottle"
                      )}
                      className={
                        wine_by_bottle
                          ? "simple-button-lge highlight "
                          : "simple-button-lge"
                      }
                      disabled={wine_by_bottle}
                    >
                      wines by the bottle
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      role="menuitem"
                      onClick={this.clearComponents.bind(this, "digestifs")}
                      className={
                        digestifs
                          ? "simple-button-lge highlight "
                          : "simple-button-lge"
                      }
                      disabled={digestifs}
                    >
                      digestifs
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section>
          {/* general drinks */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={general}
            exit={false}
            appear={true}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                autoAlpha: general ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/*  data  */}
            <div id="general" className="transition-card">
              <div className="flex-col menu-heading">
                <h2>Cocktails / Beers / Ciders / Hard</h2>
                <sub>from 6pm</sub>
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>COCKTAILS 17</h3>
                  <p>
                    <strong>kombucha margarita</strong>
                    <br />
                    tequila, cointreau, lime, honey, kombucha
                  </p>
                  <p>
                    <strong>bee’s knees</strong>
                    <br />
                    gin, homemade lemonade, honey, thyme, soda
                  </p>
                  <p>
                    <strong>berry breeze</strong>
                    <br />
                    vodka, mixed berries, lime, ginger beer
                  </p>
                  <p>
                    <strong>espresso martini</strong>
                    <br />
                    vodka, kahlua, coffee
                  </p>
                  <p>
                    <b>passionfruit caprioska</b>
                    <br />
                    vodka, passionfruit, lime &amp; soda
                  </p>
                  <p>
                    <strong>negroni</strong>
                    <br />
                    campari, gin, sweet vermouth, orange zest
                  </p>
                  <p>
                    <strong>aperol spritz</strong>
                    <br />
                    aperol, prosecco, dash of soda
                  </p>
                  <p>
                    <strong>Brown Sugar old fashioned</strong>
                    <br />
                    bourbon, bitters, cherry, soda, citrus
                  </p>
                  <p>
                    <strong>passion arrabbiata</strong>
                    <br />
                    tequila, passionfruit, chilli, lime
                  </p>
                  <h3>SOFT 6</h3>
                  <p>sparkling mineral water</p>
                  <p>lemonade</p>
                  <p>passionfruit soda</p>
                  <p>ginger beer</p>
                  <p>pink grapefruit &amp; rosemary</p>
                  <p>lemon lime bitters</p>
                </div>
                <div className="menu-column-right">
                  <h3>BREWED</h3>
                  <p> cascade premium light, tas 7</p>
                  <p>lord nelson pale ale, nsw 10</p>
                  <p>peroni nastro azzurro, ITA 10</p>

                  <p>balter pilsner, qld 10</p>
                  <p>stone &amp; wood pacific ale, nsw 10</p>
                  <p>bondi xpa, nsw 10</p>

                  <h3>cider</h3>
                  <p>fils de pomme, apple or pear cider,&nbsp; fra 10</p>
                  <h3>HARD</h3>
                  <p>pimm’s 12</p>
                  <p> aperol</p>
                  <p> ricard</p>
                  <p> pernod</p>
                  <p>campari</p>
                  <p>wyborowa vodka</p>
                  <p>bombay sapphire gin</p>
                  <p>hendricks gin</p>
                  <p>jose cuervo especial reposado&nbsp;tequila</p>
                  <p>bacardi superior white rum</p>
                  <p>appleton estate dark rum</p>
                  <p>johnnie walker black label</p>
                  <p>belvedere vodka 14</p>
                </div>
              </div>
            </div>
          </Transition>

          {/* wine_by_glass */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={wine_by_glass}
            exit={false}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                x: wine_by_glass ? 0 : 100,
                autoAlpha: wine_by_glass ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/*  data  */}
            <div className="transition-card">
              <div className="flex-col menu-heading">
                <h2>Wine by the glass</h2>
                <br />
                <br />
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>SPARKLING</h3>
                  <p>
                    <b>prosecco </b>(organic)
                    <br />
                    nv, ponte, treviso, ita 12
                  </p>
                  <h3>WHITE</h3>
                  <p>
                    <b>pinot gris</b>
                    <br />
                    2016 kuku, marlborough, nz 12
                  </p>
                  <p>
                    <strong>sauvignon blanc</strong>
                    <br />
                    2017 scorpius, marlborough , nz 11
                  </p>
                  <p>
                    <strong>chardonnay</strong>
                    <br />
                    2017 howard park, margaret river, wa 13
                  </p>
                </div>

                <div className="menu-column-right">
                  <h3>PINK</h3>
                  <p>
                    <strong>rosé</strong>
                    <br />
                    2017 villa aix, provence, fra 12
                  </p>
                  <h3>RED</h3>
                  <p>
                    <strong>pinot noir</strong>
                    <br />
                    2017 robert dolan, yarra valley, vic 13
                  </p>
                  <p>
                    <strong>granache blend</strong>
                    <br />
                    2014 rag de raim, terra alta, spa 12
                  </p>
                  <p>
                    <strong>cabernet sauvignon</strong>
                    <br />
                    2014 heartland spice trader, langhorne creek, sa 12
                  </p>
                </div>
              </div>
            </div>
          </Transition>

          {/* wine_by_bottle */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={wine_by_bottle}
            exit={false}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                x: wine_by_bottle ? 0 : 100,
                autoAlpha: wine_by_bottle ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/*  data  */}
            <div className="flex-col transition-card">
              <div className="flex-col menu-heading">
                <h2>Wines by the bottle</h2>
                <br />
                <br />
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>Sparkling</h3>
                  <p>
                    <strong>prosecco</strong> (organic)
                    <br />
                    nv, ponte, treviso, ita 48
                  </p>
                  <p>
                    <strong>champagne</strong>
                    <br />
                    nv laurent perrier, champagne brut, fra 110
                  </p>
                  <h3>White</h3>
                  <p>
                    <strong>sauvignon blanc</strong>
                    <br />
                    2017 scorpius, marlborough, nz 38
                  </p>
                  <p>
                    <strong>pinot grigio</strong>
                    <br />
                    2017 velante, venezia, ita 47
                  </p>
                  <p>
                    <strong>pinot gris</strong>
                    <br />
                    2016 kuku, marlborough, nz 42
                  </p>
                  <p>
                    <strong>chardonnay</strong>
                    <br />
                    2017 robert oatley, margaret river, wa 56
                  </p>
                  <p>2016 greystone, waipara valley, nz 100</p>
                  <p>
                    <strong>riesling</strong>
                    <br />
                    2016 good catholic girl, clare valley, sa 55
                  </p>
                  <h3>Rosé</h3>
                  <p>2017 villa aix, provence, fra 56</p>
                </div>
                <div className="menu-column-right">
                  <h3>Red</h3>
                  <br />

                  <p>
                    <strong>Pinot Noir</strong>
                    <br />
                    2017 robert dolan, yarra valley, vic 44
                  </p>
                  <p>2017 bannockburn, central otago, nz 60</p>
                  <p>
                    <strong>tempranillo</strong>
                    <br />
                    2016 piggs peak ‘pressed ham’, hunter valley,&nbsp;nsw 49
                  </p>
                  <p>
                    <strong>chianti</strong>
                    <br />
                    2015 guicciardini, tuscany, ita 55
                  </p>
                  <p>
                    <strong>granache blend</strong>
                    <br />
                    2014 rag de raim, terr alta, spa 41
                  </p>
                  <p>
                    <b>barbera d’alba</b>
                    <br />
                    2015 bricco miaolica, alba, ita 60
                  </p>
                  <p>
                    <strong>malbec</strong>
                    <br />
                    2016 rio mendoza, mendoza, arg 46
                  </p>
                  <p>
                    <strong>grenache, mataro, shiraz</strong>
                    <br />
                    2014 rockford ‘moppa’, barossa, sa 83
                  </p>
                  <p>
                    <strong>syrah</strong>
                    <br />
                    2017 ekleipsis, north canterbury, nsw 90
                  </p>
                  <p>
                    <strong>shiraz </strong>
                    <br />
                    2018 yangarra, mclaren vale, sa 58 (preservative free)
                    <br />
                    2015 rockford ‘basket press’, barossa, sa 150
                  </p>
                  <p>
                    <strong>cabernet sauvignon</strong>
                    <br />
                    2014 heartland ‘spice trader’, langhorne creek, sa 39
                    <br />
                    2015 majella, coonawarra, sa 70
                  </p>
                </div>
              </div>
            </div>
          </Transition>

          {/* digestifs */}
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={digestifs}
            exit={false}
            addEndListener={(node, done) => {
              TweenMax.to(node, 1, {
                x: digestifs ? 0 : 100,
                autoAlpha: digestifs ? 1 : 0,
                onComplete: done,
              })
            }}
          >
            {/*  data  */}
            <div className="flex-col transition-card ">
              <div className="flex-col menu-heading">
                <h2>Digestifs</h2>
                <br />
                <br />
              </div>
              <div className="flex-row">
                <div className="menu-column-left">
                  <h3>
                    <strong>Sticky</strong>
                  </h3>
                  <p>
                    <strong>uroulat</strong>
                    <br />
                    2015 charles hours clos, jurançon, france 12/48
                  </p>
                  <p>
                    <strong>verdelho</strong>
                    <br />
                    2016 piggs peake ‘swines only’, mudgee, nsw 12
                  </p>
                  <h3>Fortified</h3>
                  <p>
                    <strong>muscat</strong>
                    <br />
                    dutschke, barossa, sa 10/35
                  </p>
                  <p>
                    <strong>shiraz</strong>
                    <br />
                    2017 piggs peake ‘suckling pig’, hunter valley, nsw 12/46
                  </p>
                  <p>
                    <strong>pedro ximenex</strong>
                    <br />
                    nv valdespino, jerez, spa 9
                  </p>
                  <p>
                    <strong>grand tawny port</strong>
                    <br />
                    mcwilliam’s, hanwood, nsw 8
                  </p>
                </div>
                <div className="menu-column-right">
                  <h3>Malt &amp; Premium blends</h3>
                  <p>glenmorangie 12</p>
                  <p> talisker 10 y/o</p>
                  <p>johnnie walker black label</p>
                  <p>woodford reserve bourbon</p>
                  <h3>Afters</h3>
                  <p>frangelico 12</p>
                  <p>disaronno&nbsp;amaretto</p>
                  <p>cointreau</p>
                  <p>averna</p>
                  <p>limoncello</p>
                  <p>kahlua</p>
                  <p>ron zacapa centenari</p>
                  <p>antipodes organic espresso liqueur </p>
                </div>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    )
  }
}

export default Drinks
