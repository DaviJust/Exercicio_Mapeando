const catLovers = [
    {name: "Raul", age: 27,},
    {name: "Jose", age: 14,},
    {name: "Maria", age: 52,},
    {name: "Jesus", age: 17,},
    {name: "Neo", age: 2}
  ]

  const ofAgeCatLovers = catLovers.filter(({age}) => age > 18)
  const shortNamess = ofAgeCatLovers.map(({name}) => name.substring(0,2))

  console.log(shortNamess)