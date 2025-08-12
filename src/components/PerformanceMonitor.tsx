"use client";

import { useEffect } from "react";

// Type declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value: number;
}

interface EventTimingEntry extends PerformanceEntry {
  processingStart?: number;
}

// Performance monitoring utility
export const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and if window is available
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') return;

    // Core Web Vitals tracking
    const trackWebVitals = () => {
      // Largest Contentful Paint (LCP)
      try {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              custom_map: { metric_value: lastEntry.startTime },
              value: Math.round(lastEntry.startTime),
            });
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // LCP not supported
      }

      // First Input Delay (FID)
      try {
        new PerformanceObserver((list) => {
          const entries = list.getEntries() as EventTimingEntry[];
          entries.forEach((entry) => {
            if (entry.processingStart && entry.startTime) {
              const fid = entry.processingStart - entry.startTime;
              
              if (window.gtag) {
                window.gtag('event', 'FID', {
                  custom_map: { metric_value: fid },
                  value: Math.round(fid),
                });
              }
            }
          });
        }).observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // FID not supported
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          const entries = list.getEntries() as LayoutShiftEntry[];
          for (const entry of entries) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          
          if (window.gtag) {
            window.gtag('event', 'CLS', {
              custom_map: { metric_value: clsValue },
              value: Math.round(clsValue * 1000),
            });
          }
        }).observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // CLS not supported
      }

      // Time to First Byte (TTFB)
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceNavigationTiming[];
          const entry = entries[0];
          if (entry) {
            const ttfb = entry.responseStart - entry.fetchStart;
            
            if (window.gtag) {
              window.gtag('event', 'TTFB', {
                custom_map: { metric_value: ttfb },
                value: Math.round(ttfb),
              });
            }
          }
        });
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        // TTFB not supported
      }
    };

    // Track page load performance
    const trackPageLoad = () => {
      window.addEventListener('load', () => {
        try {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (perfData) {
            const loadTime = perfData.loadEventEnd - perfData.fetchStart;
            const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.fetchStart;
            
            if (window.gtag) {
              window.gtag('event', 'page_load_time', {
                value: Math.round(loadTime),
              });
              
              window.gtag('event', 'dom_content_loaded', {
                value: Math.round(domContentLoaded),
              });
            }
          }
        } catch (e) {
          // Performance tracking failed
        }
      });
    };

    // Track resource loading errors
    const trackResourceErrors = () => {
      window.addEventListener('error', (event) => {
        if (event.target !== window && window.gtag) {
          window.gtag('event', 'resource_error', {
            error_type: 'resource_load_failed',
            error_source: (event.target as HTMLElement)?.tagName || 'unknown',
          });
        }
      }, true);
    };

    // Initialize tracking
    trackWebVitals();
    trackPageLoad();
    trackResourceErrors();
  }, []);

  return null;
};

// Performance optimization hooks
export const usePageVisibility = () => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
      } else {
        document.body.style.animationPlayState = 'running';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload hero image
    const heroImage = new Image();
    heroImage.src = '/hero-image.jpg';

    // Note: Font preloading removed until font files are available
    // If you have font files, uncomment and update the path:
    // const link = document.createElement('link');
    // link.rel = 'preload';
    // link.href = '/fonts/YourFont.woff2';
    // link.as = 'font';
    // link.type = 'font/woff2';
    // link.crossOrigin = 'anonymous';
    // document.head.appendChild(link);
    //
    // return () => {
    //   if (document.head.contains(link)) {
    //     document.head.removeChild(link);
    //   }
    // };
  }, []);
};

// Connection quality detection
export const useConnectionQuality = () => {
  useEffect(() => {
    if (typeof navigator === 'undefined' || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    
    const updateConnectionInfo = () => {
      const connectionType = connection.effectiveType;
      
      if (connectionType === 'slow-2g' || connectionType === '2g') {
        document.body.classList.add('low-quality-connection');
      } else {
        document.body.classList.remove('low-quality-connection');
      }
    };

    connection.addEventListener('change', updateConnectionInfo);
    updateConnectionInfo();

    return () => connection.removeEventListener('change', updateConnectionInfo);
  }, []);
}; 