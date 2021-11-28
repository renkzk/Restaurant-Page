function renderAbout() {
    let contentContainer = document.querySelector('#content')
    contentContainer.innerHTML = ''

    let about = document.createElement('main')
    about.classList.add('about')
    about.innerHTML = `
        <div>
            <div class="about-info">
                <p>📞 123 456 7890</p>
                <p>📍 Not a Fake Adress 123, Naples, Italy</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23463.281798000255!2d14.23880907263062!3d40.83123834997451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09ac26357211%3A0x970c840bd5800ad!2sCastel%20dell&#39;Ovo!5e0!3m2!1sit!2sit!4v1638139059907!5m2!1sit!2sit" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    `
    contentContainer.append(about)

    document.querySelector('#aboutBtn').classList.add('selected-tab')
    document.querySelector('#homeBtn').classList.remove('selected-tab')
    document.querySelector('#menuBtn').classList.remove('selected-tab')
}

export {renderAbout}