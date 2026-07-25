import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

const BuggyComponent = ({error}) => {
  return <div>
    {error ? erro : "hii"}
  </div>
};

export default function App() {
    return (
      <div>

        <ErrorBoundary>
            <BuggyComponent error={true}/>
        </ErrorBoundary>

        <ErrorBoundary>
            <BuggyComponent error={false}/>
        </ErrorBoundary>
      </div>
    );
};
