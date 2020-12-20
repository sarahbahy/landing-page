# Landing page
---
this project have three main goals:
* build a dynamic navigation menu
* scroll to a section upon click on the crossponding link in the navigation menu
* highlight the section in the viewport upon scrolling

## build a dynamic navigation menu 
the following code selects all sections and calls function buildLink for each section, which gets the value of the attribute `data-nav` and assign it to a `<li></li>` and then add the `<li></li>` to a document fragment. 
```
const docFrag = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
function buildLink(section){
    const name= section.getAttribute('data-nav');
    const newElement = document.createElement('li');
    newElement.textContent = name;
    newElement.classList.add('menu__link');
    docFrag.appendChild(newElement);
}
sections.forEach(buildLink);
```
Then select the unorderd list by its id and add to it the document fragment
```
document.getElementById('navbar__list').appendChild(docFrag);
```

## scroll to a section upon click on the crossponding link in the navigation menu
the follwing code gets the text inside the clicked link tag then select the section that has attribute data-nav with value equals to the text inside the clicked link.
To get the position from top of selected section call property `offsetTop` then pass it to `scrollTo` function.
```
function scroll(evt){
    
    const sec_data_nav = evt.target.textContent;
    const section = document.querySelector(`[data-nav="${sec_data_nav}"]`);
    const top = section.offsetTop;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
   
}
```
add event listener to the navigation menu to call `scroll` function upon click
```
nav.addEventListener('click',scroll);
```
## highlight the section in the viewport upon scrolling
the following code removes active class from each section then check if the section is in the view port,using `getBoundingClientRect` function which returns the position of the ement from the topleft of the page, to add to it active class.
```
function setActive() {
    sections.forEach(function(section){
        section.classList.remove('active-class')
        const rect = section.getBoundingClientRect();
        if(rect.top > -320 && rect.top <100){
            section.classList.add('active-class');
        }
        if(rect.height >1000){
            if(rect.top > -720 && rect.top <100){
                section.classList.add('active-class');
            }
        }
    });
}
```
add event listener to the document to call `setActive` function upon scroll
```
document.addEventListener('scroll',setActive );
```