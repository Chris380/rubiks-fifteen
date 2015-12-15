var RubiksFifteen;
(function (RubiksFifteen) {
    var Filters;
    (function (Filters) {
        function RomanNumerFilter() {
            return function (number) {
                switch (number) {
                    case 0:
                        return "";
                    case 1:
                        return "I";
                    case 2:
                        return "II";
                    case 3:
                        return "I";
                    case 4:
                        return "IV";
                    case 5:
                        return "V";
                    case 6:
                        return "VI";
                    case 7:
                        return "VII";
                    case 8:
                        return "VIII";
                    case 9:
                        return "IX";
                    case 10:
                        return "X";
                    case 11:
                        return "XI";
                    case 12:
                        return "XII";
                    case 13:
                        return "XIII";
                    case 14:
                        return "XIV";
                    case 15:
                        return "XV";
                    case 16:
                        return "*";
                    default:
                        return "";
                }
            };
        }
        ;
        angular
            .module("app.rubiksfifteen")
            .filter("romannumber", RomanNumerFilter);
    })(Filters = RubiksFifteen.Filters || (RubiksFifteen.Filters = {}));
})(RubiksFifteen || (RubiksFifteen = {}));
