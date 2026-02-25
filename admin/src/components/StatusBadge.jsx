import { STATUS_CFG } from "../lib/utils";

export default function StatusBadge({ status }) {
    const cfg = STATUS_CFG[status] || STATUS_CFG.pending;
    return (
        <span className={`inline-flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold ${cfg.cls} transition-all`}>
            <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full ${cfg.dot} animate-pulse`} />
            <span className="whitespace-nowrap">{cfg.label}</span>
        </span>
    );
}