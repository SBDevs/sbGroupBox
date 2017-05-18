var sbGroupBoxDirective = angular.module('SB-GroupBox', []);

var sbGroupBox = function () {

    var directiva = {};

    var restrict = "E";
    var templateUrl = 'js/templates/sbGroupBox.html';
    var scope = {

        ArrayGroupBox: "=arraygroupbox",
        Etiqueta:"@etiqueta",
        Seleccionado: "=ngModel",
        Orientacion: "=orientacion",
        ArrayGroupBoxDeshabilitados: "=?arraygroupboxdeshabilitados",
        FaSeleccionado: "=faSeleccionado",
        FaNoSeleccionado: "=faNoSeleccionado",
        FaDeshabilitado: "=?faDeshabilitado",
        OrientacionHorizontal: "=orientacionHorizontal",
        BsColumnas: "=bsColumnas",
        Multiseleccion: "=multiseleccion"


    };

    var replace = true;
    var link = function (scope, elmn, atrs) {

        scope.ArrayGroupBoxExtend = [];

        if (typeof (scope.ObservadorCambioGrupo) == "function") {
            scope.ObservadorCambioGrupo();
        }

        scope.ObservadorCambioGrupo = scope.$watchGroup(['ArrayGroupBox', 'ArrayGroupBoxDeshabilitados', 'Multiseleccion'], function (newVal, oldVal) {
            if (scope.ArrayGroupBox != null && typeof (scope.ArrayGroupBox) != "undefined") {
                scope.ArrayGroupBoxExtend = [];
                scope.ArrayGroupBox.forEach(function (item) {
                    if (typeof(scope.ArrayGroupBoxDeshabilitados) === 'undefined') {
                        var elem = {
                            item: item,
                            Seleccionado: false,
                        };
                    }
                    else {
                        var elem = {
                            item: item,
                            Seleccionado: false,
                            Deshabilitado: (scope.ArrayGroupBoxDeshabilitados.indexOf(item) >= 0) ? true : false
                        };
                    }
                    scope.ArrayGroupBoxExtend.push(elem)
                });
            }
            else {
                scope.ArrayGroupBoxExtend = [];
            }
        }, false);

        scope.CambioSeleccion = function (elem) {
            if (scope.Multiseleccion) {
                if (!elem.Deshabilitado) {
                    elem.Seleccionado = !elem.Seleccionado;
                    var ArrayAux = [];
                    scope.ArrayGroupBoxExtend.forEach(function (obj) {
                        if (obj.Seleccionado) {
                            ArrayAux.push(obj.item);
                        }
                    });
                    scope.Seleccionado = ArrayAux;
                }
            } else {
                if (!elem.Deshabilitado) {
                    elem.Seleccionado = !elem.Seleccionado;
                    if (elem.Seleccionado) {
                        scope.ArrayGroupBoxExtend.forEach(function (elemarray) {
                            if (elemarray != elem)
                                elemarray.Seleccionado = false;
                        });
                        scope.Seleccionado = elem.item;
                    }
                    else {
                        scope.Seleccionado = null;
                    }

                    if (!scope.$$phase && !scope.$root.$$phase)
                        scope.$apply();
                }
            }
        }
    }

    directiva.restrict = restrict;
    directiva.templateUrl = templateUrl;
    directiva.scope = scope;
    directiva.replace = replace;
    directiva.link = link;
    return directiva;
}

sbGroupBoxDirective.directive('sbGroupBox', sbGroupBox);