/* jary */
/* 2015.09.24 */

//全局变量
var wrapThis = $('#container');//获取最外层容器
var pageLength = 20;//数据加载长度

//获取json数据
function listAjax(index, startPage) {
    var listData = $('#listData'), dataUrl = '';
    if(index == 0){
        $.ajax('abilityListData.json', {
            //type: 'POST',
            type: 'GET',
            dataType: 'json',
            data:{
                startIndex: startPage * pageLength,
                length: pageLength
            },
            beforeSend: function(){
                wrapThis.append('<div class="loading" id="loading"></div>');
            },
            success: function (value) {
                if (value.ResultNo == 0) {
                    handleListData(value, startPage);//处理列表数据
                };
            }
        });
    }else if(index == 1){
        $.ajax('abilityUserData.json', {
            //type: 'POST',
            type: 'GET',
            dataType: 'json',
            success: function (value) {
                if (value.ResultNo == 0) {
                    handleUserData(value);//处理用户数据
                };
            }
        });
    };
};

//处理列表数据
function handleListData(data, startPage){
    var loading = $('#loading');
        loading.remove();
    var listData = $('#listData'), listHtml = '';
        data = data.ResultAttachObject.Items;
    $.each(data, function(key, value){
        var order, label, change;
        if(key == 0){
            order = 'first';
        }else if(key == 1){
            order = 'second';
        }else if(key == 2){
            order = 'third';
        }else{
            order = '';
        };//序号
        if(value.UserLabel == '见习恋人'){
            label = 'a';
        }else if(value.UserLabel == '初级恋人'){
            label = 'b';
        }else if(value.UserLabel == '高级恋人'){
            label = 'c';
        }else if(value.UserLabel == '恋爱达人'){
            label = 'd';
        }else if(value.UserLabel == '恋爱大师'){
            label = 'e';
        }else if(value.UserLabel == '特约恋人'){
            label = 'f';
        }else if(value.UserLabel == '心理咨询'){
            label = 'g';
        }else if(value.UserLabel == '占卜师'){
            label = 'h';
        }else if(value.UserLabel == '声优'){
            label = 'i';
        };//标签样式

        if(value.UserChange > 0){
            change = 'up';
        }else if(value.UserChange < 0){
            change = 'down';
        }else{
            change = '';
        };//升降

        listHtml += '<li class="' + order + ' clearfix"><div class="ranking"><span>' + (key + 1) + '</span></div><div class="photo"><span style="background-image:url(' + value.imgUrl + ')"></span></div><div class="info"><span class="name">' + value.DisplayName + '</span><span class="sex ' + value.UserSex + '"><i class="icon"></i><i class="age">' + value.UserAge + '</i></span><span class="label ' + label + '"><i class="icon"></i><i class="text">' + value.UserLabel + '</i></span><em class="value">' + value.UserValue + '</em></div></li>';
    });
    listData.find(".content-slide").append(listHtml).attr("data-page", startPage);
};

//滚动加载数据
function scrollAction(ele){
    var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
    var nScrollTop = 0;   //滚动到的当前位置
    var nDivHeight = ele.height();
    var wDivHeight = $('#wrapCont').height();
    ele.off().on('scroll', function(){
        nScrollHight = $(this)[0].scrollHeight;
        nScrollTop = $(this)[0].scrollTop;
        if(nScrollTop + nDivHeight + wDivHeight >= nScrollHight){
            var startPage = ele.attr('data-page');
            listAjax(0, parseInt(startPage) + 1);
        };
    });
};

//处理用户数据
function handleUserData(data){
    var wrapCont = $('#wrapCont'), userHtml = '', text = '', style = '';
        data = data.ResultAttachObject;
    var textArray = [
        '你实在是太优秀了！位于巅峰的感觉真好！',
        '很不错哦~继续努力登上巅峰！',
        '平均水平以上，总算没有拖后腿。',
        '拖后腿啦！继续努力跟上大部队！',
        '有点危险啦！再不努力有淘汰的危险哦！',
        '已结处于被淘汰的范围啦！快加油脱离！！！'
    ];
    if(data.UserPercent >= 90){
        text = textArray[0];
    }else if(data.UserPercent >= 70){
        text = textArray[1];
    }else if(data.UserPercent >= 50){
        text = textArray[2];
    }else if(data.UserPercent >= 30){
        text = textArray[3];
    }else if(data.UserPercent >= 5){
        text = textArray[4];
    }else{
        text = textArray[5];
        style = 'warn'
    }
    userHtml += '<span class="num">0%</span><p class="text ' + style + '">我超越了<i>' + data.UserPercent + '%</i>恋人<br/>' + text + '</p>';
    wrapCont.html(userHtml);

    var index = 1;
    var numHeight = wrapCont.find('.num').height();
    function numFlash(){        
        setTimeout(function(){
            if(index <= parseInt(data.UserPercent)){
                wrapCont.find('.num').css('background-position-y', numHeight * (100 - index) / 120).html(index + '%');
                wrapCont.find('i').html(index + '%');
                index ++;
                numFlash();//循环
            };
        }, 1000/parseInt(data.UserPercent));
    };
    numFlash();
};

//加载默认数据
function defualtData(){
    //第一个0表示列表数据，1表示用户数据;第二个0表示从第1页获取数据
    listAjax(0, 0);//获取json数据
    listAjax(1, 0);//获取json数据

    var listData = $('#listData');
        scrollAction(listData.find(".content-slide"), 0);
};

//执行方法
$(function () {
    defualtData();//加载默认数据

    var wrapCont = $('#wrapCont');
    var listData = $('#listData');
    var wHeight = $(window).outerHeight();
    var mHeight = wrapCont.outerHeight();
        listData.find(".content-slide").css("height", wHeight - mHeight);
});

$(window).resize(function(){
    var wrapCont = $('#wrapCont');
    var listData = $('#listData');
    var wHeight = $(window).outerHeight();
    var mHeight = wrapCont.outerHeight();
        listData.find(".swiper-slide").css("height", wHeight - mHeight);
});