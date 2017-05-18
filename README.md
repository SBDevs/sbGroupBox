# sbGroupBox

Directiva de AngularJS que personaliza la funcionalidad de lo conocido como radiobutton.
Esta directiva ha sido creada para que sea 100% compatible con la mayoria de los navegadores (especialmente con IE y Chrome).

NOTA: Esta en una face inicial y en un futuro esperamos dotarla de mucha más funcionalidad.

### Como empezar

Debe descargar el proyecto donde encontrará todo lo necesario para usar estas directivas.  

### Prerequisito

Para usar sb-Group-box, necesitas implementar AngularJS en su solución web. 
Se hace uso de bootstrap y fontawesome, ya que son ampliamente utilizadas en el desarrollo web. 

### Load:
Para usar la directiva, incluir los ficheros AngularJS appDemoDirectivas.js, directivas.js 
y sBGroupBox.css a la pagina web:


### Atributos
Esta directiva contiene los siguientes atributos en su definicion:

| Atributo                     | Definición                                                                                             |
|:----------------------------:|:------------------------------------------------------------------------------------------------------:|
| arraygroupbox                | asignará el array mediante el cual se formará la estructura de groupbox para usarla como radiobutton.  |
| etiqueta                     | asigna que campo del objeto usado para montar cada botón se mostrará como contenido del botón          |
| arraygroupboxdesahabilitados | asignar que objetos del arraygroupbox se mantendran bloqueados                                         |
| fa-seleccionado              | contendrá los iconos de la libreria font awesome para cuando el boton este seleccionado                | 
| fa-nonseleccionado           | contendrá los iconos de la libreria font awesome para cuando el boton este no seleccionado             |
| fa-bloqueado                 | contendrá los iconos de la libreria font awesome para cuando el boton este bloqueado                   |
| orientacion-horizontal       | valores booleanos para indicar que tipo de orientación se creará al generar la vista de la web         |
| bs-columnas                  | numero de columnas usado en el tamaño del control                                                      |
| multiseleccion               | asignara si se puede realizar multiselección o como selector simple                                    |


## EJEMPLOS

### html

```html
<!DOCTYPE HTML>
<html>
<head>
 <link href="content/css/sbGroupBox.css" rel="stylesheet" />
</head>
<body ng-app="app">
  //.....
  <!--Aplicacion aggular-->
   <script src="app/directivas.js"></script>
    <script src="app/appDemoDirectivas.js"></script>
</body>
</html>

```

```html
 //Para llamar a la directiva donde queramos usarla.
 //.....
<body>
    <div id="CapaDemoDirectivas">
        <div ng-controller="CtlDemoDirectivas">

            <sb-group-box arraygroupbox="ArrayGroupBox" etiqueta="Id" arraygroupboxdesahabilitados="ArrayGroupBoxDeshabilitado" ng-model="ItemSeleccionado"
                fa-seleccionado="IconoSeleccionado" fa-no-seleccionado="IconoNoSeleccionado" fa-bloqueado="IconoBloqueado" orientacion-horizontal='OrientacionHorizontal'
                bs-columnas='Columnas' multiseleccion="Multiseleccion1"></sb-group-box>
			</div>
 //.....

		</div>
	</body>

</html>
```

### JavaScript 

```javascript

ar appDemoDirectivas = angular.module('appDemoDirectivas', ['Directivas']);


var CtlDemoDirectivas = function ($scope) {

    $scope.IconoSeleccionado = "fa-check-square-o";
    $scope.IconoNoSeleccionado = "fa-square-o";
    $scope.IconoBloqueado = "fa-ban";
    $scope.OrientacionHorizontal = true;
    $scope.Columnas = 4;

    var obj0, obj1, obj2, obj3, obj4;

    obj0 = {

        Id: 0,
        Titulo: "Primero"
    };
    obj1 = {

        Id: 1,
        Titulo: "Segundo"
    };
    obj2 = {

        Id: 2,
        Titulo: "Tercero"
    };
    obj3 = {

        Id: 3,
        Titulo: "Cuarto"
    };
    obj4 = {

        Id: 4,
        Titulo: "Quinto"
    };


    $scope.ArrayGroupBox = [];
    $scope.ArrayGroupBoxDeshabilitado = [];

    setTimeout(function () {

        var arrayDemo = [];

        arrayDemo.push(obj0);
        arrayDemo.push(obj1);
        arrayDemo.push(obj2);
        arrayDemo.push(obj3);
        arrayDemo.push(obj4);

        var arrayBloqueados = [];
        arrayBloqueados.push(obj4);
        arrayBloqueados.push(obj2);

        $scope.ArrayGroupBox = arrayDemo;

        $scope.ArrayGroupBoxDeshabilitado = arrayBloqueados;

        if (!$scope.$$phase && !$scope.$root.$$phase)
            $scope.$apply();


    }, 2000);

    setTimeout(function () {

        var arrayBloqueados = [];
        arrayBloqueados.push(obj0);
        arrayBloqueados.push(obj3);

        $scope.ArrayGroupBoxDeshabilitado = arrayBloqueados;

        if (!$scope.$$phase && !$scope.$root.$$phase)
            $scope.$apply();

    }, 6000)



    $scope.$watch('ItemSeleccionado', function () {

        if ($scope.ItemSeleccionado != null) {

            alert('elemento Seleccionado: ' + $scope.ItemSeleccionado.Titulo);

        }

    }, false);


    $scope.CambiaColumnas = function(numero){

        $scope.Columnas = numero;


        if (!$scope.$$phase && !$scope.$root.$$phase)
            $scope.$apply();

    }

     $scope.CambiarHorientacion = function(numero){

         $scope.OrientacionHorizontal = ! $scope.OrientacionHorizontal;

        
        if (!$scope.$$phase && !$scope.$root.$$phase)
            $scope.$apply();

    }


};


CtlDemoDirectivas.$inject = ['$scope'];

appDemoDirectivas.controller('CtlDemoDirectivas', CtlDemoDirectivas);

var CapaDemoDirectivas = document.getElementById('CapaDemoDirectivas');
angular.bootstrap(CapaDemoDirectivas, ['appDemoDirectivas']);
```
### EJEMPLO
	http://sbcontrols.ml/


## Herramientas utilizadas

  * [AngularJs](https://angularjs.org/)
  * [BootStrap](http://getbootstrap.com/getting-started/)
  * [FontAwesome](http://fontawesome.io/)	
  * [JQuery.Stepper](Luciano Longo)


## Autores

Esta directiva ha sido desarrollado como trabajo para la asignatura SOFTWARE LIBRE Y COMPROMISO SOCIAL de la Universidad de Córdoba.
```
Desarrolladores de esta directiva 

Verónica Gómez Molina
Manuel David Ruiz Rubio
Eloy Ortiz Pulido
``` 

Especial agradecimiento por sus masterclass en angular

```
Rafael Torres Cabezas
```
