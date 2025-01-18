const content = document.querySelector('#content')

export const tabHome = function()
{
    let greeting = document.createElement('h1')
    greeting.textContent = "Welcome to Restaurant!"
    content.appendChild(greeting)
    
    let about = document.createElement('div')
    about.classList.add('about')
    content.appendChild(about)
    
    let text = document.createElement('h3')
    text.textContent = "About Us"
    about.appendChild(text)
    
    text = document.createElement('p')
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    about.appendChild(text)
}
