//Excercise
var Logger = /** @class */ (function () {
    function Logger(nameOfFile) {
        this.nameOfFile = nameOfFile;
    }
    Logger.prototype.printTheFileName = function () {
        console.log(this.nameOfFile);
    };
    return Logger;
}());
var readMyPDF = new Logger("MyPDF.pdf");
console.log(readMyPDF);
