
// Importar todo el módulo

import * as funciones from './funciones.js'

console.log()

funciones.saludar('Juan')
funciones.despedir('Juan')

funciones.saludar(funciones.nombre)
funciones.despedir(funciones.nombre)

// Importar una función específica

import { saludar } from './funciones.js'
import { despedir } from './funciones.js'

saludar('Juan Carlos')
despedir('Juan Carlos')

// Importar y renombrar

import {
    saludar as saludin,
    despedir as chaucito,
    nombre as nombrecito
} from './funciones.js'

saludin('Agustin')
chaucito('Agustin')
chaucito(nombrecito)
