const productos = [
    { id: 0, nombre: 'Tazon', description: 'Magia', img: '/src/assets/productos/tazones/tazonMagia.jpg', stock: 9 },
    { id: 1, nombre: 'Tazon', description: 'Witch', img: '/src/assets/productos/tazones/tazonWitch.jpg', stock: 9 },
    { id: 2, nombre: 'Plato', description: 'Venecia', img: '/src/assets/productos/platos/platoVenecia.jpg', stock: 9 },
    { id: 3, nombre: 'Plato', description: 'Grid', img: '/src/assets/productos/platos/platoGrid.jpg',stock: 9 },
    { id: 4, nombre: 'Bandeja', description: 'Venecia', img: '/src/assets/productos/bandejas/bandejaVenecia.jpg',stock: 9 },
    { id: 5, nombre: 'Bandeja', description: 'Texas', img: '/src/assets/productos/bandejas/bandejaTexas.jpg',stock: 9 },
    { id: 6, nombre: 'Hornito', description: 'Lunar', img: '/src/assets/productos/hornitos/hornitoLunar.JPG',stock: 9 },
    { id: 7, nombre: 'Hornito', description: 'Volado', img: '/src/assets/productos/hornitos/hornitoVolado.jpg',stock: 9 },
    { id: 8, nombre: 'Mate', description: 'Panda', img: '/src/assets/productos/mates/matePanda.jpg',stock: 9 },
    { id: 9, nombre: 'Mate', description: 'Cerdito', img: '/src/assets/productos/mates/mateCerdito.JPG',stock: 9 }
]

// Promesas => 3 estados: pendiente, rechazado, aceptada.

export const gFetch = () => {
    return new Promise((resolve, reject) => {
        // acciones
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    },)
}   