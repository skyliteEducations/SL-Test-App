const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        
        {/* Spinner */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-teal-500 border-r-teal-500"></div>

          <div className="absolute inset-3 rounded-full bg-white"></div>
        </div>

        {/* Text */}
        <h2 className="mt-8 text-xl font-semibold text-slate-800">
          Preparing Your Test
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Loading questions and restoring progress...
        </p>

        {/* Progress Dots */}
        <div className="mt-6 flex gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-teal-500"></div>

          <div
            className="h-2 w-2 animate-bounce rounded-full bg-teal-500"
            style={{ animationDelay: "0.15s" }}
          ></div>

          <div
            className="h-2 w-2 animate-bounce rounded-full bg-teal-500"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;