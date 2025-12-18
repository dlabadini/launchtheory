"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white p-4">
      <div className="text-center">
        <h2 className="text-2xl font-light mb-4">Something went wrong</h2>
        <p className="text-neutral-400 mb-4">{error.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

