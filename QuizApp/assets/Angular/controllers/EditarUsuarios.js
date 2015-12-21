app.controller('EditarUsuarioController', ['$scope', "$http",'$stateParams', function ($scope, $http, $stateParams) {

    console.log("Entro a Editar usuario");
    console.log($stateParams.idUsuario);

    $http({
        method: 'GET',
        url: 'http://localhost:1337/Usuarios/'+$stateParams.idUsuario
    }).then(
        function exitoEnElGuardado(respuesta) {
            console.log(respuesta);
            $scope.usuario = respuesta.data;
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });
    
    
$scope.editarUsuario = function editarUsuario () {
        console.log("Entro en funcion Editar Usuario");
        $http({
            method: 'PUT',
            url: 'http://localhost:1337/Usuarios/'+$stateParams.idUsuario,
            data:{
                nombre: $scope.usuario.nombre,
                apellido: $scope.usuario.apellido,
                password: $scope.usuario.password,
                correo: $scope.usuario.correo,
                fecha: $scope.usuario.fecha,
                imagen: $scope.usuario.imagen
            }
        }).then(
        function exitoEnElGuardado(respuesta) {
            console.log(respuesta);
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });

 }
    
}]);