import { STATUS_CFG } from "../lib/utils";

export default function StatusBadge({ status }) {
    const cfg = STATUS_CFG[status] || STATUS_CFG.pending;
    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${cfg.cls}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
        </span>
    );
}