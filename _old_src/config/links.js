const env = import.meta.env

export const LINKS = {
  githubProfile: env.VITE_GITHUB_PROFILE_URL || 'https://github.com',
  summarizerRepo: env.VITE_GITHUB_SUMMARIZER_URL || env.VITE_GITHUB_PROFILE_URL || 'https://github.com',
  weatherSongRepo:
    env.VITE_GITHUB_WEATHER_RECOMMENDER_URL || env.VITE_GITHUB_PROFILE_URL || 'https://github.com',
  linkedin: env.VITE_LINKEDIN_URL || 'https://linkedin.com',
  x: env.VITE_X_URL || 'https://x.com',
  email: env.VITE_CONTACT_EMAIL || 'hello@example.com',
}

export const MAIL_TO = `mailto:${LINKS.email}`
