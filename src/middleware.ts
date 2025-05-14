import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// This middleware is used to protect certain routes in a Next.js application using Clerk authentication.
const isProtectedRoute = createRouteMatcher(["/add-job", "/jobs(.*)", "/stats"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
  // If the user is not authenticated, redirect them to the sign-in page
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
