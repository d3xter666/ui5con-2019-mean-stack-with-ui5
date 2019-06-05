// Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);

function saveBeforeInstallPromptEvent(evt) {
	// Add code to save event & show the install button.
	deferredInstallPrompt = evt;
	installButton.removeAttribute('hidden');

	// Add code show install prompt & hide the install button.
	deferredInstallPrompt.prompt();
	// Hide the install button, it can't be called twice.
	evt.srcElement.setAttribute('hidden', true);

	//Log user response to prompt.
	deferredInstallPrompt.userChoice
	.then((choice) => {
	if (choice.outcome === 'accepted') {
		console.log('User accepted the A2HS prompt', choice);
	} else {
		console.log('User dismissed the A2HS prompt', choice);
	}

	deferredInstallPrompt = null;

	});
}

function logAppInstalled (evt) {
	// Add code to log the event
	console.log('Weather App was installed.', evt);
}