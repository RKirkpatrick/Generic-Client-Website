// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAxdGbBiX_L9uIu0KotlTbWzgH9roIVnls",
	authDomain: "generic-sensor-display.firebaseapp.com",
	projectId: "generic-sensor-display",
	storageBucket: "generic-sensor-display.appspot.com",
	messagingSenderId: "78111896061",
	appId: "1:78111896061:web:0c35e617c78c8f9a60e994",
	measurementId: "G-T5QB6511Z3",
};
window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());
if (window.location.hostname == "localhost") {
	//Can be removed for deployment
	// gtag("config", "UA-148151012-3", { debug_mode: true });
	gtag("config", "G-T5QB6511Z3", { debug_mode: true });
} else {
	// gtag("config", "UA-148151012-3");
	gtag("config", "G-T5QB6511Z3");
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
