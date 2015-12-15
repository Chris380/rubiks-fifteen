var RubiksFifteen;
(function (RubiksFifteen) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var RubiksfifteenController = (function () {
            function RubiksfifteenController() {
                var _this = this;
                this.moveDown = function (colIndex) {
                    _this.field[4][colIndex] = _this.field[3][colIndex];
                    _this.field[3][colIndex] = _this.field[2][colIndex];
                    _this.field[2][colIndex] = _this.field[1][colIndex];
                    _this.field[1][colIndex] = _this.field[0][colIndex];
                    _this.field[0][colIndex] = 0;
                };
                this.moveUp = function (colIndex) {
                    _this.field[0][colIndex] = _this.field[1][colIndex];
                    _this.field[1][colIndex] = _this.field[2][colIndex];
                    _this.field[2][colIndex] = _this.field[3][colIndex];
                    _this.field[3][colIndex] = _this.field[4][colIndex];
                    _this.field[4][colIndex] = 0;
                };
                this.moveRight = function (rowIndex) {
                    _this.field[rowIndex][4] = _this.field[rowIndex][3];
                    _this.field[rowIndex][3] = _this.field[rowIndex][2];
                    _this.field[rowIndex][2] = _this.field[rowIndex][1];
                    _this.field[rowIndex][1] = _this.field[rowIndex][0];
                    _this.field[rowIndex][0] = 0;
                };
                this.moveLeft = function (rowIndex) {
                    _this.field[rowIndex][0] = _this.field[rowIndex][1];
                    _this.field[rowIndex][1] = _this.field[rowIndex][2];
                    _this.field[rowIndex][2] = _this.field[rowIndex][3];
                    _this.field[rowIndex][3] = _this.field[rowIndex][4];
                    _this.field[rowIndex][4] = 0;
                };
                this.test = "GEHT!";
                this.field = [
                    [0, 0, 0, 0, 0],
                    [0, 1, 2, 3, 4],
                    [0, 5, 6, 7, 8],
                    [0, 9, 10, 11, 12],
                    [0, 13, 14, 15, 16],
                ];
                this.switches = {
                    a: false,
                    b: false,
                    c: false,
                    m: false,
                    t: false,
                    d: false
                };
                this.toggle = function (s) {
                    switch (s) {
                        case "a":
                            if (_this.switches.a) {
                                _this.moveDown(1);
                            }
                            else {
                                _this.moveUp(1);
                            }
                            _this.switches.a = !_this.switches.a;
                            break;
                        case "b":
                            if (_this.switches.b) {
                                _this.moveDown(2);
                            }
                            else {
                                _this.moveUp(2);
                            }
                            _this.switches.b = !_this.switches.b;
                            break;
                        case "c":
                            if (_this.switches.c) {
                                _this.moveDown(3);
                            }
                            else {
                                _this.moveUp(3);
                            }
                            _this.switches.c = !_this.switches.c;
                            break;
                        case "m":
                            if (_this.switches.m) {
                                _this.moveRight(1);
                                _this.moveRight(2);
                                _this.moveRight(3);
                            }
                            else {
                                _this.moveLeft(1);
                                _this.moveLeft(2);
                                _this.moveLeft(3);
                            }
                            _this.switches.m = !_this.switches.m;
                            break;
                        case "t":
                            if (!_this.switches.a || !_this.switches.b || !_this.switches.c) {
                                break;
                            }
                            if (_this.switches.t) {
                                _this.moveRight(0);
                            }
                            else {
                                _this.moveLeft(0);
                            }
                            _this.switches.t = !_this.switches.t;
                            break;
                        case "d":
                            if (_this.switches.a || _this.switches.b || _this.switches.c) {
                                break;
                            }
                            if (_this.switches.d) {
                                _this.moveRight(4);
                            }
                            else {
                                _this.moveLeft(4);
                            }
                            _this.switches.d = !_this.switches.d;
                            break;
                        default:
                            break;
                    }
                };
            }
            return RubiksfifteenController;
        })();
        angular
            .module("app.rubiksfifteen")
            .controller("RubiksfifteenController", RubiksfifteenController);
    })(Controllers = RubiksFifteen.Controllers || (RubiksFifteen.Controllers = {}));
})(RubiksFifteen || (RubiksFifteen = {}));
