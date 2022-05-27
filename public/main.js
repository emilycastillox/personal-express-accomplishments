const star = document.getElementsByClassName("fa-star");
const trash = document.getElementsByClassName("fa-delete-left");
// const thumbDown = document.getElementsByClassName('fa-thumbs-down')
Array.from(star).forEach(function(element) {
      element.addEventListener('click', function(e){
        e.preventDefault()
        const date = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const favorites = e.target.classList.contains('pink') ? true : false

        fetch('favorites', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'date': date,
            'msg': msg,
            'favorited': favorites
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const likes = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('thumbsDown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'likes': likes,
//         'action': 'dislike'
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const date = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('items', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'date': date,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
