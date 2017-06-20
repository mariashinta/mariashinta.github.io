function cekjawaban(){

	var Soal1 = document.quiz.Soal1.value;
	var Soal2 = document.quiz.Soal2.value;
	var Soal3 = document.quiz.Soal3.value;
	var Soal4 = document.quiz.Soal4.value;
	var Soal5 = document.quiz.Soal5.value;
	var Soal6 = document.quiz.Soal6.value;
	var Soal7 = document.quiz.Soal7.value;
	var Soal8 = document.quiz.Soal8.value;
	var Soal9 = document.quiz.Soal9.value;
	var Soal10 = document.quiz.Soal10.value;
	var benar = 0;

	if (Soal1 == "13"){
		benar++
	}
	if (Soal2 == "31"){
		benar++
	}
	if (Soal3 == "6"){
		benar++
	}
	if (Soal4 == "35"){
		benar++
	}
	if (Soal5 == "28"){
		benar++
	}
	if (Soal6 == "72"){
		benar++
	}
	if (Soal7 == "78"){
		benar++
	}
	if (Soal8 == "5"){
		benar++
	}
	if (Soal9 == "7"){
		benar++
	}
	if (Soal10 == "9"){
		benar++
	}

	document.getElementById('SS').style.visibility = "visible";
	document.getElementById('Hasil').innerHTML = "You correctly answer " +benar+ " of 10 Questions";
	

}