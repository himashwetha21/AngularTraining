angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
$scope.obj={};
$scope.formValue = true;
$scope.toggle = function(x)
{
    if(x)
    {
        $scope.formValue = false;
    }
    else
    {
        $scope.formValue = true;
    }
}
}
