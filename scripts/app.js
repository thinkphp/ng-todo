  //define AngularJS Application
  var app = angular.module('TaskManager',[]);

      app.controller('mainCtrl', function( $scope ){

          $scope.tasks = []

          if( localStorage.getItem("tasks")) {

              $scope.tasks = JSON.parse(localStorage.getItem("tasks"))
          }  

          $scope.getDoneCount = function() {

                 var count = 0

                 angular.forEach($scope.tasks, function( task ){

                         count += task.done ? 1 : 0 
                 }) 

                 if( $scope.tasks.length != 0 ) localStorage.setItem("tasks", JSON.stringify( $scope.tasks )) 

                 return count
          }

          $scope.addNewTask = function() {

                if ($scope.newTask ) {

                    $scope.tasks.push({"body": $scope.newTask, "done": false})

                    localStorage.setItem("tasks", JSON.stringify( $scope.tasks )) 

                    $scope.newTask = ""
                }
          }

          $scope.deleteAll = function() {

                 window.localStorage.clear()
                 $scope.tasks = [] 
          }

          $scope.deleteDone = function() {

                 var oldTasks = $scope.tasks

                 $scope.tasks = []

                 angular.forEach(oldTasks, function( task ){

                         if(! task.done ) $scope.tasks.push( task )
                 })
          }            
      })

