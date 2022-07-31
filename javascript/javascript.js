const tagsEl = document.getElementById("tags");
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) =>{
  createTags(e.target.value);

  if (e.key == 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10);
    
    randomSelect();
  }
})

function createTags(input ) {

  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  // console.log(tags);
  
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl)
  })

}
function randomSelect() {
  const tags = document.querySelectorAll('.tag')
  if (tags.length < 10) {
    var times = tags.length * 3;
  }else if (tags.length < 30) {
    var times = tags.length * 2;
  }else{
    var times = tags.length;

  }
  console.log(times);
  console.log(tags.length);


  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highLightTag(randomTag)
    setTimeout(() => {
      unhighLightTag(randomTag)
    }, 170);
  }, 170);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highLightTag(randomTag)
    }, 170);

  }, times * 100);
}

function pickRandomTag() {

  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]

}

function highLightTag(tag){
  tag.classList.add('highlight')
}

function unhighLightTag(tag){
  tag.classList.remove('highlight')
}

