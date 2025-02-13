import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleChange = (value: string) => {
    // Remove current locale prefix
    const currentPath = pathname.replace(`/${currentLocale}`, '');
    // Build new path with selected locale
    const newPath = `/${value}${currentPath}`;
    router.push(newPath);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Select value={currentLocale} onValueChange={handleChange}>
        <SelectTrigger
          className={cn(
            "flex items-center gap-2 border-0 bg-transparent p-0",
            "text-sm text-slate-300/80 hover:text-white/90",
            "focus:ring-0",
            "transition-colors duration-300",
            "[&>svg:last-child]:hidden" // only hide the last svg (dropdown arrow)
          )}
        >
          <Globe className="size-4 text-slate-300" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          align="center"
          className={cn(
            "z-[999] border border-white/[0.04]",
            "bg-[linear-gradient(90deg,#161a31,#06091f)]",
            "backdrop-blur-xl",
            "text-slate-300/80"
          )}
        >
          <SelectItem 
            value="en"
            className="focus:bg-white/[0.04] focus:text-white/90"
          >
            EN
          </SelectItem>
          <SelectItem 
            value="zh-CN"
            className="focus:bg-white/[0.04] focus:text-white/90"
          >
            简
          </SelectItem>
          <SelectItem 
            value="zh-TW"
            className="focus:bg-white/[0.04] focus:text-white/90"
          >
            繁
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}