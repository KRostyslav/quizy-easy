(function(){

    angular
        .module("englishQuiz")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        // List Controller Logic
        var vm = this;

        vm.dummyData = "Hello World";
        vm.search = "";
        vm.quizActive = false;
        vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle

        // This is public methods
        vm.init = init;
        vm.changeActiveTurtle = changeActiveTurtle;
        vm.activateQuiz = activateQuiz;

        vm.init();

        //////////////////////////////////////////////////////

        function init() {
            vm.quizMetrics = quizMetrics;
            vm.data = DataService.turtlesData;

        }

        function changeActiveTurtle(index){
            vm.activeTurtle = index;
        }

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }

        /////////////////////////////////////////////////////
        // This is private methods


    }

})();