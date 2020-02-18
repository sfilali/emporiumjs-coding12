// =================== Modal =====================
//      bouton qui ouvre le modal
let btn = document.getElementById('connexion')
//      modal
let modal = document.getElementById('modal')
//      Close
let close = document.getElementsByClassName('close')[0]
//      click bouton connexion
btn.addEventListener('click', () => {
    modal.classList.remove('d-none')
})
//      close bouton
close.addEventListener('click', () => {
    modal.classList.add('d-none')
})
//      close window modal
window.addEventListener('click', ()=>{
    if (event.target == modal) {
        modal.classList.add('d-none')
    }
})
//      bouton se connecter
let connect = document.getElementById('seconnecter')
//      bouton s'inscrire
let register = document.getElementById('sinscrire')
//      div contenant champs de connexion + btn
let div_connect = document.getElementById('champsconnexion')
let btn_connect = document.querySelector('#champsconnexion button')
//      div contenant champs d'inscription + btn
let div_register = document.getElementById('champsinscription')
let btn_register = document.querySelector('#champsinscription button')
//      ouvrir champs de connexion
connect.addEventListener('click', ()=>{
    div_connect.classList.remove('d-none')
})
//      ouvrivr champs d'inscription
register.addEventListener('click', ()=>{
    div_register.classList.remove('d-none')
})