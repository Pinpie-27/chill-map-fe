import Diver from "../../assets/Diver.svg";

function NotFoundPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 size-4 bg-teal-300/60 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 size-6 bg-emerald-300/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 size-3 bg-cyan-400/50 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 size-5 bg-teal-300/30 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="flex-shrink-0 group">
            <div className="relative">
              <img
                src={Diver}
                alt="Diver illustration"
                className="size-80 lg:size-96 object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 animate-pulse"
              />
              <div className="absolute -top-4 -right-4 size-8 bg-cyan-200/70 rounded-full animate-bounce"></div>
              <div className="absolute top-1/3 -left-6 size-4 bg-teal-200/50 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-8 size-6 bg-emerald-200/60 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="text-center lg:text-left max-w-lg space-y-8">
            <div className="relative">
              <h1 className="text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 leading-none">
                404
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 tracking-tight">
                OH NO! ERROR 404
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-md">
                This page doesn't exist or was removed! We suggest you back to
                home
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2">
              <svg
                className="size-5 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
