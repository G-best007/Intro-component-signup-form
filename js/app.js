
const form = document.querySelector('.form')
const Firstname = document.querySelector('.Fname')
const Lastname = document.querySelector('.Lname')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

const firstnamefield = document.querySelector('.firstnamefield')
const lastnamefield = document.querySelector('.lastnamefield')
const emailfield = document.querySelector('.emailfield')
const passwordfield = document.querySelector('.passwordfield')



form.addEventListener('submit', (e) => {
  e.preventDefault()

  showmail()

})

function showmail() {
  let FnameInput = Firstname.value
  let LnameInput = Lastname.value
  let emailInput = email.value
  let PassInput = password.value

  if (FnameInput === '') {
    firstnamefield.classList.add('show-text')
  } else {
    firstnamefield.classList.remove('show-text')
  }

  if (LnameInput === '') {
    lastnamefield.classList.add('show-text')
  } else {
    lastnamefield.classList.remove('show-text')
  }

  if (emailInput === '') {
    emailfield.classList.add('show-text')
    email.placeholder = 'email@example/com'
  } else {
    emailfield.classList.remove('show-text')
    email.placeholder = 'Email Address'
  }

  if (PassInput === '') {
    passwordfield.classList.add('show-text')
  } else {
    passwordfield.classList.remove('show-text')
  }






  Firstname.value = ''
  Lastname.value = ''
  email.value = ''
  password.value = ''
}



