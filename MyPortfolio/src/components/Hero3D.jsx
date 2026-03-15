const VARIANT_STYLES = {
    enterprise: {
        accent: "from-indigo-500/20 via-cyan-500/10 to-purple-500/20",
        ring: "border-indigo-400/35 dark:border-cyan-300/25",
    },
    cinematic: {
        accent: "from-indigo-500/25 via-purple-500/15 to-cyan-500/25",
        ring: "border-purple-400/35 dark:border-indigo-300/25",
    },
    cyber: {
        accent: "from-cyan-500/25 via-indigo-500/15 to-fuchsia-500/25",
        ring: "border-cyan-400/40 dark:border-cyan-200/30",
    },
};

const Hero3D = ({ variant = "enterprise" }) => {
    const active = VARIANT_STYLES[variant] || VARIANT_STYLES.enterprise;

    return (
        <div className="w-full h-full relative pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/70 to-slate-100/50 dark:from-slate-900/80 dark:to-slate-800/60" />

            <div className={`absolute inset-0 rounded-[30px] bg-gradient-to-br ${active.accent}`} />

            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 dark:bg-slate-900/55 blur-2xl" />

            <div
                className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border ${active.ring}`}
            />

            <div className="absolute left-1/2 top-1/2 h-44 w-56 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/50 dark:border-slate-300/15 bg-white/60 dark:bg-slate-900/65 backdrop-blur-md shadow-[0_16px_40px_rgba(15,23,42,0.16)]">
                <div className="absolute top-4 left-4 right-4 h-2 rounded-full bg-slate-300/70 dark:bg-cyan-300/25" />
                <div className="absolute top-9 left-4 right-10 h-2 rounded-full bg-slate-300/55 dark:bg-indigo-300/20" />
                <div className="absolute top-14 left-4 right-16 h-2 rounded-full bg-slate-300/40 dark:bg-purple-300/20" />

                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/85" />
                    <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
                    <span className="h-2 w-2 rounded-full bg-indigo-400/80" />
                </div>
            </div>
        </div>
    );
};

export default Hero3D;
