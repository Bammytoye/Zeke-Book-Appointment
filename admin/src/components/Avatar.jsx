export default function Avatar({ name }) {
    const colors = ["bg-violet-500", "bg-indigo-500", "bg-cyan-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"];
    const color = colors[name.charCodeAt(0) % colors.length];
    return (
        <div className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl ${color} flex items-center justify-center text-white text-xs sm:text-xs lg:text-sm font-bold shrink-0`}>
            {name.charAt(0).toUpperCase()}
        </div>
    );
}