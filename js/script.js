//es 1
var zucchine = [
    {
        'nome': 'Eren',
        'peso': 100,
        'lunghezza': 200,
    },
    {
        'nome': 'Mikasa',
        'peso': 10,
        'lunghezza': 20,
    },
    {
        'nome': 'Conny',
        'peso': 15,
        'lunghezza': 18,
    },
    {
        'nome': 'Armin',
        'peso': 100,
        'lunghezza': 50,
    },
    {
        'nome': 'Levi',
        'peso': 16,
        'lunghezza': 20,
    },
    {
        'nome': 'Reiner',
        'peso': 80,
        'lunghezza': 40,
    },
    {
        'nome': 'Annie',
        'peso': 40,
        'lunghezza': 60,
    },
    {
        'nome': 'Erwin',
        'peso': 10,
        'lunghezza': 17,
    },
    {
        'nome': 'Sasha',
        'peso': 25,
        'lunghezza': 30,
    },
    {
        'nome': 'Jean',
        'peso': 7,
        'lunghezza': 23,
    },
];

for ( var i = 0; i < zucchine.length; i++ ) {
    var thisZucchina = zucchine[i];
    console.log(thisZucchina.peso);

    var peso = 0;
    console.log(peso);

    peso = peso + thisZucchina.peso;

    console.log(peso);
}


//es 2

// for ( var i = 0; i < zucchine.length; i++ ) {

//     if ( zucchine.peso < 15 ) {
//         var minoreQuindici;
//         minoreQuindici = minoreQuindici + zucchine.peso[i];

//     } else {
//         var maggioreQuindici;
//         maggioreQuindici = maggioreQuindici + zucchine.peso[i];
//     }
    
//     console.log(minoreQuindici);
//     console.log(maggioreQuindici);
//}