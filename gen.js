var t1 =
[
	'Drodzy państwo, a w zasadzie panowie:',
	'RODO złamie, bo',
	'Naturalnym następstwem takiej koncepcji jest wniosek, że',
	'Jedyna wątpliwość jaka tu może się pojawić polega na tym:',
	'Chciałem napiętnować pewną rzecz:',
	'Łacina jest logiczna i to był koszmar, ale to nie dlatego, że',
	'Będziemy mieli tutaj mnóstwo problemów, więc nie myślcie, że wyjdziemy stąd z jasną odpowiedzą:',
	'Panowie chyba nie wiedzą, że',
	'Wszystko można, co nie można byle z wolna i ostrożna, ale',
	'Dobrze, że nie ma u was dzieczyn, więc mogę powiedzieć, że',
	'Mówią, że nie ma duchów. Jak nie ma, jak',
	'Nie będę prowadził was za rękę. Wystarczy, że zapamiętacie:',
	'Kiedyś nauczyciele mogli wyrażać swoje opinie, na przykład, że',
	'Proszę zwrócić szczególną uwagę na to:'
];

var t2 =
[
	'inkrementalny system edukacji, polegający na tym, że w liceum jest wymagana wiedza z gimnazjum,',
	'popyt większy niż podaż',
	'występowanie dziewczyn w klasie',
	'występowanie dziewczyn w klasie',
	'stopień skomplikowania tej układanki jest tak wysoki, że wszelka próba poradzenia sobie z tematem',
	'złe ułożenie sobie priorytetów',
	'poprawianie błędów nauczyciela',
	'punkt widzenia logiki',
	'niepoprawna interpretacja zamysłu artystycznego Mickiewicza',
	'zamieszanie w tę sprawę osób trzecich',
	'nierobienie prac domowych z polskiego',
	'czytanie książek na komórce',
	'samodzielne dobieranie priorytetów niewystarczających do zdania z języka polskiego'
];

var t3 =
[
	'prowadzi do problemów w przyszłości.',
	'sprawia, że żyjecie w niewiedzy czy jeśteście dobrzy czy nie.',
	'daje taki efekt, że 30% zalicza za pierwszym razem.',
	'kończy się natychmiastową dyskwalifikacją.',
	'to prawdziwy oksymoron!',
	'jest pewnym sygnałem dla egzaminatora, że nie umiecie.',
	'stwarza efekt groteski.',
	'to nie jest Shrek ani osiołek.',
	'zwykle kończy się niemiłymi konsekwencjami prawnymi.',
	'nie pozostawia żadnych wątpliwości co do słusznośći takiej koncepcji.',
	'zadaje na nowo pytania, na które matexom wydaje się, że znają odpowiedzi.',
	'zmniejsza wasze szanse z dziewczynami inteligentnymi, ale zwiększa je z większością.',
	'jest tylko jednym ze skutków braku systematycznej pracy z waszej strony.',
	'obniża wasze możliwości zapamiętywania informacji.',
	'sprawia, że pojawiają się oszuści.',
	'w dorosłym życiu skutkuje problemami. Tacy uczniowie potem nie umieją uzasadnić swojej opinii i mają z tego powodu problemy.'
];

var t4 =
[
	'Tylko proszę tego mi tu nie wyrywać z kontekstu.',
	'Jasne? To jedziemy dalej.',
	'Co jest potwierdzone badaniami naukowymi i statystykami.',
	'Czy to jest jasne? Tak czy nie? Tak?',
	'Nie chce niczego tutaj sugerować.',
	'Widzicie czym to się kończy? Można przylać własnemu ojcu!',
	'Ja nie mówię do siebie, tak?',
	'Nie straszę. Mobilizuję.',
	'Tak?',
	'Tę układankę trzeba sobie ułożyć.',
	'Nie warto w ten sposób marnować swojego intelektu.',
	'Ja spotykam potem absolwentów i oni się tym chwalą. Nie ma się tu czym chwalić!',
	'Więcej na ten temat przeczytacie w domu.',
	'I ja nie chcę tu doprowadzić do sytuacji, że ja tu będę was zadręczał. To wszystko we własnym zakresie.'
];

var gen = function() {
	var out = 
		t1[Math.floor(Math.random() * t1.length)] + " " +
		t2[Math.floor(Math.random() * t2.length)] + " " +
		t3[Math.floor(Math.random() * t3.length)] + " " +
		t4[Math.floor(Math.random() * t4.length)];
	var para = document.getElementById("genOut");
	para.innerHTML = out;
}