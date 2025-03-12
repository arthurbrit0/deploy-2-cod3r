"use client";

import * as React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { twm } from "@/utils/tw";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
  children: React.ReactNode;
  icon?: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={twm(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
              "hover:bg-zinc-900 text-gray-300",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-3">
              {icon && (
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  {icon}
                </span>
              )}
              <div>
                <div className="text-sm font-medium leading-none text-white mb-1">
                  {title}
                </div>
                <p className="text-xs leading-snug text-gray-400">
                  {children}
                </p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default ListItem;