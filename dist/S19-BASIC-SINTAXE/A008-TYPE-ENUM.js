"use strict";
var Colors;
(function (Colors) {
    Colors["RED"] = "vermelho";
    Colors["BLUE"] = "azul";
    Colors[Colors["BLACK"] = 10] = "BLACK";
    Colors[Colors["GRAY"] = 11] = "GRAY";
})(Colors || (Colors = {}));
console.log(Colors);
console.log(Colors[10]);
console.log(Colors[11]);
console.log(Colors.BLUE);
