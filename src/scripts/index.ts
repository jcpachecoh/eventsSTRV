import { formatDateString } from '../constants/index';
import * as moment from 'moment';
import * as _ from 'lodash';
export function getCookie(cname: any) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export function formatDate(val: any) {
    return moment(val).format(formatDateString);
}

export function deleteCookie(name: any) {
    document.cookie.split(';').forEach(function (c: any) {
        document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    });
}

export function parseJwt(token: any) {
    if (_.isEmpty(token)) {
        return '';
    }

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
