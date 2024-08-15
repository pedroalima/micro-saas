import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  const token = request.cookies.get('')
  const pathname = request.nextUrl.pathname

//   console.log({
//     token: token?.value,
//     pathname,
//   })

  return NextResponse.redirect(new URL('/auth', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/app:path*'],
}