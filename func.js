let cont = document.getElementById('flex-container');
//button
let button = document.getElementsByTagName('input')[0];// it returns array of els
//text
let input = document.getElementsByTagName('input')[1];
//form
let search = document.getElementsByTagName('form')[0];

let i = 0;

//fetch data in a array
fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
       display(json);
      start(json);
    });

function start(data){
    search.addEventListener('submit', (e) => {
        let arr = [];
        let text;
        e.preventDefault();// could be handled with target too
        text = input.value.toLowerCase();  
        console.log(text);
        data.forEach(element => { 
            // search title only
            if(element.course.toLowerCase().includes(text)){
                arr.push(element);
            }
        });
        display(arr);
      });
}


// load the courses in figures
// you will create  img / fig caption and append it in figure and then append it in flex container
function display(courses){
    console.log(courses.length);
    //clear
    cont.innerHTML="";
    for(let i = 0 ; i < courses.length ; i++) {
        //create tags and set attributes
        let parent = document.createElement('figure');    
        let nimg = document.createElement('img'); 
        nimg.src = courses[i].image;
        nimg.setAttribute('width', 275);
        nimg.setAttribute('height', 150);
        let f1 = document.createElement('figcaption');
        f1.setAttribute('class' , 'course'); //re-use the css code 
        let f2 = document.createElement('figcaption'); 
        f2.setAttribute('class' , 'inst'); 
        let f3 = document.createElement('figcaption');
        let f4 = document.createElement('figcaption'); 
        let f5 = document.createElement('figcaption');
        f5.setAttribute('class' , 'course');
        // set values   
        f1.textContent = courses[i].course;
        f2.textContent = courses[i].inst;  
        f3.textContent = courses[i].Rating;  
        f4.textContent = courses[i].users; 
        f5.textContent = courses[i].price;
        //append
        parent.appendChild(nimg);
        parent.appendChild(f1);
        parent.appendChild(f2);
        // stars
        for(let f = 0 ; f < 5 ; f++){ 
          let s1 = document.createElement('i'); 
          s1.setAttribute('class' , 'rating__star far fa-star');
          f3.appendChild(s1);
        }
        parent.appendChild(f3);
        parent.appendChild(f4);
        parent.appendChild(f5);
        cont.appendChild(parent);
    }
    console.log(cont);
}



