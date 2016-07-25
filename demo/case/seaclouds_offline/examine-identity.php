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
	<div class="sc-crumbs"><a href="index.php">任务管理列表</a><dfn>&gt;</dfn>身份审核</div>
	<!-- 导航 E -->
	<div class="sc-layout sc-examine">
		<!-- 列表 S -->
		<div class="layout-title clearfix">
			<h2>报名人员列表</h2>
		</div>
		<table class="table-wrap size-12">
			<thead>
				<tr>
					<th>昵称</th>
					<th style="width:9%">真实姓名</th>
					<th style="width:5%">手机</th>
					<th>邮箱</th>
					<th>公司</th>
					<th>学校</th>
					<th style="width:8%">学历</th>
					<th style="width:9%">身份图片</th>
					<th style="width:9%">学历图片</th>
					<th style="width:12%">操作</th>
				</tr>
			</thead>
			<tbody>
				<?php for($i=1; $i<=6; $i++) { ?>
				<tr>
					<td>克里斯蒂娜</td>
					<td>助手</td>
					<td>13847758669</td>
					<td>shauofhao@163.com</td>
					<td>携程旅行网</td>
					<td>上海外国语大学</td>
					<td>硕士</td>
					<td><a href="#" target="_blank" class="item">查看</a></td>
					<td><a href="#" target="_blank" class="item">查看</a></td>
					<?php if($i%2 == 0){ ?> 
					<td><a href="javascript:;" class="item">通过</a><a href="javascript:;" class="item">拒绝</a></td>
					<?php }else{ ?>
					<td><span class="item color-g">已审核</a></td>
					<?php } ?>
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
<div class="pop-box pop-normal pop-box-msg">
	<div class="pop-hd"><a href="###" class="c_close">&times;</a></div>
	<div class="pop-bd">
		<p class="margin-b">请填写拒绝原因。</p>
		<div class="cont-single">
			<textarea class="textarea-item input-textarea input-full"></textarea>
		</div>
	</div>
	<div class="pop-ft"><a href="javascript:;" class="btn btn-fill btn-small weight-n">确 定</a><a href="javascript:;" class="btn btn-border btn-small margin-l weight-n">取 消</a></div>
</div>
<!-- 弹层 S -->
</body>
</html>
