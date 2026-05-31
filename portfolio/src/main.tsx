import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// One-time reset of old localStorage metrics (views, comments, likes)
if (localStorage.getItem('jaune_reset_v2') !== 'true') {
  const keysToRemove: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && (
      key.startsWith('view_count_') ||
      key.startsWith('like_count_') ||
      key.startsWith('comments_') ||
      key.startsWith('has_liked_')
    )) {
      keysToRemove.push(key)
    }
  }
  keysToRemove.forEach((key) => localStorage.removeItem(key))
  localStorage.setItem('jaune_reset_v2', 'true')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
