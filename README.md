## Express wi-fi by Facebook automated script

To start `npm start`

### Pre-requisites

`Login to Express wifi app first before executing the script.`

### Node.js version

```bash
$ node -v
v16.10.0
```

### Purpose of this script?

> Express wi-fi gives 100mb data pack by watching ads of 30-35 seconds.
> So, I have to watch 35second ad and after watching that ad, I got only 100mb.
> I just automate this task using the power of `javascript` & `selenium`

### What this script do?

1. It opens the new chrome window
2. Enters the URL
3. Wait for page to load
4. Then it finds the button which shows the advertise and clicks it.
5. Wait for 40seconds till advertisement video finish
6. Exit the browser

### Things to improve

1. In Parallel execution of script sometimes browser window shall not quit.
2. Quit the window after all promise fulfilled.
3. Wait for the exact amount of time by detecting video length rather than static time.
