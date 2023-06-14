// This middleware in the root directory will assure that all of the routes in the matcher array are going to be aviailable only if the user is logged in. If the user is not logged in, the user will be redirected to the login page.
// via URL if use is logged in and type the url on his own


export { default} from 'next-auth/middleware'

export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
}