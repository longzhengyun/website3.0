<!DOCTYPE html>
<html>
<head>
<title>demo</title>
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/demo.css">
<script src="js/lib/react.min.js"></script>
<script src="js/lib/react-dom.min.js"></script>
<script src="js/lib/browser.min.js"></script>
</head>
<body>
<?php 
date_default_timezone_set('UTC');

$dir = '/Users/jary/website/ui/';

if(is_dir($dir)){
	if($dh = opendir($dir)){
		while (($file = readdir($dh))!=false) {
			$filePath = $dir.$file;
			preg_match("/<head.*>(.*)<\/head>/smUi", $file, $fileTitle); 
			$fmt = filemtime($filePath);
			echo "<span style='color:#999'>(".date("Y-m-d H:i:s", $fmt).")</span><span style='color:#f00'>".$fileTitle."</span>".$filePath."<br/>";
		}
		closedir($dh);
	}
}
?>

<div class="section-wrap">
	<!-- <div class="enter"><input type="text" name="" id="catalog"></div> -->
	<ul class="list">
		
	</ul>
</div>
<div id="content"></div>
<script type="text/babel" src="js/javascript.js"></script>
</body>
</html>