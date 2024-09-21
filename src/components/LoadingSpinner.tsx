const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900">
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed border-amber-500 rounded-full animate-spin"></div>
        <div className="absolute w-10 h-10 border-4 border-dashed border-teal-500 rounded-full animate-ping"></div>
        <div className="absolute w-6 h-6 bg-amber-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
