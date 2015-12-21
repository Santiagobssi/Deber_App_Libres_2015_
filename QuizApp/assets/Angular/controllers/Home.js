app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    console.log("Entro al controlador Home");


    $http({
        method: 'GET',
        url: 'http://localhost:1337/Usuarios'
    }).then(
        function exitoEnElGuardado(respuesta) {
            console.log(respuesta);
            $scope.listaUsuarios = respuesta.data;
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });
    
/*    $scope.eliminarUsuario = function(idDelUsuario){
        console.log(idDelUsuario);
    }
    */
    
    
    
    $scope.eliminarUsuario = function(idDelUsuario){
        console.log(idDelUsuario);
        $http({
            method: 'DELETE',
            url: 'http://localhost:1337/Usuarios/' + idDelUsuario
        }).then(
        function exitoEnelBorrado(respuesta) {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/Usuarios'
            }).then(
            function exitoEnElGuardado(respuesta) {
                console.log(respuesta);
                $scope.listaUsuarios = respuesta.data;
            },
            function falloEnElGuardado(error) {
                console.log(error);
            });     
        },
        function falloEnelBorrado(error) {
            console.log(error);
        });
    }

    
    
    

}]);










