import "./styles.css"
import { tabMenu } from "./menu"


const nav = document.querySelector('nav')
const content = document.querySelector('#content')
nav.addEventListener("click", function(e)
{
    content.textContent = ""
    if (e.target.textContent === "Home")
    {

    }
    else if (e.target.textContent === "Menu")
    {
        tabMenu()
    }
    else if (e.target.textContent === "Contact")
    {

    }
})