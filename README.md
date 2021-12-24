## Express wi-fi by Facebook automated script

[![HitCount](http://hits.dwyl.com/SujalShah3234/express-wifi-automation-script.svg)](http://hits.dwyl.com/SujalShah3234/express-wifi-automation-script)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)
[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)

---

## ⚡ Working demo

![demo](https://github.com/SujalShah3234/express-wifi-automation-script/blob/master/screenshots/working-demo.png)

---

To start `npm start`

### Pre-requisites

```
1. Node.js installed.
2. Express wi-fi by Facebook coverage in your local area.
2. Login to Express wifi app first before executing the script.
```

### Node.js version

`v16.10.0`

### Purpose of this script?

> Express wi-fi gives 1GB data pack by watching ads of 30-35 seconds.
> So, I have to watch 35second ad and after watching that ad, I got only 100mb.
> I just automate this task using the power of `javascript` & `selenium`

### What this script do?

1. It opens the new 4 chrome windows parallel
2. Enters the URL
3. Waits for the page to load
4. Wait till advertisement video finish
5. Exit the browser

### Things to improve

1. Add more catch methods to handel errors with more precise error messages.
2. Instead of using multiple calls in Promise.all(), use a single call with multiple tabs.
3. Add function to check if device is connected to internet & with express-wifi.

---

P.S. This script is not for commercial use and only for educational purpose only.
