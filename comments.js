document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<p>${commentText}</p>`;
        document.getElementById('commentList').appendChild(comment);
        document.getElementById('commentText').value = '';
    }
});