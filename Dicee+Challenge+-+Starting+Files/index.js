
function init()
{
    const parent = document.getElementById('show-dice');
    const createImageElement = document.createElement('img');
    const createImageElement1 = document.createElement('img');
    const text = document.createElement('p');
    //selecting random number from array
    const randomNum = (Math.floor(Math.random() * 6) + 1);
    console.log(randomNum);
    const randomNum1 = (Math.floor(Math.random() * 6) + 1);
    console.log(randomNum1);
    createImageElement.setAttribute('src', `./images/dice${randomNum}.png`);
    createImageElement1.setAttribute('src', `./images/dice${randomNum1}.png`);
    if (randomNum > randomNum1)
    {
        text.innerText = 'player1 wins';
    }
    else if (randomNum === randomNum1)
    {
        text.innerText = 'its a tie';
    }
    else
    {
        text.innerText = 'player2 wins';
    }
    parent.append(createImageElement);
    parent.append(createImageElement1);
    parent.append(text);
}