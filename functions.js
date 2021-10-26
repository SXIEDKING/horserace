/*function sayHello(){
    alert("What ends you from ${name}, you're an opp!");
}

sayHello()

let n = Saied */

/*
 let cleanString = (userString) => {return userString.replace(/fuck|cunt|twat|retard|shit|wanker|cock/gi, "****")}
 let userInput = prompt("Input a string with swear words", "you're a fucking wanker cunt")
 alert(cleanString(userInput)) */

 /*let w = prompt ("Enter something to say to someone you hate","youre a fucking twat cunt")

 function  cleanUp()*/

 

 /*function rot13(str) {
    
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M']
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");

  }*/

  function encode(plainText){
      let encodedText=''
      let charNumber=0

      for(let i=0;i<plainText.length;i++){
          let charNumber = plainText.charCodeAt(i)
          charNumber++
          encodedText +=String.fromCharCode(charNumber)
      }
      return encodedText

  }
  alert(encode('hknudxnt'))