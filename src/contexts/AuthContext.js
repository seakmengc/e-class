// import { createContext, useContext, useState } from 'react'

// const AuthContext = createContext()

// export function AuthProvider({ children }) {
//   const [auth, setAuth] = useState({
//     user: null,
//     isLogin: false,
//     accessToken: null
//   })

//   async function login() {

//   }
// }
// const setAuthContext = (context, data, refreshTokenGql) => {
//   console.log('try set authContext')

//   if (data.refresh_token) {
//     localStorage.setItem('refreshToken', data.refresh_token)
//   }

//   context.isLogin = true
//   context.accessToken = data.access_token
//   context.user = data.user

//   console.log(context)

//   // setTimeout(
//   //   context.refreshToken,
//   //   data.expires_in * 1000,
//   //   refreshTokenGql,
//   //   context
//   // )
// }

// const AuthContext = createContext({
//   user: null,
//   isLogin: false,
//   accessToken: null,
//   login: async (loginGql, context, refreshTokenGql) => {
//     const res = await loginGql()

//     setAuthContext(context, res.data.login, refreshTokenGql)
//   },
//   logout: async (logoutGql, context) => {
//     await logoutGql()

//     localStorage.removeItem('refreshToken')
//     context.isLogin = false
//     context.accessToken = null
//     context.user = null
//   },
//   refreshToken: async (refreshTokenGql, context) => {
//     console.log('try refresh token')

//     try {
//       let res = await refreshTokenGql({
//         variables: {
//           refreshToken: localStorage.getItem('refreshToken'),
//         },
//       })

//       // let me = await meGql()
//       // console.log(me);
//       setAuthContext(context, res.data.refreshToken, refreshTokenGql)
//       console.log('done refresh token')
//     } catch (e) {
//       console.log(e)
//       localStorage.removeItem('refreshToken')
//       return
//     }
//   },
// })

// export { AuthContext, setAuthContext }
