var haha = 123
var hihi = "oye"

// haha  = hihi // error
// haha = hihi as any; // works; error suppressing

if (haha === hihi as any){
  console.log(true);
}

// custom type

type Style = Number;

var toto:Style = 1233;
