export default class CookieManager {

    static setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    static getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    static loadCookies() {
        let cookies = {};
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].split('=', 2);
            cookies[c[0].trim()] = c[1].trim();
        }
        return cookies;
    }

    cookiePolicy() {
        if (getCookie("policy") !== '1') {
            if (confirm("This site uses cookies to store user settings/preferences. No personal identification information is saved. By continuing, you are allowing this site to use cookies.")) {
                setCookie("policy", "1", 365);
            } else {
                // don't allow cookies
                $("body").html("<div class='alert alert-info m-4' align='center'>This page requires cookies to operate.</div>");
            }
        }
    }
}