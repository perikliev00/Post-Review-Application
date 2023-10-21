let publishButton=document.getElementById('publish');
let review=document.getElementById('review');
publishButton.addEventListener('click',() => {
    if(document.getElementById('tittle').value==""||document.getElementById('category').value==""||document.getElementById('text-area').value=="") {
        throw new Error('Enter fields')
    }
    let ul=document.createElement('ul');
    let firstLi=document.createElement('li');
    let secondLi=document.createElement('li');
    let thirdLi=document.createElement('li');
    let firstButton=document.createElement('button');
    let secondButton=document.createElement('button');
    firstButton.textContent="Edit";
    secondButton.textContent='Aprove';
    firstLi.setAttribute('id','tittle-list');
    secondLi.setAttribute('id','object-list');
    thirdLi.setAttribute('id','content-list');
    firstButton.setAttribute('id','edit-button');
    secondButton.setAttribute('id','aprove-button');
    let container=document.createElement('div');
    review.appendChild(container);
    container.appendChild(ul)
    ul.appendChild(firstLi);
    ul.appendChild(secondLi);
    ul.appendChild(thirdLi);
    container.appendChild(firstButton);
    container.appendChild(secondButton);
    let inputTittle=document.getElementById('tittle').value;
    let inputObject=document.getElementById('category').value;
    let text=document.getElementById('text-area').value;
    let list=document.getElementById('clone');
    firstLi.textContent=inputTittle;
    secondLi.textContent=inputObject;
    thirdLi.textContent=text;
    document.getElementById('tittle').value="";
    document.getElementById('category').value="";
    document.getElementById('text-area').value="";
    firstButton.addEventListener('click',() => {
        review.removeChild(container);
        document.getElementById('tittle').value=firstLi.textContent;
        document.getElementById('category').value=secondLi.textContent;
        document.getElementById('text-area').value=thirdLi.textContent;
    })
    secondButton.addEventListener('click',()=> {
        let uploadedSection=document.getElementById('buffer-section');
        let s=secondButton.parentNode;
        s.removeChild(firstButton);
        s.removeChild(secondButton);
        uploadedSection.appendChild(s);
    })
})
document.getElementById('clear').addEventListener('click',()=>{
    let mainUploadedContainer=document.getElementById('buffer-section');
    let main=document.getElementById('uploaded-section');
    main.removeChild(mainUploadedContainer);
    let buffer=document.createElement('div');
    buffer.setAttribute('id','buffer-section');
    main.appendChild(buffer);
})
