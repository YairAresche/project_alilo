const productos = [
    { id: '0', name: 'Magia', categoria: 'tazones', stock: '9', precio: '1500', img: '/src/assets/productos/tazones/tazonMagia.jpg',  },
    { id: '1', name: 'Witch', categoria: 'tazones', stock: '9', precio: '1500', img: '/src/assets/productos/tazones/tazonWitch.jpg',  },
    { id: '2', name: 'Venecia', categoria: 'platos', stock: '9', precio: '2000', img: '/src/assets/productos/platos/platoVenecia.jpg',  },
    { id: '3', name: 'Grid', categoria: 'platos', stock: '9', precio: '2000', img: '/src/assets/productos/platos/platoGrid.jpg', },
    { id: '4', name: 'Venecia', categoria: 'bandejas', stock: '9', precio: '2500', img: '/src/assets/productos/bandejas/bandejaVenecia.jpg', },
    { id: '5', name: 'Texas', categoria: 'bandejas', stock: '9', precio: '2500', img: '/src/assets/productos/bandejas/bandejaTexas.jpg', },
    { id: '6', name: 'Lunar', categoria: 'hornitos', stock: '9', precio: '1800', img: '/src/assets/productos/hornitos/hornitoLunar.JPG', },
    { id: '7', name: 'Volado', categoria: 'hornitos', stock: '9', precio: '1800', img: '/src/assets/productos/hornitos/hornitoVolado.jpg', },
    { id: '8', name: 'Panda', categoria: 'mates', stock: '9', precio: '900', img: '/src/assets/productos/mates/matePanda.jpg', },
    { id: '9', name: 'Cerdito', categoria: 'mates', stock: '9', precio: '900', img: '/src/assets/productos/mates/mateCerdito.JPG', }
]

// Promesas => 3 estados: pendiente, rechazado, aceptada.

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        // acciones
        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === id) : productos);
        }, 2000)
    })
}