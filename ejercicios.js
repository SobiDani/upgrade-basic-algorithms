// queremos dormirnos, tenemos insomnio, queremos un bucle que cuente hasta 10 ovejas, cada una será un cosole.log(1 oveja... 2 ovejas... etc.) y que
// cuando sea 10 salga un console.log("zzz") para indicar que nos hemos dormido
for (let i = 0; i < 11; i++) {
    if (i > 0 && i < 2) {
        console.log(i +" oveja")
    } 
    else if(i > 1 && i < 10) {
        console.log(i +" ovejas")

    }
    else {
        console.log("zzz")
    }
}

const comidas = ["Cebolla", "Arroz", "Aceite", "Macarrones", "Aceitunas"];



for(let x = 0; x < comidas.length; x++){
   if(comidas[x].includes("e"))
    {
    console.log(comidas[x])
    }
}




 const alumnos = [
    {
        name: "daniel",
        age: 14
    },
    {
        name: "alejandro",
        age: 11
    },
    {
        name: "jose luis",
        age: 12
    },
    {
        name: "antonio",
        age: 2341
    },
    {
        name: "pedro",
        age: 40
    },
    {
        name: "pepe",
        age: 12
    },
    {
        name: "anuel prrr",
        age: 30
    },
]

for (let y = 0; y < alumnos.length; y++){
    if(alumnos[y].age > 18 && alumnos[y].age < 100){
        console.log(alumnos[y].name)
    }
}
