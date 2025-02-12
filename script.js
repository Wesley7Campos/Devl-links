function toggleMode (){

    const html =document.documentElement

    if(html.classList.contains('light')){
        html.classList.remove('light')
    }else {
        html.classList.add('light')
    }

    /*mesmo codigo acima simplificado*/
    /*html.classList.toggle('light')*/

    //==================================//

    //pegando a tag img
    const img = document.querySelector("#profile img")


    if(html.classList.contains("light")){
        //se estiver no light mode, subistituir imagem para light
        img.setAttribute("src", "./assets/avatar-light.png")
    }else {
        //se estiver sem o light mode, subistituir imagem para normal 
        img.setAttribute("src", "./assets/avatar.png")
    }
}