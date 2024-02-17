# Speed Test VSCode Extension

<div style="border-radius: 1em; overflow: hidden;"><img alt="Speed Test Logo" src="https://raw.githubusercontent.com/emekaorji/speed-test/main/assets/logo2.png" /></div>

This VSCode extension allow you to test your internet upload and download speed right in your IDE.

### Features 📙

- Test Upload and Download Speed
- Save test results and see last test time stamp

### Installation 📝

1. Launch Visual Studio Code.
1. Go to the Extensions view by clicking on the square icon on the left sidebar or by using the shortcut `Ctrl+Shift+X`.
1. Search for "Speed Test" in the Extensions marketplace.
1. Click the "Install" button next to the "Speed Test" extension.
1. Once installed, you can find the extension running in your status bar.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Loading" src="https://raw.githubusercontent.com/emekaorji/speed-test/main/assets/loading.png" /></div>

### Usage 🛠️

1. Launch Visual Studio Code and Speed Test should begin running.
1. To see the progress of the current running test, click on the extension's button in the status bar.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Progress" src="https://raw.githubusercontent.com/emekaorji/speed-test/main/assets/progress.png" /></div>
1. "Cancel" to stop the test immediately.
1. You can "Run again" after a test has been aborted or completed.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Success" src="https://raw.githubusercontent.com/emekaorji/speed-test/main/assets/success.png" /></div>
1. In case of any errors or issues, appropriate error messages will be displayed, indicating the problem encountered. Refer to the #Troubleshooting section of this docs and try to fix the issue based on the error message. If the error persists, please reach out to me via Twitter DM (@code_rabbi).

### Extension Deactivation 😔

The extension is deactivated automatically when you close Visual Studio Code or manually disable the extension in the Extensions view.

### Troubleshooting 🐛

- Warning **"Speed Test Aborted"**: This occurs when a test is cancelled before it is completed.
- Error **"No network error"**: Make sure your device is connected to the internet before running the test again.
- Error: **"Service Error"**: There is a problem with our speed test service. Pls create an issue [here](https://github.com/emekaorji/speed-test/issues/new?title=Service+Error+net::ERR_SSL_PROTOCOL_ERROR) to notify us immediately.

### Future Updates

- Disable speed test from running on startup
- DND: Don't show any notifications at all. Only show test in status bar
- Show extra network information, e.g latency, buffer bloat, etc.

### Feedback and Contributions 👂

If you have any feedback, suggestions, or bug reports, please reach out to me on Twitter (@code_rabbi)

Enjoy! 💙
