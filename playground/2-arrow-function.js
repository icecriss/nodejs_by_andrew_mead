// const square = function (x) {
//   return x * x
// }

// const square = x => x * x

// console.log(square(5))

const event = {
  name: 'Birthday Party',
  guestList: ['Bob', 'Ice', 'Mike'],
  printGuestList() {
    console.log(`Guest list for ${this.name}`)
    this.guestList.map(guest => {
      console.log(`${guest} is attending ${this.name}`)
    })
  }
}

event.printGuestList()