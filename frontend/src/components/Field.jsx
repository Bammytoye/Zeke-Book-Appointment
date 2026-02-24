export default function Field({ label, required, children }) {
    return (
        <div>
            <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                {label}{required && <span className="text-violet-400 ml-1">*</span>}
            </label>
            {children}
        </div>
    );
}