import '../../envConfig.ts'
 
export const CONFIG = {
    GH_CLIENT_ID: process.env.GH_CLIENT_ID!,
    GH_CLIENT_SECRET: process.env.GH_CLIENT_SECRET!,
    GH_REDIRECT_URI: process.env.GH_REDIRECT_URI!,
    GH_OAUTH_STATE: process.env.GH_OAUTH_STATE!,
    DINA_IS_TESING: process.env.DINA_IS_TESING!,
    MY_ENV: process.env.MY_ENV!,
};