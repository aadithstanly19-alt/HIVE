// notifications.js - Background Background notification interval for Hive Learning

const HiveNotifications = {
  checkInterval: null,
  hasPermission: false,

  init: function() {
    this.requestPermission();
    // Run a check every 1 minute
    this.checkInterval = setInterval(() => this.checkUpcomingEvents(), 60000);
    // Initial check right away
    setTimeout(() => this.checkUpcomingEvents(), 2000);
  },

  requestPermission: function() {
    if (!("Notification" in window)) {
      console.warn("This browser does not support desktop notifications.");
      return;
    }

    if (Notification.permission === "granted") {
      this.hasPermission = true;
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          this.hasPermission = true;
        }
      });
    }
  },

  checkUpcomingEvents: function() {
    if (!this.hasPermission) return;

    const storedStr = localStorage.getItem('hive_calendar_events');
    if (!storedStr) return;

    try {
      const events = JSON.parse(storedStr);
      const now = new Date();
      
      const todayString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      
      events.forEach(ev => {
        if (ev.date === todayString) {
          // Compare times
          const [evH, evM] = ev.time.split(':').map(Number);
          const eventTime = new Date();
          eventTime.setHours(evH, evM, 0, 0);

          const diffMinutes = Math.floor((eventTime.getTime() - now.getTime()) / 60000);

          // We check if exactly 15 minutes away to avoid spamming
          // OR if exactly 0 minutes (starting now)
          const notificationKey = `notified_${ev.id}_${diffMinutes}`;
          const alreadyNotified = localStorage.getItem(notificationKey);

          if (!alreadyNotified) {
            if (diffMinutes === 15) {
              this.sendNotification("Upcoming Hive Event in 15 mins", `${ev.title} is starting soon (${ev.time})!`);
              localStorage.setItem(notificationKey, "true");
            } else if (diffMinutes === 0) {
              this.sendNotification("Hive Event Starting Now", `${ev.title} is starting now!`);
              localStorage.setItem(notificationKey, "true");
            }
          }
        }
      });
    } catch (e) {
      console.error("Failed to parse calendar events for checking", e);
    }
  },

  sendNotification: function(title, body) {
    if (this.hasPermission) {
      new Notification(title, {
        body: body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3602/3602145.png' // Generic hex icon
      });
    }
  }
};

// Initialize immediately so all pages run this background task
HiveNotifications.init();
