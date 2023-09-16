//! More complex types : arrays, object

//todo More complex types:
let hobbies: string[]
hobbies = ['Hello', 'Hi', 'How do u do']

//! what is keyword 'any'
let x: any = 5 //ama x her hansi bir tipde de ola biler
x = 'Hello'
x = { name: 'bob' }

//object type definition
let person: {
  name: string
  age: number
}
person = {
  name: 'Max',
  age: 32,
}

let people: {
  name: string
  age: number
}[]

//
let peoples: {
  name: string
  age: number
}[] = [
  { name: 'Hob', age: 23 },
  { name: 'Happy', age: 233 },
  { name: 'Patient', age: 243 },
]

//todo Type Inference
let courese: string | number = 'React - The Complete Guide'
courese = 23234 // also you can write string here

//! Type alieses

type ID = number //ID , number tipinin bir alias'idir (takma adidir)
type Coordinate = [number, number] //Coordinate, array tipinin bir alias'ıdır

type Person1 = {
  name: string
  age: number
}

let person1: Person1

person1 = {
  name: 'Ali',
  age: 22,
}

let publicPeople: Person1[]
