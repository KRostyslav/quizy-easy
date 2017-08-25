(function(){

    angular
        .module("englishQuiz")
        .controller("listCtrl", ListController);

    function ListController(){
        // List Controller Logic
        var vm = this;

        vm.dummyData = "Hello World";
        console.log('List controller')
    }

})();