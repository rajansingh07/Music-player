import React, { useState } from 'react'
import { 
  Play, Pause, SkipForward, SkipBack, Volume2, 
  Heart, Music, Home, Search, Library, 
  ChevronLeft, ChevronRight, MoreVertical,
  Repeat, Shuffle, Mic2, List, Clock, 
  User, Calendar, Download, Share2,
  ChevronDown
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import "./DailyMix.css";

const DailyMix = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const [isLiked, setIsLiked] = useState({})

  const navigate = useNavigate()

  const playlistInfo = {
    id: 1,
    name: "Daily Mix",
    description: "Your perfect soundtrack for today. Updated daily with 45 fresh tracks.",
    createdBy: "Melodies",
    followers: "124.5K",
    totalDuration: "2h 45m",
    coverImage: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=300&h=300&fit=crop",
    backgroundColor: "from-purple-900 via-pink-900 to-red-900"
  }

  const songs = [
    { 
      id: 1, 
      title: "Bohemian Rhapsody", 
      artist: "Queen", 
      album: "A Night at the Opera", 
      duration: "5:55", 
      plays: "2.1B",
      added: "2024-01-15",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop"
    },
    { 
      id: 2, 
      title: "Hotel California", 
      artist: "Eagles", 
      album: "Hotel California", 
      duration: "6:30", 
      plays: "1.8B",
      added: "2024-01-15",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=60&h=60&fit=crop"
    },
    { 
      id: 3, 
      title: "Stairway to Heaven", 
      artist: "Led Zeppelin", 
      album: "Led Zeppelin IV", 
      duration: "8:02", 
      plays: "1.5B",
      added: "2024-01-14",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=60&h=60&fit=crop"
    },
    { 
      id: 4, 
      title: "Imagine", 
      artist: "John Lennon", 
      album: "Imagine", 
      duration: "3:04", 
      plays: "1.3B",
      added: "2024-01-14",
      cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=60&h=60&fit=crop"
    },
    { 
      id: 5, 
      title: "Smells Like Teen Spirit", 
      artist: "Nirvana", 
      album: "Nevermind", 
      duration: "5:01", 
      plays: "1.9B",
      added: "2024-01-13",
      cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=60&h=60&fit=crop"
    },
    { 
      id: 6, 
      title: "Billie Jean", 
      artist: "Michael Jackson", 
      album: "Thriller", 
      duration: "4:54", 
      plays: "2.3B",
      added: "2024-01-13",
      cover: "https://images.unsplash.com/photo-1535957998255-4b0f16e6d9c2?w=60&h=60&fit=crop"
    },
    { 
      id: 7, 
      title: "Sweet Child O' Mine", 
      artist: "Guns N' Roses", 
      album: "Appetite for Destruction", 
      duration: "5:56", 
      plays: "1.4B",
      added: "2024-01-12",
      cover: "https://images.unsplash.com/photo-1501612785327-e890d1c6fad0?w=60&h=60&fit=crop"
    },
    { 
      id: 8, 
      title: "Shape of You", 
      artist: "Ed Sheeran", 
      album: "÷", 
      duration: "3:53", 
      plays: "3.1B",
      added: "2024-01-12",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=60&h=60&fit=crop"
    },
    { 
      id: 9, 
      title: "Blinding Lights", 
      artist: "The Weeknd", 
      album: "After Hours", 
      duration: "3:20", 
      plays: "2.8B",
      added: "2024-01-11",
      cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=60&h=60&fit=crop"
    },
    { 
      id: 10, 
      title: "Rolling in the Deep", 
      artist: "Adele", 
      album: "21", 
      duration: "3:48", 
      plays: "1.7B",
      added: "2024-01-11",
      cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=60&h=60&fit=crop"
    }
  ]

  const allSongs = Array.from({ length: 10 }, (_, i) => {
    const baseSong = songs[i % songs.length]
    return {
      ...baseSong,
      id: i + 1,
      title: i < songs.length ? baseSong.title : `${baseSong.title} (Remix ${Math.floor(i/songs.length) + 1})`,
      duration: baseSong.duration,
      plays: `${(parseFloat(baseSong.plays) + i * 0.1).toFixed(1)}B`
    }
  })

  const toggleLike = (songId) => {
    setIsLiked(prev => ({ ...prev, [songId]: !prev[songId] }))
  }

  const playSong = (song) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  return (
    <div className="daily-mix-page ">
      <div className="mix-header">
        <div className="header-nav">
          <button className="nav-btn" onClick={() => navigate('/')}>
            <ChevronLeft size={24} />
          </button>
          <div className="nav-breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Daily Mix</span>
          </div>
        </div>
      </div>

      {/* Playlist Hero Section */}
      <div className={`playlist-hero bg-gradient-to-br ${playlistInfo.backgroundColor}`}>
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
            <span className="playlist-type">PLAYLIST</span>
            <h1 className="playlist-title">{playlistInfo.name}</h1>
            <p className="playlist-description">{playlistInfo.description}</p>
            <div className="playlist-meta">
              <div className="meta-item">
                <User size={16} />
                <span>{playlistInfo.createdBy}</span>
              </div>
              <div className="meta-item">
                <Music size={16} />
                <span>45 songs</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>Updated daily</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{playlistInfo.totalDuration}</span>
              </div>
            </div>
            <div className="playlist-stats">
              <span className="followers">{playlistInfo.followers} followers</span>
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
              <button className="icon-btn-circle">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
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
            <strong>Recently added</strong>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Songs Table */}
      <div className="songs-table-container">
        <table className="songs-table">
          <thead>
            <tr>
              <th className="th-number">#</th>
              <th className="th-title">Title</th>
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

      {/* Footer Info */}
      <div className="playlist-footer">
        <div className="footer-stats">
          <span>45 songs</span>
          <span className="dot">•</span>
          <span>{playlistInfo.totalDuration}</span>
          <span className="dot">•</span>
          <span>© 2026 Melodies</span>
        </div>
      </div>

      {/* Mini Player Bar (if song is playing) */}
      {currentSong && (
        <div className="mini-player-bar">
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
            <div className="player-volume">
              <Volume2 size={18} />
              <div className="volume-slider">
                <div className="volume-fill" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DailyMix