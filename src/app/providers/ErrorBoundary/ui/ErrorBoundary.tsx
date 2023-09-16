import React, { Suspense, type ErrorInfo, type ReactNode } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_error: Error) {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // eslint-disable-next-line i18next/no-literal-string
      return (
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
