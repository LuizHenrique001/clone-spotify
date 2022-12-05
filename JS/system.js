let PausarComecar = document.querySelector('div.btn_play_musica')

let EstadoBotao = 'pausado'
let EstadoBotao2 = 'comecar'
function comecarMusica() {
    PausarComecar = document.querySelector('div.btn_play_musica')
    PausarComecar.innerHTML = `<svg role="img" onclick="pausarMusica()" class="btn_play_svg" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>`
}

function pausarMusica () {
    let PausarComecar = document.querySelector('div.btn_play_musica')
    PausarComecar.innerHTML = `<svg onclick="comecarMusica()" class="btn_play_svg" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 uPxdw"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>`
}