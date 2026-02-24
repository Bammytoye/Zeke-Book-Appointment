export default function Avatar({ name }) {
    const colors = ["bg-violet-500", "bg-indigo-500", "bg-cyan-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"];
    const color = colors[name.charCodeAt(0) % colors.length];
    return (
        <div className={`w-8 h-8 rounded-xl ${color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
            {name.charAt(0).toUpperCase()}
        </div>
    );
}