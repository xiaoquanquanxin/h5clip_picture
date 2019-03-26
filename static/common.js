/**
 * Created by Administrator on 2019/3/21.
 */

/***
 *
 * 别在这里写东西!!
 *
 * */
//  获取用户信息
function getUserInfo() {
    var userInfo = null;
    if (typeof  (H5CallNativieUtils) != 'undefined') {
        userInfo = JSON.parse(H5CallNativieUtils.getUserInfo());
    }
    return userInfo;
}
//  mid
function getMid() {
    return getUserInfo().mid;
}
//  app版本号
function getAppVersion() {
    return getUserInfo().appVersion;
}

//  手机操作系统
function getPlatform() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    if (isAndroid) {
        return 'isAndroid';
    }
}
//  判断版本
var defaultVersion = '3.0.2'.split('.');
function checkVersion(val) {
    var _temp = val.split('.');
    if (_temp.length !== 3) {
        return true
    }
    for (var i = 0; i < defaultVersion.length; i++) {
        if (defaultVersion[i] > _temp[i]) {
            return false;
        } else if (defaultVersion[i] < _temp[i]) {
            return true;
        }
    }
    return true;
}

