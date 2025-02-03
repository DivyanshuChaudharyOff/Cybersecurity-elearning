import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <span className="font-bold">CyberEdu</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/courses" className="transition-colors hover:text-primary">
            Courses
          </Link>
          <Link href="/certifications" className="transition-colors hover:text-primary">
            Certifications
          </Link>
          <Link href="/resources" className="transition-colors hover:text-primary">
            Resources
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

