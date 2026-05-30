import Link from "next/link"
import { Navigation } from "@/components/navigation"

interface ArticleLayoutProps {
  children: React.ReactNode
}

export function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fdf8f3]">
      <Navigation />
      <div className="pt-20">
        {children}
      </div>
    </div>
  )
}
