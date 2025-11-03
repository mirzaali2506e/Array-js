const Fruits = ["Mango","Apple","Banana","Orange"]
const Vegetables = ["Tomato" ,"Carrot","Ladyfinger","Potato"]


//concat 
 const Food = Fruits.concat(Vegetables)
// spread operator


const Foods = [...Fruits,...Vegetables]

console.log(Foods)
// console.log(`the length of Fruits array is ${Fruits.length}`)

// Fruits.splice(1,2,"Tangerine" ,"Dragonfruit")




const Fruit_flavour = Fruits.slice(0,2)

console.log(Fruit_flavour)
//splice and slice 



// Adding elements to array

Fruits.push("Pineapple") // add element to end
Fruits.unshift("Grapes") // add element to start

Fruits[6] ="Avocado"

// Removing elements from array

Fruits.pop()// remove element from end
Fruits.shift() // remove element from start

for (let i = 0 ; i<Fruits.length ;i++){
  console.log(Fruits[i])
}


