/*
Task 1 Kintamųjų inicijavimas

1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
    1.1 Po kiekvieno jų inicijavimo, išvesti į console
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    2.1 Po kiekvieno jų inicijavimo, išvesti į console
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
    3.1 Po kiekvieno jų inicijavimo, išvesti į console
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
    4.1 Po kiekvieno jų inicijavimo, išvesti į console
*/

console.log('Task 1 Kintamųjų inicijavimas');
console.log('----------------------------------------\n');

//1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console
console.log('Task 1.1 Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console\n');
const n1=1;
console.log(n1);
const n2=2;
console.log(n2);
const n3=3;
console.log(n3);

//2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
console.log('\nTask 1.2 Sukurti 3 kintamuosius su teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console\n');

const text1='word1';
console.log(text1);
const text2='word2';
console.log(text2);
const text3='word3';
console.log(text3);

//3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
console.log('\nTask 1.3 Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console\n');

const numberList1=[1,2,3,4,5];
console.log(numberList1);
const numberList2=[6,7,8,9,10];
console.log(numberList2);
const numberList3=[11,12,13,14,15];
console.log(numberList3);

//different solution
console.log('\ndifferent solution\n');
const numberList1_1=[];
for (let i=1;i<6;i++){
    numberList1_1.push(i);
}
console.log(numberList1_1);
const numberList2_1=[];
for (let i=6;i<11;i++){
    numberList2_1.push(i);
}
console.log(numberList2_1);
const numberList3_1=[];
for (let i=11;i<16;i++){
    numberList3_1.push(i);
}
console.log(numberList3_1);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
console.log('\nTask 1.4 Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console\n')

const textList1=['one','two','three','four','five'];
console.log(textList1);
const textList2=['six','seven','eight','nine','ten'];
console.log(textList2);
const textList3=['eleven','twelve','thirteen','fourteen','fifteen'];
console.log(textList3);

/*
Task 2 Veiksmai su kintamaisiais

1. Susumuoti visus skaičiaus tipo kintamuosius
    1.1 Rezultatą išvesti į console
2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    2.1 Rezultatą išvesti į console
3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    3.1 1-2+3-4+5
    3.2 Rezultatą išvesti į console
4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

console.log('\nTask 2 Veiksmai su kintamaisiais');
console.log('----------------------------------------\n');

//1. Susumuoti visus skaičiaus tipo kintamuosius. Rezultatą išvesti į console
console.log('Task 2.1 Susumuoti visus skaičiaus tipo kintamuosius. Rezultatą išvesti į console\n');

let sum=n1+n2+n3;
console.log(sum);

//2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas. Rezultatą išvesti į console
console.log('\nTask 2.2 Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas. Rezultatą išvesti į console\n');

const sentence=`${text1} ${text2} ${text3}`;
console.log(sentence);

//3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5
console.log('\nTask 2.3 Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5\n');

const sumList1=numberList1[0]-numberList1[1]+numberList1[2]-numberList1[3]+numberList1[4];
const sumList2=numberList2[0]-numberList2[1]+numberList2[2]-numberList2[3]+numberList2[4];
const sumList3=numberList3[0]-numberList3[1]+numberList3[2]-numberList3[3]+numberList3[4];
const sumList=sumList1+sumList2+sumList3;
console.log(sumList);

//different solution
console.log('\ndifferent solution\n');

const sumList_2=numberList1[0]-numberList1[1]+numberList1[2]-numberList1[3]+numberList1[4]+numberList2[0]-numberList2[1]+numberList2[2]-numberList2[3]+numberList2[4]+numberList3[0]-numberList3[1]+numberList3[2]-numberList3[3]+numberList3[4];
console.log(sumList_2);

//4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
console.log('\nTask 2.4 Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas\n');

const sentenceOfList1=`${textList1[4]}, ${textList1[3]},  ${textList1[2]},  ${textList1[1]},  ${textList1[0]}`;
const sentenceOfList2=`${textList2[4]}, ${textList2[3]},  ${textList2[2]},  ${textList2[1]},  ${textList2[0]}`;
const sentenceOfList3=`${textList3[4]}, ${textList3[3]},  ${textList3[2]},  ${textList3[1]},  ${textList3[0]}`;
console.log(sentenceOfList1);
console.log(sentenceOfList2);
console.log(sentenceOfList3);

//different solution
console.log('\ndifferent solution\n');

function fromBack(someList=[],){
    let sentenceOfSomeList=`${someList[4]}, ${someList[3]},  ${someList[2]},  ${someList[1]},  ${someList[0]}`;
    console.log(sentenceOfSomeList);
}
fromBack(textList1);
fromBack(textList2);
fromBack(textList3);

//Extra tasks for homework from lecture
console.log('\n*** Extra tasks ***\n');
console.log('Extra task 1 į console išvesti kiek mokinių mokosi klasėje ir mokinių vardus\n');
// Klaseje mokosi 4 asmenys.
// Mokinių vardai yra Petras, Ona, Jonas, Maryte.
const asmuo1 = 'Petras';
const asmuo2 = 'Ona';
const asmuo3 = 'Jonas';
const asmuo4 = 'Maryte';
const asmenys = [asmuo1, asmuo2, asmuo3, asmuo4];
// į console išvesti kiek mokinių mokosi klasėje ir mokinių vardus
console.log (`Klasje mokosi ${asmenys.length} mokiniai.\nMokinių vardai yra:\n* ${asmenys[0]}\n* ${asmenys[1]}\n* ${asmenys[2]}\n* ${asmenys[3]}\n`);
const pazymiai=[10,2,8,6,4]
console.log('Extra task 2 į console išvesti pažymius, pažimių sumą, pažimių kiekį ir pažimių vidurkį\n');
let suma=0;
for(let i=0;i<pazymiai.length;i++){
    suma=suma+pazymiai[i];
};
let avg = (suma/pazymiai.length);
console.log(`Pažymiai: ${pazymiai}\nPažimių suma: ${suma}\nPažimių kiekis: ${pazymiai.length}\nPažimių vidurkis: ${avg}`);