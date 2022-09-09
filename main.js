//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz: Bob saw the whole thing, but was not surprised — :insertx: weighs :insertw: pounds, and it was a hot day."

let insertX = ["Willy the Goblin",
               "Big Daddy",
               "Father Christmas"];

let insertY = ["the soup kitchen",
               "Disneyland",
               "the White House"];

let insertZ = ["spontaneously combusted",
               "melted into a puddle on the sidewalk",
               "turned into a slug and crawled away"];


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);


function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    let wItem = Math.floor(Math.random() * 100) + 200;
    newStory= newStory.replaceAll(':insertx:', xItem);      //changed replace to replace all instances of substring
    newStory= newStory.replaceAll(':inserty:', yItem);
    newStory= newStory.replaceAll(':insertz:', zItem);
    newStory= newStory.replaceAll(':insertw:', wItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(wItem * .0714286);               //1 pound = 0.0714286 stones
    const temperature =  Math.round((94 - 32) * 5/9);       //°C = (°F - 32) * 5/9
    newStory = newStory.replace("94 fahrenheit", temperature + " centigrade");
    newStory = newStory.replace( wItem + " pounds", weight + " stones");
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}