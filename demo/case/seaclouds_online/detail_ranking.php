<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Я��������: �ƺ�����ƽ̨</title>
<meta name="keywords" content="�Ƶ�Ԥ��,��ƱԤ��,���ζȼ�,���ù���,�Ƶ�Ԥ��,��ƱԤ��,�����ѯ,���ӿ�Ʊ,��Ʊ,�Ƶ�,����" />
<meta name="description" content="Я�����������й����ȵ��������з���˾���򳬹�1400���Ա�ṩ���Ƶ�Ԥ������ƱԤ�����ȼ�Ԥ�������ù����ػ��̻���������Ѷ���ڵ�ȫ��λ���з���" />
<link href="http://webresource.c-ctrip.com/Pres.Static/Pres.Static/SeaCloudsOnline/css/basis.css" rel="stylesheet" type="text/css" />
<link href="http://webresource.c-ctrip.com/Pres.Static/Pres.Static/SeaCloudsOnline/css/seaclouds.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!-- ҳͷ S -->
<?php include('header.php') ?>
<!-- ҳͷ E -->
<div class="sc-wrap">
	<!-- ���� S -->
	<div class="sc-crumbs"><a href="index.php">�����б�</a><dfn>&gt;</dfn>Я�����������ģ��Ʒͼ�������㷨����</div>
	<!-- ���� E -->
	<!-- �б� S -->
	<ul class="sc-list sc-detail-list">
		<li>
			<div class="btn-action">
				<!-- <a href="javascript:;" class="state-enroll"><i class="icon"></i>��Ҫ����</a> -->
				<a href="javascript:;" class="state-end"><i class="icon"></i>�����ɹ�</a>
			</div>
			<dl class="info">
				<dt><i class="icon"></i><span class="title">Я�����������ģ��Ʒͼ�������㷨����</span></dt>
				<dd class="head"><span class="item">״̬</span><span class="item">���½�ֹ����</span><span class="item">��߽���</span><span class="item">��������</span></dd>
				<dd class="cont"><span class="item ongoing">������</span><span class="item">2016/05/01</span><span class="item">15,000,000</span><span class="item">3227</span></dd>
			</dl>
		</li>
	</ul>
	<!-- �б� E -->
	<!-- ���� S -->
	<div class="sc-layout sc-detail clearfix">
		<ul class="sc-layout-aside">
			<li><a href="detail.php">���ƽ���</a></li>
			<li><a href="detail_data.php">����������</a></li>
			<li><a href="detail_faq.php">FAQ</a></li>
			<li class="cur"><a href="detail_ranking.php" class="tags-dashed">��ҫ��</a></li>
			<li><a href="detail_delivery.php" class="tags-dashed tags-disable">��Ҫ����</a></li>
		</ul>
		<div class="sc-layout-main">
			<!-- <div class="detail-ranking-title"><span class="nav cur">�������а�</span></div> -->
			<table class="detail-ranking-cont margin-b">
				<thead>
					<tr>
						<th width="10%">����</th>
						<th class="align-l" width="20%">������</th>
						<th class="align-l">������֯</th>
						<th width="20%">�ɼ�</th>
						<th width="10%">�ɼ��ύ��</th>
					</tr>
				</thead>
				<body>
					<?php for($i=1; $i<=10; $i++) { ?>
					<tr>
						<td class="color-o"><?php echo $i ?></td>
						<td class="align-l">����˹����</td>
						<td class="align-l">
							<?php if($i%2 == 0) { ?>
								LAB
							<?php }else{ ?>
								�Ϻ�������ѧ�Ϻ�������ѧ
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
			<!-- ��ҳ S -->
			<div class="page_box">
				<div class="c_page"><a class="c_up" href="###"><i class="arrow"></i>��һҳ</a>
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
					<a class="c_down" href="###">��һҳ<i class="arrow"></i></a>
					<a class="c_up_nocurrent" href="###"><i class="arrow"></i>��һҳ</a>
					<a class="c_down_nocurrent" href="###">��һҳ<i class="arrow"></i></a>
					<div class="c_pagevalue">��
						<input type="text" name="" class="c_page_num">
						ҳ
						<input type="button" name="" value="ȷ��" class="c_page_submit">
					</div>
				</div>
			</div>
			<!-- ��ҳ E -->
		</div>
	</div>
	<!-- ���� E -->
</div>
<!-- ҳ�� S -->
<?php include('footer.php') ?>
<!-- ҳ�� E -->
</body>
</html>
