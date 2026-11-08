import { useState } from 'react'
import './Interface.css'

type Destination = 'books' | 'movies' | 'shows' | 'music'

type InterfaceProps = {
  onEnter: (destination: Destination) => void
}

type PhoneApp = 'messages' | 'music' | 'movies' | 'books' | 'shows' | null

const INSTAGRAM = 'https://www.instagram.com/shreyapuff/'

const LINKS = {
  music:
    'https://open.spotify.com/user/31wh2b54vj45ci5jml7upp6qsk6u?si=3bd8ee1309184d2d',
  movies: 'https://boxd.it/aQZ2n',
  shows: 'https://www.serializd.com/user/shreyamishra/profile',
  books: 'https://www.goodreads.com/user/show/204937790-shreya-mishra',
}

export default function Interface({}: InterfaceProps) {
  const [phoneOpen, setPhoneOpen] = useState(false)
  const [phoneApp, setPhoneApp] = useState<PhoneApp>(null)
  const [secretOpen, setSecretOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [visitorCount] = useState('008421')

  const openPhoneApp = (app: PhoneApp) => {
    if (
      app === 'music' ||
      app === 'movies' ||
      app === 'books' ||
      app === 'shows'
    ) {
      window.open(LINKS[app], '_blank', 'noopener,noreferrer')
      return
    }

    setPhoneApp(app)
  }

  const closePhone = () => {
    setPhoneOpen(false)
    setPhoneApp(null)
  }

  return (
    <div className="gyaru-site">
      <div className="gyaru-wallpaper" />

      <header className="gyaru-topbar">
        <span>PERSONAL ♡</span>
        <span>somewhere on the world wide web</span>

        <div className="topbar-links">
          <a href="/work">WORK ↗</a>
        </div>
      </header>

      <main className="gyaru-main">
        <div className="gyaru-masthead">
          <div className="masthead-side">
            <span>PERSONAL WEBSITE</span>
            <span>EST. WHATEVER</span>
            <span>MADE WITH LUV</span>
          </div>

          <div className="masthead-center">
            <div className="masthead-kicker">
              ★ hii, you're here ★
            </div>

            <h1>SHREYA<span>♡</span></h1>

            <div className="masthead-subtitle">
              a collection of things i can't shut up about.
            </div>
          </div>

          <div className="masthead-side right">
            <span>ONLINE SOMETIMES</span>
            <span>OPEN 24/7</span>
            <span>XO XO</span>
          </div>
        </div>

        <div className="gyaru-marquee">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>
                ★ NO PARTICULAR ORDER
                &nbsp;&nbsp; ♡ JUST A LITTLE SOMETHING
                &nbsp;&nbsp; ✧ LOOK AROUND
                &nbsp;&nbsp; ☆ STAY A WHILE
                &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        <section className="gyaru-collage">
          <article className="gyaru-profile">
            <div className="profile-label">
              YOUR FRIENDLY INTERNET PERSON
            </div>

            <div className="profile-sticker">
              <span className="sticker-star">✧</span>
              <span className="sticker-letter">S</span>
              <span className="sticker-heart">♡</span>
            </div>

            <div className="personal-id">
              <span className="id-top">PERSONAL ID / 2006?</span>

              <h2>
                SHREYA<br />
                <i>MISHRA.</i>
              </h2>

              <div className="id-details">
                <span>OCCUPATION</span>
                <strong>professional browser</strong>

                <span>KNOWN FOR</span>
                <strong>having 37 tabs open</strong>

                <span>STATUS</span>
                <strong>probably daydreaming</strong>
              </div>

              <div className="id-barcode">
                |||| ||| || |||| |||
              </div>

              <span className="id-stamp">
                VALID<br />FOREVER ♡
              </span>
            </div>

            <p className="profile-aside">
              not a comprehensive biography.
            </p>
          </article>

          <article className="gyaru-player">
            <div className="section-label">
              THE LISTENING ROOM ♪
            </div>

            <div className="music-store">
              <div className="music-store-header">
                <span>NOW SPINNING</span>
                <span>VOL. 01</span>
              </div>

              <div className={`cd-disc ${playing ? 'disc-playing' : ''}`}>
                <div className="cd-center">
                  <span>SHREYA FM</span>
                  <small>SIDE A ♡</small>
                </div>
              </div>

              <div className="music-tracklist">
                <span>THE CURRENT ROTATION</span>
                <div><b>01.</b> songs on repeat</div>
                <div><b>02.</b> for the late nights</div>
                <div><b>03.</b> main character moment</div>
                <div><b>04.</b> one more time</div>
              </div>

              <div className="music-store-controls">
                <button
                  className="player-control"
                  onClick={() => setPlaying(!playing)}
                >
                  {playing ? 'Ⅱ PAUSE' : '▶ PLAY'}
                </button>

                <a
                  className="text-link"
                  href={LINKS.music}
                  target="_blank"
                  rel="noreferrer"
                >
                  LISTEN ON SPOTIFY ↗
                </a>
              </div>
            </div>

            <span className="player-serial">
              PLEASE HANDLE WITH CARE ♡
            </span>
          </article>

          <article className="gyaru-phone">
            <div className="section-label">
              YOU HAVE 3 NEW NOTIFICATIONS
            </div>

            <div className="phone-charms">
              <span>♡</span>
              <span>✧</span>
              <span>★</span>
            </div>

            <button
              className="flip-phone"
              onClick={() => {
                setPhoneOpen(true)
                setPhoneApp(null)
              }}
              aria-label="Open phone"
            >
              <div className="phone-antenna" />

              <div className="phone-screen">
                <span>SHREYA MOBILE</span>
                <strong>♡ 04:04 ♡</strong>
                <small>3 MISSED CALLS</small>
              </div>

              <div className="phone-hinge" />

              <div className="phone-keypad">
                <span>✳</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>

              <span className="phone-brand">CALL ME ♡</span>
            </button>

            <span className="phone-caption">
              you should probably answer.
            </span>
          </article>

          <article className="gyaru-cinema">
            <div className="section-label">
              THE LITTLE CINEMA
            </div>

            <div className="film-lab">
              <div className="film-lab-top">
                <span>NOW DEVELOPING</span>
                <span>35MM / 24 EXP</span>
              </div>

              <div className="film-strip">
                <div className="film-frame frame-one">
                  <span>01</span>
                  <strong>THE<br />PLOT</strong>
                </div>

                <div className="film-frame frame-two">
                  <span>02</span>
                  <strong>THE<br />FEELING</strong>
                </div>

                <div className="film-frame frame-three">
                  <span>03</span>
                  <strong>THE<br />ENDING</strong>
                </div>
              </div>

              <div className="film-caption">
                <div>
                  <span>MY CINEMA DIARY</span>
                  <h2>
                    things i've<br />
                    <i>seen lately.</i>
                  </h2>
                </div>

                <span className="film-rating">★★★★★</span>
              </div>

              <a
                className="cinema-link"
                href={LINKS.movies}
                target="_blank"
                rel="noreferrer"
              >
                FIND ME ON LETTERBOXD ↗
              </a>
            </div>
          </article>

          <article className="gyaru-books">
            <div className="section-label">
              A VERY SMALL BOOKSHOP
            </div>

            <div className="bookshop-window">
              <div className="bookshop-sign">
                <span>OPEN</span>
                <strong>THE BOOK NOOK</strong>
                <small>EST. IN MY HEAD</small>
              </div>

              <div className="books-display">
                <span className="book book-one">
                  THE<br />WORLD
                </span>

                <span className="book book-two">
                  LITTLE<br />WOMEN
                </span>

                <span className="book book-three">
                  NOTES<br />ON LIFE
                </span>

                <span className="book book-four">
                  VOL. IV
                </span>
              </div>

              <div className="bookshop-note">
                <span>FROM THE MARGINS</span>

                <p>
                  underlined sentences, dog-eared pages and books
                  that stay with you.
                </p>

                <small>please return my books ♡</small>
              </div>
            </div>

            <div className="books-caption">
              <h2>
                just one<br />
                <i>more chapter.</i>
              </h2>

              <a
                href={LINKS.books}
                target="_blank"
                rel="noreferrer"
              >
                COME BROWSE ↗
              </a>
            </div>
          </article>

          <article className="gyaru-watchlist">
            <div className="section-label">
              THE NEVER-ENDING WATCHLIST
            </div>

            <div className="tv-heading">
              <span>WHAT'S ON?</span>

              <span className="tv-live">
                <i /> CURRENTLY WATCHING
              </span>
            </div>

            <a
              href={LINKS.shows}
              target="_blank"
              rel="noreferrer"
              className="mini-tv-link"
              aria-label="Visit television archive"
            >
              <div className="mini-tv">
                <div className="tv-screen">
                  <div className="tv-scanlines" />

                  <span className="tv-channel">
                    CH. 06
                  </span>

                  <div className="tv-screen-content">
                    <span>UP NEXT</span>

                    <strong>
                      ONE<br />
                      MORE<br />
                      <i>EPISODE.</i>
                    </strong>

                    <small>you know how it goes</small>
                  </div>

                  <span className="tv-screen-time">
                    04:04
                  </span>
                </div>

                <div className="tv-controls">
                  <span className="tv-brand">
                    MODEL 06™
                  </span>

                  <div className="tv-knobs">
                    <i />
                    <i />
                  </div>

                  <div className="tv-speaker">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </a>

            <div className="tv-bottom">
              <div>
                <span>THE WATCHLIST</span>
                <strong>that's a lot of screen time</strong>
              </div>

              <a
                href={LINKS.shows}
                target="_blank"
                rel="noreferrer"
              >
                MY SERIALIZD ↗
              </a>
            </div>
          </article>

          <article className="gyaru-editorial">
            <div className="scrapbook-heading">
              <span className="editorial-number">
                A LITTLE BIT OF EVERYTHING ♡
              </span>

              <div>
                <span>
                  CAMERA ROLL / NOTES APP / INTERNET FINDS
                </span>

                <h2>
                  THE SCRAP<i>PILE.</i>
                </h2>

                <p>
                  bits and pieces. no particular order.
                </p>
              </div>

              <span className="scrapbook-star">
                ✳
              </span>
            </div>

            <div className="scrapbook-board">
              <div className="scrap-note scrap-note-one">
                <span>THINGS TO REMEMBER</span>

                <strong>
                  romanticise<br />
                  the little things.
                </strong>

                <small>♡ xoxo</small>
              </div>

              <div className="scrap-photo scrap-photo-one">
                <div className="scrap-photo-art art-one">
                  <span>♡</span>
                </div>

                <small>something pretty</small>
              </div>

              <div className="scrap-photo scrap-photo-two">
                <div className="scrap-photo-art art-two">
                  <span>✧</span>
                </div>

                <small>camera roll material</small>
              </div>

              <a
                className="scrap-instagram"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                <span className="instagram-topline">
                  A LITTLE ELSEWHERE ↗
                </span>

                <span className="instagram-icon">
                  ◎
                </span>

                <strong>@shreyapuff</strong>

                <small>find me on the internet</small>

                <span className="instagram-arrow">
                  ↗
                </span>
              </a>

              <div className="scrap-note scrap-note-two">
                <span>OPEN TABS</span>

                <strong>
                  music<br />
                  internet<br />
                  more internet.
                </strong>
              </div>

              <div className="scrap-mini">
                <span>VERY IMPORTANT</span>
                <strong>do not disturb ☆</strong>
              </div>

              <div className="scrap-sticker scrap-sticker-one">
                literally me
              </div>

              <div className="scrap-sticker scrap-sticker-two">
                ౨ৎ brb
              </div>
            </div>

            <div className="scrapbook-bottom">
              <span>END OF THE CURRENT BRAIN DUMP</span>
              <span>MORE LATER ♡</span>
            </div>
          </article>
        </section>

        <section className="gyaru-lower">
          <div className="lower-heading">
            <span>
              ✳ THINGS THAT DIDN'T FIT ANYWHERE ✳
            </span>

            <span>but deserved a spot</span>
          </div>

          <div className="lower-grid">
            <div className="lower-note">
              <span>FROM THE NOTES APP</span>

              <h3>little observation #17</h3>

              <p>
                there is no such thing as listening to a song just once.
              </p>

              <small>saved at 2:17 am</small>
            </div>

            <div className="lower-note lower-pink">
              <span>INTERNET FINDS</span>

              <h3>the rabbit hole.</h3>

              <p>
                one link leads to another and suddenly it's been three hours.
              </p>

              <small>this happens a lot</small>
            </div>
          </div>
        </section>

        <footer className="gyaru-footer">
          <div>
            <span>VISITOR NO.</span>
            <strong>{visitorCount}</strong>
          </div>

          <span>thanks for hanging out ♡</span>

          <button onClick={() => setSecretOpen(!secretOpen)}>
            {secretOpen ? 'CLOSE ♡' : 'ONE MORE THING ✧'}
          </button>
        </footer>

        {secretOpen && (
          <div className="secret-message">
            <span>♡</span>
            <p>you found the extra bit. nice.</p>
            <small>SEE YOU AROUND ☆</small>
          </div>
        )}

        {phoneOpen && (
          <div
            className="phone-overlay"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closePhone()
              }
            }}
          >
            <div className="phone-device">
              <div className="phone-device-top">
                <span>SHREYA'S PHONE ♡</span>
                <button onClick={closePhone}>×</button>
              </div>

              <div className="phone-device-screen">
                {phoneApp === null && (
                  <>
                    <div className="phone-status">
                      <span>04:04 PM</span>
                      <span>▮▮▮ ♡</span>
                    </div>

                    <div className="phone-welcome">
                      <span>HIII.</span>

                      <h2>
                        WHAT'S<br />UP?
                      </h2>

                      <p>pick an app, any app.</p>
                    </div>

                    <div className="phone-app-grid">
                      <button onClick={() => openPhoneApp('messages')}>
                        <span className="app-icon pink">✉</span>
                        <small>messages</small>
                      </button>

                      <button onClick={() => openPhoneApp('music')}>
                        <span className="app-icon silver">♫</span>
                        <small>music</small>
                      </button>

                      <button onClick={() => openPhoneApp('movies')}>
                        <span className="app-icon cherry">▶</span>
                        <small>films</small>
                      </button>

                      <button onClick={() => openPhoneApp('books')}>
                        <span className="app-icon cream">✧</span>
                        <small>books</small>
                      </button>

                      <button onClick={() => openPhoneApp('shows')}>
                        <span className="app-icon blue">▣</span>
                        <small>shows</small>
                      </button>

                      <button onClick={() => setSecretOpen(true)}>
                        <span className="app-icon lavender">♡</span>
                        <small>other</small>
                      </button>
                    </div>

                    <div className="phone-home-footer">
                      <span>ALL GOOD HERE ♡</span>
                    </div>
                  </>
                )}

                {phoneApp === 'messages' && (
                  <div className="phone-messages">
                    <div className="phone-screen-heading">
                      <button onClick={() => setPhoneApp(null)}>
                        ← BACK
                      </button>

                      <span>INBOX / 03</span>
                    </div>

                    <h2>messages.</h2>

                    <div className="message-bubble received">
                      hey, you're here.
                    </div>

                    <div className="message-bubble sent">
                      obviously.
                    </div>

                    <div className="message-bubble received">
                      stay a while?
                    </div>

                    <p className="message-note">
                      SEEN ♡
                    </p>
                  </div>
                )}
              </div>

              <div className="phone-device-bottom">
                <button onClick={() => setPhoneApp(null)}>
                  HOME
                </button>

                <span>XOXO</span>

                <button onClick={closePhone}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}