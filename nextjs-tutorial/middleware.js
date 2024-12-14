import { NextResponse } from 'next/server';

export function middleware(request) {
//   return Response.json({ msg: 'hello there' });
//   console.log('hello there');
  return NextResponse.redirect(new URL('/', request.url));
};

// export const config = {
//   matcher: '/about',
// };

export const config = {
  matcher: ['/about/:path*', '/query/:path*'],
};