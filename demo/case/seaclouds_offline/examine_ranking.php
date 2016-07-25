﻿<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width" />
<title>携程旅行网: 云海竞赛平台后台管理系统</title>
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
	<!-- 导航 S -->
	<div class="sc-crumbs"><a href="index.php">任务管理列表</a><dfn>&gt;</dfn>排名审核</div>
	<!-- 导航 E -->
	<div class="sc-layout sc-examine">
		<!-- 列表 S -->
		<div class="layout-title clearfix">
			<h2>参赛人员列表</h2>
		</div>
		<table class="table-wrap">
			<thead>
				<tr>
					<th style="width:15%">排名</th>
					<th>昵称</th>
					<th style="width:15%">用户自评</th>
					<th style="width:30%">数据（用户作品）</th>
					<th style="width:20%">系统评分</th>
				</tr>
			</thead>
			<tbody>
				<?php for($i=1; $i<=6; $i++) { ?>
				<tr>
					<td><?php echo $i ?></td>
					<td>克里斯蒂娜</td>
					<td>80.00</td>
					<td>ashfuoa.rar <a href="#" class="item">下载</a></td>
					<td>95.76 <a href="javascript:;" class="item">修改</a></td>
				</tr>
				<?php } ?>
			</tbody>
		</table>
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
</div>
<!-- 页脚 S -->
<?php include('footer.php') ?>
<!-- 页脚 E -->
<!-- 弹层 S -->
<div class="pop-box pop-normal pop-box-cont">
	<div class="pop-hd">修改评分<a href="###" class="c_close">&times;</a></div>
	<div class="pop-bd">
		<div class="cont-single align-c">新评分<input type="text" class="input-item input-mini margin-l" /></div>
	</div>
	<div class="pop-ft"><a href="javascript:;" class="btn btn-fill btn-small weight-n">确 定</a><a href="javascript:;" class="btn btn-border btn-small margin-l weight-n">取 消</a></div>
</div>
<div class="pop-box pop-normal pop-box-msg">
	<div class="pop-hd"><a href="###" class="c_close">&times;</a></div>
	<div class="pop-bd">
		<div class="text-single"><i class="icon-success margin-r"></i>信息修改成功！</div>
	</div>
	<div class="pop-ft"><a href="javascript:;" class="btn btn-fill btn-small weight-n">确 定</a></div>
</div>
<div class="pop-box pop-normal pop-box-loading">
	<div class="pop-bd">
		<div class="text-single"><i class="icon-loading margin-r"><img src="images/loading.gif" /></i>数据加载中...</div>
	</div>
</div>
<div class="pop-box pop-normal pop-box-msg">
	<div class="pop-hd"><a href="###" class="c_close">&times;</a></div>
	<div class="pop-bd">
		<div class="text-single"><i class="icon-error margin-r"></i>信息修改失败！</div>
	</div>
	<div class="pop-ft"><a href="javascript:;" class="btn btn-fill btn-small weight-n">确 定</a></div>
</div>
<!-- 弹层 S -->
</body>
</html>
