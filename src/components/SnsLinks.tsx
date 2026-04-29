'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXTwitter, 
  faInstagram, 
  faLine, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

// SNSデータも外に出しておくとスッキリします
const SNS_LINKS = [
  { icon: faXTwitter, href: "https://x.com/yourid", label: "X" },
  { icon: faInstagram, href: "https://instagram.com/yourid", label: "Instagram" },
  { icon: faLine, href: "https://line.me/...", label: "LINE" },
  { icon: faGithub, href: "https://github.com/yourid", label: "GitHub" },
] as const;

export default function SnsLinks() {
  return (
    <div className="flex items-center gap-5">
      {SNS_LINKS.map((sns) => (
        <a 
          key={sns.label}
          href={sns.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={sns.label}
          className="group text-clr-base-1 transition-all duration-300"
        >
          <FontAwesomeIcon 
            icon={sns.icon} 
            className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" 
          />
        </a>
      ))}
    </div>
  );
}