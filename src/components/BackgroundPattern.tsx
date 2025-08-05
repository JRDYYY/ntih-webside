const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background - black and dark green */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-green-950"></div>
      
      {/* Animated gradient overlay - dark greens */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/15 via-emerald-900/15 to-neutral-900/15 animate-pulse"></div>
      
      {/* Grid pattern - green lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(34,197,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      {/* Floating geometric shapes - dark green tones */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-900/8 to-emerald-900/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-neutral-900/8 to-green-800/8 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-900/8 to-neutral-800/8 rounded-full blur-3xl animate-float-slow"></div>
      
      {/* Subtle dot pattern - green dots */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full bg-[radial-gradient(rgba(34,197,94,0.3)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>
      
      {/* Diagonal lines - green lines */}
      <div className="absolute inset-0 opacity-8">
        <div className="h-full w-full bg-[linear-gradient(45deg,rgba(34,197,94,0.2)_1px,transparent_1px,transparent_10px,rgba(34,197,94,0.2)_11px,rgba(34,197,94,0.2)_12px,transparent_12px)] bg-[size:8rem_8rem]"></div>
      </div>
    </div>
  );
};

export default BackgroundPattern;
