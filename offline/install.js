// Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);



function saveBeforeInstallPromptEvent(evt) {
	var deferredInstallPrompt = evt,
		installButton = document.getElementById("installer").getElementsByClassName("button")[0];

	// Add event listener for appinstalled event
	installButton.addEventListener('click', installButtonClicked.bind(false, deferredInstallPrompt));
	// Add code to save event & show the install button.

	installButton.removeAttribute('hidden');

}

function installButtonClicked(deferredInstallPrompt, evt) {
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