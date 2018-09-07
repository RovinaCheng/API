function ltcLottofun() {
    var ltcLottofun = this;

    var AlertPosition = 'bottom left';
    
    var _CLIPBOARD;

    var tixReinvestBtn = $('#tixReinvest'),
        loginBtn = $('._loginBtn'),
        registerBtn = $('._registerBtn');

    var doLoginBtn = $('#doLoginBtn'),
        doRegisterBtn = $('#doRegisterBtn');

    var loadingModal = $('#loading-modal'),
        loginModal = $('#login-modal'),
        registerModal = $('#register-modal');    

    var loginModalAccountInput = loginModal.find('.accountInput'),
        loginModalPasswordInput = loginModal.find('.passwordInput');
    
    var Lang = {};
    var MsgList = [];
    var hMsgList = $('#_h_msg_list');

    init();
    initEvent();
    return this;
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    function init() {
        setLang();
                // use_clipboard
        clipboard = new ClipboardJS('.use_clipboard');

        clipboard.on('success', function (e) {
            // alertify.success('已複製成功');
        });

        // 訊息出現位置
        alertify.logPosition(AlertPosition);
}
    

    function initEvent() {
       
        doLoginBtn.on('click', function (e) {
            var d = {};
            d.ac = "12";//loginModalAccountInput.val().trim();
            d.pw = "23";//loginModalPasswordInput.val().trim();
            //d._token = $("meta[name='_token']").attr('content');
            console.log(d);

            var sJson = JSON.stringify
                ({
                    ac: "sss",
                    pw: "ccc"
                });

            console.log(sJson);

            $.ajax({
                type: "POST",
                //async為false -> 同步 
                //async為true  -> 非同步
                async: false,
                dataType: "json",
                url: location.origin + '/api/doLogin',
                contentType: 'application/json; charset=UTF-8',
                data: sJson,
                success: function (oJson) {
                    if (oJson.status) {
                        alertify.success(Lang[oJson.msg]);
                        loginModal.modal('hide');
                        alert(playerIdInput.val());
                        location.reload();
                    } else {
                        loginModalAccountInput.val('');
                        loginModalPasswordInput.val('');
                        alertify.error(Lang[oJson.msg]);
                    }
                }
            });


            //$.ajax({
            //    'type': 'POST',
            //    'data': sJson,
            //    'url': location.origin + '/api/doLogin',
            //    'contentType': "application/json; charset=utf-8",
            //    'dataType': 'json',
            //    'error': function (xhr) {
            //        console.log(xhr);
            //    },
            //    'success': function (oJson) {
            //        if (oJson.status) {
            //            alertify.success(Lang[oJson.msg]);
            //            loginModal.modal('hide');
            //            alert(playerIdInput.val());
            //            location.reload();
            //        } else {
            //            loginModalAccountInput.val('');
            //            loginModalPasswordInput.val('');
            //            alertify.error(Lang[oJson.msg]);
            //        }
            //    }
            //});
        });
            }

    function setLang() {
        _Lang = {};
        _Lang.en = {};
        _Lang.zh_tw = {};
        _Lang.zh_cn = {};

        ///////////////////////   zh_tw   //////////////////////////////////
        _Lang.zh_tw.pwd_err_msg_repeat_pwd = '請輸入相同密碼';
        _Lang.zh_tw.pwd_err_msg_member = '帳號密碼錯誤';
        _Lang.zh_tw.pwd_err_msg = '密碼錯誤';
        _Lang.zh_tw.login_ok_msg = '登入成功';
        _Lang.zh_tw.acc_already_exists_msg = '帳號已存在';
        _Lang.zh_tw.add_acc_success_msg = '新增帳號成功';
        _Lang.zh_tw.add_acc_fail_msg = '新增帳號失敗';
        _Lang.zh_tw.buy_name_err_msg = '名字已被使用';
        _Lang.zh_tw.pls_fill_acc_msg = '請填入帳號密碼';
        _Lang.zh_tw.not_signed_msg = '您尚未登入，請先登入再重試.';


        ///////////////////////   zh_cn   //////////////////////////////////
        _Lang.zh_cn.pwd_err_msg_repeat_pwd = '请输入相同密码';
        _Lang.zh_cn.pwd_err_msg_member = '帐号密码错误';
        _Lang.zh_cn.pwd_err_msg = '密码错误';
        _Lang.zh_cn.login_ok_msg = '登入成功';
        _Lang.zh_cn.acc_already_exists_msg = '帐号已存在';
        _Lang.zh_cn.add_acc_success_msg = '新增帐号成功';
        _Lang.zh_cn.add_acc_fail_msg = '新增帐号失败';
        _Lang.zh_cn.pls_fill_acc_msg = '请填入帐号密码';
        _Lang.zh_cn.not_signed_msg = '您尚未登入, 请先登入再重试.';


        ////////////////////////////////////////////////////////////////
        _Lang.en.lucky_bonus_msg = '%s got a lucky bonus %s WCG !!';



        _MsgList = {};
        _MsgList.en = [];
        _MsgList.zh_tw = [];
        _MsgList.zh_cn = [];
        
        //_MsgList.zh_tw[0] = '2018年08月19日 10:00 至 11:00（洛杉磯當地時間），進行升級作業。';

        // Lang.Client = LCApp.Lang.Client || {};
        switch (location.pathname.split("/")[1]) {
            default:
            case 'zh-tw':
                Lang = _Lang.zh_tw;
                MsgList = _MsgList.zh_tw;
                // console.log('set zh_tw');
                break;
            case 'zh-cn':
                Lang = _Lang.zh_cn;
                MsgList = _MsgList.zh_cn;
                // console.log('set zh_tw');
                break;
            case 'en':
                Lang = _Lang.en;
                MsgList = _MsgList.zh_tw;
                // console.log('set en');
                break;
        }
        hMsgList.html(MsgList[Math.floor(Math.random() * 26)]);
        //hMsgList.html(MsgList[0]);
    }    
    
}

$(function () {
    String.prototype.format = function () {
        //将arguments转化为数组（ES5中并非严格的数组）
        var args = Array.prototype.slice.call(arguments);
        var count = 0;
        //通过正则替换%s
        return this.replace(/%s/g, function (s, i) {
            return args[count++];
        });
    };
    $.fn.modal.Constructor.prototype.enforceFocus = function () { };
    $.fn.modal.Constructor.prototype._enforceFocus = function () { };
    LTC_lottofun = new ltcLottofun();
});