var phonecatApp = angular.module('phonecatApp', ['ui.bootstrap']);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('Controller', function ListController($scope, $http) {
    $http.get('data.json').then(function(content) {
        $scope.header = content.data.header_name;
        $scope.list_nav = content.data.list_nav;
        $scope.img_section = content.data.img_section_1;
        $scope.section_2_head = content.data.section_2_head;
        $scope.section_2_para = content.data.section_2_para;
        $scope.section_3_img1 = content.data.section_3_img1;
        $scope.section_3_img2 = content.data.section_3_img2;
        $scope.section_3_text1 = content.data.section_3_text1;
        $scope.section_3_text2 = content.data.section_3_text2;
    });
});
