let peça = "peao"

switch (peça.toLowerCase()){
    case "bispo" : console.log("Diagonal quantas casas quiser")
    break
    case "rainha" : console.log("Diagonal, horizontal e vertical quantas casas quiser")
    break
    case "peão" : case "peao": console.log("Apenas para frente, uma única casa")
    break
    case "torre" : console.log("Horizontal e vertical quantas casas quiser")
    break
    case "rei" : console.log("Diagonal, horizontal e vertical uma unica casa")
    break
    case "cavalo" : console.log("Em L, em todas as direções")
    break


    default : console.log("Peça inválida")

}