import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage/ErrorPage';

interface ErrorBoundaryType {
  children:ReactNode
}
interface ErrorBoundaryTypeProps {
  hasError:boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryType, ErrorBoundaryTypeProps> {
    constructor(props:ErrorBoundaryType) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info:ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
