# OpenSSL Keygen VSCode Extension

<div style="border-radius: 1em; overflow: hidden;"><img alt="OpenSSL Keygen Logo" src="https://res.cloudinary.com/coderabbi/image/upload/v1708210115/openssl-keygen/txhqpoeneyuaxwb50jyd.png" /></div>

This VSCode extension allow you to generate a standard openssl secure key on the fly. Can be useful when in need of a cryptographic key or a unique secret for your application.

### Features 📙

- Generate a unique/secure secret key for your application
- Generate unique secret key from inside an active editor menu options

<div style="border-radius: 1em; overflow: hidden;"><img alt="OpenSSL Keygen Demo" src="https://res.cloudinary.com/coderabbi/image/upload/v1708210119/openssl-keygen/m9u1stprkzfizahmbhat.gif" /></div>

### Installation 📝

#### Via in-app extension view

1. Launch Visual Studio Code.
1. Go to the Extensions view by clicking on the square icon on the left sidebar or by using the shortcut `Cmd+Shift+X` or `Ctrl+Shift+X` on windows.
1. Search for "OpenSSL Keygen" in the Extensions marketplace.
1. Click the "Install" button next to the "OpenSSL Keygen" extension.
1. Once installed, you can find the extension in the command palette.

#### Via online VSCode marketplace

1. Head over to https://marketplace.visualstudio.com/items?itemName=coderabbi.openssl-keygen and click the "Install" button.
1. Follow step 4 and 5 above

### Usage 🛠️

1. Open a text editor.
1. Toggle the command palette using the shortcut `Cmd+Shift+P` or `Ctrl+Shift+P` on windows and search for `Generate an OpenSSL secret key`.
1. After selecting the command, a unique key would be generated and pasted in the active editor.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Via Command Palette" src="https://res.cloudinary.com/coderabbi/image/upload/v1708210115/openssl-keygen/r2yydy08zvi2t2vcwaq4.png" /></div>
1. If there is no active editor, a notificaton box is created with the option to copy the secret key.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Copy Key from Notification" src="https://res.cloudinary.com/coderabbi/image/upload/v1708210115/openssl-keygen/lijakxtzgnbkcl9p3tey.png" /></div>

OR

1. Open a text editor.
1. Right Click and select `Generate OpenSSL secret` in the dropdown menu.
   <div style="border-radius: 1em; overflow: hidden;"><img alt="Via Editor Context Menu" src="https://res.cloudinary.com/coderabbi/image/upload/v1708210116/openssl-keygen/br2gest2nvzweqownbv5.png" /></div>

### Extension Deactivation 😔

The extension is deactivated automatically when you close Visual Studio Code or manually disable the extension in the Extensions view.

### Troubleshooting 🐛

- Error **"OpenSSL Command Error"**: Usually a windows OS error - This occurs when there's a problem in running the key generation command. Check that `openssl` is installed correctly on windows.
- Error: **"STDERR error"**: Same as above, but more general. Pls see full error for more details about this error.

### Feedback and Contributions 👂

In case of any errors or issues, appropriate error messages will be displayed, indicating the problem encountered. Refer to the [Troubleshooting](#Troubleshooting) section of this docs and try to fix the issue based on the error message. If the error persists, please create an issue [here](https://github.com/emekaorji/openssl-keygen/issues/new?title=).

Feel free to also create a PR if you are willing to address an issue or add a new feature and I'll take a look as soon as possible.

For any other feedback, please reach out to me on Twitter (@code_rabbi).

Enjoy! 💙
