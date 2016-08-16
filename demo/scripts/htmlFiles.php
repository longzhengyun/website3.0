<?php
$dir = dirname(dirname(__FILE__));
$dir_replace = str_replace("\\","/","$dir")."/ui/";

if (is_dir($dir_replace)){
	if ($dh = opendir($dir_replace)){
		while (($file = readdir($dh)) != false){
			//文件名的全路径 包含文件名
			$filePath = $dir_replace.$file;
			$fileName = basename($filePath);

			//去掉子目录
			if (!is_dir($filePath)){
				//去掉非html,php文件
				if(strpos($fileName, ".html") || strpos($fileName, ".php")) {
					$arr_title = file($filePath);
					//输出网页标题
					if($arr_title){
						foreach($arr_title as $page_title){
							if(strchr($page_title, "<title>")){
								$n1 = strpos($page_title, "<title>") + 7;
								$n2 = strpos($page_title, "</title>");
								$page_title = substr($page_title, $n1, $n2 - $n1);
								break;
							}
						}
					};
					//获取文件修改时间
					$fmt = filemtime($filePath);
					// $htmlFiles[] = {
					// 	'title': $page_title,
					// 	'date': $fmt,
					// 	'name': $fileName
					// };
				}
			}
		}
	}
};

echo json_encode(array("htmlFiles" => $htmlFiles));
?>