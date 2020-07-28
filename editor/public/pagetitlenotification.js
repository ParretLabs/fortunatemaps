// https://github.com/CurtTimson/Flashing-Page-Title-Notification/blob/master/PageTitleNotification.js
var windowFocus = true;
var pageTitleNotification = (function (window, document) {
    var config = {
        currentTitle: null,
        interval: null
    };
    var on = function (notificationText, intervalSpeed) {
        if (!config.interval) {
            config.currentTitle = document.title;
            config.interval = window.setInterval(function() {
                document.title = (config.currentTitle === document.title)
                    ? notificationText
                    : config.currentTitle;
            }, (intervalSpeed) ? intervalSpeed : 1000);
        }
    };
    var off = function () {
        if (config.interval) {
            window.clearInterval(config.interval);
            config.interval = null;
            document.title = config.currentTitle;
        }
    };
    return {
        on: on,
        off: off
    };
})(window, document);

var initPageTitleNotification = function() {
    $(window).focus(function() {
        windowFocus = true;
        pageTitleNotification.off();
    }).blur(function() {
        windowFocus = false;
    });
};