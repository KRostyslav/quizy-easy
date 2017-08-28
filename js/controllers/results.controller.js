(function(){

    angular
        .module("englishQuiz")
        .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService){
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
    }

})();