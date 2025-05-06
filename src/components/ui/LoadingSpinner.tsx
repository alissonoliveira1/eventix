export function LoadingSpinner() {
    return (
      <div className="flex z-50 w-screen bg-yellow-700 items-center justify-center h-screen">
        <div className="w-8 h-8 border-4 border-green-500 border-t-amber-300 rounded-full animate-spin"></div>
      </div>
    );
  }
  