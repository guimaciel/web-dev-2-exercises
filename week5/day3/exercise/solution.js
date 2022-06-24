$(() => {
  // get posts
  $.ajax({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json',
  }).done((data) => {
    //load each post in the page
    $.each(data, (i, post) => {
      $('#posts').append(`
            <div class='post' id=${post.id}>
              <h1>${post.title}</h1>
              <p>${post.body}</p>
              <button class='show-comments' data-post=${post.id}>Show comments</button>
              <div class='comments'>
                <h2>Comments:<h2>
              </div>
            </div>
            `);
    });
    $.each($('.show-comments'), (i, btn) => {
      const postId = $(btn).attr('data-post');
      $(btn).on('click', () => {
        $(`#${postId} .comments`).slideToggle(1000, () => {
          //   console.log('slide toggle done');
        });
      });
    });
  });
  // get comments
  $.ajax({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/comments',
    dataType: 'json',
  }).done((data) => {
    $.each(data, (i, comment) => {
      $(`#${comment.postId} .comments`).append(`
            <div class='comment'>
              <h3>${comment.name}</h3>
              <p class='comment-body'>"${comment.body}"</p>
              </div>
            `);
    });
  });
});
