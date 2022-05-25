// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAxdGbBiX_L9uIu0KotlTbWzgH9roIVnls",
	authDomain: "generic-sensor-display.firebaseapp.com",
	projectId: "generic-sensor-display",
	storageBucket: "generic-sensor-display.appspot.com",
	messagingSenderId: "78111896061",
	appId: "1:78111896061:web:806a6fba1b5de05060e994",
	measurementId: "G-RJF2G33QR3",
};
window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());
if (window.location.hostname == "localhost") {
	//TODO Can be removed for deployment
	// gtag('config', 'UA-148151012-3', {'debug_mode':true});
	gtag("config", "G-RJF2G33QR3", { debug_mode: true });
} else {
	// gtag('config', 'UA-148151012-3');
	gtag("config", "G-RJF2G33QR3");
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
