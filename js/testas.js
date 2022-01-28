/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)*/


//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log(`\nPalyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs.\n`);
const f1=function compareWhichIsLarger(a,b){
    if(checkIfNumber(a,b)){
        if (a>b){
            console.log(`${a} yra didesnis už ${b}`);
        }
       else if (a<b){
           console.log(`${b} yra didesnis už ${a}`);
       }
       else {
            console.log(`${a} yra lygus ${b}`);
       }
    }
};
function checkIfNumber(a,b){
    if(!Number.isFinite(a) && Number.isFinite(b)){
        console.log(`Error: Pirmas kintamasis '${a}' nėra skaičiaus tipo`);
        return false;
     }
     if(!Number.isFinite(b) && Number.isFinite(a)){
        console.log(`Error:  Antras kintamasis '${b}' nėra skaičiaus tipo`);
        return false;
     }
     if((!Number.isFinite(a)) && !Number.isFinite(b)){
        console.log(`Error:  Abu kintamieji  '${a}' ir '${b}' nėra skaičiaus tipo`);
        return false;
     }
     else{
        return true;
     }
};
f1(1,2);
f1("a",2);
f1(2,2);
f1(2,1);

//2 Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log(`\n 2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10.\n`);
for(let i=1;i<11;i++){
    console.log(i);
};

//3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log(`\n 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. \n`);
for(let i=0;i<11;i++){
    console.log(i++);
};

//4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log(`\n 4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.\n`);
for(let i=0;i<5;i++){
    console.log(Math.floor((Math.random() * 11)));
}

//5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log(`\n 5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.\n`);
for(let a=0;a!=5;){
    a=Math.floor(Math.random() * 10);
    console.log(a);
}

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)
console.log(`\n Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)\n`);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
const arrayL=getRndInteger(20,30);
let nArray=[];
for (let i=0;i<arrayL;i++){
    nArray.push(getRndInteger(10,30));
};
const maxFromList=Math.max(...nArray);
console.log(maxFromList);

//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log(`\n 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės.\n`);
const letterList=['A', 'B', 'C', 'D'];
const rList=[];
for (let i=0;i<100;i++){
    rList.push(letterList[getRndInteger(0,3)]);
}
let count = {};
rList.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);

//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log(`\n 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas)\nJei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)\n`);



function lygineSuma(a,b){
    if(Number.isFinite(a) && Number.isFinite(b)){
      if((a+b)%2===0){
        console.log(`skaiciu ${a} ir ${b} suma lygine`);
      }else{
        console.log(`skaiciu ${a} ir ${b} suma nelygine`);
      }
     }
    else if(Array.isArray(a) && Array.isArray(b)){
        if((a.length+b.lengst)%2===0){
            console.log(`masyvu ${a} ir ${b} ilgiu suma lygine`);
          }else{
            console.log(`masyvu ${a} ir ${b} ilgius suma nelygine`);
          }
     }
     else{
        console.log(`abu kintamieji turi buti masyvai arba skaicia`);
     }
};

lygineSuma(1,2);