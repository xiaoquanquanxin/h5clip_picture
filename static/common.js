/**
 * Created by Administrator on 2019/3/21.
 */

/***
 *
 * 别在这里写东西!!
 *
 * */

function getMid() {
    var userInfoData = null;
    if (typeof (H5CallNativieUtils) != "undefined") {
        userInfoData = JSON.parse(H5CallNativieUtils.getUserInfo());
    }
    return userInfoData.mid;
}
