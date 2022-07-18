console.log("hellow world")
//Regular Expression
  //Basic Functions
  //MetaCharcter symbols



  //Character Sets-[]

//  const regex=/K[c-o]shaf/;//it means letter between "c" to "o"
//  const regex=/K[af]shaf/;//it means letter  can be a or f 
// const regex=/K[^af]shaf/;//it means letter can't be a or f 
let regex=/K[af]sh[ab]f/;//it means letter  can't be a or f and after h it should be a or f


//Quantifiers - we use {}

regex==/kas{2}f/  //s can occur exactly 2 times

regex==/kas{0,2}f/  //s can occur exactly 0  to 2(0 or 1 or 2) times



//Groupings - we use paranthesis for groupings()
regex=/(kas){2}([0-9]r){3}/   //kas occur 2 times

//expression for this==> kaskas1r2r4r  (for grouping condition)

  const str="Kashaf Abdullah"

  let result=regex.exec(str);

  if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)
}