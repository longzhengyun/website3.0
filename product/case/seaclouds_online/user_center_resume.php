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
			<li><a href="user_center_certified.php">实名认证<i class="tags">HOT</i></a></li>
			<li class="cur"><a href="user_center_resume.php">个人简历</a></li>
		</ul>
		<div class="sc-layout-main">
			<div class="state-resume">
				<div class="text-single"><i class="icon-info margin-r"></i>您还没有上传简历，上传简历让更多人了解您！</div>
			</div>
			<ul class="form-cont">
				<li class="line-item clearfix">
					<span class="cont-l"></span>
					<span class="cont-r">
						<label class="input-file"><a href="javascript:;" class="btn btn-fill btn-primary margin-r">上传作品</a><input type="file" class="file-field" size="28" /><i class="hint resume-hint">简历大小不超过2M,格式为word/pdf/txt/excel/jpg。</i></label>
					</span>
				</li>
			</ul>
			<ul class="form-cont">
				<li class="line-item clearfix">
					<span class="cont-l"></span>
					<span class="cont-r">
						<label class="resume-doc">
							<span class="icon"></span>
							<span class="name">简历名称.docx</span>
							<span class="time">上传于2016-03-09 11:05:43</span>
						</label>
					</span>
				</li>
				<li class="line-item clearfix">
					<span class="cont-l"></span>
					<span class="cont-r"><a href="javascript:;" class="btn btn-fill btn-primary">删除简历</a></span>
				</li>
			</ul>
		</div>
	</div>
	<!-- 用户中心 E -->
</div>
<!-- 页脚 S -->
<?php include('footer.php') ?>
<!-- 页脚 E -->
<!-- 弹层 S -->
<div class="pop-box pop-normal pop-box-msg">
	<div class="pop-hd"><a href="###" class="c_close">&times;</a></div>
	<div class="pop-bd">
		<div class="text-single"><i class="icon-success margin-r"></i>简历上传成功！</div>
	</div>
	<div class="pop-ft"><a href="###" class="btn btn-fill btn-normal">确 认</a></div>
</div>
<!-- 弹层 S -->
</body>
</html>
