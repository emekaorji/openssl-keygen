/* eslint-disable prefer-promise-reject-errors */
import { exec } from 'node:child_process';

import * as vscode from 'vscode';

async function runSSLCommand(): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		try {
			exec('openssl rand -base64 32', (error, stdout, stderr) => {
				if (error) {
					reject({ type: 'openssl-command-error', errorObject: error });
					return;
				}

				if (stderr) {
					reject({ type: 'stderr-error', errorObject: stderr });
					return;
				}

				resolve(stdout.trim());
			});
		} catch (error) {
			reject(error);
		}
	});
}

async function keygenProvider() {
	try {
		const result = await runSSLCommand();

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			const selection = await vscode.window.showInformationMessage(
				`Succesfully generated secret key: ${result}`,
				'Copy',
			);
			if (selection === 'Copy') {
				vscode.env.clipboard.writeText(result);
			}
			return;
		}

		// Gets the current cursor position
		const position = editor.selection.active;

		// Inserts the command output at the cursor position
		editor.edit((editBuilder) => {
			editBuilder.insert(position, result);
		});
	} catch (error: any) {
		if (error.type === 'openssl-command-error') {
			vscode.window.showErrorMessage(
				`Error occured in executing openssl command. For windows OS, check that you have openssl installed correctly: ${error?.errorObject?.message}`,
			);
		} else if (error.type === 'stderr-error') {
			vscode.window.showErrorMessage(`STDERR error: ${error?.errorObject}}`);
		} else {
			vscode.window.showErrorMessage(`An error occurred in generating secret: ${error}`);
		}
	}
}

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('OpenSSLKeygen.generateKey', keygenProvider);
	const disposable2 = vscode.commands.registerTextEditorCommand(
		'OpenSSLKeygen.generateKeyInEditor',
		keygenProvider,
	);

	context.subscriptions.push(disposable, disposable2);
}

export function deactivate() {}
