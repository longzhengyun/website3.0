<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>携程旅行网: 云海竞赛平台</title>
<meta name="keywords" content="酒店预订,机票预订,旅游度假,商旅管理,酒店预定,机票预定,航班查询,电子客票,机票,酒店,旅行" />
<meta name="description" content="携程旅行网是中国领先的在线旅行服务公司，向超过1400万会员提供集酒店预订、机票预订、度假预订、商旅管理、特惠商户及旅游资讯在内的全方位旅行服务。" />
<link href="http://webresource.c-ctrip.com/Pres.Static/Pres.Static/SeaCloudsOnline/css/basis.css" rel="stylesheet" type="text/css" />
<link href="http://webresource.c-ctrip.com/Pres.Static/Pres.Static/SeaCloudsOnline/css/seaclouds.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!-- 页头 S -->
<?php include('header.php') ?>
<!-- 页头 E -->
<div class="sc-wrap">
	<!-- 用户中心 S -->
	<div class="sc-user-info clearfix"><img src="http://pic.c-ctrip.com/seaclouds/user_pic.png" /><span><i class="margin-r">克里斯蒂娜</i>的用户中心</span></div>
	<div class="sc-layout sc-user clearfix">
		<ul class="sc-layout-aside">
			<li><a href="user_center.php">参加的活动</a></li>
			<li><a href="user_center_info.php">个人信息</a></li>
			<li class="cur"><a href="user_center_certified.php">实名认证<i class="tags">HOT</i></a></li>
			<li><a href="user_center_resume.php">个人简历</a></li>
		</ul>
		<div class="sc-layout-main">
			<!-- <ul class="step-cont clearfix">
				<li class="step-line step-cur"><span class="icon"></span><span class="name">上传照片</span></li>
				<li class="step-line step-none"><span class="icon"></span><span class="name">等待审核</span></li>
				<li class="step-none"><span class="icon"></span><span class="name">认证成功</span></li>
			</ul> -->
			<ul class="form-cont">
				<li class="line-item clearfix">
					<span class="cont-l color-g">证件类型</span>
					<span class="cont-r">
						<select class="input-item input-normal">
							<option value="">选择证件类型</option>
							<option value="">学生证</option>
							<option value="">教师证</option>
						</select>
					</span>
				</li>
				<li class="line-item clearfix">
					<span class="cont-l"></span>
					<span class="cont-r">
						<label class="input-file"><a href="javascript:;" class="btn btn-fill btn-primary">上传照片</a><input type="file" class="file-field" size="28" /></label>
					</span>
				</li>
			</ul>
			<div class="upload-hint">
				<p class="text">上传手持有效证件（参与活动要求的证件类型）照片；照片大小不超过3M，格式为jpg/png/bmp，示例如下：upload(maximum file size is 3M, format：jpg/png/bmp)</p>
				<img src="http://pic.c-ctrip.com/seaclouds/hint_diploma.jpg" />
			</div>
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
		<div class="text-single"><i class="icon-success margin-r"></i>您的申请已提交成功！</div>
	</div>
	<div class="pop-ft"><a href="###" class="btn btn-fill btn-normal">确 认</a></div>
</div>
<!-- 弹层 S -->
</body>
</html>
