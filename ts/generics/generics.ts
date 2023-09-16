//Todo Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArry = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArry, -1)

console.log(insertAtBeginning)
