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

var peso = 0;

for ( var i = 0; i < zucchine.length; i++ ) {
    var thisZucchina = zucchine[i];
    console.log('peso della zucchina', thisZucchina.peso);

    peso = peso + thisZucchina.peso;
}

console.log(peso);


//es 2

var minoreQuindici = 0;
var maggioreQuindici = 0;

for ( var i = 0; i < zucchine.length; i++ ) {
    var thisZucchina = zucchine[i];

    if ( thisZucchina.peso < 15 ) {
        minoreQuindici = minoreQuindici + thisZucchina.peso;

    } else {
        maggioreQuindici = maggioreQuindici + thisZucchina.peso;
    }
}

console.log('Quelle che pesano meno di 15 pesano in totale:', minoreQuindici);
console.log('Quelle che pesano di piu di 15 pesano in totale:', maggioreQuindici);