
 // Crie um array que receba 5 itens e exiba no console.

let familia = ["Antonio","Ulisses","Douglas","Adriele","Naiara"]
console.log(familia)

// Utilize um método para adicionar um nome ao inicio do array.

let familia2 = ["Antonio","Ulisses","Douglas","Adriele","Naiara"]
console.log(familia2.unshift("Ivan"))
// familia2.unshift("Ivan")  poderia ser assim tb 
console.log(familia2)

// Utilize um método para remover o último nome do array.

let familia3 = ["Antonio","Ulisses","Douglas","Adriele","Naiara"]
console.log(familia3.pop()) 
// familia3.pop() poderia ser assim tb 
console.log(familia3)

// Utilize um método para adicionar dois nomes ao fim do array.

let familia4 = ["Antonio","Ulisses","Douglas","Adriele","Naiara"]
console.log(familia4.push("Lucas","Matheus")) 
// familia4.push("Lucas","Matheus") poderia ser assim tb 
console.log(familia4)


// Utilize um método para remover o primeiro nome do array.

let familia5 = ["Antonio","Ulisses","Douglas","Adriele","Naiara"]
console.log(familia5.shift()) 
// familia5.shift() poderia ser assim tb 
console.log(familia5)


// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]


// ordem crescente

const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function (a, b) {
    return a - b
    
})
console.log(numbers)

// pode ser assim tb 

// numbers.sort(function(a, b){
// if (a<b)
// return -1
// if(a>b) 
// return 1
// })

// console.log(numbers)



// ordem decrescente 

numbers.sort(function (a, b) {
return a - b
    
})
console.log(numbers.reverse())

// pode ser assim tb 

//  numbers.sort(function(a, b){
//  if (a>b)
//  return -1
//  if(a<b) 
//  return 1
// })

// console.log(numbers)






