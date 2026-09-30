import { NextResponse, type NextRequest } from "next/server"

// /blog?page=1 duplicates /blog. A config redirect can't do this because Next
// forwards the query string to the destination, which would loop.
export function proxy(request: NextRequest) {
  const url = request.nextUrl
  if (url.searchParams.get("page") === "1") {
    const target = url.clone()
    target.searchParams.delete("page")
    return NextResponse.redirect(target, 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/blog",
}
