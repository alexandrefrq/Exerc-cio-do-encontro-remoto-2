let numeroDeAlunos = 15;

for(let contador = 0; contador < numeroDeAlunos; contador++)

{
   
    //console.log(contador)

    if(contador == 0)
    {
        console.log("O número atual é Zero.")
    }

    else if(contador %2 == 0)
    {
        console.log("O número "+contador+" é PAR.");
    }
    
    else
    {
    
        console.log(`O número ${contador} é ÍMPAR.`)
    }
}