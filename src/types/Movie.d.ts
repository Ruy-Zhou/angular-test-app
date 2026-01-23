interface MovieCategory {
  category: string
  interests: Movie[]
}

interface Movie {
  id: string
  name: string
  primaryImage: MovieImage[]
  description: string
}

interface MovieImage {
  url: string
  width: number
  height: number
}
