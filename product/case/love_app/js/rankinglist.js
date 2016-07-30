/* jary */
/* 2015.09.24 */

//全局变量
var wrapThis = $('#container');//获取最外层容器
var pageLength = 20;//数据加载长度

//获取json数据
function listAjax(index, sub, startPage) {
    var listData = $('#listData'), dataUrl = '';
    if(index == 0 && sub == 0){
        dataUrl = 'wealthListDayData.json';
    }else if(index == 0 && sub == 1){
        dataUrl = 'wealthListAllData.json';
    }else if(index == 1 && sub == 0){
        dataUrl = 'charmListDayData.json';
    }else if(index == 1 && sub == 1){
        dataUrl = 'charmListAllData.json';
    };
    $.ajax(dataUrl, {
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
                handleData(value, index, sub, startPage);//处理数据
            };
        }
    });
};

//处理数据
function handleData(data, index, sub, startPage){
    var loading = $('#loading');
    var listData = $('#listData'), listHtml = '';
        loading.remove();
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

        listHtml += '<li class="' + order + ' clearfix"><div class="ranking"><span>' + (key + 1) + '</span></div><div class="photo"><span style="background-image:url(' + value.imgUrl + ')"></span></div><div class="info"><span class="name">' + value.DisplayName + '</span><span class="sex ' + value.UserSex + '"><i class="icon"></i><i class="age">' + value.UserAge + '</i></span><span class="label ' + label + '"><i class="icon"></i><i class="text">' + value.UserLabel + '</i></span><em class="change ' + change + '"><i class="icon"></i><i class="num">' + Math.abs(value.UserChange) + '</i></em></div></li>';
    });
    listData.find(".content-slide").eq(sub).append(listHtml).attr("data-index", index).attr("data-page", startPage);
};

//滚动加载数据
function scrollAction(ele, sub){
    var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
    var nScrollTop = 0;   //滚动到的当前位置
    var nDivHeight = ele.height();
    ele.off().on('scroll', function(){
        nScrollHight = $(this)[0].scrollHeight;
        nScrollTop = $(this)[0].scrollTop;
        if(nScrollTop + nDivHeight >= nScrollHight){
            var startPage = ele.attr('data-page');
            var index =  ele.attr('data-index')
            listAjax(index, sub, parseInt(startPage) + 1);
        };
    });
};

//加载默认数据
function defualtData(){
    //第一个0表示财富榜，1表示魅力榜;第二个0表示日榜，1表示总榜；第三个0表示从第1页获取数据
    listAjax(0, 0, 0);//获取json数据
    listAjax(0, 1, 0);//获取json数据
};

//执行方法
$(function () {
    defualtData();//加载默认数据

    var wrapTitle = $('#wrapTitle');
    var listData = $('#listData');
        listData.find(".swiper-slide ul").css("min-height", "101%");

    var wHeight = $(window).outerHeight();
    var mHeight = wrapTitle.outerHeight();
    var pHeight = listData.find(".swiper-pagination").outerHeight();
        listData.find(".swiper-slide").css("height", wHeight - mHeight - pHeight);

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        width: window.innerWidth,//在Swiper隐藏状态下初始化时设定宽度
        onInit:function(){
            var firstName = $(this.pagination).attr('data-firstname');
            var lastName =  $(this.pagination).attr('data-lastname');
            var spanBtn = $(this.pagination).find('span');
            spanBtn.eq(0).html(firstName);
            spanBtn.eq(1).html(lastName);
            spanBtn.on("click", function(){
                scrollAction(listData.find(".swiper-slide").eq($(this).index()), $(this).index());
            });
        },
        onSlideChangeEnd:function(){
            if($(".swiper-slide-active").index() == 0){
                scrollAction(listData.find(".swiper-slide").eq(0), 0);
            }else if($(".swiper-slide-active").index() == 1){
                scrollAction(listData.find(".swiper-slide").eq(1), 1);
            };
        }
    });
    wrapTitle.on('click', 'li', function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        listData.find(".content-slide").html('');//清空原数据
        listAjax($(this).index(), 0, 0);//获取json数据
        listAjax($(this).index(), 1, 0);//获取json数据
    });
});

$(window).resize(function(){
    var wrapTitle = $('#wrapTitle');
    var listData = $('#listData');
    var wHeight = $(window).outerHeight();
    var mHeight = wrapTitle.outerHeight();
    var pHeight = listData.find(".swiper-pagination").outerHeight();
        listData.find(".swiper-slide").css("height", wHeight - mHeight - pHeight);
});