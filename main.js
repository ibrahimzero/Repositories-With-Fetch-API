let theInput=document.querySelector('.get-repos input');
let btn=document.querySelector('.get-button');
let reposData=document.querySelector('.show-data');
btn.onclick=function(){
    getRepos();
};
console.log(theInput)
//get repos function

function getRepos(){
if(theInput.value===""){
    reposData.innerHTML=`<span>Please Write Github Username</span>`
}else{
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
    .then(response=>{
        return response.json();
    }).then((data)=>{
        reposData.innerHTML='';
        data.forEach(element => {
             let mainDiv =document.createElement('div');
             let repoName= document.createTextNode(element.name);
             mainDiv.appendChild(repoName);
             let repoUrl=document.createElement('a');
             let urlText=document.createTextNode('visit');
             repoUrl.appendChild(urlText);
             repoUrl.href=`https://github.com/${theInput.value}/${element.name}`;
             repoUrl.setAttribute("target","_blank");
             mainDiv.appendChild(repoUrl)
             let stars= document.createElement('span');
             let starsText=document.createTextNode(`satrs ${element.stargazers_count}`);
             mainDiv.className='repo-box'
             stars.appendChild(starsText)
            mainDiv.appendChild(stars)
             reposData.appendChild(mainDiv);
        });
    })
}
}

