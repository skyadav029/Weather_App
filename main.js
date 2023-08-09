// fetch api url
const apiEndpoint="https://jsonplaceholder.typicode.com/posts";
// select dom api
const getButton=document.querySelector("#getPost");

const createButton=document.querySelector("#CreatePost");

const updateButton=document.querySelector("#UpdatePost");

const patchButton=document.querySelector("#patchPost");

const deleteButton=document.querySelector("#DeletePost");

// getpost
const getPosts=  async ()=> {
   const response= await fetch(apiEndpoint);
   const posts= await response.json();
   return posts;
        
    }

    getButton.addEventListener('click', async ()=>{
        const posts= await getPosts();
       
      const table=`  <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
        ${posts 
          .map(
          (post)=>`<tr>
        <th scope="row">${post.id}</th>
        <td>${post.title}</td>
        </tr>
        <tr>`
      )
      .join('\n')}
        
        
          </tbody>
      </table>`;
      document.querySelector('#table').innerHTML=table;
    });


