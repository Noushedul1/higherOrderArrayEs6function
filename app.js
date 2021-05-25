const companies = [
	{name: 'Apex', category: 'Retail', start: 1981, end: 2003},
	{name: 'Bata', category: 'Finance', start: 1992, end: 2008},
	{name: 'Kafco', category: 'Retail', start: 1999, end: 2007},
	{name: 'SoftTech', category: 'Technology', start: 2009, end: 2014},
	{name: 'Bapex', category: 'Auto', start: 1987, end: 2010},
	{name: 'akibTech', category: 'Technology', start: 1986, end: 1996},
	{name: 'cafco', category: 'Technology', start: 2011, end: 2016},
	{name: 'bsrm', category: 'Auto', start: 1981, end: 1989},
];
const ages = [30,23,46,78,12,35,67,89,20,35,5];

//forEach

// for(let i=0; i<companies.length; i++){
// 	console.log(companies[i].name, companies[i].category, companies[i].start);
// }

// companies.forEach(function(currentValue){
// 	console.log(currentValue.name);
// });

// companies.forEach(currentValue=>console.log(`${currentValue.name} ${currentValue.category}`));

//filter

//query for 21 year ages 

// const canDrink = [];
// for(let i=0; i<ages.length; i++){
// 	if(ages[i]>=21){
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age){
// 	if(age >= 21){
// 		return true;
// 	}
// });
// console.log(canDrink);

// const canDrink = ages.filter(age => age >=21);
// console.log(canDrink);

//query for rertail companies

// const retailCompanies = companies.filter(function(company){
// 	if(company.category === "Retail"){
// 		return true;
// 	}
// });
// console.log(retailCompanies);

// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies);

//get 80s companies
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.end < 1990));
// console.log(eightiesCompanies);

//companies lasted ten yearsconst lastedTenYearCompanies = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYearCompanies);

//map

//company Name

// const companiesName = companies.map(function(company){
// 	return `${company.name} [${company.start}-${company.end}]`;
// });
// console.log(companiesName);

// const companiesName = companies.map(company =>`${company.name} [${company.start}-${company.end}]`);
// console.log(companiesName);

//ages 
// const agesSquare = ages.map(age =>Math.sqrt(age));
// console.log(agesSquare);

// const agesTimesTwo = ages.map(age => age*2);
// console.log(agesTimesTwo);

//Multiple map
// const agesMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age *2);
// console.log(agesMap);


//sort
// const startCompany = companies.sort(function(a,b){
// 	if(a.start > b.start){
// 		return 1;
// 	}else{
// 		return 1;
// 	}
// });
// console.log(startCompany);

// const startCompany = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(startCompany);

//ages asc dsc
// const agesSort = ages.sort(); //it cannot properly sort single digit number
// console.log(agesSort);

// const agesSort = ages.sort((a,b) => a-b); // for asc
// console.log(agesSort);

// const agesSort = ages.sort((a,b) => b-a);
// console.log(agesSort);

//reduce

// const totalAges = ages.reduce(function(total, age){
// 	return total+age;
// },0);
// console.log(totalAges);

// const totalAges = ages.reduce((total, age) => total+age, 0);
// console.log(totalAges);

//company total year
// const totalYears = companies.reduce((total, company) => total + (company.end-company.start), 0);
// console.log(totalYears);

//combine all 

const combine = ages
.map(age => age*2)
.filter(age => age >= 40)
.sort((a,b) => a-b)
.reduce((total,age) => total+age,0);
console.log(combine);