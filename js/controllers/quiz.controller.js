(function(){

    angular
        .module("englishQuiz")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics'];

    function QuizController(quizMetrics){

        var vm = this;
        console.log('Start quiz');

        vm.quizMetrics = quizMetrics;
    }

})();