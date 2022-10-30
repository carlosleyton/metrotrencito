const localStations = [
    {
        "code": "L1",
        "address": "Av. San Pablo 6190",
        "city": "LO PRADO",
        "fantasy_name": "SAN PABLO L1",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Neptuno Oriente frente al 260",
        "city": "LO PRADO",
        "fantasy_name": "NEPTUNO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. General Bonilla 5900",
        "city": "LO PRADO",
        "fantasy_name": "PAJARITOS",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins 6056",
        "city": "ESTACION CENTRAL",
        "fantasy_name": "LAS REJAS",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins Frente al 4620",
        "city": "ESTACION CENTRAL",
        "fantasy_name": "ECUADOR",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins Frente al 4102",
        "city": "ESTACION CENTRAL",
        "fantasy_name": "SAN ALBERTO HURTADO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins Frente al 3702",
        "city": "ESTACION CENTRAL",
        "fantasy_name": "UNIVERSIDAD DE SANTIAGO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins Frente al 3322",
        "city": "ESTACION CENTRAL",
        "fantasy_name": "ESTACION CENTRAL",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins 2841",
        "city": "SANTIAGO",
        "fantasy_name": "UNION LATINOAMERICANA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins 2275",
        "city": "SANTIAGO",
        "fantasy_name": "REPUBLICA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins 1774",
        "city": "SANTIAGO",
        "fantasy_name": "LOS HEROES L1",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins 1330",
        "city": "SANTIAGO",
        "fantasy_name": "LA MONEDA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins 1020",
        "city": "SANTIAGO",
        "fantasy_name": "UNIVERSIDAD DE CHILE",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O´Higgins N°511",
        "city": "SANTIAGO",
        "fantasy_name": "SANTA LUCIA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Libertador Bernardo O`Higgins 270",
        "city": "SANTIAGO",
        "fantasy_name": "UNIVERSIDAD CATOLICA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Providencia 011",
        "city": "PROVIDENCIA",
        "fantasy_name": "BAQUEDANO L1",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Providencia 700",
        "city": "PROVIDENCIA",
        "fantasy_name": "SALVADOR",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Providencia 1337",
        "city": "PROVIDENCIA",
        "fantasy_name": "MANUEL MONTT",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. General Rondizzoni 1650",
        "city": "SANTIAGO",
        "fantasy_name": "RONDIZZONI",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Providencia 1880",
        "city": "PROVIDENCIA",
        "fantasy_name": "PEDRO DE VALDIVIA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Nueva Providencia 2249",
        "city": "PROVIDENCIA",
        "fantasy_name": "LOS LEONES L1",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Tobalaba 117",
        "city": "PROVIDENCIA",
        "fantasy_name": "TOBALABA L1",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Apoquindo Frente al Nº3231",
        "city": "LAS CONDES",
        "fantasy_name": "EL GOLF",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Apoquindo Frente al 3885",
        "city": "LAS CONDES",
        "fantasy_name": "ALCANTARA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Apoquindo Frente al 4502",
        "city": "LAS CONDES",
        "fantasy_name": "ESCUELA MILITAR",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Apoquindo Frente al 5875",
        "city": "LAS CONDES",
        "fantasy_name": "MANQUEHUE",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Apoquindo 7095",
        "city": "LAS CONDES",
        "fantasy_name": "HERNANDO DE MAGALLANES",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L1",
        "address": "Av. Apoquindo 8613",
        "city": "LAS CONDES",
        "fantasy_name": "LOS DOMINICOS",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Recoleta 3754",
        "city": "RECOLETA",
        "fantasy_name": "ZAPADORES",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida José Miguel Carrera 8870",
        "city": "LA CISTERNA",
        "fantasy_name": "LA CISTERNA L2",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida José Miguel Carrera 7958",
        "city": "LA CISTERNA",
        "fantasy_name": "EL PARRON",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida José Miguel  Carrera 6560 - 6559",
        "city": "LA CISTERNA",
        "fantasy_name": "LO OVALLE",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida José Miguel Carrera Frente al 5940",
        "city": "SAN MIGUEL",
        "fantasy_name": "CIUDAD DEL NIÑO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida José Miguel Carrera Frente al 5350",
        "city": "SAN MIGUEL",
        "fantasy_name": "DEPARTAMENTAL",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida José Miguel Carrera Frente al 4688",
        "city": "SAN MIGUEL",
        "fantasy_name": "LO VIAL",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida José Miguel Carrera Frente al 3806",
        "city": "SAN MIGUEL",
        "fantasy_name": "SAN MIGUEL",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Gran Avenida Jose Miguel Carrera Frente al 3080",
        "city": "SAN MIGUEL",
        "fantasy_name": "EL LLANO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Placer 1310",
        "city": "SANTIAGO",
        "fantasy_name": "FRANKLIN L2",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Manuel Antonio Matta 1704",
        "city": "SANTIAGO",
        "fantasy_name": "PARQUE O'HIGGINS",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Toesca 1635",
        "city": "SANTIAGO",
        "fantasy_name": "TOESCA",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Libertador Bernardo O`Higgins 1774",
        "city": "SANTIAGO",
        "fantasy_name": "LOS HEROES L2",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Compañía de Jesús N°1625",
        "city": "SANTIAGO",
        "fantasy_name": "SANTA ANA L2",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "General Mackenna 1100",
        "city": "SANTIAGO",
        "fantasy_name": "PUENTE CAL Y CANTO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Recoleta 301",
        "city": "RECOLETA",
        "fantasy_name": "PATRONATO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Recoleta 860",
        "city": "RECOLETA",
        "fantasy_name": "CERRO BLANCO",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Recoleta 1502",
        "city": "RECOLETA",
        "fantasy_name": "CEMENTERIOS",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Einstein 601",
        "city": "RECOLETA",
        "fantasy_name": "EINSTEIN",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Av. Recoleta 3202",
        "city": "RECOLETA",
        "fantasy_name": "DORSAL",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L2",
        "address": "Ignacio Carrera Pinto altura 661",
        "city": "RECOLETA",
        "fantasy_name": "VESPUCIO NORTE",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    },
    {
        "code": "L3",
        "address": "AV. AMÉRICO VESPUCIO 2500",
        "city": "QUILICURA",
        "fantasy_name": "LOS LIBERTADORES",
        "schedule": "Lunes a Viernes: 6:00 a 23:00 horas, Sábados: 6:30 a 23:00 horas, Domingos y festivos: 8:00 a 23:00 horas."
    }
]
    export { localStations}