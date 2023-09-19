// Question 1
type CTStudent = {
    readonly id:string,
    name:string,
    age:number,
    isTired:boolean,
    projectsCompleted:string[],
    pet?:string
}

let student1:CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2:CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3:CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}


console.log(student3.projectsCompleted, student2.pet)

//Queston 2
//Given
type Fruit={
    name:string,
    color:string,
    shape:string
}

let apple:Fruit={name:"apple",color:"red", shape:"sphere"}
let eaten:Fruit=null

//Answer

function fruit(param:Fruit|null):string{
    if(param === null){
        return "You ate my fruit MF! Imma beachyoass!"
    }else{
        return param.name+" "+param.color
    }

}

fruit(apple)
fruit(eaten)

//Question 3
//Given 
type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}

//Answer
type Ebook = Book | DigitalBook

let StarseaCycle:Ebook = {
    isbn:'978-1954411050',
    title:"Starsea Cycle",
    author:'Kyle West',
    fileType:'mp3'

}

StarseaCycle

//Question4
//added the ="xxx" here....seems strange to only return an index for the category...I'm also pretty tired
//and may be missing the point ....please elaborate LOL

enum CatName{Shirts="Shirts",Shoes="Shoes",Pants="Pants",Hats="Hats"}

type ShopItem ={
    readonly id:number,
    price:number,
    description:string,
    color?:string,
    category:CatName,
    keywords:string[]
}

let clubRoomPlaid:ShopItem ={
    id:12922633,
    price:55.00,
    description:"A crisp plaid design is accentuated with the stretch classic fit of this button-down from Club Room, and finished off with a bit of stretch for added comfort.",
    color:"Blue Combo",
    category:CatName.Shirts,
    keywords:["Club Room", "Club Room Men's Perry Plaid Stretch Shirt with Pocket","Shirt","Shirts","Long Sleeve"]
}

let countryGentleman:ShopItem ={
    id:12640503,
    price:55.00,
    description:"The Ascot felt cap from Country Gentlemen has a slim profile and more relaxed feel. It is a shape that never goes out of style with a modern update.",
    color:"Charcoal",
    category:CatName.Hats,
    keywords:["Country Gentlemen", "Country Gentlemen Men's Ascot Felt Cap","Felt Cap","Ascot Cap"]
}

let RelaxedFit550:ShopItem ={
    id:613981,
    price:59.99,
    description:"In 1985, we introduced the 550™ jean. It had the same quality and craftsmanship as the original 501® style, but with more room in the seat and thigh for guys who want a relaxed look. Cut with a more relaxed fit, these Jeans are the reliable choice for laid back style that you can wear again and again. The slightly faded finish allows for that perfect lived-in vibe that we look for in a denim essential, complete your casualwear collection with these jeans from a brand you can trust.",
    color:"Charcoal",
    category:CatName.Pants,
    keywords:["Levi's","Levi 550","jeans","men's jeans","relaxed fit"]
}


//clubRoomPlaid
//countryGentleman
//RelaxedFit550