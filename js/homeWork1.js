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
console.log('');

//2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
console.log('Task 1.2 Sukurti 3 kintamuosius su teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console\n');

const text1='word1';
console.log(text1);
const text2='word2';
console.log(text2);
const text3='word3';
console.log(text3);
console.log('');

//3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
console.log('Task 1.3 Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console\n');

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
console.log('');

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console
console.log('Task 1.4 Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console\n')

const textList1=['one','two','three','four','five'];
console.log(textList1);
const textList2=['six','seven','eight','nine','ten'];
console.log(textList2);
const textList3=['eleven','twelve','thirteen','fourteen','fifteen'];
console.log(textList3);
console.log('');

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

console.log('Task 2 Veiksmai su kintamaisiais');
console.log('----------------------------------------\n');

//1. Susumuoti visus skaičiaus tipo kintamuosius. Rezultatą išvesti į console
console.log('Task 2.1 Susumuoti visus skaičiaus tipo kintamuosius. Rezultatą išvesti į console\n');

let sum=n1+n2+n3;
console.log(sum);
console.log('');

//2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas. Rezultatą išvesti į console
console.log('Task 2.2 Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas. Rezultatą išvesti į console\n');

const sentence=`${text1} ${text2} ${text3}`;
console.log(sentence);
console.log('');

//3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5
console.log('Task 2.3 Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5\n');

const sumList1=numberList1[0]-numberList1[1]+numberList1[2]-numberList1[3]+numberList1[4];
const sumList2=numberList2[0]-numberList2[1]+numberList2[2]-numberList2[3]+numberList2[4];
const sumList3=numberList3[0]-numberList3[1]+numberList3[2]-numberList3[3]+numberList3[4];
const sumList=sumList1+sumList2+sumList3;
console.log(sumList);

//different solution
console.log('\ndifferent solution\n');

const sumList_2=numberList1[0]-numberList1[1]+numberList1[2]-numberList1[3]+numberList1[4]+numberList2[0]-numberList2[1]+numberList2[2]-numberList2[3]+numberList2[4]+numberList3[0]-numberList3[1]+numberList3[2]-numberList3[3]+numberList3[4];
console.log(sumList_2);
console.log('');

//4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
console.log('Task 2.4 Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas\n');

const sentenceOfList1=`${textList1[4]}, ${textList1[3]},  ${textList1[2]},  ${textList1[1]},  ${textList1[0]}`;
const sentenceOfList2=`${textList2[4]}, ${textList2[3]},  ${textList2[2]},  ${textList2[1]},  ${textList2[0]}`;
const sentenceOfList3=`${textList3[4]}, ${textList3[3]},  ${textList3[2]},  ${textList3[1]},  ${textList3[0]}`;
const sentenceOfList=`${sentenceOfList1}, ${sentenceOfList2}, ${sentenceOfList3}`;
console.log(sentenceOfList);
console.log('');

//Extra tasks for homework from lecture
console.log('*** Extra tasks for homework from lecture *** \n');
