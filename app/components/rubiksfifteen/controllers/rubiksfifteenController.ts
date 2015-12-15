module RubiksFifteen.Controllers {
  "use strict";

  export interface IRubiksfifteenController {
    test: string;
    field: any;
  }

  class RubiksfifteenController implements IRubiksfifteenController {
    test: string;
    field: any[];
    switches : {a: boolean, b: boolean, c: boolean, t: boolean, m: boolean, d: boolean};
    toggle: (s: string) => void;

    constructor() {
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

        this.toggle = (s: string) => {
          switch (s) {
            case "a":
              if (this.switches.a) {
                this.moveDown(1);
              } else {
                this.moveUp(1);
              }
              this.switches.a = !this.switches.a;
              break;
            case "b":
                if (this.switches.b) {
                  this.moveDown(2);
                } else {
                  this.moveUp(2);
                }
                this.switches.b = !this.switches.b;
                break;
              case "c":
                  if (this.switches.c) {
                    this.moveDown(3);
                  } else {
                    this.moveUp(3);
                  }
                  this.switches.c = !this.switches.c;
                  break;
              case "m":
                  if (this.switches.m) {
                    this.moveRight(1);
                    this.moveRight(2);
                    this.moveRight(3);
                  } else {
                    this.moveLeft(1);
                    this.moveLeft(2);
                    this.moveLeft(3);
                  }
                  this.switches.m = !this.switches.m;
                  break;
              case "t":
                if (!this.switches.a || !this.switches.b || !this.switches.c) {
                  break;
                }

                if (this.switches.t) {
                  this.moveRight(0);
                } else {
                  this.moveLeft(0);
                }
                this.switches.t = !this.switches.t;
                break;
              case "d":
                  if (this.switches.a || this.switches.b || this.switches.c) {
                    break;
                  }

                  if (this.switches.d) {
                    this.moveRight(4);
                  } else {
                    this.moveLeft(4);
                  }
                  this.switches.d = !this.switches.d;
                  break;

            default:
              break;
          }
        };
    }

    private moveDown = (colIndex: number) => {
      this.field[4][colIndex] = this.field[3][colIndex];
      this.field[3][colIndex] = this.field[2][colIndex];
      this.field[2][colIndex] = this.field[1][colIndex];
      this.field[1][colIndex] = this.field[0][colIndex];
      this.field[0][colIndex] = 0;
    };

    private moveUp = (colIndex: number) => {
      this.field[0][colIndex] = this.field[1][colIndex];
      this.field[1][colIndex] = this.field[2][colIndex];
      this.field[2][colIndex] = this.field[3][colIndex];
      this.field[3][colIndex] = this.field[4][colIndex];
      this.field[4][colIndex] = 0;
    };

    private moveRight = (rowIndex: number) => {
      this.field[rowIndex][4] = this.field[rowIndex][3];
      this.field[rowIndex][3] = this.field[rowIndex][2];
      this.field[rowIndex][2] = this.field[rowIndex][1];
      this.field[rowIndex][1] = this.field[rowIndex][0];
      this.field[rowIndex][0] = 0;
    };

    private moveLeft = (rowIndex: number) => {
      this.field[rowIndex][0] = this.field[rowIndex][1];
      this.field[rowIndex][1] = this.field[rowIndex][2];
      this.field[rowIndex][2] = this.field[rowIndex][3];
      this.field[rowIndex][3] = this.field[rowIndex][4];
      this.field[rowIndex][4] = 0;
    };
  }

  angular
    .module("app.rubiksfifteen")
    .controller("RubiksfifteenController", RubiksfifteenController);
}
