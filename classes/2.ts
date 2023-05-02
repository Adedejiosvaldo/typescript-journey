//Excercises

//Excercise 1

class Logger {
  nameOfFile: string;
  constructor(nameOfFile: string) {
    this.nameOfFile = nameOfFile;
  }

  printTheFileName(): void {
    console.log(this.nameOfFile);
  }
}

const readMyPDF = new Logger("MyPDF.pdf");
console.log(readMyPDF);
