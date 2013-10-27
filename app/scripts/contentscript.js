$(function (){
    'use strict';

    var ptTimer = {

        api : {
           url : "http://phases.nikhilben.com/pt_timer/index.php"
        },
        podio : {
            taskAttribute : "data-task-id",
            taskClass : "task-wrapper"


        },

        init : function () {

            var taskArray = ptTimer.getAllTaskID();

            console.log(taskArray);

        },

        ajaxRequest : function () {

        },

        getAllTaskID : function () {
            var podio = ptTimer.podio;

            // Get all task ID in the page as an array
            return $("."+podio.taskClass).map(function(){return $(this).attr(podio.taskAttribute);}).get();
        }
    };

ptTimer.init();

});

