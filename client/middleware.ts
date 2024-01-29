import { NextRequest, NextResponse } from 'next/server';

const authURL = process.env.BASE_URL + "auth/login";

export async function middleware(req: NextRequest) {
    console.log('--- middleware ---')
    const token = req.cookies.get('access_token');
    console.log(token)
    if (!token) return NextResponse.redirect(authURL);
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/user/:path*", "/user/:slug*"]
};