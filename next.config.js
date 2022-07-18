module.exports = {
  extends: ['eslint:recommended', 'next', 'plugin:@next/next/recommended'],
  reactStrictMode: true,
  env: {
    REGISTER_REDIRECT_URL: 'http://localhost:3000/register/complete',
    FORGOT_PASSWORD_REDIRECT: 'http://localhost:3000/login',
    API_URL: 'https://cc-ommerce-backend-five.vercel.app/api',
    FIREBASE: {
      API_KEY: 'AIzaSyA2r_gqjfcQNeoNrf8odzeWXVcdq6mLgqw',
      AUTH_DOMAIN: 'saturdayuni-authentication-app.firebaseapp.com',
      PROJECT_ID: 'saturdayuni-authentication-app',
      STORAGE_BUCKET: 'saturdayuni-authentication-app.appspot.com',
      MESSAGING_SENDER_ID: '775570877133',
      APP_ID: '1:775570877133:web:eea7fba7e9f6cf79665784',
      MEASUREMENT_ID: 'G-YR6FWJZHQ',
    },
  },
}