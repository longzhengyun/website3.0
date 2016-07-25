<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>携程旅行网: 云海竞赛平台</title>
<meta name="keywords" content="酒店预订,机票预订,旅游度假,商旅管理,酒店预定,机票预定,航班查询,电子客票,机票,酒店,旅行" />
<meta name="description" content="携程旅行网是中国领先的在线旅行服务公司，向超过1400万会员提供集酒店预订、机票预订、度假预订、商旅管理、特惠商户及旅游资讯在内的全方位旅行服务。" />
<link href="http://webresource.c-ctrip.com/Pres.Static/Pres.Static/SeaCloudsOffline/css/basis.css" rel="stylesheet" type="text/css" />
<link href="http://webresource.c-ctrip.com/Pres.Static/Pres.Static/SeaCloudsOffline/css/seaclouds.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!-- 页头 S -->
<?php include('header.php') ?>
<!-- 页头 E -->
<div class="sc-wrap">
	<!-- 导航 S -->
	<div class="sc-crumbs"><a href="index.php">任务管理列表</a><dfn>&gt;</dfn>发布新任务</div>
	<!-- 导航 E -->
	<div class="sc-layout sc-add-step">
		<!-- 列表 S -->
		<div class="layout-title clearfix">
			<h2>一、赛制介绍</h2>
		</div>
		<div class="form-cont">
			<div class="line-item clearfix">
				<span class="cont-l color-g">竞赛题目</span>
				<span class="cont-r">
					<label class="label-item"><input type="text" class="input-item input-big" /></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g">赛题简介</span>
				<span class="cont-r">
					<label class="label-item"><textarea name="" class="textarea-item input-textarea input-big" placeholder="填写内容"></textarea></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g">赛制介绍</span>
				<span class="cont-r">
					<label class="label-item"><textarea name="" class="textarea-item input-textarea input-big" placeholder="填写内容"></textarea></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g"><i class="color-r size-12">*</i> 报名有效期</span>
				<span class="cont-r">
					<label class="label-item"><input id="dayNumStart" type="text" class="input-item input-primary" /></label>
					<p class="hint-alert">请选择报名有效日期</p><!-- 必填和报错为演示效果 如果不需要请直接删除 -->
				</span>
			</div>
			<!-- <div class="line-item clearfix">
				<span class="cont-l color-g">报名有效期</span>
				<span class="cont-r">
					<label class="label-item">
						<input id="dayNumStart" type="text" class="input-item input-mini" />
						<span class="color-g">-</span>
						<input id="dayNumEnd" type="text" class="input-item input-mini" />
					</label>
				</span>
			</div> -->
			<div class="line-item clearfix">
				<span class="cont-l color-g">数据截止上传时间</span>
				<span class="cont-r">
					<label class="label-item"><input id="uploadDeadLine" type="text" class="input-item input-primary" /></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g">赛事截止日期</span>
				<span class="cont-r">
					<label class="label-item"><input id="matchDeadLine" type="text" class="input-item input-primary" /></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g">报名方式</span>
				<span class="cont-r">
					<label class="label-item"><input type="text" class="input-item input-primary" /></label>
				</span>
			</div>
			<!-- <div class="line-item clearfix">
				<span class="cont-l color-g">报名方式</span>
				<span class="cont-r">
					<select class="input-item input-primary">
						<option value="">方式一</option>
						<option value="">方式二</option>
					</select>
				</span>
			</div> -->
			<div class="line-item clearfix">
				<span class="cont-l color-g">参赛对象及要求</span>
				<span class="cont-r">
					<label class="label-item"><textarea name="" class="textarea-item input-textarea input-big" placeholder="填写内容"></textarea></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g">奖项设置</span>
				<span class="cont-r">
					<label class="label-item"><textarea name="" class="textarea-item input-textarea input-big" placeholder="填写内容"></textarea></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g">主办方信息</span>
				<span class="cont-r">
					<label class="label-item"><textarea name="" class="textarea-item input-textarea input-big" placeholder="填写内容"></textarea></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l color-g">备注说明</span>
				<span class="cont-r">
					<label class="label-item"><textarea name="" class="textarea-item input-textarea input-big" placeholder="填写内容"></textarea></label>
				</span>
			</div>
			<div class="line-item clearfix">
				<span class="cont-l"></span>
				<span class="cont-r"><a href="add-step2.php" class="btn btn-fill btn-primary">下一步</a></span>
			</div>
		</div>
		<!-- 列表 E -->
	</div>
</div>
<!-- 页脚 S -->
<?php include('footer.php') ?>
<!-- 页脚 E -->
<script src="http://webresource.c-ctrip.com/code/cquery/cQuery_110421.js"></script>
<script src="http://webresource.c-ctrip.com/code/cquery/mod/calendar-6.0.js"></script>
<script type="text/javascript">
	$('#dayNumStart').regMod('calendar','6.0', {options: {showOptions:true, showWeek:false, defaultDate: '1980-01-01', minDate: '1900-01-01', maxDate: '2020-02-01', step: 1}});
	$('#dayNumEnd').regMod('calendar','6.0', {options: {showOptions:true, showWeek:false, defaultDate: '1980-01-01', minDate: '1900-01-01', maxDate: '2020-02-01', step: 1}});
	$('#uploadDeadLine').regMod('calendar','6.0', {options: {showOptions:true, showWeek:false, defaultDate: '1980-01-01', minDate: '1900-01-01', maxDate: '2020-02-01', step: 1}});
	$('#matchDeadLine').regMod('calendar','6.0', {options: {showOptions:true, showWeek:false, defaultDate: '1980-01-01', minDate: '1900-01-01', maxDate: '2020-02-01', step: 1}});
</script>
</body>
</html>
