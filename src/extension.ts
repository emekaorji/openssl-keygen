import { exec } from 'node:child_process';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	function init() {
		try {
			exec('openssl rand -base64 32', (error, stdout, stderr) => {
				if (error) {
					vscode.window.showErrorMessage(
						`Error occured in executing openssl command. For windows OS, check that you have openssl installed correctly: ${error.message}`,
					);
					return;
				}

				if (stderr) {
					vscode.window.showErrorMessage(`STDERR error: ${stderr}`);
					return;
				}

				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					vscode.window.showWarningMessage('Pls open an editor to use this command');
					return;
				}

				// Gets the current cursor position
				const position = editor.selection.active;

				// Inserts the command output at the cursor position
				editor.edit((editBuilder) => {
					editBuilder.insert(position, stdout.trim());
				});
			});
		} catch (error) {
			vscode.window.showErrorMessage(`An error occurred in generating secret: ${error}`);
		}
	}

	const disposable = vscode.commands.registerTextEditorCommand('OpenSSLKeygen.generateKey', init);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
