"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Er is iets misgegaan
            </h2>
            <p className="text-gray-600 mb-4">
              Probeer de pagina te verversen of neem contact met ons op.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Pagina verversen
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

