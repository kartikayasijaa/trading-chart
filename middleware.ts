export { default } from "next-auth/middleware"

export const config = { matcher: ["/((?!auth).*)"] }


// import { withAuth } from "next-auth/middleware"

// export default withAuth({
//   pages: {
//     signIn: '/auth' // Replace with your sign-in page
//   }
// })

// export const config = { matcher: ["/((?!auth).*)"] }