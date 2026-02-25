export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "12s", animationDelay: "4s" }} />
            </div>
        </div>
    );
}