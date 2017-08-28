(function(){

    angular
        .module("englishQuiz")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService){

        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.activeQuestion = 0;
        var numQuestionsAnswered = 0;

        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;

        /////////////////////////////////////

        function setActiveQuestion(index){
            // if(index === undefined){
            //     var breakOut = false;
            //
            //     var quizLength = DataService.quizQuestions.length - 1;
            //
            //     while(!breakOut){
            //
            //         if(DataService.quizQuestions[vm.activeQuestion].selected === null){
            //             breakOut = true;
            //         }
            //
            //     }
            // }else{
            //     vm.activeQuestion = index;
            // }
            var breakOut = false;
            var quizLength = DataService.quizQuestions.length - 1;

            while(!breakOut){
                vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                    breakOut = true;
                }
            }
        }

        function questionAnswered(){

            if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                numQuestionsAnswered++;
            }
            vm.setActiveQuestion();
        }

        function selectAnswer(index){
            DataService.quizQuestions[vm.activeQuestion].selected = index;
        }

    }

})();