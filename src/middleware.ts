import { getRouter } from './utils/router.util';
import routers from './constants/router.constant';
import { URLPatternRouter } from './types/router.type';
import { getSession, isInvalidRole } from './utils/middleware.util';
import { NextRequest, NextResponse, URLPattern } from 'next/server';

const urlPatterns = Object.entries(routers).reduce((acc, [key, value]) => {
  acc.push({
    ...value,
    name: key,
    pattern: new URLPattern({ pathname: value.pattern }),
  });

  return acc;
}, [] as Array<URLPatternRouter>);

export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_NODE_ENV === undefined) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const router = urlPatterns.find((item) => item.pattern.test({ pathname }));

  if (!router) {
    return NextResponse.next();
  }

  const { private: isPrivate, roles } = router;

  // Get session
  const session = getSession();

  // Unauthenticated access
  // If the route is private and the user is not authenticated, redirect to login
  if (!session) {
    if (isPrivate) {
      const newUrl = new URL(getRouter('login'), request.url);
      newUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(newUrl);
    }

    return NextResponse.next();
  }

  // Authenticated access
  // If the route is public(private === false) and the user is authenticated, redirect to the top page
  if (isPrivate === false) {
    return NextResponse.redirect(new URL(getRouter('top'), request.url));
  }

  // Handle role-based access control
  if (isInvalidRole(roles, '')) {
    return NextResponse.rewrite(new URL(getRouter('403'), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
