

import * as React from "react"
import { cn } from "@/lib/utils"
import { Home, File, ChartLine, User, Users2 } from "lucide-react"

// Menu items.
const items = [
    {
        title: "Overview",
        url: "#",
        icon: Home
    },
    {
        title: "Reports",
        url: "#",
        icon: File,
    },
    {
        title: "Events",
        url: "#",
        icon: ChartLine,
    },
    {
        title: "People",
        url: "#",
        icon: User,
    },
    {
        title: "Audiences",
        url: "#",
        icon: Users2,
    },
]
interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    onPathnameChange?: (pathname: string) => void
}

export default function SidebarNav({ className, ...props }: SidebarNavProps) {
    const [pathname, setPathname] = React.useState("Overview");

    return (
        <nav
            className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
                className
            )}
            {...props}
        >
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    className={cn(
                        pathname === item.title
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                        "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 justify-start"
                    )}
                    onClick={() => {
                        setPathname(item.title);
                        props.onPathnameChange?.(item.title);
                    }}
                >
                    {item.icon && <item.icon />}
                    <div className="hidden sm:block">
                        {item.title}
                    </div>
                </a>
            ))}
        </nav>
    )
}