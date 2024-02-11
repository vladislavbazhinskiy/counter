//Вариант отправки формы посредством библиотеки QJuery
/*
$(document).ready(function () {
	$("#form").submit(function (e) {
		e.preventDefault();
		registr();
	});

	function registr() {
		$.post(
			"http://bazhineg.beget.tech/counter/update.php",
			$("#form").serialize(),
			function (response) {
				$("#answer").append(response);
				setTimeout(() => $("#answer").remove(), 5000);
			}
		);
	}
});
*/
//------------------------------------------------------------------------------------

//Блок отправки формы посредством объекта XMLHttpRequest
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		let date = new Date();
		let formData = new FormData(form);
		let xhr = new XMLHttpRequest();
		xhr.open("POST", "http://bazhineg.beget.tech/counter/update.php", true);
		xhr.send(formData);

		xhr.onload = function () {
			if ((xhr.readyState != 4) && (xhr.status != 200)) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
				alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);//если ошибка, то выводим код ошибки	 
			} else { //если xrh.status==200,то
				let answer = document.getElementById('answer');
				answer.innerHTML = xhr.response;// иначе, присылаем положительный ответ с сервера из update.php
				//через 4сек удаляем сообщение
				setTimeout(() => {
					answer.style.display = 'none';
				}, 4000);
			}
		};
	});
});
//-----------------------------------------------------------------------------------

// Блок выемки значений из таблицы. Код срабатывает первым при загрузке страницы   
let a1 = ((document.getElementById("a1").value).replace(",", ".")); if (!a1) a1 = 0; //вместо if (isNaN(a1)==true) a1=0;
let a2 = ((document.getElementById("a2").value).replace(",", ".")); if (!a2) a2 = 0; //вместо if (isNaN(a2)==true) a2=0;
let b1 = ((document.getElementById("b1").value).replace(",", ".")); if (!b1) b1 = 0; //вместо if (isNaN(b1)==true) b1=0;
let b2 = ((document.getElementById("b2").value).replace(",", ".")); if (!b2) b2 = 0; //вместо if (isNaN(b2)==true) b2=0;
let c1 = ((document.getElementById("c1").value).replace(",", ".")); if (!c1) c1 = 0; //вместо if (isNaN(c1)==true) c1=0;
let c2 = ((document.getElementById("c2").value).replace(",", ".")); if (!c2) c2 = 0; //вместо if (isNaN(c2)==true) c2=0;
let dat = document.getElementById("dat").value;
//------------------------------------------------------------------------------------

//ф-я для красивого вывода даты 
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return "0" + num;
	} else {
		return num;
	}
}
//----------------------------------------------------------------------------------

// Блок  получения и анализа новой и старой  даты   
let date = new Date();
let newday = addZero(date.getDate());
let newmonth = addZero(date.getMonth() + 1);
let newyear = addZero(date.getFullYear());
let newdat = newday + "/" + newmonth + "/" + newyear;
let oldmonth = `${dat[3]}${dat[4]}`;
//-----------------------------------------------------------------------------------

// Блок произведение расчетов с данными 
let sub1 = (a1 - a2).toFixed(2);
let mul1 = `${(sub1 * 6.43).toFixed(2)}p.`;
let sub2 = (b1 - b2).toFixed(2);
let mul2 = `${(sub2 * 50.93).toFixed(2)}p.`;
let sub3 = (c1 - c2).toFixed(2);
let mul3 = `${(sub3 * 243.16).toFixed(2)}p.`;
let sum = (parseFloat(sub2) + parseFloat(sub3)).toFixed(2);
let mul4 = `${((sum) * 39.97).toFixed(2)}p.`;
let sumup = `${(parseFloat(mul1) + parseFloat(mul2) + parseFloat(mul3) + parseFloat(mul4)).toFixed(2)}p.`;
//-----------------------------------------------------------------------------------

//Блок анализа текущего месяца, проверка расчитанных данных на белиберду и если все ок!,то запись их в таблицу
if (newmonth == oldmonth) {
	if (sub1 < 0 || sub2 < 0 || sub3 < 0) {
		document.getElementById("result1a").innerHTML = "";
		document.getElementById("result2a").innerHTML = "";
		document.getElementById("result1b").innerHTML = "";
		document.getElementById("result2b").innerHTML = "";
		document.getElementById("result1c").innerHTML = "";
		document.getElementById("result2c").innerHTML = "";
		document.getElementById("result3d").innerHTML = "";
		document.getElementById("result4d").innerHTML = "";
		document.getElementById("result6").innerHTML = "";
		
	} else {
	   
		document.getElementById("result1a").innerHTML = sub1;
		document.getElementById("result2a").innerHTML = mul1;
		document.getElementById("result1b").innerHTML = sub2;
		document.getElementById("result2b").innerHTML = mul2;
		document.getElementById("result1c").innerHTML = sub3;
		document.getElementById("result2c").innerHTML = mul3;
		document.getElementById("result3d").innerHTML = sum;
		document.getElementById("result4d").innerHTML = mul4;
		document.getElementById("result6").innerHTML = sumup;
		
	}
} else {
    
	document.getElementById("a1").value = "";
	document.getElementById("a2").value = parseFloat(a1);
	document.getElementById("b1").value = "";
	document.getElementById("b2").value = parseFloat(b1);
	document.getElementById("c1").value = "";
	document.getElementById("c2").value = parseFloat(c1);
	document.getElementById("result2a").innerHTML = "";
	document.getElementById("result2b").innerHTML = "";
	document.getElementById("result2c").innerHTML = "";
	document.getElementById("result4d").innerHTML = "";
	document.getElementById("result6").innerHTML = "";
}

//функция-калькулятор,  запускается по событию <onkeyup> при внесении данных счетчиков в таблицу
table.onkeyup = trigger;
function trigger() {
	// скрипт определения текущей даты  
	let date = new Date();
	let day = addZero(date.getDate());
	let month = addZero(date.getMonth() + 1);
	let year = addZero(date.getFullYear());
	let dat = day + "/" + month + "/" + year;
	document.getElementById("dat").value = dat;
	

	//ф-я для красивого вывода даты 
	function addZero(num) {
		if (num >= 0 && num <= 9) {
			return "0" + num;
		} else {
			return num;
		}
	}

	// 1-й цикл-извлечение   введенных данных 
	let a1 = ((document.getElementById("a1").value).replace(",", ".")); if (!a1) a1 = 0; //вместо if (isNaN(a1)==true) a1=0;
	let a2 = ((document.getElementById("a2").value).replace(",", ".")); if (!a2) a2 = 0; //вместо if (isNaN(a2)==true) a2=0;
	let b1 = ((document.getElementById("b1").value).replace(",", ".")); if (!b1) b1 = 0; //вместо if (isNaN(b1)==true) b1=0;
	let b2 = ((document.getElementById("b2").value).replace(",", ".")); if (!b2) b2 = 0; //вместо if (isNaN(b2)==true) b2=0;
	let c1 = ((document.getElementById("c1").value).replace(",", ".")); if (!c1) c1 = 0; //вместо if (isNaN(c1)==true) c1=0;
	let c2 = ((document.getElementById("c2").value).replace(",", ".")); if (!c2) c2 = 0; //вместо if (isNaN(c2)==true) c2=0;	


	// произведение расчетов с данными 
	let sub1 = (a1 - a2).toFixed(2);
	let mul1 = `${(sub1 * 6.43).toFixed(2)}p.`;
	let sub2 = (b1 - b2).toFixed(2);
	let mul2 = `${(sub2 * 50.93).toFixed(2)}p.`;
	let sub3 = (c1 - c2).toFixed(2);
	let mul3 = `${(sub3 * 243.16).toFixed(2)}p.`;
	let sum = (parseFloat(sub2) + parseFloat(sub3)).toFixed(2);
	let mul4 = `${((sum) * 39.97).toFixed(2)}p.`;
	let sumup = `${(parseFloat(mul1) + parseFloat(mul2) + parseFloat(mul3) + parseFloat(mul4)).toFixed(2)}p.`;

	//запись расчитанных значений  в таблицу 
	if (sub1 < 0 || sub2 < 0 || sub3 < 0) {
		document.getElementById("result1a").innerHTML = "";
		document.getElementById("result2a").innerHTML = "";
		document.getElementById("result1b").innerHTML = "";
		document.getElementById("result2b").innerHTML = "";
		document.getElementById("result1c").innerHTML = "";
		document.getElementById("result2c").innerHTML = "";
		document.getElementById("result3d").innerHTML = "";
		document.getElementById("result4d").innerHTML = "";
		document.getElementById("result6").innerHTML = "";
	} else {
		document.getElementById("result1a").innerHTML = sub1;
		document.getElementById("result2a").innerHTML = mul1;
		document.getElementById("result1b").innerHTML = sub2;
		document.getElementById("result2b").innerHTML = mul2;
		document.getElementById("result1c").innerHTML = sub3;
		document.getElementById("result2c").innerHTML = mul3;
		document.getElementById("result3d").innerHTML = sum;
		document.getElementById("result4d").innerHTML = mul4;
		document.getElementById("result6").innerHTML = sumup;
	}
}

