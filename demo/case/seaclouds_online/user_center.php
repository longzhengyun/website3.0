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
<div class="sc-wrap">
	<!-- 用户中心 S -->
	<div class="sc-user-info clearfix"><img src="images/user_pic.png" /><span><i class="margin-r">克里斯蒂娜</i>的用户中心</span></div>
	<div class="sc-layout sc-user clearfix">
		<ul class="sc-layout-aside">
			<li class="cur"><a href="user_center.php">参加的活动</a></li>
			<li><a href="user_center_info.php">个人信息</a></li>
			<li><a href="user_center_certified.php">实名认证<i class="tags">HOT</i></a></li>
			<li><a href="user_center_resume.php">个人简历</a></li>
		</ul>
		<div class="sc-layout-main">
			<ul class="user-activity">
				<?php for($i=1; $i<=5; $i++) { ?>
				<li><a class="title" href="detail.php" title="携程旅行网旅游景点搜索算法大赛">携程旅行网旅游景点搜索算法大赛</a><span class="time-end">赛事截止日期 2016/06/14</span><span class="time-join">参加时间：2016/03/10</span></li>
				<?php } ?>
			</ul>
			<div class="state-delivery">
				<div class="text-single"><i class="icon-info margin-r"></i>您尚未参加比赛，<a href="index.php">去看看</a></div>
			</div>
		</div>
	</div>
	<!-- 用户中心 E -->
</div>
<!-- 页脚 S -->
<?php include('footer.php') ?>
<!-- 页脚 E -->
</body>
</html>
