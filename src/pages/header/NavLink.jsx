"use client";

import { cn } from "@/lib/utility";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  handleMouseEnter,
  hovering,
  index,
  link,
  onCloseDropdown,
}) {
  const pathname = usePathname();

  // ✅ Defensive check: if link is missing or invalid, don't render
  if (!link || typeof link !== "object" || !link?.hrefs || !link?.label) return null;

  const isActive = pathname === link?.hrefs;
  const isHovering = hovering === index;

  if (link.type === "branches") {
    return (
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={onCloseDropdown}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            onCloseDropdown?.();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && isHovering) {
            event.currentTarget.querySelector("button").focus();
            onCloseDropdown?.();
          }
        }}
      >
        <button
          type="button"
          aria-expanded={isHovering}
          onClick={() => handleMouseEnter(index)}
          className={cn(
            "text-muted flex items-center gap-x-0.5 transition-all px-3 py-1 rounded-md hover:text-accent hover:bg-secondary",
            isHovering && "text-accent font-semibold bg-secondary"
          )}
        >
          {link.label}
          <ChevronDown
            aria-hidden="true"
            className={cn("w-4 h-4 transition-transform", isHovering && "rotate-180")}
          />
        </button>
        {isHovering && (
          <ul className="absolute right-0 top-full z-10 w-44 max-h-64 overflow-y-auto rounded-xl bg-white py-2 text-black shadow-lg">
            {link.subLinks.map((branch) => (
              <li key={branch.hrefs}>
                <Link
                  href={branch.hrefs}
                  className="block px-4 py-2 hover:bg-secondary hover:text-accent"
                  onClick={onCloseDropdown}
                >
                  {branch.header}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="block group" onMouseEnter={() => handleMouseEnter(index)}>
      <Link
        href={link?.hrefs}
        className={cn(
          "text-muted flex items-center gap-x-0.5 group-hover:text-accent transition-all px-3 py-1 rounded-md hover:bg-secondary",
          isActive && "text-accent font-semibold bg-secondary",
          isHovering && "text-accent font-semibold bg-secondary"
        )}
      >
        {link.label}
        {Array.isArray(link?.subLinks) && link?.subLinks.length > 0 && (
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-all group-hover:text-accent",
              isHovering && "rotate-180"
            )}
          />
        )}
      </Link>
    </div>
  );
}
