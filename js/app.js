(function () {

    /*
     * Declaration of main angular module for this application.
     */
    var app = angular.module("englishQuiz", ["ui.router"]);

    app.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    name: "home",
                    url: "/home",
                    templateUrl: "views/home.html"
                })
                .state('info', {
                    name: "info",
                    url: "/info",
                    templateUrl: "views/info.html"
                })
                .state('list', {
                    name: "list",
                    url: "/list",
                    templateUrl: "views/list.html"
                })

                .state('settings', {
                    url: "/settings",
                    templateUrl: "app/settings/settings.html"
                })

            $urlRouterProvider.otherwise('/');
        });

})();