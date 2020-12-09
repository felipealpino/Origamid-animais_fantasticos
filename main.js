
function initTabFunc(){
    const animaisLista = document.querySelectorAll('.animais-lista li')
    const animaisDescricao = document.querySelectorAll('.animais-descricao.animais section')
    const htmlTodo = document.documentElement

    animaisDescricao[0].classList.add('ativo-section')
    htmlTodo.className += ' js'

    animaisLista.forEach((foto,index) => {
        foto.addEventListener('click', ()=> {
            addAtivo(index)        
        });
    });
    function addAtivo(index) {
        animaisDescricao.forEach((section) => {
            section.classList.remove('ativo-section')
        })
        animaisDescricao[index].classList.add('ativo-section')
    }
}
initTabFunc();


function initAcordion(){
    const faqListaDt = document.querySelectorAll('.faq-lista dt')
    faqListaDt[0].classList.add('inverteSeta')
    faqListaDt[0].nextElementSibling.classList.add('ativo-faq')
    
    function ativaDD(){
        this.classList.toggle('inverteSeta')
        this.nextElementSibling.classList.toggle('ativo-faq')
    }
    faqListaDt.forEach((dt) => {
        dt.addEventListener('click', ativaDD )
    }   )
}
initAcordion();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        console.log(section)
        section.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }

    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection)
    })
}
initScrollSuave();


function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    const metadeJanela = window.innerHeight * 0.7
    animaScroll()

    function animaScroll(){
        sections.forEach((section) => {
            const distSectionTop = section.getBoundingClientRect().top
            const isSectionVisible = distSectionTop - metadeJanela
            if (isSectionVisible < 0) {
                section.classList.add('ativo')
            }
        })
    }
    window.addEventListener('scroll', animaScroll)
}

initAnimacaoScroll()