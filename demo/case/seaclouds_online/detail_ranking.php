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
	<!-- 导航 S -->
	<div class="sc-crumbs"><a href="index.php">赛事列表</a><dfn>&gt;</dfn>携程旅行网大规模商品图像搜索算法大赛</div>
	<!-- 导航 E -->
	<!-- 列表 S -->
	<ul class="sc-list sc-detail-list">
		<li>
			<div class="btn-action">
				<!-- <a href="javascript:;" class="state-enroll"><i class="icon"></i>我要报名</a> -->
				<a href="javascript:;" class="state-end"><i class="icon"></i>报名成功</a>
			</div>
			<dl class="info">
				<dt><i class="icon"></i><span class="title">携程旅行网大规模商品图像搜索算法大赛</span></dt>
				<dd class="head"><span class="item">状态</span><span class="item">赛事截止日期</span><span class="item">最高奖金</span><span class="item">参赛人数</span></dd>
				<dd class="cont"><span class="item ongoing">进行中</span><span class="item">2016/05/01</span><span class="item">15,000,000</span><span class="item">3227</span></dd>
			</dl>
		</li>
	</ul>
	<!-- 列表 E -->
	<!-- 详情 S -->
	<div class="sc-layout sc-detail clearfix">
		<ul class="sc-layout-aside">
			<li><a href="detail.php">赛制介绍</a></li>
			<li><a href="detail_data.php">赛题与数据</a></li>
			<li><a href="detail_faq.php">FAQ</a></li>
			<li class="cur"><a href="detail_ranking.php" class="tags-dashed">荣耀榜</a></li>
			<li><a href="detail_delivery.php" class="tags-dashed tags-disable">我要交稿</a></li>
		</ul>
		<div class="sc-layout-main">
			<!-- <div class="detail-ranking-title"><span class="nav cur">赛事排行榜</span></div> -->
			<table class="detail-ranking-cont margin-b">
				<thead>
					<tr>
						<th width="10%">排名</th>
						<th class="align-l" width="20%">参赛者</th>
						<th class="align-l">所在组织</th>
						<th width="20%">成绩</th>
						<th width="10%">成绩提交日</th>
					</tr>
				</thead>
				<body>
					<?php for($i=1; $i<=10; $i++) { ?>
					<tr>
						<td class="color-o"><?php echo $i ?></td>
						<td class="align-l">克里斯蒂娜</td>
						<td class="align-l">
							<?php if($i%2 == 0) { ?>
								LAB
							<?php }else{ ?>
								上海东华大学上海东华大学
							<?php } ?>
						</td>
						<td>
							<?php if($i%2 == 0) { ?>
								25.23%
							<?php }else{ ?>
								4.78%
							<?php } ?>
						</td>
						<td>2016/05/01</td>
					</tr>
					<?php } ?>
				</body>
			</table>
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
	<!-- 详情 E -->
</div>
<!-- 页脚 S -->
<?php include('footer.php') ?>
<!-- 页脚 E -->
</body>
</html>
