if ('Notification' in window && 'serviceWorker' in navigator) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Welcome to My PWA!', {
          body: 'Thanks for enabling notifications.',
          icon: '/images/icons/icon-192x192.png',
        });
      });
    }
  });
}
