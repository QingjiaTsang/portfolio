import { cn } from "@/lib/utils";

type ContactButtonProps = {
  onClick: () => void;
  text?: string;
  className?: string;
};

export function ContactButton({ onClick, text = "Contact me", className }: ContactButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative w-full h-12 px-6",
        "bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]",
        "rounded-xl overflow-hidden",
        "transition-all duration-300",
        "hover:shadow-[0_0_20px_rgba(99,68,245,0.4)]",
        "active:scale-[0.98]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] animate-shine" />
      </div>
      
      <div className="relative flex items-center justify-center gap-3 text-white font-medium">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <span className="relative">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </span>
      </div>
    </button>
  );
}