import { Component, ReactNode } from 'react';
import styles from './error_boundary-style.module.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className={styles['error-container']}>
          <h2>Something went wrong...</h2>
          <p>Please, restart a page... Maybe it will go away....</p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
