


var books = [ 
    { 
        name: 'JavaScript Definitive Guide',
        prize: 30
    },
    { 
        name: 'You don\'t know JavaScript',
        prize: 40
    },
    { 
        name: 'Node.js Design Patterns',
        prize: 50
    } 
] 

var favourate = [];

let body = document.body; 

let cont = document.createElement('div'); 
cont.className = 'container'; 
body.append(cont); 

let secCont = document.createElement('div'); 
secCont.className = 'container'; 
secCont.style.marginTop = '50px';
secCont.style.marginBottom = '100px';
body.append(secCont); 


let h1 = document.createElement('h1');
cont.appendChild(h1);
h1.innerHTML = 'All Books';
h1.className = 'display-4 text-center';

let div = document.createElement('div');
cont.append(div);
div.className = 'd-flex';

let addDiv = document.createElement('div');
cont.append(addDiv);


let btn = document.createElement('button'); 
btn.innerHTML = 'Load Books';
btn.className = 'btn btn-primary';
div.append(btn);


let btn2 = document.createElement('button'); 
btn2.innerHTML = 'Make New';
btn2.className = 'btn btn-dark ml-auto';
div.append(btn2);



// Add New Book 

btn2.onclick = function() {

    addDiv.style.marginTop = '50px';

    let form = document.createElement('form');
    form.id = 'frm';
    addDiv.append(form);

    // Book Name
    let nameDiv = document.createElement('div');
    nameDiv.className = 'form-group';
    form.append(nameDiv);

    let nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Book Name';
    nameDiv.append(nameLabel);

    let nameInput = document.createElement('input');
    nameInput.className = 'form-control col-md-5';
    nameInput.setAttribute('name', 'first');
    nameDiv.append(nameInput);


    // Book Prize
    let prizeDiv = document.createElement('div');
    prizeDiv.className = 'form-group';
    form.append(prizeDiv);

    let prizeLabel = document.createElement('label');
    prizeLabel.innerHTML = 'Book Prize';
    prizeDiv.append(prizeLabel);

    let prizeInput = document.createElement('input');
    prizeInput.className = 'form-control col-md-5';
    prizeInput.required = true;
    prizeInput.setAttribute('name', 'second');
    prizeDiv.append(prizeInput);


    let addBtn = document.createElement('button');
    addBtn.innerHTML = 'Submit';
    addBtn.className = 'btn btn-primary';
    form.appendChild(addBtn);


    form.onsubmit = function(event) { 
        event.preventDefault();
        let bookName = event.target.first.value;
        let bookPrize = event.target.second.value; 

        let newObj = {
            name: bookName,
            prize: bookPrize
        } 
        books.push(newObj); 

        alert('New book added successfully');
    } 
} 




let hr = document.createElement('hr');
cont.append(hr);

// UL 
// - li 


// UL Generate

btn.onclick = function() { 
    let ul = document.createElement('ul'); 
    ul.className = 'list-group col-md-8'; 

    books.forEach((book) => { 
        ul.append(listGenerateForbooks(book)); 
    }) 
    cont.appendChild(ul);
} 




// List Generate 

var flag = true;

function listGenerateForbooks(book) { 
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-center';

    let p = document.createElement('p');
    p.innerHTML = book.name; 
    li.append(p); 

    let span = document.createElement('span'); 
    span.innerHTML = `$${book.prize}`; 
    span.className = 'm-auto'; 
    span.id = 'prizeSpan';
    li.append(span); 



    // Update 

    let span2 = document.createElement('span'); 
    span2.innerHTML = 'U'; 
    span2.style.cursor = 'pointer'; 
    span2.style.color = 'purple';
    span2.style.fontWeight = 'bold';

    span2.onclick = function() { 
        let para = li.childNodes[0]; 
        let text = para.innerHTML; 

        let input = document.createElement('input'); 
        input.value = text; 
        input.className = 'form-control col-md-4'; 

        li.replaceChild(input, para); 
        
        input.onkeypress = function(event) { 
            if(event.keyCode === 13) { 
                let userInput = event.target.value; 

                let p = document.createElement('p'); 
                p.innerHTML = userInput; 

                li.replaceChild(p, input); 
            } 
        } 
    } 



    // Delete

    let span3 = document.createElement('span'); 
    span3.innerHTML = 'X'; 
    span3.style.marginLeft = '15px'; 
    span3.style.cursor = 'pointer'; 
    span3.style.color = 'red';
    span3.style.fontWeight = 'bold';

    span3.onclick = function() { 
        li.remove(); 
    } 





    // Favourate

    let span4 = document.createElement('span');
    span4.innerHTML = 'F';
    span4.style.marginLeft = '15px';
    span4.style.cursor = 'pointer';
    span4.style.color = 'green';
    span4.style.fontWeight = 'bold';

    

    span4.onclick = function() { 
        favourate.push(li); 

        if(flag) {
            let favDiv = document.createElement('div'); 
            secCont.append(favDiv); 

            let favHead = document.createElement('h1'); 
            favHead.innerHTML = 'Favourate List'; 
            favHead.className = 'display-4'; 
            favDiv.append(favHead); 

            flag = false;
        }
        
        
        
        let favUl = document.createElement('ul'); 
        favUl.className = 'list-group col-md-8'; 
        secCont.appendChild(favUl); 
        
        let favLi = document.createElement('li');
        favLi.className = 'list-group-item d-flex justify-content-center'; 
        favUl.appendChild(favLi); 

        let favP = document.createElement('p');
        favP.innerHTML = book.name;
        favLi.append(favP);
        
        let favSpan = document.createElement('span'); 
        favSpan.innerHTML = `$${book.prize}`
        favSpan.className = 'm-auto'; 
        favLi.append(favSpan); 

        let crossSpan = document.createElement('span');
        crossSpan.innerHTML = 'X';
        crossSpan.style.cursor = 'pointer'; 
        crossSpan.style.color = 'red';
        crossSpan.style.fontWeight = 'bold';
        favLi.append(crossSpan); 
    } 



    li.append(span2); 
    li.append(span3); 
    li.append(span4); 
    
    return li; 
} 




