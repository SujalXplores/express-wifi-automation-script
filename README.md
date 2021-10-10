## Express wi-fi by Facebook automated script

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

> Express wi-fi gives 100mb data pack by watching ads of 30-35 seconds.
> So, I have to watch 35second ad and after watching that ad, I got only 100mb.
> I just automate this task using the power of `javascript` & `selenium`

### What this script do?

1. It opens the new 4 chrome windows parallel
2. Enters the URL
3. Wait for page to load
4. Then it finds the button which shows the advertise and clicks it.
5. Wait for 40seconds till advertisement video finish
6. Exit the browser

### Things to improve

1. Find a way to wait until the button loads properly in the DOM.
