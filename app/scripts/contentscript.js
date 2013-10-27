$(function (){
    'use strict';

    var ptTimer = {

        // REST API Server
        api : {
           url : "http://phases.nikhilben.com/pt_timer/index.php"
        },

        // Podio settings
        podio : {
            taskAttribute : "data-task-id",
            taskClass : "task-wrapper"
        },

        init : function () {

            var taskArray = ptTimer.getAllTaskID();

            console.log(taskArray);

        },

        // Call a function passed through param
        callFunction: function () {

            var fn = arguments[0],
                vars = Array.prototype.slice.call(arguments, 1);

            return fn.apply(this, vars);
        },

        ajaxRequest : function (type, url, data, success) {
            // Ajax request to server
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function (val) {

                    // Calls the function passed through argument
                    ptTimer.callFunction(success, val, data);
                },
                error: function (xhr) {


                }
            });
        },

        getAllTaskID : function () {
            var podio = ptTimer.podio;

            // Get all task ID in the page as an array
            return $("."+podio.taskClass).map( function () {
                return $(this).attr(podio.taskAttribute);
            }).get();
        }
    };

ptTimer.init();

});

