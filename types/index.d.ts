// Type definitions for cordova-plugin-chooser
// Project: https://github.com/cyph/cordova-plugin-chooser
// Definitions by: ThangHuuVu https://github.com/ThangHuuVu

interface IFileChooser {
	getFile(
		accept?: string,
		successCallback?: (selectedFile: IFile| undefined) => void,
		failureCallback?: () => void): void | Promise<IFile> | undefined;
	getFileMetadata(
		accept?: string,
		successCallback?: (selectedFile: IFile| undefined) => void,
		failureCallback?: () => void): void | Promise<IFile> | undefined;
}

export interface IFile {
	name: string;
	data?: string;
	mediaType: string;
	uri: string;
	dataURI: string;
}