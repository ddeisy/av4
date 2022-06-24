class Slides{
    constructor() {
        this.Id = 1;
        this.arraySlide = []
    }

    cadastrar() {
        alert('cadastrando')
    }
    
    listarSlides() {

    }
    lerDados(){
        let Slides = {}

        Slides.id = this.id;
        Slides.nomeSlide = document.getElementById('Slides').value;
        Slides.descricao = document.getElementById('Slides').value;

        return Slides;
    }


    atualizar() {
        alert('lista atualizada')
    }

    mostrar() {
        alert('mostre todos os arquivos')
    }

    anterior() {
        alert('slide anterior')
    }
    proximo() {
        alert('proximo slide')
    }



}
var slide = new Slides