const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById('generate-btn')
let password1 = document.getElementById('password1')
let password2 = document.getElementById('password2')

const getPassword = () => {
    let password = ''
    for (let i = 0; i < 15; i++) {
        const randNum = Math.floor(Math.random() * characters.length)
        password += characters[randNum]
    }
    return password
}

generateBtn.addEventListener('click', () => {
    password1.textContent = getPassword()
    password2.textContent = getPassword()
})

