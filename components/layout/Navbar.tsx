import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="h-14 border-b flex items-center px-4 gap-4">

      {/* Left — trigger + logo */}
      <SidebarTrigger />
      <Link href="/dashboard">
        {/* Show in light mode */}
        <Image
            src="/black-logo.webp"
            alt="CloudLeads"
            width={32}
            height={32}
            className="block dark:hidden"
        />
        {/* Show in dark mode */}
        <Image
            src="/white-logo.webp"
            alt="CloudLeads"
            width={32}
            height={32}
            className="hidden dark:block"
        />
      </Link>

      {/* Center — search */}
      <div className="flex-1 max-w-sm">
        <Input placeholder="Search leads..." />
      </div>

      {/* Right — links + avatar */}
      <div className="ml-auto flex items-center gap-4">
        <Link href="/dashboard/leads" className="text-sm text-muted-foreground hover:text-foreground">
          Leads
        </Link>
        <Link href="/dashboard/settings" className="text-sm text-muted-foreground hover:text-foreground">
          Settings
        </Link>
        <Link href="/dashboard/help" className="text-sm text-muted-foreground hover:text-foreground">
          Help
        </Link>
        <Avatar className="w-8 h-8">
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
      </div>

    </header>
  )
}