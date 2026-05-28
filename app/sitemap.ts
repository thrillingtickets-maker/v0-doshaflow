import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.doshaflow.com',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.doshaflow.com/quiz',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.doshaflow.com/about',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.doshaflow.com/blog',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://www.doshaflow.com/samples',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.doshaflow.com/ayurveda-for-men',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.doshaflow.com/blog/what-happens-ayurvedic-retreat-day-3',
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
