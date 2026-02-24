export default function Input(props) {
    return (
        <input {...props} className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-200" />
    );
}