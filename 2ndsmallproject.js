document.getElementById('submit-btn').addEventListener('click', function(){
    const textArea = document.getElementById('text-area')
    // console.log(textArea.value)
    const userReview = document.getElementById('user-review')
    const p = document.createElement('p')
    p.classList.add('text')
    p.innerText = textArea.value
    userReview.append(p)
    textArea.value = ''
    // userReview.innerText = textArea.value
})