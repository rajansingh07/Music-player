import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import {
  Play, Pause, SkipForward, SkipBack, Volume2,
  Heart, Music, Home, Search, Library,
  ChevronLeft, ChevronRight, MoreVertical,
  Repeat, Shuffle, Mic2, List, Twitter, Facebook, Instagram
} from 'lucide-react'
import heroImage from './assets/hero.png'
import DailyMix from './page/daily-mix'
import './App.css'
import ChillVibes from './page/ChillVibes'

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const navigate = useNavigate()

  const playlists = [
    { id: 1, name: "Daily Mix", songs: 45, color: "from-red-500 to-orange-500" },
    { id: 2, name: "Chill Vibes", songs: 32, color: "from-blue-500 to-cyan-500" },
    { id: 3, name: "Top Hits", songs: 50, color: "from-green-500 to-teal-500" },
  ]

  const recentAlbums = [
    {
      id: 1,
      title: "Midnight Waves",
      artist: "Luna Ray",
      plays: "2.1M",
      duration: "4 min",
      img: "https://picsum.photos/id/100/300/300" // Ocean
    },
    {
      id: 2,
      title: "Urban Dreams",
      artist: "City Lights",
      plays: "1.8M",
      duration: "3 min",
      img: "https://picsum.photos/id/101/300/300" // City
    },
    {
      id: 3,
      title: "Mountain Echo",
      artist: "The Peaks",
      plays: "954K",
      duration: "5 min",
      img: "https://picsum.photos/id/104/300/300" // Mountain
    },
    {
      id: 4,
      title: "Neon Sunset",
      artist: "Electric Soul",
      plays: "3.2M",
      duration: "4 min",
      img: "https://picsum.photos/id/107/300/300" // Sunset
    },
    {
      id: 5,
      title: "Ocean Breeze",
      artist: "Coastal",
      plays: "1.5M",
      duration: "3 min",
      img: "https://picsum.photos/id/116/300/300" // Beach
    },
    {
      id: 6,
      title: "Starlight",
      artist: "Cosmic",
      plays: "2.7M",
      duration: "4 min",
      img: "https://picsum.photos/id/169/300/300" // Stars
    }
  ]

  return (
    <div className="app">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="sidebar-header">
          {!isSidebarCollapsed && (
            <div className="logo-container">
              <div className="logo-icon">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="logo-text">Melodies</span>
            </div>
          )}
          {isSidebarCollapsed && (
            <div className="logo-container" style={{ width: '100%', justifyContent: 'center' }}>
              <div className="logo-icon">
                <Music className="w-6 h-6 text-white" />
              </div>
            </div>
          )}
          <button
            className="toggle-btn"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="nav-section">
          <div>
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: Search, label: 'Search' },
              { icon: Library, label: 'Library' },
              { icon: Mic2, label: 'Podcasts' }
            ].map((item, index) => (
              <button
                key={index}
                className={`nav-item ${isSidebarCollapsed ? 'justify-center' : ''} ${item.active ? 'active' : ''}`}
              >
                <item.icon className="nav-icon" />
                {!isSidebarCollapsed && <span>{item.label}</span>}
              </button>
            ))}
          </div>

          {!isSidebarCollapsed && (
            <>
              <div style={{ marginTop: 40 }}>
                <div className="section-title">
                  <h2>Your Playlists</h2>
                  <button className="view-all">View all</button>
                </div>
                <div>
                  {playlists.map((playlist) => (
                    <button
                      key={playlist.id}
                      className="playlist-item"
                      onClick={() => {
                        if (playlist.name === "Daily Mix") navigate('/daily-mix')
                        if (playlist.name === "Chill Vibes") navigate('/chill-vibes')
                      }}
                    >
                      <div className={`playlist-icon bg-gradient-to-br ${playlist.color}`}>
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <div className="playlist-info">
                        <p className="playlist-name">{playlist.name}</p>
                        <p className="playlist-songs">{playlist.songs} songs</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 40 }}>
                <div className="section-title">
                  <h2>Friends Activity</h2>
                </div>
                <div style={{ padding: '0 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500"></div>
                    <div>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>Emma listened to</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Blinding Lights</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                    <div>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>James added</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>24 new songs</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>

        {!isSidebarCollapsed && (
          <div className="now-playing">
            <div className="now-playing-content">
              <div style={{ position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop"
                  alt="Now playing"
                  className="now-playing-img"
                />
                <div className="now-playing-indicator"></div>
              </div>
              <div className="now-playing-info">
                <p className="now-playing-title">Bohemian Rhapsody</p>
                <p className="now-playing-artist">Queen</p>
              </div>
              <button className="icon-btn" style={{ width: 36, height: 36 }}>
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <div className="header-content">
            <div className="nav-controls">
              <button className="nav-btn">
                <ChevronLeft size={20} />
              </button>
              <button className="nav-btn">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="auth-buttons">
              <button className="signup-btn">Sign up</button>
              <button className="login-btn">Log in</button>
            </div>
          </div>
        </div>

        <div className="content-area">
          {/* Featured Section */}
          <div className="featured-card">
            <div className="featured-bg"></div>
            <div className="featured-content">
              <div className="featured-inner">
                <img
                  src={heroImage}
                  alt="Featured"
                  className="featured-image"
                />
                <div className="featured-text">
                  <h3>FEATURED PLAYLIST</h3>
                  <h1>Daily Mix</h1>
                  <p className="featured-description">
                    Your perfect soundtrack for today. Updated daily.
                  </p>
                  <div className="action-buttons">
                    <button
                      className="play-btn"
                      onClick={() => navigate('/daily-mix')}
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Play
                    </button>
                    <button className="icon-btn">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="icon-btn">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Albums */}
          <section style={{ marginTop: 60 }}>
            <div className="section-header">
              <h2>Popular albums</h2>
              <button className="see-all">See all</button>
            </div>
            <div className="album-grid">
              {recentAlbums.map((album) => (
                <div key={album.id} className="album-card">
                  <div className="album-image-container">
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(145deg, rgba(124,58,237,0.3), rgba(168,85,247,0.3))`
                    }}></div>
                    <div className="play-overlay">
                      <button className="play-overlay-btn">
                        <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="album-title">{album.title}</p>
                    <p className="album-artist">{album.artist}</p>
                    <p className="album-plays">{album.plays} plays</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recently Played */}
          <section>
            <div className="section-header">
              <h2>Recently played</h2>
              <button className="see-all">See all</button>
            </div>
            <div className="recent-played">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="track-item">
                  <div className="track-info">
                    <span className="track-number">{index + 1}</span>
                    <div className="track-image"></div>
                    <div className="track-details">
                      <h4>Midnight Waves</h4>
                      <p>Luna Ray</p>
                    </div>
                  </div>
                  <div className="track-meta">
                    <span className="track-duration">3:45</span>
                    <button className="track-like">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <div className="copyright">© 2026 Melodies</div>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
            <div className="social-links">
              <button className="social-btn">
                <Twitter size={16} />
              </button>
              <button className="social-btn">
                <Facebook size={16} />
              </button>
              <button className="social-btn">
                <Instagram size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Player Bar */}
      <div className="player-bar">
        <div className="player-content">
          <div className="now-playing-small">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=56&h=56&fit=crop"
              alt="Now playing"
              className="now-playing-small-img"
            />
            <div className="now-playing-small-info">
              <h4>Bohemian Rhapsody</h4>
              <p>Queen</p>
            </div>
            <button className="control-btn">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          <div className="player-controls">
            <div className="control-buttons">
              <button className="control-btn">
                <Shuffle size={18} />
              </button>
              <button className="control-btn">
                <SkipBack size={20} />
              </button>
              <button
                className="play-pause-btn"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </button>
              <button className="control-btn">
                <SkipForward size={20} />
              </button>
              <button className="control-btn">
                <Repeat size={18} />
              </button>
            </div>

            <div className="progress-container">
              <span className="progress-time">1:23</span>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-time">5:55</span>
            </div>
          </div>

          <div className="volume-controls">
            <button className="volume-btn">
              <List size={18} />
            </button>
            <button className="volume-btn">
              <Mic2 size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Volume2 size={18} className="text-white/60" />
              <div className="volume-slider">
                <div className="volume-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daily-mix" element={<DailyMix />} />
        <Route path="/chill-vibes" element={<ChillVibes />} />
      </Routes>
    </Router>
  )
}

export default App