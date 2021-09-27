const cipher = {

  encode: function (numeroDesplazamiento,textoCifrar){
    let text = "";
    let ascii = "";
    if (numeroDesplazamiento === null || numeroDesplazamiento === 0 ){
      throw new TypeError;
    }

    for (let i = 0; i < textoCifrar.length; i++){
    
      ascii =  textoCifrar.charCodeAt(i);
      let newascii = (ascii - 65 + numeroDesplazamiento) % 26 + 65;
      let newletter = String.fromCharCode(newascii);
      text += newletter;
      /*console.log(ascii, newascii, newletter, numeroDesplazamiento);*/
      
    }
  
    /*console.log("encode")*/
    return text;
  },

 decode: function (numeroDesplazamiento,textoCifrar){
  let text = "";
  let ascii = "";
  if (numeroDesplazamiento === null || numeroDesplazamiento === 0 ){
    throw new TypeError;
  }
  
  for (let i = 0; i < textoCifrar.length; i++) {
  
    ascii =  textoCifrar.charCodeAt(i);
    let newascii = (ascii - 90 - numeroDesplazamiento) % 26 + 90;
    let newletter = String.fromCharCode(newascii);
    text += newletter;
    /*console.log(ascii, newascii, newletter);*/
    
  }
  /*console.log("decode")*/
  return text;
}

}


export default cipher;














