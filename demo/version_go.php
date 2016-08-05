<?php include 'includes/head.php';?>

<div class="container-fluid">
    <?php include 'includes/header.php';?>

    <div class="container">
    <?php
    $dir = dirname(dirname(__FILE__));
    $dir_replace = str_replace("\\","/","$dir")."/GO_platform/";
    $root_path = "http://prototype.ui.sh.ctriptravel.com/git/FIN/master/Prototype/GO_platform/";

    if (is_dir($dir_replace)){
        if ($dh = opendir($dir_replace)){
            echo "<div class='row'>";
            echo "<ul class='page-list' id='pageList'>";
            while (($file = readdir($dh))!= false){
                //文件名的全路径 包含文件名
                $filePath = $dir_replace.$file;
                $fileName = basename($filePath);

                //去掉子目录
                if (!is_dir($filePath)){
                    //去掉非html,php文件
                    if(strpos($fileName,".html")||strpos($fileName,".php")) {
                    $arr_title = file($filePath);
                    //输出网页标题
                    if($arr_title){
                        foreach($arr_title as $page_title){
                            if(strchr($page_title,"<title>")){
                                $n1 = strpos($page_title,"<title>")+7;
                                $n2 = strpos($page_title,"</title>");
                                $page_title = substr($page_title,$n1,$n2-$n1);
                                break;
                            }
                        }
                    }
                    //获取文件修改时间
                    $fmt = filemtime($filePath);
                    echo "<li data-time=".date("YmdHis",$fmt).">";
                    echo "<a href='$root_path$fileName' target='_blank'>";
                    echo "<span>$page_title</span>";
                    echo "<span class='last-change'>最近修改：".date("Y-m-d",$fmt)."</span>";
                    echo "</a>";
                    echo "</li>";
                    }
                }
            }
            echo "</ul>";
            echo "</div>";
            closedir($dh);
        }
    }
    ?>
    </div>
    </div>

    <?php include 'includes/footer.php';?>
    <script src="js/jquery.goup.min.js"></script>
    <script type="text/javascript">
        $.goup();
    </script>
    <script src="js/sortHandler.js"></script>
    <script>
        window.onload = function(){
            sortHandler({
                objId: 'pageList',//列表ID
                sortName: 'time'//按时间排序
            });//排序
            $('input#quick_search').quicksearch('.page-list li');//搜索
        };
    </script>
    </body>
</html>
