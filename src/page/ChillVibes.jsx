import React, { useState } from 'react'
import { 
  Play, Pause, SkipForward, SkipBack, Volume2, 
  Heart, Music, Home, Search, Library, 
  ChevronLeft, ChevronRight, MoreVertical,
  Repeat, Shuffle, Mic2, List, Clock, 
  User, Calendar, Download, Share2,
  ChevronDown, Cloud, Wind, Coffee, Moon,
  Sunset, Umbrella, Droplets, Sparkles
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './ChillVibes.css'

const ChillVibes = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const [isLiked, setIsLiked] = useState({})

  const navigate = useNavigate()

  const playlistInfo = {
    id: 2,
    name: "Chill Vibes",
    description: "Relax and unwind with these smooth, mellow tracks. Perfect for studying, working, or just chilling.",
    createdBy: "Melodies",
    followers: "234.8K",
    totalDuration: "1h 58m",
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop",
    backgroundColor: "from-cyan-900 via-blue-900 to-indigo-900"
  }

  const songs = [
    { 
      id: 1, 
      title: "Sunset Lover", 
      artist: "Petit Biscuit", 
      album: "Presence", 
      duration: "3:58", 
      plays: "156M",
      added: "2024-02-10",
      mood: "dreamy",
      cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=60&h=60&fit=crop"
    },
    { 
      id: 2, 
      title: "Weightless", 
      artist: "Marconi Union", 
      album: "Weightless", 
      duration: "8:06", 
      plays: "89M",
      added: "2024-02-10",
      mood: "relaxing",
      cover: "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=60&h=60&fit=crop"
    },
    { 
      id: 3, 
      title: "Stay", 
      artist: "Rihanna ft. Mikky Ekko", 
      album: "Unapologetic", 
      duration: "4:00", 
      plays: "890M",
      added: "2024-02-09",
      mood: "emotional",
      cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=60&h=60&fit=crop"
    },
    { 
      id: 4, 
      title: "Night Changes", 
      artist: "One Direction", 
      album: "Four", 
      duration: "3:46", 
      plays: "678M",
      added: "2024-02-09",
      mood: "nostalgic",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=60&h=60&fit=crop"
    },
    { 
      id: 5, 
      title: "Perfect", 
      artist: "Ed Sheeran", 
      album: "÷", 
      duration: "4:23", 
      plays: "2.1B",
      added: "2024-02-08",
      mood: "romantic",
      cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=60&h=60&fit=crop"
    },
    { 
      id: 6, 
      title: "Say You Won't Let Go", 
      artist: "James Arthur", 
      album: "Back from the Edge", 
      duration: "3:31", 
      plays: "1.2B",
      added: "2024-02-08",
      mood: "romantic",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=60&h=60&fit=crop"
    },
    { 
      id: 7, 
      title: "Let Her Go", 
      artist: "Passenger", 
      album: "All the Little Lights", 
      duration: "4:12", 
      plays: "950M",
      added: "2024-02-07",
      mood: "melancholic",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop"
    },
    { 
      id: 8, 
      title: "I'm Yours", 
      artist: "Jason Mraz", 
      album: "We Sing. We Dance. We Steal Things.", 
      duration: "4:02", 
      plays: "890M",
      added: "2024-02-07",
      mood: "happy",
      cover: "https://images.unsplash.com/photo-1535957998255-4b0f16e6d9c2?w=60&h=60&fit=crop"
    },
    { 
      id: 9, 
      title: "Budapest", 
      artist: "George Ezra", 
      album: "Wanted on Voyage", 
      duration: "3:20", 
      plays: "567M",
      added: "2024-02-06",
      mood: "upbeat",
      cover: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=60&h=60&fit=crop"
    },
    { 
      id: 10, 
      title: "Riptide", 
      artist: "Vance Joy", 
      album: "Dream Your Life Away", 
      duration: "3:24", 
      plays: "780M",
      added: "2024-02-06",
      mood: "folk",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=60&h=60&fit=crop"
    },
    { 
      id: 11, 
      title: "Ho Hey", 
      artist: "The Lumineers", 
      album: "The Lumineers", 
      duration: "2:43", 
      plays: "456M",
      added: "2024-02-05",
      mood: "folk",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=60&h=60&fit=crop"
    },
    { 
      id: 12, 
      title: "Home", 
      artist: "Edward Sharpe & The Magnetic Zeros", 
      album: "Up from Below", 
      duration: "5:03", 
      plays: "345M",
      added: "2024-02-05",
      mood: "uplifting",
      cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=60&h=60&fit=crop"
    },
    { 
      id: 13, 
      title: "Banana Pancakes", 
      artist: "Jack Johnson", 
      album: "In Between Dreams", 
      duration: "3:11", 
      plays: "234M",
      added: "2024-02-04",
      mood: "laid back",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=60&h=60&fit=crop"
    },
    { 
      id: 14, 
      title: "Better Together", 
      artist: "Jack Johnson", 
      album: "In Between Dreams", 
      duration: "3:27", 
      plays: "289M",
      added: "2024-02-04",
      mood: "romantic",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop"
    },
    { 
      id: 15, 
      title: "The A Team", 
      artist: "Ed Sheeran", 
      album: "+", 
      duration: "4:18", 
      plays: "678M",
      added: "2024-02-03",
      mood: "emotional",
      cover: "https://images.unsplash.com/photo-1535957998255-4b0f16e6d9c2?w=60&h=60&fit=crop"
    },
    { 
      id: 16, 
      title: "Skinny Love", 
      artist: "Bon Iver", 
      album: "For Emma, Forever Ago", 
      duration: "3:58", 
      plays: "456M",
      added: "2024-02-03",
      mood: "melancholic",
      cover: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=60&h=60&fit=crop"
    },
    { 
      id: 17, 
      title: "Holocene", 
      artist: "Bon Iver", 
      album: "Bon Iver", 
      duration: "5:36", 
      plays: "234M",
      added: "2024-02-02",
      mood: "ethereal",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=60&h=60&fit=crop"
    },
    { 
      id: 18, 
      title: "Rivers and Roads", 
      artist: "The Head and The Heart", 
      album: "The Head and The Heart", 
      duration: "4:44", 
      plays: "189M",
      added: "2024-02-02",
      mood: "nostalgic",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=60&h=60&fit=crop"
    },
    { 
      id: 19, 
      title: "Gravity", 
      artist: "John Mayer", 
      album: "Continuum", 
      duration: "4:05", 
      plays: "345M",
      added: "2024-02-01",
      mood: "soulful",
      cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=60&h=60&fit=crop"
    },
    { 
      id: 20, 
      title: "Slow Dancing in a Burning Room", 
      artist: "John Mayer", 
      album: "Continuum", 
      duration: "4:02", 
      plays: "267M",
      added: "2024-02-01",
      mood: "romantic",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=60&h=60&fit=crop"
    }
  ]

  // Generate 32 chill songs
  const allSongs = Array.from({ length: 32 }, (_, i) => {
    const baseSong = songs[i % songs.length]
    return {
      ...baseSong,
      id: i + 1,
      title: i < songs.length ? baseSong.title : `Chill ${baseSong.title}`,
      duration: baseSong.duration,
      plays: `${(parseFloat(baseSong.plays.slice(0, -1)) + i * 0.05).toFixed(1)}M`
    }
  })

  const moodCategories = [
    { name: "Dreamy", icon: Cloud, count: 8 },
    { name: "Relaxing", icon: Wind, count: 7 },
    { name: "Romantic", icon: Heart, count: 6 },
    { name: "Night", icon: Moon, count: 5 },
    { name: "Sunset", icon: Sunset, count: 4 },
    { name: "Rain", icon: Umbrella, count: 2 }
  ]

  const toggleLike = (songId) => {
    setIsLiked(prev => ({ ...prev, [songId]: !prev[songId] }))
  }

  const playSong = (song) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  return (
    <div className="chill-vibes-page">
      {/* Ambient Background Animation */}
      <div className="ambient-background">
        <div className="ambient-gradient"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }} />
          ))}
        </div>
      </div>

      {/* Header with navigation */}
      <div className="chill-header">
        <div className="header-nav">
          <button className="nav-btn" onClick={() => navigate('/')}>
            <ChevronLeft size={24} />
          </button>
          <div className="nav-breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Chill Vibes</span>
          </div>
        </div>
      </div>

      {/* Playlist Hero Section */}
      <div className={`chill-hero bg-gradient-to-br ${playlistInfo.backgroundColor}`}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="playlist-cover">
            <img src={playlistInfo.coverImage} alt={playlistInfo.name} />
            <div className="cover-overlay">
              <button className="play-all-btn-large">
                <Play size={32} className="fill-current" />
              </button>
            </div>
          </div>
          <div className="playlist-info">
            <div className="playlist-type-badge">
              <Coffee size={14} />
              <span>CHILL PLAYLIST</span>
            </div>
            <h1 className="playlist-title">{playlistInfo.name}</h1>
            <p className="playlist-description">{playlistInfo.description}</p>
            
            <div className="playlist-meta-grid">
              <div className="meta-item">
                <User size={16} />
                <span>{playlistInfo.createdBy}</span>
              </div>
              <div className="meta-item">
                <Music size={16} />
                <span>32 songs</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{playlistInfo.totalDuration}</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>Updated weekly</span>
              </div>
            </div>
            
            <div className="playlist-stats">
              <span className="followers">
                {playlistInfo.followers} followers
              </span>
            </div>

            <div className="playlist-actions">
              <button className="play-btn-primary">
                <Play size={20} className="fill-current" />
                Play
              </button>
              <button className="shuffle-btn">
                <Shuffle size={20} />
                Shuffle
              </button>
              <button className="icon-btn-circle">
                <Heart size={20} />
              </button>
              <button className="icon-btn-circle">
                <Download size={20} />
              </button>
              <button className="icon-btn-circle">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mood Categories */}
      <div className="mood-section">
        <h2 className="mood-title">
          <Sparkles size={20} />
          Choose your mood
        </h2>
        <div className="mood-grid">
          {moodCategories.map((mood, index) => (
            <button key={index} className="mood-card">
              <div className="mood-icon">
                <mood.icon size={24} />
              </div>
              <div className="mood-info">
                <span className="mood-name">{mood.name}</span>
                <span className="mood-count">{mood.count} songs</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Playlist Controls */}
      <div className="playlist-controls">
        <div className="controls-left">
          <button className="play-btn-large">
            <Play size={28} className="fill-current" />
          </button>
          <button className="control-icon">
            <Heart size={24} />
          </button>
          <button className="control-icon">
            <Download size={24} />
          </button>
          <button className="control-icon">
            <Share2 size={24} />
          </button>
        </div>
        <div className="controls-right">
          <button className="sort-btn">
            <span>Sort by:</span>
            <strong>Mood</strong>
            <ChevronDown size={16} />
          </button>
          <button className="filter-btn">
            <Droplets size={18} />
            <span>Relaxation level</span>
          </button>
        </div>
      </div>

      {/* Songs Table */}
      <div className="songs-table-container">
        <table className="songs-table chill-table">
          <thead>
            <tr>
              <th className="th-number">#</th>
              <th className="th-title">Title</th>
              <th className="th-mood">Mood</th>
              <th className="th-album">Album</th>
              <th className="th-added">Date added</th>
              <th className="th-plays">Plays</th>
              <th className="th-duration">
                <Clock size={16} />
              </th>
              <th className="th-actions"></th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map((song, index) => (
              <tr 
                key={song.id} 
                className={`song-row ${currentSong?.id === song.id ? 'playing' : ''}`}
                onDoubleClick={() => playSong(song)}
              >
                <td className="td-number">
                  <span className="song-number">{index + 1}</span>
                  {currentSong?.id === song.id && isPlaying && (
                    <div className="playing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )}
                </td>
                <td className="td-title">
                  <div className="song-info">
                    <img src={song.cover} alt={song.title} className="song-cover" />
                    <div className="song-details">
                      <span className="song-name">{song.title}</span>
                      <span className="song-artist">{song.artist}</span>
                    </div>
                  </div>
                </td>
                <td className="td-mood">
                  <span className={`mood-badge mood-${song.mood}`}>
                    {song.mood}
                  </span>
                </td>
                <td className="td-album">
                  <span className="album-name">{song.album}</span>
                </td>
                <td className="td-added">
                  <span className="added-date">{song.added}</span>
                </td>
                <td className="td-plays">
                  <span className="play-count">{song.plays}</span>
                </td>
                <td className="td-duration">
                  <span className="duration">{song.duration}</span>
                </td>
                <td className="td-actions">
                  <div className="row-actions">
                    <button 
                      className={`action-btn ${isLiked[song.id] ? 'liked' : ''}`}
                      onClick={() => toggleLike(song.id)}
                    >
                      <Heart size={16} fill={isLiked[song.id] ? 'currentColor' : 'none'} />
                    </button>
                    <button className="action-btn">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommended Section */}
      <div className="recommended-section">
        <h2 className="recommended-title">
          <Moon size={20} />
          Perfect for late night
        </h2>
        <div className="recommended-grid">
          {allSongs.slice(0, 4).map((song) => (
            <div key={song.id} className="recommended-card">
              <div className="recommended-cover">
                <img src={song.cover} alt={song.title} />
                <button className="recommended-play">
                  <Play size={20} className="fill-current" />
                </button>
              </div>
              <div className="recommended-info">
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="playlist-footer">
        <div className="footer-stats">
          <span>32 songs</span>
          <span className="dot">•</span>
          <span>{playlistInfo.totalDuration}</span>
          <span className="dot">•</span>
          <span>Perfect for relaxation</span>
        </div>
        <div className="footer-mood-tags">
          <span className="mood-tag">#chill</span>
          <span className="mood-tag">#relax</span>
          <span className="mood-tag">#study</span>
          <span className="mood-tag">#sleep</span>
          <span className="mood-tag">#lofi</span>
        </div>
      </div>

      {/* Mini Player Bar */}
      {currentSong && (
        <div className="chill-player-bar">
          <div className="player-content">
            <div className="player-song-info">
              <img src={currentSong.cover} alt={currentSong.title} className="player-song-cover" />
              <div>
                <span className="player-song-title">{currentSong.title}</span>
                <span className="player-song-artist">{currentSong.artist}</span>
              </div>
              <button className="player-like-btn">
                <Heart size={18} />
              </button>
            </div>
            <div className="player-controls-center">
              <div className="player-control-buttons">
                <button className="player-control-btn">
                  <Shuffle size={18} />
                </button>
                <button className="player-control-btn">
                  <SkipBack size={20} />
                </button>
                <button 
                  className="player-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                </button>
                <button className="player-control-btn">
                  <SkipForward size={20} />
                </button>
                <button className="player-control-btn">
                  <Repeat size={18} />
                </button>
              </div>
              <div className="player-progress">
                <span className="progress-time">1:23</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '33%' }}></div>
                </div>
                <span className="progress-time">{currentSong.duration}</span>
              </div>
            </div>
            <div className="player-ambient">
              <Wind size={18} />
              <div className="ambient-slider">
                <div className="ambient-fill" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChillVibes