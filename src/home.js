function renderHome() {
    let contentContainer = document.querySelector('#content')
    contentContainer.innerHTML = ''

    let home = document.createElement('main')
    home.classList.add('home')
    home.innerHTML = `
        <div>
            <h3>Welcome to the "Mamma Mia" Pizzeria!</h3>
            <img src="../dist/img/home.jpg">   
            <p>Here we serve all of our food with love! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sed molestias nisi assumenda atque!<br><br> Nulla soluta aliquam aliquid ut vero, reiciendis eligendi nihil accusantium delectus, facilis quo illum! Repellendus, sapiente alias minima nemo molestias perferendis consequuntur autem fugiat facere facilis distinctio totam modi nisi aut corporis amet minus magni beatae aliquam eveniet, in cumque earum. </p>
        </div>            
    `
    contentContainer.append(home)

    document.querySelector('#homeBtn').classList.add('selected-tab')
    document.querySelector('#menuBtn').classList.remove('selected-tab')
    document.querySelector('#aboutBtn').classList.remove('selected-tab')
}

export {renderHome}
