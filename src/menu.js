function renderMenu() {
    let contentContainer = document.querySelector('#content')
    contentContainer.innerHTML = ''

    let menu = document.createElement('main')
    menu.classList.add('menu')
    
    menu.append(createMenuItem(
        'Margherita',
        'Pomodoro San Marzano, Fiordilatte di Agerola, Basilico e Olio extra vergine di oliva',
        '3.50'
    ))
    menu.append(createMenuItem(
        'Marinara',
        'Pomodoro San Marzano, Aglio, Origano e Basilico',
        '3.50'
    ))
    menu.append(createMenuItem(
        'Margherita con Bufala',
        'Pomodoro San Marzano, Bocconcini di Bufala, Basilico e Olio extra vergine di oliva',
        '5.50'
    ))
    menu.append(createMenuItem(
        'Capricciosa',
        'Pomodoro San Marzano, Fiordilatte di Agerola, Prosciutto cotto, Funghi champignon, Carciofi e Basilico',
        '6.00'
    ))
    menu.append(createMenuItem(
        'Boscaiola',
        'Provola, Funghi porcini e Basilico',
        '6.00'
    ))
    menu.append(createMenuItem(
        'Salsiccia e Friarelli',
        'Provola, Salsiccia, Friarelli e Basilico',
        '6.00'
    ))
    menu.append(createMenuItem(
        'Quattro Formaggi',
        'Crema di formaggi, Provola e Basilico',
        '6.00'
    ))
    menu.append(createMenuItem(
        'Quattro Stagioni',
        'Pomodoro, Funghi, Prosciutto cotto, Fiordilatte di Agerola, Olive e Acciughe',
        '6.00'
    ))
    menu.append(createMenuItem(
        'Diavola',
        'Pomodoro, Fiordilatte di Agerola, Salame piccante e Basilico',
        '6.00'
    ))
    menu.append(createMenuItem(
        'Mimosa',
        'Panna, Fiordilatte di Agerola, Prosciutto cotto, Mais e Basilico',
        '6.00'
    ))
    
    contentContainer.append(menu)
    document.querySelector('#menuBtn').classList.add('selected-tab')
    document.querySelector('#homeBtn').classList.remove('selected-tab')
    document.querySelector('#aboutBtn').classList.remove('selected-tab')
}

function createMenuItem(name, ingredients, price) {
    let menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    let foodName = document.createElement('h3')
    foodName.innerText = name

    let foodIngredients = document.createElement('p')
    foodIngredients.innerText = ingredients

    let foodPrice = document.createElement('span')
    foodPrice.innerText = '€ ' + price

    menuItem.append(foodName, foodIngredients, foodPrice)

    return menuItem;
}

export {renderMenu}