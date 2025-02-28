import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

import { cn } from "@/lib/utils";

type SocialLink = {
  id: string;
  href: string;
  icon: React.ReactNode;
};

const iconClassName = "size-6 opacity-80 transition-opacity hover:opacity-100";

const socialLinks: SocialLink[] = [
  {
    id: "Github",
    href: "https://github.com/QingjiaTsang",
    icon: <BsGithub color="white" className={iconClassName} />,
  },
  {
    id: "Twitter",
    href: "https://x.com/JohnLocke72__",
    icon: <BsTwitterX color="white" className={iconClassName} />,
  },
  {
    id: "LinkedIn",
    href: "https://www.linkedin.com/in/qingjiatsang",
    icon: <BsLinkedin color="white" className={iconClassName} />,
  },
  {
    id: "Youtube",
    href: "https://www.youtube.com/@starrynight72",
    icon: <BsYoutube color="white" className={iconClassName} />,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(link => (
        <SocialLinkItem key={link.id} {...link} />
      ))}
    </div>
  );
}

function SocialLinkItem({ href, icon }: SocialLink) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "flex size-10 items-center justify-center",
        "rounded-lg border border-white/[0.04]",
        "bg-[linear-gradient(90deg,#161a31,#06091f)]",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-white/[0.1]",
        "hover:shadow-[0_0_10px_rgba(168,85,247,0.08)]",
        "active:scale-95",
      )}
    >
      {icon}
    </Link>
  );
}
