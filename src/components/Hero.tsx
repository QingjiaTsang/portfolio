import { styles } from "@/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative mx-auto h-dvh w-full">
      <div
        className={cn(
          `${styles.paddingX}`,
          "absolute inset-0 top-[120px] mx-auto flex max-w-7xl gap-5",
        )}
      >
      </div>
    </section>
  );
}
