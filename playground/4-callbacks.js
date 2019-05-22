// setTimeout(() => {
//   console.log('Two seconds are up')
// }, 2000)

// const names = ['Pierre', 'Paul', 'Jack', 'Ice']
// const shortNames = names.filter((name) => {
//   return name.length <= 4
// })

// console.log(shortNames)

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       longitude: 0,
//       latitude: 0,
//     }
//     callback(data)
//   }, 2000)

// }
// geocode('Philadelphia', (data) => {
//   console.log(data)
// })


const add = (num1, num2, callback) => {
  setTimeout(() => {
    sum = num1 + num2
    console.log('2 seconds has passed?')
    callback(sum)

  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})