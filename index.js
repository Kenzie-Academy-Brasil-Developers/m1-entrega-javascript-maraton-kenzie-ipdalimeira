let participantes = ["Rafael ", "Manoel ", "Daniel "];

function positions (array){   
        let positionDaniel = array.indexOf ("Daniel")
        if (positionDaniel==0)  {
            return 'Daniel é o vencedor'
        }else {
            array.splice (positionDaniel -1, 0, "Daniel")
            array.splice (positionDaniel +1, 1)
            return `Este é o pódio ${array}`
        }      
} 
    console.log(positions(participantes))



// Precisei de ajuda para executar esta tarefa pois não conhecia o indexOf nem mesmo o splice
// Quem me ajudou foi o https://kenzieacademybrasil.slack.com/team/U037EKQ48G6 (Edmar Cardoso Junior)


// Lógica - Maraton Kenzie
// Para esta entrega você irá exercitar os conceitos de funções, condicionais e array's

// Crie uma array que contenha os nomes de Rafael, Manoel e Daniel
// Crie uma função chamada positions. Esta função deverá receber como parâmetro o array contendo os nomes dos atletas.
// A posição do elemento no array representa sua posição na corrida.
// O competidor Daniel realizou o desafio extra, e ganhou um bônus. Ele sempre vai subir uma posição.
// Sendo assim, o Daniel trocará de lugar com quem estiver na posição a frente dele, caso haja.
// Verifique se a posição do elemento 'Daniel' no array é diferente de 0, caso seja, ele deverá trocar de lugar com quem está à sua frente. Caso contrário retorne; 'Daniel é o vencedor'
// Retorne o array resultante concatenado com a frase: 'Este é o pódio'.
// Chame a função usando o console.log(), para conseguir ler seu retorno.