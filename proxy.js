import { NextResponse } from 'next/server'

let locales = ['fr', 'en']
let defaultLocale = 'fr'

// Get the preferred locale, similar to how a library would
function getLocale(request) {
    const acceptLanguage = request.headers.get('accept-language')
    if (!acceptLanguage) return defaultLocale

    // Simple check for 'en' priority
    if (acceptLanguage.includes('en') && !acceptLanguage.includes('fr')) {
        return 'en'
    }

    // Default to French for this specific site as requested ("Main language is French")
    return defaultLocale
}

export function proxy(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /fr/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|favicon.ico|logo.png|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
