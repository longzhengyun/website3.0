<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width" />
<title>携程旅行网: 云海竞赛平台</title>
<meta name="keywords" content="酒店预订,机票预订,旅游度假,商旅管理,酒店预定,机票预定,航班查询,电子客票,机票,酒店,旅行" />
<meta name="description" content="携程旅行网是中国领先的在线旅行服务公司，向超过1400万会员提供集酒店预订、机票预订、度假预订、商旅管理、特惠商户及旅游资讯在内的全方位旅行服务。" />
<link href="css/basis.css" rel="stylesheet" type="text/css" />
<link href="css/seaclouds.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!-- 页头 S -->
<?php include('header.php') ?>
<!-- 页头 E -->
<!-- 轮播图 S -->
<div class="sc-banner">
	<div class="slide-banner">
		<div class="slide-banner-cont"><img src="images/banner.jpg" /><span class="banner-text"><span class="title">云海携程旅行大规模商品图像搜索算法大赛</span><span class="hint">5月17日 凌空SOHO携程总部</span><a href="#" target="_blank" class="btn">了解详情</a></span></div>
		<ul class="banner-nav">
			<li class="cur"></li>
			<li></li>
		</ul>
	</div>
</div>
<!-- 轮播图 E -->
<div class="sc-wrap">
	<!-- 列表 S -->
	<ul class="sc-list">
		<?php for($i=1; $i<=5; $i++) { ?>
		<li class="clearfix">
			<dl class="info">
				<dt><i class="icon"></i><a href="detail.php" class="title" title="携程旅行网大规模商品图像搜索算法大赛">携程旅行网大规模商品图像搜索算法大赛</a></dt>
				<dd class="head"><span class="item">状态</span><span class="item">赛事截止日期</span><span class="item">最高奖金</span><span class="item">参赛人数</span></dd>
				<dd class="cont"><span class="item ongoing">进行中</span><span class="item">2016/05/01</span><span class="item">15,000,000</span><span class="item">3227</span></dd>
			</dl>
			<p class="text"><span>赛题简介：</span><a href="detail.php" class="title" title="携程旅行网大规模商品图像搜索算法大赛">2015“数据引领 飞粤云端”广东公共交通大数据竞赛，面向全球开放，提供海量公交数据记录，要求选手挖掘市民在公共交通中的行为模式。本场比赛以市民出行公交线路选乘预测为赛题，期望参赛者通过分析广东省部分公交线路的历史公交卡交易数据，挖掘固定人群在公共交通中的行为模式，分析推测乘客的出行习惯和偏好等等...</a></p>
			<a href="detail.php" class="more">了解更多 &gt;</a>
		</li>
		<?php } ?>
	</ul>
	<!-- 列表 E -->
	<!-- 分页 S -->
	<div class="page_box">
		<div class="c_page"><a class="c_up" href="###"><i class="arrow"></i>上一页</a>
			<div class="c_page_list layoutfix">
				<a href="###">1</a>
				<span class="c_page_ellipsis">...</span>
				<a href="###">6</a>
				<a href="###">9</a>
				<a class="current" href="###">10</a>
				<a href="###">11</a> <a href="###">12</a>
				<span class="c_page_ellipsis">...</span>
				<a href="###">999</a>
			</div>
			<a class="c_down" href="###">下一页<i class="arrow"></i></a>
			<a class="c_up_nocurrent" href="###"><i class="arrow"></i>上一页</a>
			<a class="c_down_nocurrent" href="###">下一页<i class="arrow"></i></a>
			<div class="c_pagevalue">到
				<input type="text" name="" class="c_page_num">
				页
				<input type="button" name="" value="确定" class="c_page_submit">
			</div>
		</div>
	</div>
	<!-- 分页 E -->
</div>
<!-- 页脚 S -->
<?php include('footer.php') ?>
<!-- 页脚 E -->
<!-- 弹层 S -->
<div class="pop-box pop-big pop-box-msg">
	<div class="pop-hd"><a href="###" class="c_close">&times;</a></div>
	<div class="pop-bd">
		<div class="text-multi">
			<i class="icon-info margin-r"></i>注册云海需要您已是携程会员
			<p class="text">如果您已是携程的会员，请先<a href="#">登录</a>再来完善云海注册<br/>如果您不是携程会员，请先<a href="#">注册</a>携程账号</p>
		</div>
	</div>
</div>
<!-- 弹层 S -->
</body>
</html>
