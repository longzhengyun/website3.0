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
			<li><a href="user_center.php">参加的活动</a></li>
			<li><a href="user_center_info.php">个人信息</a></li>
			<li class="cur"><a href="user_center_certified.php">实名认证<i class="tags">HOT</i></a></li>
			<li><a href="user_center_resume.php">个人简历</a></li>
		</ul>
		<div class="sc-layout-main">
			<p class="certified-hint"><i class="icon-alert-small margin-r"></i>为了您能在云海平台中的比赛顺利进行，请完成身份认证</p>
			<ul class="user-certified">
				<li>
					<span class="title">身份认证（必选）</span>
					<span class="text">请确保上传的照片清晰有效，若未通过审核，您只有一次补提交被审核的机会</span>
					<a href="user_center_identity.php" class="btn btn-fill btn-primary btn-w140">立即认证</a>
				</li>
				<li>
					<span class="title">学历认证（可选）</span>
					<span class="text">请确保上传的照片清晰有效，若未通过审核，您只有一次补提交被审核的机会</span>
					<a href="user_center_diploma.php" class="btn btn-fill btn-primary btn-w140">立即认证</a>
				</li>
				<li>
					<span class="title">身份认证（必选）</span>
					<span class="text">请确保上传的照片清晰有效，若未通过审核，您只有一次补提交被审核的机会</span>
					<a href="javascript:;" class="btn btn-fill btn-primary btn-w140">审核中</a>
				</li>
				<li>
					<span class="title">学历认证（可选）</span>
					<span class="text">请确保上传的照片清晰有效，若未通过审核，您只有一次补提交被审核的机会</span>
					<a href="javascript:;" class="btn btn-disable btn-primary btn-w140">已认证</a>
				</li>
			</ul>
		</div>
	</div>
	<!-- 用户中心 E -->
</div>
<!-- 页脚 S -->
<?php include('footer.php') ?>
<!-- 页脚 E -->
</body>
</html>
