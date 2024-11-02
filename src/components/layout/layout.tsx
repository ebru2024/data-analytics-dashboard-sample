
import { Separator } from "../ui/separator"
import SidebarNav from "./sidebar-nav"
import Header from "./header"

export default function Layout({ children, onPathnameChange }: { children: React.ReactNode, onPathnameChange?: (pathname: string) => void }) {
    return (
        <div className="md:block">
            <Header />
            <Separator />
            <div className="flex flex-1 flex-col lg:flex-row">
                <aside className="mx-2 lg:-mx-4 lg:w-1/5 p-5">
                    <SidebarNav onPathnameChange={onPathnameChange} />
                </aside>
                <div className="flex flex-1 flex-col lg:flex-row">
                    <Separator orientation="vertical" />
                    {children}
                </div>
            </div>
        </div>
    )
}
