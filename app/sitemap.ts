import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.doshaflow.com', lastModified: new Date() },
    { url: 'https://www.doshaflow.com/quiz', lastModified: new Date() },
    { url: 'https://www.doshaflow.com/about', lastModified: new Date() },
    { url: 'https://www.doshaflow.com/blog', lastModified: new Date() },
    { url: 'https://www.doshaflow.com/samples', lastModified: new Date() },
    { url: 'https://www.doshaflow.com/ayurveda-for-men', lastModified: new Date() },
    { url: 'https://www.doshaflow.com/blog/what-happens-ayurvedic-retreat-day-3', lastModified: new Date() },
  ]
}
