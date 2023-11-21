const input = document.querySelector('.lists')
const pencil = document.querySelector('#pencil')
const ul = document.querySelector('.todos')
// ============================================
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const performed = document.querySelector('.performed')
// ============================================
const save = document.querySelector('.save')
const clear = document.querySelector('.clear')
const tips = document.querySelector('.tipBtn')
const x = document.querySelector('.closebtn')
const analit = document.querySelector('.analit')

const chenge = document.querySelector('.changeItem')
const toTodos = document.querySelector('.toTodos')

// const todos = document.querySelector('.todos')
// const buttons1 = document.querySelector('.buttons1')
const nav = document.querySelector('.nav')
const analitic = document.querySelector('.analitic')
const analUl = document.querySelector('.analUl')
const analUl2 = document.querySelector('.analUl2')



const aut1 = document.querySelector('.aut1')
const aut2 = document.querySelector('.aut2')
const aut3 = document.querySelector('.aut3')

const analiticData = document.querySelector('.analiticData')
const noData = document.querySelector('.noData')

let words = []
let leter = []


let a = 0
let b = 1
let lettersFun 


pencil.addEventListener('click', ()=>{
   a = 0
   const chenge = document.querySelectorAll('.changeItem')
   input.classList.toggle('display')
   for(i = 0; i <= chenge.length - 1; i++){
      chenge[i].classList.toggle('display')
   }
})


input.addEventListener('keypress', (e)=>{
   if(e.which  === 13 && input.value !== '' && a === 0) {
      let text = input.value
      input.value = ''
      add(text)
   }
})

function add(text){
   let content = document.querySelector('.content')
   const li = document.createElement('li')
   const span = document.createElement('span')
   const i = document.createElement('i')
   const p = document.createElement('p')
   const chenge = document.createElement('span')
   chenge.textContent = 'change'
   chenge.classList.add('changeItem')
   chenge.id = `item${b}`
   p.classList.add('content', `item${b}`)
   p.textContent = text
   i.classList.add('fas','fa-trash-alt')
   ul.insertAdjacentElement('afterbegin',li)
   span.insertAdjacentElement('afterbegin',i)
   li.insertAdjacentElement('afterbegin',span)
   span.insertAdjacentElement('afterend',p)
   p.insertAdjacentElement('afterend',chenge)
   b++
}



//! target закреслення і видалення 


ul.addEventListener('click', (e) => {
   if(e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')    
   }
   if(e.target.tagName === 'I'){
      e.target.parentElement.parentElement.remove()
   }
   if(e.target.className === 'changeItem'){
      chengeItem()
      return
   }
})

function g(idE){
   content = document.querySelectorAll(`.${idE}`)
      // console.log(content);
      input.value = content[0].textContent
      a = 1
      input.addEventListener('keypress', (e)=>{
      if(e.which  === 13 && input.value !== '') {
         content[0].textContent = input.value
         input.value = ''
         return a = 0, content = null, element = null, idE = null
      }
   })
}

function chengeItem(){
   document.addEventListener('click', function(event) {
      let element
      let idE
      let content
      content = null, element = null, idE = null
      element = event.target;
      idE = element.id
      // console.log(idE);
      g(idE)
   });

}


active.addEventListener('click', ()=>{
   const li = document.querySelectorAll('.todos li')
   for(i = 0; i < li.length; i++){
      li[i].style.display = 'list-item'
      if(li[i].className === 'checked'){
         li[i].style.display = 'none'
      }
   }
})

all.addEventListener('click', ()=>{
   const li = document.querySelectorAll('.todos li')
   for(i = 0; i < li.length; i++){
      li[i].style.display = 'list-item' 
   }
})

performed.addEventListener('click', ()=>{
   const li = document.querySelectorAll('.todos li')
   for(i = 0; i < li.length; i++){
      li[i].style.display = 'list-item' 
      if(li[i].className !== 'checked'){
         li[i].style.display = 'none'
      }
   }
})


clear.addEventListener('click', ()=>{
   analUl.textContent = undefined
   analUl2.textContent = undefined
   aut1.textContent = undefined
   aut2.textContent = undefined
   aut3.textContent = undefined
   lettersFun = undefined
   letters = {} 
   // words1 = []
   // words2 = []
   // words = undefined
   // leter = undefined
   const li = document.querySelectorAll('.todos li')
   for(i = 0; i < li.length; i++){
      li[i].remove()
   }

})


tips.addEventListener('click', ()=>{
   const block = document.querySelector('.tipsBlock')
   block.style.animation = 'fromtop 1s'
   block.style.display = 'block'
})

x.addEventListener('click', ()=>{
   const block = document.querySelector('.tipsBlock')
   block.style.animation = 'totop 1s forwards'
   // block.style.display = 'none'
})



analit.addEventListener('click', ()=>{
   nav.style.display = 'none'

   save.style.display = 'none'
   clear.style.display = 'none'
   tips.style.display = 'none'

   pencil.style.display = 'none'
   toTodos.style.display = 'inline'
   analitic.style.display = 'block'
   startAnalitic()

})

toTodos.addEventListener('click', ()=>{
   nav.style.display = 'block'

   save.style.display = 'inline'
   clear.style.display = 'inline'
   tips.style.display = 'inline'

   pencil.style.display = 'block'
   toTodos.style.display = 'none'
   analitic.style.display = 'none'
})

function toStr(go){
   lettersFun = undefined
   const ul = document.querySelector('.todos')
   const ulLength = ul.children.length
   console.log(ul);
   if(go === 0){
      for(i = 0; i <= ulLength - 1; i++){
         // console.log(lettersFun.length);
         if(lettersFun === undefined){
            console.log('0');
            lettersFun = ul.children[i].children[1].textContent
         }else {
            console.log('1');
            lettersFun += ul.children[i].children[1].textContent
         }
      }
   }else if(go === 1){
      for(i = 0; i <= ulLength - 1; i++){
         // console.log(lettersFun.length);
         if(lettersFun === undefined){
            console.log('0');
            lettersFun = ul.children[i].children[1].textContent
         }else {
            console.log('1');
            lettersFun += ' ' + ul.children[i].children[1].textContent
         }
      }
   }
   
   console.log(lettersFun);
}


function addLetter (){
   analUl.textContent = undefined
   //=====================================================================
   let letters = {}  
   for(i = 0; i < lettersFun.length; i++){
      console.log(i);
      const letter = lettersFun[i]
      if(letters[letter]){
         letters[letter]++
      } else {
         letters[letter] = 1
      }
   }
   console.log(letters);
   //======================================================================

   let keySort = Object.keys(letters).sort((a,b)=>letters[b] - letters[a])
   console.log(keySort);

   //======================================================================

   let ul = document.querySelector('analUl')
   let input_lenght = lettersFun.length

   for(let i = 0; i < keySort.length; i++){
      let sumbol = keySort[i]
      let interest = letters[sumbol] / input_lenght * 100
      analUl.insertAdjacentHTML('beforeend',
      `<li>"${sumbol}": ${letters[sumbol]} - ${interest.toFixed(2)} %</li>`)
   }
   return lettersFun = undefined, letters = undefined
}



function addWords(){
   toStr(1)
   let words1 = []
   let words2 = []
   words1.push(lettersFun.split(' '))

   analUl2.textContent = undefined
   let letters = {}  
   for(i = 0; i < words1[0].length; i++){
      console.log(i);
      const letter = words1[0][i]
      if(letters[letter]){
         letters[letter]++
      } else {
         letters[letter] = 1
      }
   }
   console.log(letters);

   let keySort = Object.keys(letters).sort((a,b)=>letters[b] - letters[a])
   console.log(keySort);

   //======================================================================

   let ul = document.querySelector('analUl')
   let input_lenght = words1[0].length

   for(let i = 0; i < keySort.length; i++){
      let sumbol = keySort[i]
      let interest = letters[sumbol] / input_lenght * 100
      analUl2.insertAdjacentHTML('beforeend',
      `<li>"${sumbol}": ${letters[sumbol]} - ${interest.toFixed(2)} %</li>`)
   }
}

function count(){
   // aut1.textContent = undefined
   // aut2.textContent = undefined
   // aut3.textContent = undefined
   // words = undefined
   // leter = undefined

   toStr(1)

   const aut1 = document.querySelector('.aut1')
   const aut2 = document.querySelector('.aut2')
   const aut3 = document.querySelector('.aut3')
   

   let words = []
   let leter = []

   console.log(lettersFun);
   words.push(lettersFun.split(' '))

   leter.push(lettersFun.split(''))

   console.log(aut1.textContent = ul.children.length);
   aut2.textContent = words[0].length
   aut3.textContent = leter[0].length

   // toStr(1)

   console.log(leter);
   console.log(words);
}




function startAnalitic(){
   if(ul.children.length !== 0){
      analiticData.style.display = 'block'
      noData.style.display =  'none'
      console.log(aut1.children);
      toStr(0)
      addLetter()
      addWords()
      count()
   }else {
      analiticData.style.display = 'none'
      noData.style.display = 'block'
   }
}



//! #1
// const input = document.querySelector('.userText')
// const btn = document.querySelector('button')
// const aut = document.querySelector('.aut')

// const addLetter = () => {
//    let words = []
//    let leter = []
//    words.push(input.value.split(' '))
//    console.log(words);
//    leter.push(input.value.split(''))
//    aut.textContent =`${words[0].length} слова, ${leter[0].length} символів`
// }
// btn.addEventListener('click', addLetter)



// {/* <div>
//       <input type="text" class="userText">
//       <button class="button">Start</button>
//       <span>=</span>
//       <span class="aut"></span>
//    </div>
//    <ul></ul> */}