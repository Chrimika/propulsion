import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Communauté Propulsion - Réseau Entrepreneurs Cameroun',
    short_name: 'Propulsion',
    description: 'Communauté de 3500+ entrepreneurs et professionnels au Cameroun. Masterclass, networking et accompagnement.',
    start_url: '/',
    display: 'standalone',
    background_color: '#8b35d1',
    theme_color: '#8b35d1',
    icons: [
      {
        src: '/images/Propulsion Logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
