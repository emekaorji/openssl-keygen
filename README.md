# OpenSSL Keygen VSCode Extension

<div style="border-radius: 1em; overflow: hidden;"><img alt="OpenSSL Keygen Logo" src="https://raw.githubusercontent.com/emekaorji/openssl-keygen/main/assets/logo2.png" /></div>

This VSCode extension allow you to generate a standard openssl secure key on the fly. Can be used when in need of a cryptographic key or a unique secret for your application.

### Features 📙

- Generate a unique/secure secret key for your application
- Generate unique secret key from inside an ective editor menu options

### Installation 📝

1. Launch Visual Studio Code.
1. Go to the Extensions view by clicking on the square icon on the left sidebar or by using the shortcut `Cmd+Shift+X` or `Ctrl+Shift+X` on windows.
1. Search for "OpenSSL Keygen" in the Extensions marketplace.
1. Click the "Install" button next to the "OpenSSL Keygen" extension.
1. Once installed, you can find the extension in the command palette.

### Usage 🛠️

1. Open a text editor.
1. Toggle the command palette using the shortcut `Cmd+Shift+P` or `Ctrl+Shift+P` on windows and search for `Generate an OpenSSL secret key`.
1. A unique key would be generated and pasted in the text editor.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Via Command Palette" src="https://raw.githubusercontent.com/emekaorji/openssl-keygen/main/assets/command-palette.png" /></div>

OR

1. Open a text editor.
1. Right Click and select `Generate OpenSSL secret` in the dropdown menu.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Via Editor Context Menu" src="https://raw.githubusercontent.com/emekaorji/openssl-keygen/main/assets/editor-context.png" /></div>

### Extension Deactivation 😔

The extension is deactivated automatically when you close Visual Studio Code or manually disable the extension in the Extensions view.

### Troubleshooting 🐛

- Error **"OpenSSL Command Error"**: Usually a windows OS error - This occurs when there's a problem in running the key generation command. Check that `openssl` is installed correctly on windows.
- Error: **"STDERR error"**: Same as above, but more general. Pls see full error for more details about this error.

### Feedback and Contributions 👂

In case of any errors or issues, appropriate error messages will be displayed, indicating the problem encountered. Refer to the [Troubleshooting](#Troubleshooting) section of this docs and try to fix the issue based on the error message. If the error persists, however, please create an issue [here](https://github.com/emekaorji/openssl-keygen/issues/new?title=).

Feel free to also create a PR if you are willing to address an issue or add a new feature and I'll take a look as soon as possible.

For any other feedback, please reach out to me on Twitter (@code_rabbi).

Enjoy! 💙
