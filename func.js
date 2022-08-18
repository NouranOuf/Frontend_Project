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
    //clear
   
  // class row hwa ale hyt7tt feeh al courses wb3den hyt7t fe kool dx
  // hn7dd kam course fel row 3n taree2 anna n7dd kam col hyakhod al course al wahed 
    
    for(let j=0; j < courses.length;j++){
    // class row hwa ale hyt7tt feeh al courses wb3den hyt7t fe kool dx
    
    // hn7dd kam course fel row 3n taree2 anna n7dd kam col hyakhod al course al wahed 
    //courses
    let div1 = document.createElement('div'); 
    div1.setAttribute('class' , 'cards-wrapper');

    //array of objects 
    for(let i = 0 ; i < courses[j].c.length ; i++) {
        //create tags and set attributes
        let parent = document.createElement('figure'); 
        parent.setAttribute('class' , 'card');

        let nimg = document.createElement('img'); 
        nimg.src = courses[j].c[i].image;
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
        f1.textContent = courses[j].c[i].course;
        f2.textContent = courses[j].c[i].inst;  
        f3.textContent = courses[j].c[i].Rating;  
        f4.textContent = courses[j].c[i].users; 
        f5.textContent = courses[j].c[i].price;
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
        div1.appendChild(parent);
        
    }
    if(j==0){
        let c1 = document.getElementById('c1');
        c1.appendChild(div1);
    }
    else if(j==1){
        let c2 = document.getElementById('c2');
        c2.appendChild(div1);
    }
    else if(j==2){
        let c3 = document.getElementById('c3');
        c3.appendChild(div1);
    }
    else if(j==3){
        let c4 = document.getElementById('c4');
        c4.appendChild(div1);
    }
}
}