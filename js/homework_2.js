/*
Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras” (added extra text for less confusion),
 o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.” (added extra text for less confusion).

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
2. Išvesti teksto tipo kintamųjų ilgius
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
4. Išvesti sąrašo tipo kintamųjų ilgius
5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
*/
console.log('Kintamųjų palyginimas\n');

function test(f){
    const testCases=[['1',2],[1,'2'],['1','2'],[0,0],[-111,33333],['abc','abc'],[-Infinity,1],[Infinity,3343434],[111111111111111111111111111111111111111111111111111,1],[NaN,1],['labas','krabas'],[[],['aaaa']],[['aaa', 'bbb', 'ccc'],]];
    for (let i=0;i<testCases.length;i++){
        console.log(`\nTestuojami kintamieji yra ${testCases[i][0]} ir ${testCases[i][1]}`);
        f(testCases[i][0],testCases[i][1]);
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

//Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris didesnis
console.log(`\n<<<*>>> Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris didesnis\n`);
const f1=function compareWhichIsLarger(a,b){
    if(checkIfNumber(a,b)){
        if (a>b){
            console.log(`Pomidoras ${a} yra didesnis už ${b}`);
        }
       else if (a<b){
           console.log(`Pomidoras ${b} yra didesnis už ${a}`);
       }
// although the task does not ask if they are equal or not it is one of the possible outcomes
       else {
            console.log(`Bandykite kitą kartą. ${a} yra lygus ${b}`);
       }
    }
};
//Test of function
test(f1);

//Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris mažesnis
console.log(`\n<<<*>>> Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris mažesnis\n`);
const f2=function compareWhichIsSmaller(a,b){
    if(checkIfNumber(a,b)){
        if (a>b){
            console.log(`Pomidoras ${b} yra mažesnis už ${a}`);
        }
       else if (a<b){
           console.log(`Pomidoras ${a} yra mažesnis už ${b}`);
       }
// although the task does not ask if they are equal or not it is one of the possible outcomes
       else {
            console.log(`Bandykite kitą kartą. ${a} yra lygus ${b}`);
       }
    }
};
//Test of function
test(f2);

//Tarpusavyje palyginti skaičiaus tipo kintamuosius ar jie lygūs
console.log(`\n<<<*>>> Tarpusavyje palyginti skaičiaus tipo kintamuosius ar jie lygūs\n`);
const f3=function compareIsEqual(a,b){
    if(checkIfNumber(a,b)){
        if (a===b){
            console.log(`Pomidoras ${b} yra lygus ${a}`);
        }
       else {
            console.log(`Bandykite kitą kartą. ${a} Nėra lygus ${b}`);
       }
    }
};
//Test of function
test(f3);

//Tarpusavyje palyginti skaičiaus tipo kintamuosius ar jie nelygūs
console.log(`\n<<<*>>> Tarpusavyje palyginti skaičiaus tipo kintamuosius ar jie nelygūs\n`);
const f4=function compareIsNotEqual(a,b){
    if(checkIfNumber(a,b)){
        if (a!==b){
            console.log(`Pomidoras ${b} yra nelygus ${a}`);
        }
       else {
            console.log(`Bandykite kitą kartą. ${a} yra lygus ${b}`);
       }
    }
};
//Test of function
test(f4);

//Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris didesnis
console.log(`\n<<<*>>> Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris didesnis\n`);
const f5=function compareWhichIsLargerOrEqual(a,b){
    if(checkIfNumber(a,b)){
        if (a>=b){
            console.log(`Pomidoras ${a} yra didesnis arba lygus ${b}`);
        }
       else {
           console.log(`Pomidoras ${b} yra didesnis arba lygus ${a}`);
       }
    }
};
//Test of function
test(f5);

//Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris mažesnis
console.log(`\n<<<*>>> Tarpusavyje palyginti skaičiaus tipo kintamuosius kuris mažesnis\n`);
const f6=function compareWhichIsSmallerOrEqual(a,b){
    if(checkIfNumber(a,b)){
        if (a>=b){
            console.log(`Pomidoras ${b} yra mažesnis arba lygus ${a}`);
        }
       else{
           console.log(`Pomidoras ${a} yra mažesnis arba lygus ${b}`);
       }
    }
};
//Test of function
test(f6);

//Išvesti teksto tipo kintamųjų ilgius
console.log(`\n<<<*>>> Išvesti teksto tipo kintamųjų ilgius\n`);
const f7=function lengthOfString (a){

};



