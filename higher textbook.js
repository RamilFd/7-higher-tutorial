
// *************************************************  РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ  ******************************************************


// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.

// let str = 'ahb acb aeb aeeb adcb axeb';
// console.log('ahb acb aeb aeeb adcb axeb'.replace(/a.b/g, 'string'));



// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.

// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/a..a/g, 'string'));



// Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.

// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/ab.a/g, 'string'));



// Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab+a/g, 'str'));



// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.

// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab*a/g, '!'));



// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.

// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab?a/g, '!'));



// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.

// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab*a/g, 'str'));



// Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.

// let str = 'ab abab abab abababab abea';
// console.log(str.replace(/(ab)+/g, 'str'));



// Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.

// let str = 'a.a aba aea';
// console.log(str.replace(/a\.a/g, 'str'));



// Напишите регулярку, которая найдет строку '2+3', не захватив остальные.

// let str = '2+3 223 2223';
// console.log(str.replace(/2\+3/, '!'));



// Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).

// let str = '23 2+3 2++3 2+++3 345 567';
// console.log(str.replace(/2\++3/g, '!'));



// Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.

// let str = '23 2+3 2++3 2+++3 445 677';
// console.log(str.replace(/2\+*3/g, '!'));



// Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.

// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// console.log(str.replace(/\*q+\+/g, '!'));



// Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.

// let str = '[abc] {abc} abc (abc) [abc]';
// console.log(str.replace(/\[...\]/g, '!'));



// Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.

// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{2,4}a/g, '!'));



// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается менее 3-х раз (включительно).

// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{1,3}a/g, '!'));



// Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).

// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{4,}a/g, '!'));



// Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'.Между буквами a может быть любой символ(кроме 'a').

// let str = 'aba accca azzza wwwwa';
// console.log(str.replace(/a.+?a/g, '!'));



// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.

// let str = 'a1a a2a a3a a4a a5a aba aca';
// console.log(str.replace(/a\da/g, '!'));



// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.

// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// console.log(str.replace(/a\d*a/g, '!'));



// Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').

// let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
// console.log(str.replace(/a\d*a/g, '!'));



// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.

// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// console.log(str.replace(/a\Db/g, '!'));



// Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.

// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// console.log(str.replace(/a\Wb/g, '!'));



// Напишите регулярку, которая заменит все пробелы на '!'.

// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// console.log(str.replace(/\s/g, '!'));



// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.

// let str = 'aba aea aca aza axa';
// console.log(str.replace(/a[bec]a/g, '!'));



// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3 - х до 6 - ти.

// let str = 'a1a a3a a7a a9a aba';
// console.log(str.replace(/a[3-6]a/g, '!'));



// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g.

// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-g]a/g, '!'));



// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.

// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-fj-z]a/g, '!'));



// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.

// let str = 'aAa aea aEa aJa a3a';
// console.log(str.replace(/a[a-fA-D]a/g, '!'));



// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных.

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-z]+a/g, '!'));




// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-zA-Z]+a/g, '!'));



// Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.

// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-z1-9]+a/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.

// str.replace(/1[^ex]2/g, '!');



// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.

// str.replace(/x[^2-7]z/g, '!');



// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая латинская буква от 1 и более раз, буква 'z'.

// str.replace(/x[^A-Z]+z/g, '!');



// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая маленькая латинская буква и не цифра от 1 до 5 от 1 и более раз, буква 'z'.

// str.replace(/x[^a-zA-Z1-5]+z/g, '!');



// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.

// let str = 'wйw wяw wёw wqw';
// console.log(str.replace(/w[а-яё]w/g, '!'));



// Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.

// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// console.log(str.replace(/[а-яёА-ЯЁ]*/g, '!'));



// Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.

// let str = 'aba aea aca aza axa a.a a+a a*a';
// console.log(str.replace(/a[.+*]a/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.

// let str = 'xaz x.z x3z x@z x$z xrz';
// console.log(str.replace(/x[^.@$]z/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.

// str.replace(/[\d.]+/g, '!');



// Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.

// str.replace(/[^\da-g{3,7}]/g, '!');



// Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.

// let str = 'x[]z x{}z x.z x()z';
// console.log(str.replace(/x[\[\]\{\}\(\)]+z/g, '!'));



// Напишите регулярку, которая найдет строки в любых скобках и заменят их на '!'.

// let str = '[abc] {abc} abc (abc) [abc]';
// console.log(str.replace(/[\[\{\(a-z\]\}\)]/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.

// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[\^@][a-z]{2}/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.

// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[^\^@][a-z]{2}/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка, а затем две латинских буквы.

// let str = '^xx axx ^zz bkk';
// console.log(str.replace(/[^\^][a-z]{2}/g, '!'));



// Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.

// let str = 'xaz xBz xcz x-z x@z';
// console.log(str.replace(/x[a-zA-z-]z/g, '!'));
// console.log(str.replace(/x[a-zA-z\-]z/g, '!'));



// Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.

// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// console.log(str.replace(/x[$\-+]z/g, '!'));



// Напишите регулярку, которая найдет первую подстроку из букв.

// let str = 'abc def xyz';
// console.log(str.replace(/^[a-z]{3}/g, '!'));



// Напишите регулярку, которая найдет последнюю подстроку из букв.

// let str = 'abc def xyz';
// console.log(str.replace(/[a-z]{3}$/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.

// let str = 'aeeea aeea aea axa axxa axxxa';
// console.log(str.replace(/a(e+|x+)a/g, '!'));



// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.

// let str = 'aeeea aeea aea axa axxa axxxa';
// console.log(str.replace(/a(e{2}|x+)a/g, '!'));



// Определите, начинается ли переданная строка с 'http://'.

// console.log(/http\:\/\//.test('http://code.mu/ru/javascript/book/supreme/regular/method-test/'));



// Определите, начинается ли переданная строка с 'http://' или с 'https://'.

// console.log(/http\:\/\/|https\:\/\//.test('https://code.mu/ru/javascript/book/supreme/regular/method-test/'));



// Определите, что ли заканчивается переданная строка расширением 'txt', 'html' или 'php'.

// console.log(/$txt|html|php/.test('index.html'));



// Определите, что ли заканчивается переданная строка расширением 'jpg' или 'jpeg'.

// console.log(/$jpg|jpeg/.test('mypicture.png'));



// Определите, что ли заканчивается переданная строка расширением 'jpg', 'jpeg' или 'png'.

// console.log(/$jpg|jpeg|png/.test('mypicture.png'));



// Определите, является ли строка 'числом, длиной от 1 до 12 цифр'.

// console.log(/^[0-9]{1,12}$/.test('1111'));



// Определите, является ли переданная строка датой в формате год-месяц-день.

// console.log(/^(\d{4})\-(0[1-9]|1[0-2])\-([0-2]\d|3[0-1])$/.test('0001-01-01'));



// Определите, является ли переданная строка датой в формате день.месяц.год.

// console.log(/^([0-2]\d|3[0-1])\.(0[1-9]|1[0-2])\.(\d{4})$/.test('31.12.2023'));



// Определите, является ли переданная строка временем в формате часы:минуты:секунды.

//console.log(/^([0-1]\d|2[0-3])\:([0-5]\d)\:([0-5]\d)$/.test('01:02:09'));



// Определите, является ли переданная строка корректным емэйлом.

// console.log(/^([A-Za-z0-9])+\@([A-Za-z0-9])+\.([A-Za-z]{2,3})$/.test('ivan@mail.ru'));



// Определите, является ли переданная строка доменным именем.

//console.log(/^(http\:\/\/|https\:\/\/|www\.)+([a-zA-Z0-9])+\.([a-z]{2,4})$/.test('www.yandex.ru'));



// Получите массив доменных имен из этой строки.

// let str = 'site.ru sss site.com zzz site.net';
// let res = str.match(/site+\.[a-z]{2,3}/g);
// console.log(res);



// Найдите сумму всех чисел этой строки.

// let str = 'a1b c34d x567z';
// let arr = str.match(/\d/g);
// let res = 0;
// for (let elem of arr) {
// 	res += Number(elem);
// }
// console.log(res);



// Найдите этот домен и положите его имя в первый карман, а зону - во второй.

// let str = 'sss domain.ru zzz';
// let res = str.match(/(domain)\.(ru)/);
// console.log(res);



// Положите день в первый карман, месяц - во второй, а год - в третий.

// let str = '31.12.2025';
// let res = str.match(/(31)\.(12)\.(2025)/);
// console.log(res);



//Поменяйте местами цифры во всех двухзначных числах.

// let str = '12 34 56 78';
// let res = str.replace(/(\d)(\d)/g, '$2$1');
// console.log(res);



// Преобразуйте эту дату в '2025.12.31'.

// let str = '31.12.2025';
// let res = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, '$3.$2.$1');
// console.log(res);



// Напишите регулярку, которая рядом с каждой цифрой напишет такую же.

// let str = 'a1b2c3';
// let res = str.replace(/(\d)/g, "$&$1");
// console.log(res);



// Замените домены на ссылки вида: <a href="http://site.ru">site.ru</a>

// let str = 'sss site.ru zzz site.com kkk';
// let res = str.replace(/(site\.[a-z]{2,3})/g, '<a href="http://$1">$1</a>');
// console.log(res);



// Найдите все подстроки, в которых есть три одинаковые буквы подряд.

// let str = 'aaa bbb ccc xyz';
// let res = str.replace(/([a-z])\1\1/g, '!');
// console.log(res);



// Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.

// let str = 'a aa aaa aaaa aaaaa';
// let res = str.replace(/([a-z])\1{1,}/g, '!');
// console.log(res);



// Найдите все подстроки, в которых есть два одинаковых слова подряд.

// let str = 'aaa aaa bbb bbb ccc ddd';
// let res = str.replace(/([a-z]{3}\ )\1/g, '!! ');
// console.log(res);



// Получите массив имен функций из строки.

// let str = 'func1() func2() func3()';
// let res = str.match(/func[\d]/g);
// console.log(res);



// Получите массив имен атрибутов этого тега.

// let str = '<a href="" class="eee" id="zzz">';
// let res = str.match(/(eee)|(zzz)/g);
// console.log(res);



// Найдите числа, стоящие в скобках и увеличьте их в два раза:

// let str = 'aaa [2] bbb [3] ccc [12] ddd';
// let res = str.replace(/\d+/g, function (match) {
// 	return match * 2;
// })
// console.log(res);



//Найдите все числа и переверните их цифры в обратном порядке.То есть из нашей строки должна получится следующая: '321 654 987'

// let str = '123 456 789';
// let res = str.replace(/\d{3}/g, function (match) {
// 	return match.split('').reverse().join('');
// });
// console.log(res);



// Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка: '2025-12-31 2024-11-30 2023-10-29'

// let str = '31.12.2025 30.11.2024 29.10.2023';
// let res = str.replace(/\d{2}\.\d{2}\.\d{4}/g, function (match) {
// 	return match.split('.').reverse().join('-');
// })
// console.log(res);




// Найдите позицию первого числа, состоящего из трех цифр.

// let str = '1 23 456 789';
// let res = str.search(/\d{3}/);
// console.log(res);



// Разбейте эту строку так, чтобы все части даты и времени были в одном массиве. То есть у вас должен получится следующий массив: ['2025', '12', '31', '12', '59', '59'];

// let str = '2025-12-31 12:59:59';
// let res = str.split(/[\- \:]/); // str.split(/\-| |\:]/)
// console.log(res);




// *************************************************  СТРУКТУРЫ  ******************************************************


// Проверьте, будут ли работать методы массивов для переменной elems.

// let elems = document.querySelectorAll('p');
// console.log(Array.isArray(elems));



// Каким-нибудь способом получите псевдомассив элементов. Преобразуйте его в массив тремя описанными способами.

// let elems = document.querySelectorAll('p');
// let array = [...elems];
// let arr = Array.from(elems);
// let ar = [];
// for (let elem of elems) {
// 	ar.push(elem);
// }
// console.log(array, arr, ar);



// С помощью метода slice получите все абзацы, кроме первого и последнего.

// let elems = document.querySelectorAll('p');
// let arr = [...elems];
// console.log(arr.slice(1, 4));



// Проверьте, какой тип коллекции будет в свойстве childNodes и в свойстве children.

// let div = document.querySelector('div');
// let elems1 = document.querySelectorAll('p');     // NodeList
// let elems2 = document.getElementsByTagName('p'); // HTMLCollection

// let p1 = document.createElement('p');
// div.append(p1);

// console.log(elems1);
// console.log(elems2);
// console.log(p1.childNodes);
// console.log(p1.children)



// Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let map = new Map;

// map.set(arr1, 'sting1')
// map.set(arr2, 'sting2')
// map.set(arr3, 'sting3')

// console.log(map.get(arr2));



// Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3 = { e: 5, f: 6 };

// let map = new Map;

// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);

// // map.delete(obj1);
// // map.clear();

// console.log(map.get(obj1));
// console.log(map.size);
// console.log(map.has(obj2));



// Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// let map = new Map;

// map.set(arr1, 'string1');
// map.set(arr2, 'string2');

// let keys = map.keys();
// for (let key of keys) {
// 	console.log(key);
// }

// // Получите массив ее элементов и переберите их циклом for-of.

// let values = map.values();
// for (let value of values) {
// 	console.log(value);
// }

// console.log(map.entries());



// Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на
// странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.

// let inputs = document.querySelectorAll('input');
// let mapInputs = new Map;
// let i = 1;

// for (let input of inputs) {
// 	mapInputs.set(input, i++);
// }

// for (let input of inputs) {
// 	input.addEventListener('click', function () {
// 		this.value = mapInputs.get(this);
// 	});
// }




// 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

// Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число.
// Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.

// let inputs = document.querySelectorAll('input');
// let mapInputs = new Map;

// for (let input of inputs) {
// 	input.addEventListener('keydown', function (e) {
// 		if (e.code == "Enter") {
// 			this.value = this.value + ' ,';
// 		}
// 	})
// }



// С помощью этого массива создаейте коллекцию Set.

// let arr = [1, 2, 3, 1, 3, 4];

// let set = new Set;    // ([1, 2, 3, 4]);

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);

// console.log(set);



// Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.

// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);

// console.log(set);



// Создайте коллекцию Set с начальными значениями 1, 2 и 3. С помощью метода add добавьте в коллекцию еще одно число 2.
// Выведите содержимое коллекции в консоль, убедитесь, что число 2 не добавилось второй раз.

// let set = new Set([1, 2, 3]);

// set.add(2);
// console.log(set);



// Создайте коллекцию Set с начальными значениями 1, 2 и 3. Выведите на экран количество элементов в коллекции.

// let set = new Set([1, 2, 3]);
// console.log(set.size);



// Создайте коллекцию Set с начальными значениями 1, 2 и 3. Проверьте наличие в коллекции элемента со значением 3, а затем элемента со значением 4.

// let set = new Set([1, 2, 3]);
// console.log(set.has(3), set.has(4))



// Создайте коллекцию Set с какими-нибудь числами. Переберите эту коллекцию циклом и найдите сумму ее элементов.

// let set = new Set([1945, 6720, 4394, 847]);
// let sum = 0;

// for (let elem of set) {
// 	sum += elem;
// }

// console.log(sum);



// Дана коллекция Set. Преобразуйте ее в массив двумя описанными способами.

// let set = new Set([1, 2, 3, 4, 5]);

// let arr1 = [...set];
// let arr2 = Array.from(set);

// console.log(arr1, arr2);



// Дан массив. Преобразуйте его в коллекцию.

// let arr = [1, 2, 3];
// let set = new Set(arr);

// console.log(arr);



// Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.

// function clear(arr) {
// 	arr = [...new Set(arr)];
// 	console.log(arr);
// }

// clear([1, 2, 2, 3, 4, 5, 5, 1, 4, 5, 2]);



// Даны абзацы и кнопка. Пользователь кликает на эти абзацы в произвольном порядке. Сделайте так, чтобы по нажатию на кнопку
// в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак.

// let elems = document.querySelectorAll('p');
// let btn = document.querySelector('button');
// let set = new Set;

// for (let elem of elems) {
// 	elem.addEventListener('click', function () {
// 		set.add(this);
// 	})
// }

// btn.addEventListener('click', function () {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!!!'
// 	}
// })



// Вручную преобразуйте этот массив в строку в формате JSON.

// let arr = [1, 2, 3, 'a', 'b', 'c'];

// let json = '[1, 2, 3, "a", "b", "c"];'
// console.log(json);



// Вручную преобразуйте этот массив в строку в формате JSON.

// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 'eee',
// 	d: true,
// };

// let json = `{
// 	"a": 1,
// 	"b": 2,
// 	"c": "eee",
// 	"d": true
// }`
// console.log(json);



// Вручную преобразуйте этот массив в строку в формате JSON.

// let obj = {
// 	a: ['a', 'b', 'c',],
// 	b: '111',
// 	c: 'eee',
// };

// let json = `{
// 	"a": ["a", "b", "c"],
// 	"b": "111",
// 	"c": "eee"
// }`;
// console.log(json);



// Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.

// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = 0;
// for (let elem of arr) {
// 	sum += elem;
// }
// console.log(arr, sum);



// Найдите сумму чисел из представленных данных.

// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
// let obj = JSON.parse(json);
// let arr = Object.values(obj);
// let sum = 0;

// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		sum += elem;
// 	}
// }

// console.log(arr, sum);



// Выведите эти имена в виде списка ul.

// let json = '["user1","user2","user3","user4","user5"]';

// let arr = JSON.parse(json);

// let wrapper = document.querySelector('.wrapper');
// let ul = document.createElement('ul');
// ul.textContent = 'Список из JS:';
// wrapper.appendChild(ul);

// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
// 	ul.appendChild(li);
// }
// console.log(arr);



// Дан следующий массив: Преобразуйте этот массив в формат JSON.

// let arr = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let json = JSON.stringify(arr);
// console.log(json);



// Получите список городов в формате JSON.
{/* <ul>
	<li>city1</li>
	<li>city2</li>
	<li>city3</li>
	<li>city4</li>
</ul> */}

// let arr = [];
// let ul = document.querySelectorAll('li');

// for (let elem of ul) {
// 	elem = elem.textContent;
// 	arr.push(elem);
// }
// let json = JSON.stringify(arr);
// console.log(json);



// Добавьте в конец строки еще одного юзера.

// let json = '["user1","user2","user3","user4","user5"]';

// let arr = JSON.parse(json);
// arr.push('user6');
// let res = JSON.stringify(arr);
// console.log(res);



// Поменяйте имя второго юзера.

// let json = '["user1","user2","user3","user4","user5"]';

// let arr = JSON.parse(json);
// arr.splice(1, 1, 'newUser');
// let res = JSON.stringify(arr);

// console.log(res);



// Добавьте в эту строку еще одного работника.

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;

// let arr = JSON.parse(json);

// let newObj = {};
// newObj.name = 'user99';
// newObj.age = 99;
// newObj.salary = 9900;

// arr.push(newObj);

// let res = JSON.stringify(arr);

// console.log(res);



// *************************************************  ХРАНИЛИЩА  ******************************************************


// Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами. Запустите этот скрипт, чтобы данные сохранились.
// Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму. Запустите второй скрипт и убедитесь в его работоспособности.

// localStorage.setItem('key1', 105);
// localStorage.setItem('key2', 6287);
// localStorage.setItem('key3', 1978);

// console.log(localStorage.getItem('key1'));
// console.log(localStorage.getItem('key2'));
// console.log(localStorage.getItem('key3'));

// function sum() {
// 	sum = 0;
// 	let a = localStorage.getItem('key1');
// 	let b = localStorage.getItem('key2');
// 	let c = localStorage.getItem('key3');
// 	sum = +a + +b + +c;
// }

// sum();
// console.log(sum);



// По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени. Затем по повторному заходу выведите,
// сколько прошло времени с предыдущего захода пользователя на сайт.

// let time1 = localStorage.getItem('time1');
// if (time1 === null) {
// 	let now1 = (new Date()).getTime();
// 	localStorage.setItem('time1', now1);
// }

// let now2 = (new Date()).getTime();
// localStorage.setItem('time2', now2);
// let time2 = localStorage.getItem('time2');

// let res = Math.round((Number(time2) - Number(time1)) / (1000 * 60)) + ' мин.';
// console.log(res);

// ** тут должны быть пропущенные задачки



// *************************************************  ИСКЛЮЧИТЕЛБНЫЕ СИТУАЦИИ  ******************************************************


// Дан код, который записывает некоторую строку в локальное хранилище: Оберните этот код в конструкцию try-catch. В блоке catch выведите сообщение
// о переполнении хранилища. Проверьте работу вашего кода для строки размером менее 5 мб и для строки большего размера.

// try {
// 	let str = 'некая строка';
// 	// for (let i = 1; i < 100; i++) {
// 	// 	str = str + ' + ' + str;
// 	// }
// 	localStorage.setItem('key', str);
// } catch (error) {
// 	alert('Невозможно выполнить операцию по разбору JSON, из-за превышения размера памяти')
// }
// console.log(localStorage.getItem('key'));



// Дан JSON, внутри которого хранится массив. Если этот JSON корректный, то выведите элементы массива в виде списка ul.
// Если же JSON не корректный, выведите на экран сообщение о том, что на странице случилась ошибка.

// let json = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';

// try {
// 	let arr = JSON.parse(json);

// 	let wrapper = document.querySelector('.wrapper');
// 	let ul = document.createElement('ul');
// 	ul.textContent = 'Список из JS:'
// 	wrapper.appendChild(ul);

// 	for (let elem of arr) {
// 		let li = document.createElement('li');
// 		li.textContent = elem;
// 		ul.appendChild(li);
// 	}
// } catch (error) {
// 	alert('Введен некорректный JSON! На странице произошла ошибка!')
// }



// Что не так с этим кодом? Исправьте недостатки этого кода.

// try {
// 	let json = '[1,2,3,4,5]';

// 	let arr = JSON.parse(json);

// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	console.log(sum);
// } catch (error) {
// 	alert('ERROR!!!');
// }



// Дана функция, преобразующая JSON в массив:

// function getArr(json) {
// 	return JSON.parse(json);
// }

// В следующем коде из JSON получают массив:

// let arr = getArr('[1,2,3,4,5]');

// Оберните вызов функции в конструкцию try-catch.

// try {
// 	let arr1 = getArr('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
// 	console.log(arr1);
// } catch (error) {
// 	alert('Произошла ошибка. Некорректный JSON!!!')
// }



// Специально создайте исключительную ситуацию, связанную с попыткой разбора некорректного JSON. Выведите в консоль имя и текст этой ошибки.

// try {
// 	let json = '1,2,3,4,5]';

// 	let arr = JSON.parse(json);

// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	console.log(sum);
// } catch (error) {
// 	console.log(error.name);
// 	console.log(error.message);
// }



// Специально создайте исключительную ситуацию, связанную с переполнением локального хранилища. Выведите в консоль имя и текст этой ошибки.

// try {
// 	let str = 'текст';
// 	for (let i = 1; i < 10000000; i++) {
// 		str = str + str + ' ';
// 	}
// 	console.log(str);
// } catch (error) {
// 	console.log(error.name);
// 	console.log(error.message);
// }



// Скопируйте код моей функции saveData, а затем не подсматривая в мой код реализуйте описанную мною обработку ошибок.
// Специально по очереди создайте исключительные ситуации, которые могут возникнуть в функции saveData./

// function saveData(json) {
// 	let arr = JSON.parse(json);
// 	for (let i = 0; i < arr.length; i++) {
// 		localStorage.setItem(i, arr[i])
// 	}
// }

// try {
// 	saveData('[1,2,3,4,5]');

// } catch (error) {

// 	if (error.name == 'QuotaExceededError') {
// 		alert('Закончилось место в хранилище');
// 	}
// 	if (error.name == 'SyntaxError') {
// 		alert('Некорректный JSON');
// 	}
// }



// В JavaScript попытка извлечь корень из отрицательного числа не приводит к выбрасыванию исключения: Напишите свою функцию, которая будет
// извлекать корень из числа и при этом выбрасывать исключение, если корень извлекается из отрицательного числа.

// let result = Math.sqrt(-1);
// console.log(result); // выведет NaN

// function square(num) {
// 	if (num >= 0) {
// 		let res = Math.sqrt(num);
// 		console.log(res);
// 		// return res;
// 	} else {
// 		throw new Error('Ошибка! Нельзя извлечь корень из отрицательного числа...');
// 	}
// }

// square(-100);


// try {
// 	alert(square(-100));
// } catch (error) {
// 	alert('Нельзя получить корень из отрицательного числа');
// }



// Выбросите исключение с типом TypeError.

// try {
// 	throw new SyntaxError('Это синтаксическа ошибка')
// } catch (error) {
// 	console.log(error.name);
// 	console.log(error.message);
// }



// Переделайте эту функцию так, чтобы она выбрасывала исключение с каким-нибудь придуманными нами типом, например, DivisionByZeroError.

// function div(a, b) {
// 	if (b !== 0) {
// 		return a / b;
// 	} else {
// 		throw { name: 'DivizionByZeroError', message: 'Ошибка деления на ноль' };
// 	}
// }

// try {
// 	let res = div(10, 000000);
// 	console.log(res);
// } catch (error) {
// 	console.log(error.message, error.name);
// }



// Переделайте вашу функцию так, чтобы она выбрасывала исключение с придуманным вами типом.
// Хорошо подумайте над названием исключения, чтобы это название было удачным.

// function square(num) {
// 	if (num >= 0) {
// 		let res = Math.sqrt(num);
// 		return res;
// 	} else {
// 		throw { name: 'ErrorNegativeNumber', message: 'Ошибка! Нельзя извлечь корень из отрицательного числа...' };
// 	}
// }

// try {
// 	alert(square(100));
// } catch (error) {
// 	alert(`${error.name}: ${error.message}`);
// }



// Сделайте так, чтобы функция getCost выбрасывала два типа исключений: если отсутствует цена и если отсутствует количество.
// Хорошо подумайте над названиями этих исключений. В блоке catch выведите разные сообщения об ошибке для исключений разных типов.

// function getCost(elem) {
// 	if (elem.dataset.price !== undefined && elem.dataset.amount !== undefined) {
// 		return elem.dataset.price * elem.dataset.amount;

// 	} else if (elem.dataset.price == undefined && elem.dataset.amount == undefined) {
// 		throw {
// 			name: 'ProductError',
// 			message: 'Нет данных по цене и количеству продукта для вычисления суммы'
// 		};

// 	} else {
// 		throw {
// 			name: 'ProductPriceAmounttError',
// 			message: 'отсутствует цена или количество у продукта'
// 		};
// 	}
// }

// let product = document.querySelector('#product');

// try {
// 	let cost = getCost(product);
// 	alert(cost);
// } catch (error) {
// 	if (error.name == 'ProductPriceAmounttError') {
// 		alert(error.message)
// 	} else {
// 		alert(error.message)
// 	}
// }



// Дан следующий код: Что не так с этим кодом ? Исправьте его на более удачный.

// try {
// 	let arr = JSON.parse(json);

// 	for (let i = 0; i < arr.length; i++) {
// 		localStorage.setItem(i, arr[i]);
// 	}
// } catch (error) {
// 	if (error.name == 'QuotaExceededError') {
// 		alert('закончилось место в хранилище');
// 	}

// 	else if (error.name == 'SyntaxError') {
// 		alert('некорректный JSON');
// 	}
// 	else {
// 		throw error;
// 	}
// }



// *************************************************  ООП НА КЛАССАХ  ******************************************************


// Сделайте класс Employee. Создайте объект класса Employee и выведите его в консоль.

// class Employee {
// 	showMyInfo() {
// 		console.log('I am a good worker');
// 	}
// 	showMySalary(name, salary) {
// 		console.log(name + ' ' + salary);
// 	}
// 	showName() {
// 		console.log(this.name);
// 	}
// 	showSalary() {
// 		console.log(this.salary);
// 	}
// };

// let employee = new Employee;
// console.log(employee)



// В объект класса Employee запишите свойства name, age и salary. Получите данные из записанных свойств и выведите их на экран.

// employee.name = 'Ivan';
// employee.age = 25;
// employee.salary = 1000;
// console.log(employee);

// console.log(typeof Employee);



// Создайте несколько объектов класса Employee. Запишите в свойство каждого работника его имя и зарплату. Выведите на экран сумму зарплат созданных вами работников.

// let employee1 = new Employee;
// employee1.name = 'Vasiliy';
// employee1.age = 30;
// employee1.salary = 1200;

// let employee2 = new Employee;
// employee2.name = 'Andrey';
// employee2.age = 28;
// employee2.salary = 900;

// let employee3 = new Employee;
// employee3.name = 'Jhon';
// employee3.age = 45;
// employee3.salary = 2500;

// function totalSalary() {
// 	return employee.salary + employee1.salary + employee2.salary + employee3.salary;
// }
// console.log(totalSalary());



// Сделайте в вашем классе Employee какой-нибудь тестовый метод. Вызовите его.

// employee.showMyInfo();
// employee3.showMyInfo();


// Передайте в ваш тестовый метод имя и зарплату работника.

// employee.showMySalary('Ivan', 1000);
// employee3.showMySalary('Jhon', 2500);



// В объект класса Employee запишите свойства name и salary. Сделайте метод, который выведет на экран имя работника.
// Сделайте метод, который выведет на экран зарплату работника.

// employee.showName();
// employee.showSalary();
// employee1.showName();
// employee1.showSalary();
// employee2.showName();
// employee2.showSalary();
// employee3.showName();
// employee3.showSalary();



// В объект класса Student запишите свойства name и surn.
// Сделайте вспомогательный метод, который будет получать первый символ строки и делать его заглавным.
// Сделайте метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии.
// Объявите в классе Student свойства name и surn. При объявлении добавьте вашим свойствам некоторые значения.


// class Student {
// 	name = 'Anton';
// 	surn = 'Bek';
// 	age = 30;

// showInfo() {
// 		return this.setUppercase(this.name) + ' ' + this.setUppercase(this.surn);
// 	}
// 	showLetters() {
// 		return this.setUppercase2(this.name) + ' ' + this.setUppercase2(this.surn);
// 	}
// 	setUppercase(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// 	setUppercase2(str) {
// 		return str[0].toUpperCase();
// 	}
// }

// let student = new Student;
// student.name = 'alex';
// student.surn = 'grom';
// console.log(student.showInfo());
// console.log(student.showLetters());



// Сделайте конструктор класса Employee.
// Передайте в конструктор класса Employee имя и зарплату работника.

// class Employee {
// 	constructor(name, salary) {
// 		console.log(this.name + ' ' + this.salary)
// 	}
// }

// let user = new Employee('Vasiliy', 1800);



// Передайте в конструктор класса Employee имя и зарплату работника и запишите их в соответствующие свойства.
// Сделайте метод, который будет выводить имя работника.
// Сделайте метод, который будет выводить зарплату работника.
// Сделайте метод, который будет увеличивать зарплату работника на 10%.

// class Employee1 {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
// 	showName() {
// 		console.log(this.name);
// 	}
// 	showSalary() {
// 		console.log(this.salary);
// 	}
// 	liftSalary() {
// 		console.log(this.salary + (this.salary / 10));
// 	}
// }

// let employee1 = new Employee1('Philipp', 1350);
// let employee2 = new Employee1('Kate', 1720);
// employee1.showName();
// employee1.showSalary();
// employee1.liftSalary();
// employee2.showName();
// employee2.showSalary();
// employee2.liftSalary();



// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
// Передайте параметром конструктора значения этих свойств.
// Сделайте метод, который выведет данные работника.

// class Employee {
// 	#name;
// 	#salary;
// 	#age;
// 	constructor(name, salary, age) {
// 		this.#name = name;
// 		this.#salary = salary;
// 		this.#age = age;
// 	}
// 	showPerson() {
// 		return this.#name + ' ' + this.#salary + ' ' + this.#age
// 	}
// }

// let employee = new Employee('Petr', 1900, 35);
// console.log(employee.showPerson());



// В следующем коде сделайте вспомогательный метод приватным:

// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}

// 	getSalary() {
// 		return this.#addSign(this.salary);
// 	}

// 	#addSign(num) {
// 		return num + '$';
// 	}
// }
// let person = new Employee('Jason', 2700);
// console.log(person.getSalary());



// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
// Передайте параметром конструктора значения этих свойств.
// Сделайте геттеры, выводящие значения каждого из наших свойств.

// Добавьте сеттеры свойств в ваш класс Employee.

// В классе Employee в сеттере возраста сделайте проверку на то, что возраст должен быть от 0 до 120.
// В классе Employee в геттере зарплаты сделайте так, чтобы при чтении зарплаты в конец ее значения добавлялся знак доллара.

// class Employee {
// 	#name;
// 	#salary;
// 	#age;
// 	#height;
// 	#age1;

// 	constructor(name, salary, age) {
// 		this.#name = name;
// 		this.#salary = salary;
// 		this.#age = age;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// 	getSalary() {
// 		return this.#salary;
// 	}
// 	getAge() {
// 		return this.#age;
// 	}
// 	setHeight(num) {
// 		this.#height = num;
// 	}
// 	getHeight() {
// 		return this.#height;
// 	}
// 	setAge1(num) {
// 		if (num > 0 && num < 120) {
// 			this.#age1 = num;
// 		} else {
// 			throw new Error('Некорректный возраст');
// 		}
// 	}
// 	getAge1() {
// 		return this.#age1;
// 	}
// 	getSalary1() {
// 		return this.#salary + '$';
// 	}
// }

// let samuil = new Employee('Samuil', 2900, 36);

// console.log(samuil.getName())
// console.log(samuil.getSalary())
// console.log(samuil.getAge())
// samuil.setHeight('175');
// console.log(samuil.getHeight())

// samuil.setAge1(40);
// samuil.setAge1(1);
// console.log(samuil.getAge1())
// console.log(samuil.getSalary1())



// Сделайте так, чтобы сеттеры класса Employee можно было вызывать цепочкой.

// class Car {
// 	#model;
// 	#year;
// 	setModel(model) {
// 		this.#model = model;
// 		return this;
// 	}
// 	setYear(year) {
// 		this.#year = year;
// 		return this;
// 	}
// 	getModel() {
// 		return this.#model;
// 	}
// 	getYear() {
// 		return this.#year;
// 	}
// }

// let bmw = new Car;
// bmw.setModel('BMW').setYear(2008);
// console.log(bmw.getModel());
// console.log(bmw.getYear());



// Переберите циклом массив объектов и выведите в консоль только имена работников.

// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];

// for (let user of users) {
// 	if (user instanceof Employee == true) {
// 		console.log(user);
// 	}
// }



// Сделайте класс Validator, который будет выполнять проверку строк на корректность.
// Сделайте в вашем классе метод isEmail, проверяющий строку на то, что она корректный email.
// Сделайте в вашем классе метод isDomain, проверяющий строку на то, что она корректное имя домена.
// Сделайте в вашем классе метод isNumber, проверяющий строку на то, что она содержит только числа.

// class Validator {
// 	isEmail(str) {
// 		console.log(/^([A-Za-z0-9])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(str));
// 	}
// 	isDomain(str) {
// 		console.log(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(str))
// 	}
// 	isNumber(str) {
// 		console.log(/[0-9]+/g.test(str));
// 	}
// }

// let str = new Validator;
// str.isEmail('mark202@yandex.info');
// str.isDomain('https://code.mu/ru/javascript/book/supreme/regular/method-test/');
// str.isNumber(66666);



// Сделайте так, чтобы во второй и третий параметры передавались объекты отдельных классов.

// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }
// class Position {
// 	constructor(poz) {
// 		this.poz = poz;
// 	}
// }
// class Department {
// 	constructor(dep) {
// 		this.dep = dep;
// 	}
// }
// let worker = new Position('web-developer');
// let company = new Department('Google');
// let employee = new Employee('Piter', worker, company);

// console.log(employee)
// console.log(employee.position.poz);
// console.log(employee.department.dep);
// console.log(worker.poz);



// Сделайте массив объектов класса Employee.
// Перебирите созданный массив циклом и выведите на экран имена и зарплаты каждого работника.

// class Employee {
// 	constructor(name, surn, age, salary) {
// 		this.name = name;
// 		this.surn = surn;
// 		this.age = age;
// 		this.salary = salary;
// 	}
// 	showInfo() {
// 		return this.name + ' ' + this.salary + '$'
// 	}
// }

// let workers = [
// 	new Employee('Andrey', 'Kuznetsov', 30, 2900),
// 	new Employee('Vasiliy', 'Azimov', 36, 3700),
// 	new Employee('Nata', 'Burenova', 28, 2500),
// 	new Employee('Jhon', 'Lee', 32, 3200),
// ];

// for (let worker of workers) {
// 	console.log(worker.showInfo());
// }



// Сделайте класс EmployeesCollection, который будет содержать массив работников.
// Сделайте в этом классе метод для добавления нового работника.
// Сделайте в этом классе метод для вывода всех работников.
// Сделайте в этом классе метод для расчета суммарной зарплаты всех работников.
// Сделайте в этом классе метод для расчета средней зарплаты всех работников.

// class Worker {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
// 	showInfo() {
// 		return this.name + ' ' + this.salary + '$'
// 	}
// 	showSalary() {
// 		return this.salary;
// 	}
// }

// class WorkerCollection {
// 	#workers;
// 	constructor() {
// 		this.#workers = [];
// 	}
// 	add(worker) {
// 		this.#workers.push(worker);
// 	}
// 	getWorkers() {
// 		for (let worker of this.#workers) {
// 			console.log(worker.showInfo())
// 		};
// 	}
// 	getTotalSalary() {
// 		let res = 0;
// 		for (let worker of this.#workers) {
// 			res += worker.showSalary();
// 		}
// 		console.log(res);
// 	}
// 	getMedianSalary() {
// 		let res = 0;
// 		for (let worker of this.#workers) {
// 			res += worker.showSalary();
// 		}
// 		res = res / this.#workers.length;
// 		console.log(res);
// 	}
// }

// let wo = new WorkerCollection;

// wo.add(new Worker('Andrey', 2900));
// wo.add(new Worker('Vasiliy', 3700));
// wo.add(new Worker('Nata', 2500));
// wo.add(new Worker('Pit', 3800));

// console.log(wo);

// wo.getWorkers();
// wo.getTotalSalary();
// wo.getMedianSalary();



// *************************************************  НАСЛЕДОВАНИЕ  ******************************************************

// Сделайте класс Employee, наследующий от класса User.
// Проверьте, что ваш класс Employee наследует методы от класса User.
// В классе Employee сделайте геттер и сеттер возраста. Проверьте, что в классе Employee работают как его родные методы, так и унаследованные.
// В классе Employee сделайте геттер и сеттер возраста. В классе Employee переопределите сеттер возраста и сделайте в нем проверку на то, что возраст от 18 до 65 лет.

// class User {
// 	setName(name, salary, age) {
// 		this.name = name;
// 		this.salary = salary;
// 		this.age = age;
// 	}
// 	getName() {
// 		return this.name + ' ' + this.salary + '$';
// 	}
// }
// class Employee extends User {
// 	setAge(age) {
// 		if (age > 17 && age < 66) {
// 			this.age = age;
// 		}
// 		else throw new Error('Некорректный возраст. Возраст должен быть от 18 до 65 лет')
// 	}
// 	getAge() {
// 		return this.age;
// 	}
// };

// let employee = new Employee;
// employee.setName('Ivan', 2900, 34);
// console.log(employee.getName());
// employee.setAge(64);
// console.log(employee.getAge());



// Пусть класс Employee наследует от класса User из данного урока.
// Переопределите в класс Employee конструктор родителя, добавив в него параметр с возрастом и зарплатой.
// Сделайте геттеры для возраста и зарплаты.

// class User {
// 	constructor(name, surn) {
// 		this.name = name;
// 		this.surn = surn;
// 	}

// 	getName() {
// 		return this.name;
// 	}
// 	getSurn() {
// 		return this.surn;
// 	}
// 	getNameUp() {
// 		return this.#nameUp(this.name)
// 	}
// 	#nameUp(str) {
// 		return str.toUpperCase();
// 	}
// }

// class Employee extends User {
// 	constructor(name, surn, age, salary) {
// 		super(name, surn);
// 		this.age = age;
// 		this.salary = salary;
// 	}
// 	getAge() {
// 		return this.age;
// 	}
// 	getSalary() {
// 		return this.salary;
// 	}
// }

// let employee = new Employee('Alex', 'Rubanov', 28, 3700);
// console.log(employee.getAge());
// console.log(employee.getSalary());
// console.log(employee.getName());
// console.log(employee.getNameUp());



// В следующем коде сделайте вспомогательный метод защищенным:

// class User {
// 	setName(name) {
// 		if (this.notEmpty(name)) {
// 			this.name = name;
// 		}
// 	}
// 	getName() {
// 		return this.name;
// 	}

// 	_notEmpty(str) {
// 		return str.length > 0;
// 	}
// }
// class Employee extends User {
// 	setSurn(surn) {
// 		if (this._notEmpty(surn)) {
// 			this.surn = surn;
// 		}
// 	}
// 	getSurn() {
// 		return this.surn;
// 	}
// }


// class User {
// 	_name;

// 	setName(name) {
// 		this._name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }

// class Employee extends User {
// 	setName(name) {
// 		if (name.length > 0) {
// 			this._name = name;
// 		}
// 	}
// }



// Сделайте класс Employee, который будет наследовать от класса User. Сделайте класс Programmer, который будет наследовать от класса Employee.
// Сделайте классы Designer, который будет наследовать от класса Employee. Добавьте в созданные вами классы различные методы.

// class User {
// 	setName(name) {
// 		this._name = name;
// 	}
// 	getName() {
// 		return this._name;
// 	}
// }
// class Employee extends User {
// 	setSurn(surn) {
// 		this._surn = surn;
// 	}
// 	getSurn() {
// 		return this._surn;
// 	}
// }
// class Designer extends Employee {
// 	setAge(age) {
// 		this._age = age;
// 	}
// 	getAge(age) {
// 		return this._age;
// 	}
// }



// Сделайте класс Circle, который будет описывать круг. Передайте в параметр конструктора радиус круга. Запишите его в приватное свойство.
// Сделайте метод, который будет возвращать площадь круга. Сделайте метод, который будет возвращать длину окружности.

// class Circle {
// 	#rad;
// 	setRad(num) {
// 		this.#rad = num;
// 	}
// 	getRad() {
// 		return this.#rad;
// 	}
// 	getSquare() {
// 		return (Math.PI * this.#rad ** 2).toFixed(2);
// 	}
// 	getPerimetr() {
// 		return (2 * Math.PI * this.#rad).toFixed(2);
// 	}
// }
// let circle = new Circle;
// circle.setRad(10);
// console.log(circle.getPerimetr());
// console.log(circle.getSquare());
// console.log(circle.getRad());



// Сделайте класс Rectangle, в котором в свойствах будут записаны ширина и высота прямоугольника.
// В классе Rectangle сделайте метод getSquare, который будет возвращать площадь этого прямоугольника.
// В классе Rectangle сделайте метод getPerimeter, который будет возвращать периметр этого прямоугольника.
// В классе Rectangle сделайте метод getRatio, который будет возращать площадь, деленную на периметр.


// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	getSquare() {
// 		return this.width * this.height;
// 	}
// 	getPerimetr() {
// 		return 2 * (this.width + this.height);
// 	}
// 	getRatio() {
// 		return (this.width * this.height) / (2 * (this.width + this.height));
// 	}
// }

// let rectangle = new Rectangle(30, 20);
// console.log(rectangle.getSquare());
// console.log(rectangle.getPerimetr());
// console.log(rectangle.getRatio());



// Сделайте класс Text, который будет выполнять некоторые манипуляции над текстом. Пусть текст передается параметром конструктора.
// Сделайте метод, который вернет количество символов в тексте. Сделайте метод, который вернет количество букв в тексте.
// Сделайте метод, который вернет количество пробелов в тексте. Сделайте метод, который вернет количество символов в тексте за вычетом пробелов.
// Сделайте метод, который вернет массив слов. Сделайте метод, который вернет массив предложений.

// class Text {
// 	constructor(str) {
// 		this.string = str;
// 	}
// 	getSymb() {
// 		return this.string.length;
// 	}
// 	getLetter() {
// 		return this.string.match(/[а-яё,А-ЯЁ]/g).length;
// 	}
// 	getSpacing() {
// 		return this.string.match(/[\ ]/g).length;
// 	}
// 	getSymb1() {
// 		return this.string.match(/[\S]/g).length
// 	}
// 	getWord() {
// 		return this.string.match(/[а-яёА-ЯЁ\-]+/g);
// 	}
// 	getSentence() {
// 		return this.string.split('.');
// 	}
// }

// let text = new Text('Какой-то тут текст. Вот этот. Текст на странице.');

// console.log(text.getSymb());
// console.log(text.getLetter());
// console.log(text.getSpacing());
// console.log(text.getSymb1());
// console.log(text.getWord());
// console.log(text.getSentence());



// Сделайте класс Period, который будет находить разницу между двумя моментами времени. Пусть эти моменты передаются параметрами конструктора.
// Сделайте метод, который вернет разницу между моментами в секундах.
// Сделайте метод, который вернет разницу между моментами в минутах.
// Сделайте метод, который вернет разницу между моментами в часах.
// Сделайте метод, который вернет разницу между моментами в днях.

// let date1 = new Date(2021, 11, 12, 11);
// let date2 = new Date(2022, 12, 2, 11);

// class Period {
// 	constructor(date1, date2) {
// 		this.date1 = date1;
// 		this.date2 = date2;
// 	}
// 	getPeriod() {
// 		return this.date2 - this.date1;
// 	}
// 	getPeriodSeconds() {
// 		return (this.date2 - this.date1) / 1000;
// 	}
// 	getPeriodMin() {
// 		return (this.date2 - this.date1) / 1000 / 60;
// 	}
// 	getPeriodHours() {
// 		return (this.date2 - this.date1) / 1000 / 60 / 60;
// 	}
// 	getPeriodDay() {
// 		return (this.date2 - this.date1) / 1000 / 60 / 60 / 24;
// 	}
// }
// let period = new Period(date1, date2);
// console.log(period.getPeriod());
// console.log(period.getPeriodSeconds());
// console.log(period.getPeriodMin());
// console.log(period.getPeriodHours());
// console.log(period.getPeriodDay());



// Сделайте класс Zate, который будет представлять собой дату. Пусть конструктор этого класса параметрами принимает дату.
// Сделайте метод, который вернет год. Сделайте метод, который вернет номер месяца.
// Сделайте метод, который вернет день месяца. Сделайте метод, который вернет номер дня недели.
// Сделайте метод, который вернет название дня недели. Сделайте метод, который вернет название месяца.

// class Zate {
// 	constructor(date) {
// 		this.date = date;
// 	}
// 	getYear() {
// 		return this.date.getFullYear();
// 	}
// 	getMonth() {
// 		return this.date.getMonth();
// 	}
// 	getDate() {
// 		return this.date.getDate();
// 	}
// 	getDay() {
// 		return this.date.getDay();
// 	}
// 	getDayName() {
// 		let nameDay;
// 		let res = this.date.getDay();
// 		if (res == 0) {
// 			nameDay = 'воскресенье';
// 		} else if (res == 1) {
// 			nameDay = 'понедельник';
// 		} else if (res == 2) {
// 			nameDay = 'вторник';
// 		} else if (res == 3) {
// 			nameDay = 'среда';
// 		} else if (res == 4) {
// 			nameDay = 'четверг';
// 		} else if (res == 5) {
// 			nameDay = 'пятница';
// 		} else {
// 			nameDay = 'суббота';
// 		}
// 		return nameDay;
// 	}
// 	getMonthName() {
// 		let nameMonth;
// 		let res = this.date.getMonth();
// 		if (res == 0) {
// 			nameMonth = 'январь';
// 		} else if (res == 1) {
// 			nameMonth = 'февраль';
// 		} else if (res == 2) {
// 			nameMonth = 'март';
// 		} else if (res == 3) {
// 			nameMonth = 'апрель';
// 		} else if (res == 4) {
// 			nameMonth = 'май';
// 		} else if (res == 5) {
// 			nameMonth = 'июнь';
// 		} else if (res == 6) {
// 			nameMonth = 'июль';
// 		} else if (res == 7) {
// 			nameMonth = 'август';
// 		} else if (res == 8) {
// 			nameMonth = 'сентябрь';
// 		} else if (res == 9) {
// 			nameMonth = 'октябрь';
// 		} else if (res == 10) {
// 			nameMonth = 'ноябрь';
// 		} else {
// 			nameMonth = 'декабрь';
// 		}
// 		return nameMonth;
// 	}
// }
// let date = new Date(2022, 11, 1);
// let zate = new Zate(date);
// console.log(zate.getYear());
// console.log(zate.getMonth());
// console.log(zate.getDate());
// console.log(zate.getDay());
// console.log(zate.getDayName());
// console.log(zate.getMonthName());



// Сделайте класс Month, который будет представлять собой месяц. Пусть конструктор этого класса параметром принимает номер месяца.
// Сделайте метод, который вернет номер месяца. Сделайте метод, который вернет название месяца.
// Сделайте метод, который вернет номер последнего дня месяца. Сделайте метод, который вернет номер дня недели первого дня месяца.
// Сделайте метод, который вернет номер дня недели последнего дня месяца.

// let date = new Date();
// let month = date.getMonth();
// class Month {
// 	constructor(month) {
// 		this.month = month;
// 	}
// 	getMonth1() {
// 		return this.month + 1;
// 	}
// 	getMonthName() {
// 		let nameMonth;
// 		let res = this.month;
// 		if (res == 0) {
// 			nameMonth = 'январь';
// 		} else if (res == 1) {
// 			nameMonth = 'февраль';
// 		} else if (res == 2) {
// 			nameMonth = 'март';
// 		} else if (res == 3) {
// 			nameMonth = 'апрель';
// 		} else if (res == 4) {
// 			nameMonth = 'май';
// 		} else if (res == 5) {
// 			nameMonth = 'июнь';
// 		} else if (res == 6) {
// 			nameMonth = 'июль';
// 		} else if (res == 7) {
// 			nameMonth = 'август';
// 		} else if (res == 8) {
// 			nameMonth = 'сентябрь';
// 		} else if (res == 9) {
// 			nameMonth = 'октябрь';
// 		} else if (res == 10) {
// 			nameMonth = 'ноябрь';
// 		} else {
// 			nameMonth = 'декабрь';
// 		}
// 		return nameMonth;
// 	}
// 	getDay1() {
// 		let date1 = new Date(date.getFullYear(), date.getMonth() + 1, 0);
// 		return date1.getDate();
// 	}
// 	getDayWeekFirst() {
// 		let date3 = new Date(date.getFullYear(), date.getMonth(), 1);
// 		return date3.getDay();
// 	}
// 	getDayWeekLast() {
// 		let date2 = new Date(date.getFullYear(), date.getMonth() + 1, 0);
// 		return date2.getDay();
// 	}
// }
// let month1 = new Month(month);
// console.log(month1.getMonth1());
// console.log(month1.getMonthName());
// console.log(month1.getDay1());
// console.log(month1.getDayWeekFirst());
// console.log(month1.getDayWeekLast());



// ***********************************************  СТИЛИЗАЦИЯ  *****************************************************

// Дан див и кнопка. По нажатию на кнопку задайте диву ширину в 400px, а высоту в 300px.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function () {
// 	elem.style.width = '400px';
// 	elem.style.height = '300px';
// })
// console.log(elem.style.border);

// Дана также кнопка.По клику на кнопку выведите ширину и высоту дива без единиц измерения.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');

// button.addEventListener('click', function () {
// 	console.log(parseInt(elem.style.width));
// 	console.log(parseInt(elem.style.height))
// })



// Дана также кнопка.По клику на кнопку выведите размер шрифта дива без единиц измерения.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');

// button.addEventListener('click', function () {
// 	console.log(parseFloat(elem.style.fontSize));
// })



// Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 50px.
// Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 10%.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// let widthS = parseInt(elem.style.width);
// let heightS = parseInt(elem.style.height);
// btn.addEventListener('click', function () {
// elem.style.width = (widthS + 50) + 'px';
// elem.style.height = (heightS + 50) + 'px';

// 	elem.style.width = (widthS + widthS / 10) + 'px';
// 	elem.style.height = (heightS + heightS / 10) + 'px';

// 	console.log(elem.style.width);
// 	console.log(elem.style.height);
// })



// Дан див. Дана также кнопка. По клику на кнопку выведите толщину границы, ее тип и цвет.

// let elem = document.querySelector('#elem');
// console.log(elem.style.border)



// Дан див и две кнопки. По клику на первую кнопку спрячьте див, а по клику на вторую - покажите.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
// let btn1 = document.querySelector('#btn');

// btn.addEventListener('click', function () {
// 	elem.style.display = 'none';
// })
// btn1.addEventListener('click', function () {
// 	elem.style.display = '';
// })



// Дан див и две кнопки. По клику на первую кнопку покрасьте цвет дива в красный цвет, а по клику на вторую - верните исходный цвет.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
// let btn1 = document.querySelector('#btn');

// btn.addEventListener('click', function () {
// 	elem.style.background = 'red';
// })
// btn1.addEventListener('click', function () {
// 	elem.style.background = '';
// })



// Перепишите код через изученное свойство:

// elem.style.width = '100px';
// elem.style.height = '100px';
// elem.style.margin = '10px auto';
// elem.style.color = 'red';

// elem.style.cssText = `
// 	width: 100px;
// 	height: 100px;
// 	margin: 10px auto;
// 	color: red;
// 	border: 1px solid red;
// 	`;



// Для элемента заданы следующие стили. По клику на кнопку выведите ширину и высоту элемента.
// По клику на кнопку увеличьте ширину и высоту элемента в два раза.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
// 	let styles = window.getComputedStyle(elem);
// 	let widthF = parseInt(styles.width) * 2 + 'px';
// 	let heightF = parseInt(styles.height) * 2 + 'px';

// 	elem.style.width = widthF;
// 	elem.style.height = heightF;

// 	console.log(widthF);
// 	console.log(heightF);
// })



// Для элемента заданы следующие стили: #elem {	font-size: 2em; }. По клику на кнопку выведите размер шрифта элемента.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
// 	let styles = window.getComputedStyle(elem);
// 	console.log(styles.fontSize);
// })



// Даны абзацы с числами. Переберите эти абзацы циклом и абзацы, содержащие четные числа, покарасьте в красный цвет, а содержащие нечетные - в зеленый.

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	if (elem.textContent % 2 == 0) {
// 		elem.classList.add('class2');
// 	} else {
// 		elem.classList.add('class1');
// 	}
// }



// Даны абзацы. Сделайте так, чтобы каждый абзац по первому клику на него красился в красный цвет, а по второму клику - красился обратно в черный.

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function () {
// 		elem.classList.toggle('class2');
// 	})
// }



// Дан инпут. По потери фокуса проверьте, что в него введено не более 9-ти символов.
// Если это так, покрасьте границу инпута в зеленый цвет, а если не так - в красный.

// let inp = document.querySelector('input');
// inp.addEventListener('blur', function () {
// 	if (inp.value.length > 0 && inp.value.length < 10) {
// 		inp.classList.remove('red');
// 		inp.classList.add('green');
// 		console.log(inp);
// 	} else {
// 		inp.classList.remove('green');
// 		inp.classList.add('red');
// 		console.log(inp);
// 	}
// })



// Дан инпут. По потери фокуса проверьте введенное в него число. Если это число до десяти, то покрасьте инпут в зеленый цвет,
// если от десяти до двадцати - в желтый, а если более двадцати - в красный.

// let inp = document.querySelector('input');
// inp.addEventListener('blur', function () {
// 	if (inp.value >= 0 && inp.value < 10) {
// 		inp.dataset.inp = 'green';
// 		console.log(inp);
// 	} else if (inp.value > 9 && inp.value < 21) {
// 		inp.dataset.inp = 'yellow';
// 		console.log(inp);
// 	} else {
// 		inp.dataset.inp = 'red';
// 		console.log(inp);
// 	}
// })




// Дан элемент и кнопка. Выведите в консоль клиентскую ширину и высоту элемента.
// По нажатию на кнопку выведите в консоль полную ширину и высоту элемента.
// Если отнять от полной ширины клиентскую ширину, то получится некоторое число. Какие размеры оно содержит в себе?
// По нажатию на кнопку выведите в консоль ширину и высоту элемента с прокруткой.
// Если отнять от высоты с прокруткой полную высоту, то получится некоторое число. Какие размеры оно содержит в себе?

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
// 	console.log(elem.clientWidth)
// 	console.log(elem.clientHeight)
// 	console.log(elem.offsetWidth)
// 	console.log(elem.offsetHeight)
// 	console.log(elem.offsetWidth - elem.clientWidth)
// 	console.log(elem.offsetHeight - elem.clientHeight)
// 	console.log(elem.scrollWidth)
// 	console.log(elem.scrollHeight)
// 	console.log(elem.scrollHeight - elem.offsetHeight)
// })

// Дан элемент и кнопка. По нажатию на кнопку узнайте на сколько прокручен элемент по вертикали.
// Дан элемент и кнопка. По нажатию на кнопку проверьте, прокручен ли элемент по вертикали.
// Прокрутите элемент до конца. Нажмите на кнопку, чтобы вывелась величина полной прокрутки.
// Получите scrollHeight элемента и отнимите от него величину полной прокрутки (из предыдущей задачи). Какое значение получится? Какие размеры оно содержит в себе?
// Сложите offsetHeight и величину полной прокрутки. Отнимите эту сумму от значения scrollHeight. Какое число получится?

// let btnC = document.querySelector('#btnC');
// let pX = document.querySelector('#x');
// let pY = document.querySelector('#y');

// btnC.addEventListener('click', function () {
// 	pX.textContent = elem.scrollTop;
// 	pY.textContent = elem.scrollLeft;
// 	console.log(elem.scrollHeight - 271);
// 	console.log(elem.scrollHeight - (elem.offsetHeight + 271));
// })



// Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент на положение прокрутки 100px по вертикали и 50px по горизонтали.
// Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент на 50px вниз от текущего положения прокрутки.
// Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый верх.
// Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый низ.
// Дан элемент и кнопка. По нажатию на кнопку проверьте, прокручен ли элемент до конца по вертикали.
// Дан элемент и кнопка. По нажатию на кнопку распахните элемент на всю высоту.

// let elem = document.querySelector('#elem');
// let btnC = document.querySelector('#btnC');
// let pX = document.querySelector('#x');
// let pY = document.querySelector('#y');

// btnC.addEventListener('click', function () {
// 	pX.textContent = elem.scrollTop;
// 	pY.textContent = elem.scrollLeft;
// elem.scrollTop = 100;
// elem.scrollLeft = 50;
// elem.scrollTop = elem.scrollTop + 50;
// elem.scrollTop = 0;
// elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// if (elem.scrollTop == elem.scrollHeight - elem.clientHeight) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }
// 	elem.style.width = elem.scrollWidth + 'px';
// 	elem.style.height = elem.scrollHeight + 'px';
// })



// Дана кнопка. По нажатию на кнопку получите ширину полосы прокрутки в вашем браузере.

// let btnScroll = document.querySelector('#btnScroll');
// let pScr = document.querySelector('#pScr');

// btnScroll.addEventListener('click', function () {
// 	let div = document.createElement('div');

// 	div.style.overflowY = 'scroll';
// 	div.style.width = '100px';
// 	div.style.height = '100px';

// 	document.body.append(div);

// 	let scrollWidth = div.offsetWidth - div.clientWidth;

// 	console.log(scrollWidth);
// 	pScr.textContent = scrollWidth + 'px';

// 	div.remove();
// })



// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
// 	window.scrollTo(3000, 5000);
// })


// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function () {
// 	elem.scrollTo({
// 		top: 300,
// 		left: 0,
// 		behavior: "smooth"
// 	});
// })




// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function () {
// 	elem.scrollIntoView({
// 		behavior: 'smooth',
// 		block: 'end',
// 		inline: 'end'
// 	})
// })

// window.addEventListener('scroll', function () {
// 	console.log(window.pageYOffset);

// });

// console.log(document.documentElement.clientHeight);



// ***********************************************  SYMBOL  *****************************************************


// Создайте несколько символов.
// Создайте несколько символов, добавив им описания.

// let symb1 = Symbol('Символ - это примитивный тип данных');
// let symb2 = Symbol('Символ используется для уникальных идентификаторов');
// let symb3 = Symbol('Текст');
// console.log(symb3);
// console.log(symb2);
// console.log(symb1);



// Сделайте объект, у которого одним из ключей будет символ. Выведите созданный вами объект в консоль.
// Сделайте объект с ключом из символа. Переберите его циклом. Убедитесь, что символ не участвует в переборе.
// Добавьте в объект функцию, которая будет выводить текущее время. Вызовите эту функцию.

// let car = {
// 	model: 'bmw',
// 	color: 'black',
// 	year: 1999
// }
// let symbAuto = Symbol();
// car[symbAuto] = 'its my dream';
// console.log(car);

// for (let key in car) {
// 	console.log(car[key]);
// }

// let symbTime = Symbol();
// car[symbTime] = function () {
// 	let date = new Date();
// 	console.log(date.toTimeString());
// }
// car[symbTime]();



// Пусть у вас есть несколько объектов. Добавьте каждому из них ключ в виде символа с именем 'sum'.
// Сделайте в этом ключе функцию, которая будет возвращать сумму элементов объекта.

// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	d: 4
// }

// let sym = Symbol();
// obj[sym] = function () {
// 	let res = 0;
// 	for (let key in this) {
// 		res += this[key];
// 	}
// 	return res;
// }
// let res1 = obj[sym]();
// console.log(res1);

// Даны два символа: Получите их имена.

// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));



// ***********************************************  ИТЕРАТОРЫ  *****************************************************

// let arr = [1, 2, 3];
// let iter = arr[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())



// Получите итератор коллекции Map. Последовательно вызывайте его, пока элементы коллекции не закончатся.
// Получите итератор коллекции NodeList. Последовательно вызывайте его, пока элементы коллекции не закончатся.
// Получите итератор коллекции HTMLCollection. Последовательно вызывайте его, пока элементы коллекции не закончатся.

// let map = new Map();
// map.set(1, 'text1')
// map.set(2, 'text2')
// map.set(3, 'text3')
// let iter1 = map[Symbol.iterator]();
// console.log(iter1.next())
// console.log(iter1.next())
// console.log(iter1.next())
// console.log(iter1.next())

// let pars = document.querySelectorAll('p');
// let iter2 = pars[Symbol.iterator]();
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());

// let h2s = document.getElementsByClassName('h2');
// let iter3 = h2s[Symbol.iterator]();
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());



// Создайте итератор, каждый вызов которого будет возвращать числа от 5 до 1.

// function* gener() {
// 	yield 5;
// 	yield 4;
// 	yield 3;
// 	yield 2;
// 	yield 1;
// }
// let iter = gener();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());



// Создайте итератор, каждый вызов которого будет возвращать числа от 10 до нуля.

// function* gener() {
// 	for (let i = 10; i >= 1; i--) {
// 		yield i;
// 	}
// }
// let iter = gener();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());



// Сделайте генератор, который параметром будет принимать число.
// Пусть каждый вызов итератора уменьшает число на единицу, пока не будет достигнут ноль.

// function* gener1(num) {
// 	for (let i = num; i >= 0; i--) {
// 		yield i;
// 	}
// }
// let iter1 = gener1(3);
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());
// console.log(iter1.next());



// Сделайте генератор, который параметром будет принимать число.
// Пусть каждый вызов итератора уменьшает число в два раза и возвращает результат. И так, пока число не станет меньше единицы.

// function* gener2(num) {
// 	while (num >= 1) {
// 		res = num / 2;
// 		yield res;
// 		num = res;
// 	}
// }
// let iter2 = gener2(6);
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());



// Сделайте итератор, каждый вызов которого будет возвращать следующую степень двойки.

// function* gener3() {
// 	for (let i = 1; i < 10; i++) {
// 		yield 2 ** i;
// 	}
// }
// let iter3 = gener3();
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());



// Сделайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.

// function* gener4() {
// 	let a = 1;
// 	let b = 1;
// 	while (res < 1000000) {
// 		res = b + a;
// 		yield res;
// 		a = b;
// 		b = res;
// 	}
// }
// let iter4 = gener4();

// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());



// Сделайте итератор, который будет перебирать объект и каждым вызовом возвращать массив, в нулевом элементе которого будет лежать ключ,
// а в первом элементе - значение элемента объекта. Пример: ['a', 1], ['b', 2], ['c', 3]

// function* gener(obj) {
// 	for (let key in obj) {
// 		let res = [...key, obj[key]];
// 		yield res;
// 	}
// }

// let iter = gener({ a: 1, b: 2, c: 3 });
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());



// Сделайте объект, который можно перебрать циклом for-of. Пусть в элемент цикла попадает объект, в ключе key которого будет ключ перебираемого
// объекта, а в ключе val - значение. Пример: let obj = {a: 1, b: 2, c: 3}; {key: 'a', val: 1} {key: 'b', val: 2} {key: 'c', val: 3}

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let key;
// obj[Symbol.iterator] = function* () {
// 	for (key in this) {
// 		yield obj[key];
// 	}
// }
// for (let elem of obj) {
// 	console.log(`{key: '${key}', val: ${elem}}`);
// }
// console.log(obj[Symbol.iterator]);



// Перепишите решение задачи из предыдущего урока через вычисляемое свойство.

// let key;
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	d: 4,
// 	e: 5,
// 	[Symbol.iterator]: function* () {
// 		for (key in this) {
// 			yield obj[key];
// 		}
// 	}
// }
// for (let elem of obj) {
// 	console.log(`{key: '${key}', val: ${elem}}`);
// }



// Проверьте работу данного итератора на массиве. Проверьте работу данного итератора на коллекции Set.

// let arr = [1, 2, 3, 4, 5,];
// let iter = arr.values();

// for (let elem of iter) {
// 	console.log(elem);
// }

// let set = new Set(arr);
// let iter1 = set.values();

// for (let elem of iter1) {
// 	console.log(elem);
// }



// Проверьте работу данного итератора на коллекции Map. Проверьте работу данного итератора на коллекции Set.

// let map2 = new Map();
// map2.set('a', 1)
// map2.set('b', 2)
// map2.set('c', 3)
// map2.set('d', 4)

// let iter21 = map2.keys();
// for (let elem of iter21) {
// 	console.log(elem);
// }

// let set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// let iter22 = set2.keys();
// for (let elem of iter22) {
// 	console.log(elem);
// }



// Проверьте работу данного итератора на коллекции Map. Проверьте работу данного итератора на коллекции Set.
// Проверьте работу данного итератора на коллекции NodeList.

// let map3 = new Map();
// map3.set('a', 10);
// map3.set('b', 20);
// map3.set('c', 30);

// let iter31 = map3.entries();

// for (let entry of iter31) {
// 	console.log(entry);
// }

// let set3 = new Set(['a', 's', 'd']);

// let iter32 = set3.entries();

// for (let entry of iter32) {
// 	console.log(entry);
// }

// let elems = document.querySelectorAll('.pp');

// let iter33 = elems.entries();
// for (let entry of iter33) {
// 	console.log(entry)
// }



// Разложите спредом следующий объект:

// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function* () {
// 		for (let key in this) {
// 			yield this[key];
// 		}
// 	}
// };
// console.log([...obj])



// Дана строка с цифрами: Перебирите циклом цифры этого числа и найдите их сумму.

// let str = '12345';
// let res = 0;
// for (let elem of str) {
// 	res += Number(elem);
// }
// console.log(res);



// Дано число. Найдите сумму его цифр.

// let num = 987652;
// let res1 = 0;
// let arr = [...String(num)].map(elem => { res1 += Number(elem) });
// console.log(res1)



// Даны 3 инпута. Получите номера, id и value инпутов.

// let inputs = document.querySelectorAll('input');
// for (let [key, { id, placeholder }] of inputs.entries()) {
// 	console.log(key, id, placeholder);
// }



// Дана HTML таблица. Пронумеруйте каждую ячейку этой таблицы.

// let elems = document.querySelectorAll('td');
// for (let [num, elem] of elems.entries()) {
// 	elem.textContent = num;
// }



// ***********************************************  ОПТИМИЗАЦИЯ КОДА, ДАННЫЕ  *****************************************************

// Оптимизируйте приведенный ниже код:

// let num = 123;
// if (String(num)[0] === '1' || String(num)[0] === '2') {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;
// let str = String(num)[0];

// if (str === '1' || str === '2') {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }



// Оптимизируйте приведенный ниже код:

// let date = new Date();
// if (date.getDay() === 0 || date.getDay() === 6) {
// 	console.log('выходной');
// } else {
// 	console.log('рабочий');
// }

// let date = new Date();
// let day = date.getDay();
// if (day === 0 || day === 6) {
// 	console.log('выходной');
// } else {
// 	console.log('рабочий');
// }



// Оптимизируйте приведенный ниже код:

// let date = new Date();
// let res;

// if (date.getFullYear() >= 2020 && date.getFullYear() <= 2030) {
// 	res = 'год ' + date.getFullYear() + ' подходит';
// } else {
// 	res = 'год ' + date.getFullYear() + ' не подходит';
// }
// console.log(res)

// let date = new Date();
// let res;
// let year = date.getFullYear();

// if (year >= 2020 && year <= 2030) {
// 	res = 'год ' + year + ' подходит';
// } else {
// 	res = 'год ' + year + ' не подходит';
// }
// console.log(res)



// Оптимизируйте приведенный ниже код:

// let num = 1233456789;
// if (getSumSquare(num) >= 10 && getSumSquare(num) <= 100) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// function getSumSquare(num) {
// 	let digits = String(num).split('');
// 	let sum = 0;

// 	for (let digit of digits) {
// 		sum += digit ** 2;
// 	}

// 	return sum;
// }


// let num = 15745451;
// let numFunc = getSumSquare(num);

// if (numFunc >= 10 && numFunc <= 100) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// function getSumSquare(num) {
// 	let digits = String(num).split('');
// 	let sum = 0;

// 	for (let digit of digits) {
// 		sum += digit ** 2;
// 	}
// 	console.log(sum)
// 	return sum;
// }



// Оптимизируйте следующий код:

// for (let i = 1900; i <= 2100; i++) {
// 	let curr = new Date;
// 	let date = new Date(i, curr.getMonth(), curr.getDate());

// 	if (curr.getDay() === date.getDay()) {
// 		console.log(date);
// 	}
// }



// Оптимизируйте следующий код:

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let key in obj) {
// 	if (String(obj[key])[0] === '1' || String(obj[key])[0] === '2') {
// 		sum += obj[key];
// 	}
// }

// console.log(sum);



// Создайте HTML таблицу размером 100 на 100. Сделайте так, чтобы каждая ячейка по клику красилась в красный цвет.

// let table = document.querySelector('table');

// table.addEventListener('click', function (event) {
// 	event.target.classList.toggle('tdRed');
// })



// Сделайте кнопку, по нажатию на которую будет происходить иммутабельное добавление нового элемента в массив.

// let arr = [1, 2, 3, 4, 5]
// let copy = [...arr];
// let btn = document.querySelector('button');
// let i = 6;
// let res = [...copy];
// btn.addEventListener('click', function () {
// 	res.push(i);
// 	i++;
// 	console.log(res);
// })



// Сделайте кнопку, по нажатию на которую будет происходить удаление элемента из массива.
// Пусть номер элемента для удаления хранится в переменной.

// let btn = document.querySelector('button');
// let arr = [1, 2, 3, 4, 5];
// let num = 3;
// console.log(arr);

// btn.addEventListener('click', function () {

// 	let copy = Object.assign([], arr);
// 	copy.splice(num, 1);
// 	let res = copy;
// 	console.log(res);
// })



// Сделайте кнопку, по нажатию на которую будет происходить изменение элемента массива.
// Пусть номер элемента для изменения хранится в переменной.

// let btn = document.querySelector('button');
// let arr = [10, 20, 30, 40, 50];
// let num = 2;
// console.log(arr);

// btn.addEventListener('click', function () {

// 	let copy = Object.assign([], arr);
// 	copy[num] = 'текст';
// 	console.log(copy);
// })



// Дан массив объектов. Сделайте кнопку, по нажатию на которую в него будет добавляться новый элемент. Пусть id генерируется функцией.

// let arr = [
// 	{
// 		id: 'GYi9GauC4gBF1e2SixDvu',
// 		prop1: 'value11',
// 		prop2: 'value12',
// 	},
// 	{
// 		id: 'IWSpfBPSV3SXgRF87uO74',
// 		prop1: 'value21',
// 		prop2: 'value22',
// 	},
// 	{
// 		id: 'JAmjRlfQT8rLTm5tG2m1L',
// 		prop1: 'value31',
// 		prop2: 'value32',
// 	},
// ];

// let btn = document.querySelector('button');

// function getId() {
// 	let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	let length = 21;
// 	res = '';
// 	for (let i = 0; i < length; i++) {

// 		res += str[Math.floor(Math.random() * str.length)]
// 	}
// 	return res;
// }

// let newObj = {
// 	id: getId(),
// 	prop1: 'value41',
// 	prop2: 'value42',
// }
// console.log(arr);

// btn.addEventListener('click', function () {
// 	let copy = Object.assign([], arr);
// 	copy.push(newObj);
// 	let res = copy;
// 	console.log(res);
// })



// Пусть в переменной хранится id элемента. Сделайте кнопку, которая будет удалять элемент с заданным id.

// let id = 'GYi9GauC4gBF1e2SixDvu';

// let btnDel = document.querySelector('#del');
// btnDel.addEventListener('click', function () {
// 	let arr1 = arr.filter(function (elem) {
// 		if (elem.id !== id) {
// 			return elem;
// 		}
// 	})
// 	console.log(arr1);
// })



// Сделайте кнопку, по нажатию на которую будет браться элемент массива с указанным id, в нем будет браться свойство с указанным именем
// и в конец значения этого свойства будет дописываться знак '!'.

// let arr = [
// 	{
// 		id: 'GYi9GauC4gBF1e2SixDvu',
// 		prop1: 'value11',
// 		prop2: 'value12',
// 		prop3: 'value13',
// 	},
// 	{
// 		id: 'IWSpfBPSV3SXgRF87uO74',
// 		prop1: 'value21',
// 		prop2: 'value22',
// 		prop3: 'value23',
// 	},
// 	{
// 		id: 'JAmjRlfQT8rLTm5tG2m1L',
// 		prop1: 'value31',
// 		prop2: 'value32',
// 		prop3: 'value33',
// 	},
// ];

// let id = 'JAmjRlfQT8rLTm5tG2m1L';
// let prop = 'prop2';
// let value = 'value32'

// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
// 	let res = arr.map(elem => {
// 		if (elem.id === id) {
// 			return { ...elem, [prop]: value + '!' };
// 		} else {
// 			return elem;
// 		}
// 	})
// 	console.log(res);
// })


// Модифицируйте предыдущую задачу так, чтобы по клику изменения выполнялись сразу для двух указанных свойств.
// let prop1 = 'prop2'; let prop2 = 'prop3';


// let id = 'JAmjRlfQT8rLTm5tG2m1L';
// let prop1 = 'prop2'
// let prop2 = 'prop3';
// let value1 = 'value32'
// let value2 = 'value33'

// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
// 	let res = arr.map(elem => {
// 		if (elem.id === id) {
// 			return { ...elem, [prop1]: value1 + '!', [prop2]: value2 + '!' };
// 		} else {
// 			return elem;
// 		}
// 	})
// 	console.log(res);
// })

// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
// 	let copy = Object.assign([], arr);
// 	copy[prop1] = value1 + '!';
// 	copy[prop2] = value2 + '!';
// 	let res = copy;
// 	console.log(res);

//

// 	let res = arr.map(elem => {
// 		if (elem.id === id) {
// 			return { ...elem, [prop1]: value1 + '!', [prop2]: value2 + '!' };
// 		} else {
// 			return elem;
// 		}

// 	})
// 	console.log(res);
// })








// let q = 0;
// let timerId = setInterval(function () {
// 	console.log(q++)
// 	if (q > 150) {
// 		clearInterval(timerId);
// 	}
// }, 100);

// alert(timerId);

// let elem = document.querySelector('#el');

// setInterval(function () {
// 	elem.value = Number(elem.value) + 1;
// }, 10);


// let i = 0;

// function timer() {
// 	setTimeout(function () {
// 		console.log(++i);

// 		if (i < 10) { // запускаем, только если счетчик меньше 10
// 			timer();
// 		}
// 	}, 1000);
// }
// timer();

// function make(callback) {
// 	setTimeout(function () {
// 		console.log('1');
// 		callback();
// 	}, 3000);
// }
// function call() {
// 	console.log('3');
// 	console.log('4');
// }
// make(call);


// function make(callback) {
// 	setTimeout(function () {
// 		let arr = [1, 2, 3, 4, 5];
// 		let res = 0;
// 		for (let elem of arr) {
// 			res += +elem;
// 		}
// 		callback(res); // передаем результат параметром
// 	}, 3000);
// }

// make(function (res) {
// 	console.log(res); // наш массив
// });


// function make(num, callback) {
// 	setTimeout(function () {
// 		let arr = [1, 2, 3, 4, 5];
// 		let res = arr[num];
// 		callback(res); // результатом передаем элемент массива
// 	}, 3000);
// }

// make(4, function (res) {
// 	console.log(res)
// });


// function make(num1, num2, callback) {
// 	setTimeout(function () {
// 		let arr = [1, 2, 3, 4, 5];
// 		let res = arr[num1] + arr[num2];
// 		callback(res); // результатом передаем элемент массива
// 	}, 3000);
// }

// make(4, 3, function (res) {
// 	console.log(res)
// });


// function make(num, callback) {
// 	setTimeout(function () {
// 		let arr = [1, 2, 3, 4, 5];

// 		let err;
// 		if (arr[num] === undefined) {
// 			err = 'elem not exists'; // текст ошибки
// 		} else {
// 			err = null; // ошибки нет
// 		}

// 		callback(arr[num], err);
// 	}, 3000);
// }

// make(2, function (res, err) {
// 	console.log(res, err)
// });



// ***********************************************  ПРОМИСЫ  *****************************************************


// Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, своим результатом вернув какой-нибудь текст.
// Выведите этот текст на экран.

// let prom = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		resolve('5 seconds later...')
// 	}, 5000)
// })

// prom.then(res => console.log(res));


// let prom1 = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		resolve('1.5 секунды прошли...')
// 	}, 1500)
// })

// prom1.then(function (res) {
// 	console.log(res);
// })



// Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис.
// Пусть промис своим возвращает результат деления единицы на сгенерированное число.
// Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях.

// let prom3 = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		let num = Math.floor((Math.random() * 6));
// 		let res = 1 / num;
// 		if (num >= 1) {
// 			resolve(res);
// 		} else {
// 			reject('Непредвиденная ошибка');
// 		}
// 	}, 2500)
// })
// prom3.then(
// 	function (data) {
// 		console.log(data);
// 	},
// 	function (er) {
// 		console.log(er);
// 	}
// )



// Переделайте следующий код в соответствии с изученным:

// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		let isError = false;

// 		if (!isError) {
// 			resolve('success');
// 		} else {
// 			reject(new Error('it is really a very big error'));
// 		}
// 	}, 3000);
// });

// promise.then(
// 	function (res) {
// 		console.log(res)
// 	},
// 	function (er) {
// 		console.log(er);
// 	}
// )



// Сделайте промис, который выполнится с успехом через некоторое время. Выведите его в консоль и изучите его начальное состояние и завершенное.
// Сделайте промис, который выполнится с неудачей через некоторое время. Выведите его в консоль и изучите его начальное состояние и завершенное.

// let promise1 = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		let isError = false; // поставьте либо true, либо false

// 		if (!isError) {
// 			resolve(console.log(promise1));
// 		} else {
// 			reject('errrrrroooooooorrrrrr');
// 		}
// 	}, 1000);
// });

// promise1.then(
// 	function (res) {
// 		console.log(promise1);
// 	},
// 	function (er) {
// 		console.log(promise1);
// 	})



// Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд.
// Пусть своим результатом промис возвращает эту задержку. С помощью цикла и вашей функции заполните массив 10-ю промисами.
// Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелся результат первого сработавшего промиса.
// Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелась сумма результатов всех промисов.


// function getPromise() {

// 	let time = Math.floor((Math.random() * 10 + 1));
// 	let time1 = time * 1000;

// 	let promMy = new Promise(function (resolve, rejected) {
// 		setTimeout(function () {
// 			resolve(time);
// 		}, time1);
// 	})
// 	return promMy;
// }

// let i = 1;
// let promises = [];
// while (i <= 10) {
// 	let prom = getPromise();
// 	promises.push(prom);
// 	i++;
// }
// console.log(promises);

// Promise.race(promises).then(function (res) {
// 	console.log(res);
// })
// Promise.all(promises).then(function (res) {
// 	let arr = res;
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	console.log(sum);
// })



// Дан следующий код. Выполните его промисификацию.

// window.addEventListener('DOMContentLoaded', function () {
// 	console.log('dom загружен');
// });

// let prom = new Promise(function (resolve, reject) {
// 	window.addEventListener('DOMContentLoaded', function () {
// 		str = 'dom загружен';

// 		if (str == 'dom загружен') {
// 			resolve(' ДОМ ЗАГРУЖЕН !!! ')
// 		}
// 		else {
// 			reject(new Error('ОШИБКА ЗАГРУЗКИ'));
// 		}

// 	});
// })

// prom.then(res => console.log(res))
// 	.catch(er => console.log(er));



// Перепишите следующий код через синхронный синтаксис:

// function getSmth(num) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => resolve(num * num), 2000)
// 	});
// }

// async function func() {
// 	let res1 = await getSmth(2);
// 	let res2 = await getSmth(3);
// 	let res3 = await getSmth(4);
// 	let res = res1 + res2 + res3;
// 	console.log(res);
// }

// func();


// async function f() {

// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("готово!"), 2000)
// 	});

// 	let result = await promise; // будет ждать, пока промис не выполнится (*)

// 	alert(result); // "готово!"
// }

// f();

