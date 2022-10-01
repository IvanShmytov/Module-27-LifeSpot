let session = new Map();

setTimeout(function () {
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!");
}, 60000);

const inputParseFunction = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}
function handleSession() {
    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)
}
function checkAge(){
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))
    
    if(session.get("age") >= 18){
        alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString() );
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

let sessionLog = function logSession()
{
    for (let item of session)
    {
        console.log(item)
    }
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i <= elements.length; i++) {
        let childElements = elements[i];
        let videoDescription = childElements.getElementsByTagName('h3')[0].innerText;
        if (!videoDescription.toLowerCase().includes(inputParseFunction().toLowerCase()))
        {
            elements[i].style.display = 'none';
        }
        else
        {
            elements[i].style.display = 'inline-block';
        }
    }
}
