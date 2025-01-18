import { tabMenu } from "./menu"
import { tabHome } from "./home"
import "./styles.css"


const nav = document.querySelector('nav')
const content = document.querySelector('#content')
nav.addEventListener("click", function(e)
{
    content.textContent = ""
    if (e.target.textContent === "Home")
    {
        tabHome()
    }
    else if (e.target.textContent === "Menu")
    {
        tabMenu()
    }
    else if (e.target.textContent === "Contact")
    {

    }
})