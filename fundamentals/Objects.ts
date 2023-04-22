let employee: {
  readonly id: number;
  name: String;
  date: (date: Date) => void;
} = {
  id: 1,
  name: "",
  date: (date: Date) => {
    console.log("Hello");
  },
};
employee.name = "Ade";
console.log(employee);
