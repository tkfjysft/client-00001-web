'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXTwitter, 
  faInstagram, 
  faLine, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

export default function SnsLinks() {
  const snsLinks = [
    { icon: faXTwitter, href: "https://x.com/yourid", label: "X" },
    { icon: faInstagram, href: "https://instagram.com/yourid", label: "Instagram" },
    { icon: faLine, href: "https://line.me/...", label: "LINE" },
    { icon: faGithub, href: "https://github.com/yourid", label: "GitHub" },
  ];

  return (
    <div className="flex items-center gap-3">
      {snsLinks.map((sns, index) => (
        <a 
          key={index}
          href={sns.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={sns.label}
          // hover:opacity で少し変化をつけると「リンク感」が出ます
          className="text-clr-base-1 hover:opacity-70 transition-opacity"
        >
          {/* アイコンの大きさは className で調整可能 */}
          <FontAwesomeIcon icon={sns.icon} className="text-2xl" />
        </a>
      ))}
    </div>
  );
}