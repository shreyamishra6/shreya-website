import { useState } from 'react'
import './Interface.css'

type Destination = 'books' | 'movies' | 'shows' | 'music'

type InterfaceProps = {
  onEnter: (destination: Destination) => void
}

type PhoneApp = 'messages' | 'music' | 'movies' | 'books' | 'shows' | null

export default function Interface({ onEnter }: InterfaceProps) {
  const [phoneOpen, setPhoneOpen] = useState(false)
  const [phoneApp, setPhoneApp] = useState<PhoneApp>(null)
  const [secretOpen, setSecretOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [visitorCount] = useState('008421')

  const openPhoneApp = (app: PhoneApp) => {
    if (app === 'music' || app === 'movies' || app === 'books' || app === 'shows') {
      setPhoneOpen(false)
      setPhoneApp(null)
      onEnter(app)
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
        <span>PERSONAL ARCHIVE ✧</span>
        <span><span>CHRONICALLY ONLINE ✳ EST. 2006</span></span>
        <a href="/work">PROFESSIONAL PROFILE ↗</a>
      </header>

      <main className="gyaru-main">

        {/* MASTHEAD */}

        <div className="gyaru-masthead">
          <div className="masthead-side">
            <span>THE GIRL</span>
            <span>BEHIND</span>
            <span>THE SCREEN</span>
          </div>

          <div className="masthead-center">
            <div className="masthead-kicker">
              ★ THE PERSONAL UNIVERSE OF ★
            </div>

            <h1>SHREYA<span>♡</span></h1>

            <div className="masthead-subtitle">
              A LITTLE GLAMOUR. A LITTLE CHAOS. A LOT OF INTERNET.
            </div>
          </div>

          <div className="masthead-side right">
            <span>VOL. 001</span>
            <span>ISSUE 2004</span>
            <span>WORLDWIDE WEB</span>
          </div>
        </div>

        {/* MARQUEE */}

        <div className="gyaru-marquee">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>
                ★ WELCOME TO MY WORLD ♡ STAY A LITTLE WHILE ★
                &nbsp;&nbsp; GOOD TASTE NEVER GOES OUT OF STYLE
                &nbsp;&nbsp; ✳ INTERNET GIRL FOREVER ✳
                &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* COLLAGE */}

        <section className="gyaru-collage">

          {/* PROFILE */}

          <article className="gyaru-profile">
            <div className="profile-label">01 — THE GIRL</div>

            <div className="profile-sticker">
              <span className="sticker-star">✧</span>
              <span className="sticker-letter">S</span>
              <span className="sticker-heart">♡</span>
            </div>

            <h2>ME, MYSELF<br /><i>& EVERYTHING.</i></h2>

            <p>
              Computer science student. Romantic.
              Collector of beautiful distractions.
              Frequently somewhere between ambition
              and a daydream.
            </p>

            <div className="profile-bottom">
              <span>STATUS: ONLINE</span>
              <span>♡ 001</span>
            </div>
          </article>

          {/* MUSIC PLAYER */}

          <article className="gyaru-player">
            <div className="section-label">02 — SOUNDTRACK OF MY LIFE</div>

            <div className={`cd-disc ${playing ? 'disc-playing' : ''}`}>
              <div className="cd-center">
                <span>SHREYA</span>
                <small>MY MIX</small>
              </div>
            </div>

            <div className="player-info">
              <span>PERSONAL MIXTAPE / SIDE A</span>
              <h2>currently<br />in rotation.</h2>

              <button
                className="player-control"
                onClick={() => setPlaying(!playing)}
              >
                {playing ? 'Ⅱ PAUSE' : '▶ PLAY'}
              </button>

              <button
                className="text-link"
                onClick={() => onEnter('music')}
              >
                EXPLORE MY MUSIC ↗
              </button>
            </div>

            <span className="player-serial">CD-R 004 / 2004</span>
          </article>

          {/* FLIP PHONE */}

          <article className="gyaru-phone">
            <div className="section-label">03 — MY LITTLE DEVICE</div>

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
              aria-label="Open Shreya's phone"
            >
              <div className="phone-antenna" />

              <div className="phone-screen">
                <span>SHREYA MOBILE</span>
                <strong>♡ 04:04 ♡</strong>
                <small>3 NEW NOTIFICATIONS</small>
              </div>

              <div className="phone-hinge" />

              <div className="phone-keypad">
                <span>✳</span><span>1</span><span>2</span>
                <span>3</span><span>4</span><span>5</span>
              </div>

              <span className="phone-brand">SHREYA ♡</span>
            </button>

            <span className="phone-caption">
              TAP TO OPEN YOUR PHONE
            </span>
          </article>

          {/* CINEMA */}

          <article className="gyaru-cinema">
            <div className="section-label">04 — AFTER DARK</div>

            <div className="cinema-ticket">
              <div className="ticket-left">
                <span>ADMIT ONE</span>
                <h2>THE<br /><i>SCREENING</i><br />ROOM</h2>
                <small>NO. 0001 — FOREVER FILMS</small>
              </div>

              <div className="ticket-right">
                <span>▶</span>
                <strong>FILM<br />CLUB</strong>
                <small>EST. 2004</small>
              </div>
            </div>

            <button
              className="cinema-link"
              onClick={() => onEnter('movies')}
            >
              ENTER THE CINEMA ↗
            </button>
          </article>

          {/* BOOKS */}

          <article className="gyaru-books">
            <div className="section-label">05 — THE BOOKSHELF</div>

            <div className="books-display">
              <span className="book book-one">THE<br />WORLD</span>
              <span className="book book-two">LITTLE<br />WOMEN</span>
              <span className="book book-three">NOTES<br />ON LIFE</span>
              <span className="book book-four">VOL. IV</span>
            </div>

            <div className="books-caption">
              <h2>READING<br /><i>BETWEEN LINES.</i></h2>
              <button onClick={() => onEnter('books')}>
                OPEN LIBRARY ↗
              </button>
            </div>
          </article>

          {/* TELEVISION */}
<article className="gyaru-watchlist">
  <div className="section-label">06 — TELEVISION DEPARTMENT</div>

  <div className="tv-heading">
    <span>SHREYA BROADCASTING CO.</span>
    <span className="tv-live"><i /> ON AIR</span>
  </div>

  <a
    href="https://www.serializd.com/user/shreyamishra/profile"
    target="_blank"
    rel="noreferrer"
    className="mini-tv-link"
    aria-label="Visit television archive"
  >
    <div className="mini-tv">
      <div className="tv-screen">
        <div className="tv-scanlines" />
        <span className="tv-channel">CH. 06</span>
        <div className="tv-screen-content">
          <span>NOW SHOWING</span>
          <strong>THE<br />LIVING<br /><i>PICTURE.</i></strong>
          <small>A COLLECTION OF SCREEN MEMORIES</small>
        </div>
        <span className="tv-screen-time">04:04</span>
      </div>

      <div className="tv-controls">
        <span className="tv-brand">SHREYA™</span>
        <div className="tv-knobs"><i /><i /></div>
        <div className="tv-speaker">
          {Array.from({ length: 5 }).map((_, i) => <i key={i} />)}
        </div>
      </div>
    </div>
  </a>

  <div className="tv-bottom">
    <div>
      <span>TONIGHT'S PROGRAMMING</span>
      <strong>FILMS, FICTION & FIXATIONS</strong>
    </div>
    <a
      href="https://www.serializd.com/user/shreyamishra/profile"
      target="_blank"
      rel="noreferrer"
    >
      ENTER ↗
    </a>
  </div>
</article>

          {/* EDITORIAL */}

          <article className="gyaru-editorial">
            <span className="editorial-number">07</span>

            <div className="editorial-copy">
              <span>THE INTERNET GIRL EDITION</span>
              <h2>NOT JUST<br />ANOTHER<br /><i>WEBSITE.</i></h2>
              <p>PERSONAL TASTE IS A FORM OF ART.</p>
            </div>

            <div className="editorial-decoration">
              <span>★</span>
              <span>♡</span>
              <span>✧</span>
            </div>
          </article>

        </section>

        {/* FOOTER */}

        <footer className="gyaru-footer">
          <div>
            <span>YOU ARE VISITOR NO.</span>
            <strong>{visitorCount}</strong>
          </div>

          <span>MADE WITH LOVE, LATE NIGHTS & TOO MANY OPEN TABS.</span>

          <button onClick={() => setSecretOpen(!secretOpen)}>
            {secretOpen ? 'YOU FOUND THE SECRET ♡' : 'A LITTLE SECRET ✧'}
          </button>
        </footer>

        {secretOpen && (
          <div className="secret-message">
            <span>♡</span>
            <p>There is always more than meets the eye.</p>
            <small>THANK YOU FOR EXPLORING.</small>
          </div>
        )}

        {/* PHONE INTERFACE */}

        {phoneOpen && (
          <div
            className="phone-overlay"
            onClick={(event) => {
              if (event.target === event.currentTarget) closePhone()
            }}
          >
            <div className="phone-device">

              <div className="phone-device-top">
                <span>SHREYA MOBILE ✧</span>
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
                      <span>FRIDAY, FOREVER</span>
                      <h2>hello,<br />beautiful.</h2>
                      <p>Welcome back to my little world.</p>
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
                        <small>cinema</small>
                      </button>

                      <button onClick={() => openPhoneApp('books')}>
                        <span className="app-icon cream">✧</span>
                        <small>library</small>
                      </button>

                      <button onClick={() => openPhoneApp('shows')}>
                        <span className="app-icon blue">▣</span>
                        <small>television</small>
                      </button>

                      <button onClick={() => setSecretOpen(true)}>
                        <span className="app-icon lavender">♡</span>
                        <small>secret</small>
                      </button>
                    </div>

                    <div className="phone-home-footer">
                      <span>♡ ALWAYS ONLINE ♡</span>
                    </div>
                  </>
                )}

                {phoneApp === 'messages' && (
                  <div className="phone-messages">
                    <div className="phone-screen-heading">
                      <button onClick={() => setPhoneApp(null)}>← BACK</button>
                      <span>INBOX / 03</span>
                    </div>

                    <h2>messages.</h2>

                    <div className="message-bubble received">
                      hey! you made it here ♡
                    </div>

                    <div className="message-bubble sent">
                      obviously. i know my way around.
                    </div>

                    <div className="message-bubble received">
                      stay a little while?
                    </div>

                    <p className="message-note">
                      END OF CONVERSATION ✧
                    </p>
                  </div>
                )}

              </div>

              <div className="phone-device-bottom">
                <button onClick={() => setPhoneApp(null)}>
                  HOME
                </button>
                <span>SHREYA™</span>
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