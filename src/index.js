import { add, User } from "./helpers/helper";  // imenniy export -import вимагає однакової назви та фігурних дужок
import qwerty from "./helpers/helper";  // default export  можна з любою назвою та без фігурних дужок. але тільки один раз
console.log(qwerty);                    // дефолтний експорт не популярний
qwerty();

console.log(add);
add();

// const newUser = new User('Test name');  
// console.log(newUser);

import * as methods from "./helpers/helper"; // * означає, що імпортуємо всі експорти
console.log(methods);
console.log(methods.add());                  // використовуємо з імпортованого модуля тільки функцію add()
const newUser = new methods.User('Test name');  // використовюємо тільки класс з метода для створення нового об'єкта newUser
console.log(newUser);
