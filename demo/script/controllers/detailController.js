define(['app'], function(app){
	app.controller('DetailController', ['$scope', function($scope){
		$scope.detailData = [
			{order: '1', name: '用AngularJS开发下一代web应用1', author: '大漠穷秋', date: '2014-01-01', pirce: '35.00', pic: 'images/book.jpg', press: '电子工业出版社', type: '计算机', ebook: "无"},
			{order: '2', name: '用AngularJS开发下一代web应用2', author: '大漠穷秋', date: '2014-01-02', pirce: '34.00', pic: 'images/book.jpg', press: '电子工业出版社', type: '计算机', ebook: "有"},
			{order: '3', name: '用AngularJS开发下一代web应用3', author: '大漠穷秋', date: '2014-01-03', pirce: '33.00', pic: 'images/book.jpg', press: '电子工业出版社', type: '计算机', ebook: "无"},
			{order: '4', name: '用AngularJS开发下一代web应用4', author: '大漠穷秋', date: '2014-01-04', pirce: '32.00', pic: 'images/book.jpg', press: '电子工业出版社', type: '计算机', ebook: "有"},
			{order: '5', name: '用AngularJS开发下一代web应用5', author: '大漠穷秋', date: '2014-01-05', pirce: '31.00', pic: 'images/book.jpg', press: '电子工业出版社', type: '计算机', ebook: "无"},
		];
		$scope.goto = function(value){
			
			console.log($scope.listData);
		};
	}]);
});