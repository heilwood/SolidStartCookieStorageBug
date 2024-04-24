# Steps to reproduce

1. Run app with command `npm run dev`
2. Open url http://localhost:3000
3. Press [Set PL Language and Navigate to About] button
4. Refresh page using F5 or refresh button in browser
5. Press [Set ES language and Navigate to Faq] button
   
Expected result: cookie value should be changed
Actual result: cookie value is not changed, error that cookie blocked appears in Dev Tools -> Application -> Cookies

![image](https://github.com/heilwood/SolidStartCookieStorageBug/assets/27227165/fd74334d-3396-49db-a365-0fcde318104c)
