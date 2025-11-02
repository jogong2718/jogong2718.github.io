'use client'

import { useEffect, useState } from 'react'

interface InstagramPost {
  id: string
  timestamp: string
  permalink: string
  mediaType: string
  isReel: boolean
  mediaUrl: string
  thumbnailUrl: string
  caption: string
  prunedCaption: string
  sizes: {
    medium: {
      mediaUrl: string
      height: number
      width: number
    }
  }
}

interface InstagramData {
  username: string
  biography: string
  profilePictureUrl: string
  posts: InstagramPost[]
}

export default function InstagramFeed() {
  const [data, setData] = useState<InstagramData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await fetch('https://feeds.behold.so/IHwOIGsjTcKL2xcTAaq9')
        if (!response.ok) throw new Error('Failed to fetch Instagram feed')
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError('Unable to load Instagram feed')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramFeed()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">{error || 'No posts available'}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6"> {/* reduced from py-12 */}
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6"> {/* reduced from mb-12 */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <img
            src={data.profilePictureUrl}
            alt={data.username}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold"><a href={`https://www.instagram.com/${data.username}/`} target="_blank" rel="noopener noreferrer">@{data.username}</a></h2>
          <p className="text-gray-400">{data.biography}</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* slightly tighter gap */}
        {data.posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            <img
              src={post.sizes.medium.mediaUrl}
              alt={post.prunedCaption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <div className="text-center">
                {post.isReel && (
                  <div className="mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}
                <p className="text-sm line-clamp-3">{post.prunedCaption}</p>
              </div>
            </div>

            {post.isReel && (
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
