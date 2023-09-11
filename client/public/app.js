if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log("service worker registered", reg))
        .catch((err) => console.log("service worker failed", err))

    // navigator.serviceWorker.register('/service-worker.js').then(registration => {
    //   console.log('ServiceWorker registered with scope:', registration.scope);
    // }).catch(error => {
    //   console.error('ServiceWorker registration failed:', error);
    // });
    // console.log("serviceWorker", navigator)

}