// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAxdGbBiX_L9uIu0KotlTbWzgH9roIVnls",
	authDomain: "generic-sensor-display.firebaseapp.com",
	projectId: "generic-sensor-display",
	storageBucket: "generic-sensor-display.appspot.com",
	messagingSenderId: "78111896061",
	appId: "1:78111896061:web:c225fdd3996e33ff60e994",
};
window.dataLayer = window.dataLayer || [];
// Google Analytics
// function gtag() {
// 	dataLayer.push(arguments);
// }
// gtag("js", new Date());
// if (window.location.hostname == "localhost") {
// 	//TODO Can be removed for deployment
// 	gtag("config", "UA-*********-*", { debug_mode: true });
// 	gtag("config", "G-**********", { debug_mode: true });
// } else {
// 	gtag("config", "UA-*********-*");
// 	gtag("config", "G-**********");
// }
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
