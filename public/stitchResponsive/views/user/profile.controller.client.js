/**
 * Created by willqueen on 12/1/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var vm = this;

        // var userId = $routeParams.uid;

        vm.updateUser = updateUser;
        vm.unregisterUser = unregisterUser;
        vm.logout = logout;

        function init() {
            UserService
            // .findUserById(userId)
                .findCurrentUser()
                .success(function(user){
                    if(user != '0') {
                        vm.user = user;
                    }
                })
                .error(function(){
                    console.log("nada");
                    console.log("nada");


                });
        }
        init();

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }

        function updateUser() {
            UserService.updateUser(vm.user);
        }

        function unregisterUser() {
            UserService
                .unregisterUser(vm.user._id)
                .success(function(){
                    $location.url("/login");
                })
                .error(function(){

                });
        }
    }
})();