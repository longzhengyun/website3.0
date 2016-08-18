<?php
//初始化时间
ini_set("date.timezone", "Asia/Shanghai");

//获取目录
$dir = dirname(__FILE__);
$var = $_REQUEST["id"];
$dir_replace = str_replace("\\", "/", "$dir").$var;

//获取数据
if (is_dir($dir_replace)){
	if ($dh = opendir($dir_replace)){
		while (($file = readdir($dh)) != false){
			//文件名的全路径 包含文件名
			$filePath = $dir_replace.$file;
			$fileName = basename($filePath);

			//去掉子目录
			if (!is_dir($filePath)){
				//去掉非html, php文件
				if(strpos($fileName, ".html") || strpos($fileName, ".php")) {
					$arr_title = file($filePath);
					//输出网页标题
					if($arr_title){
						$arr_title = implode('', $arr_title);
						eregi("<title>.*</title>", $arr_title, $title);
						$page_title = $title[0];
						$page_title = substr(trim($page_title), 7, (strlen($page_title) - 15));
					};
					//获取文件修改时间
					$fmt = date("Y-m-d", filemtime($filePath));

					//整合数据
					$htmlFiles[] = array("title" => $page_title, "name" => $fileName, "date" => $fmt);
				}
			}
		}
	}
};

//输出
echo json_encode(array("htmlFiles" => $htmlFiles));
?>