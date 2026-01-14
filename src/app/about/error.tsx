"use client";
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div>
      <h1>something went wrong error called.....</h1>
      <button onClick={reset}>Retry</button>
    </div>
  );
};

export default ErrorPage;
