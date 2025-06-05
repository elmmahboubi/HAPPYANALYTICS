import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageview } from '../utils/analytics'

export const useAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Track page views
    pageview(location.pathname + location.search)
  }, [location])
} 