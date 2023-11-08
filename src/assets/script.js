const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}


const getDates = (sendDate) => {
    const lastDate = new Date(sendDate.getTime() + (getRandomNumber(2, 4) * 1000));
    return {
        send_date: sendDate.toLocaleString('ru'),
        send_timestamp: Math.floor(sendDate.getTime() / 1000),
        last_date: lastDate.toLocaleString('ru'),
        last_timestamp: Math.floor(lastDate.getTime() / 1000),
    }
}

const dates = getDates(new Date());

const inputNames = [
    ['id', getRandomNumber(90000, 999999)],
    ['status', '1'],
    ['last_date', dates.last_date],
    ['last_timestamp', dates.last_timestamp],
    ['send_date', dates.send_date],
    ['send_timestamp', dates.send_timestamp],
    ['phone', '79172791557'],
    ['cost', '3.90'],
    ['sender_id', 'Delofon'],
    ['status_name', 'Доставлено'],
    ['message', 'Код для подписания Дополнительного соглашения: ' + getRandomNumber(10000, 99999)],
    ['type', '0'],
    ['sms_cnt', '1'],
    ['flag', '0'],
    ['ip', '195.246.111.100'],
];

const updateInputValue = (id, value) => {
    const element = document.getElementById(id);
    if(element){
        element.value = value;
    }
    document.querySelector(`[data-target=${id}]`).innerHTML = value;
}

inputNames.forEach((element) => {
    updateInputValue(element[0], element[1]);
    const elementListen = document.getElementById(element[0]);
    if(elementListen){
        document.getElementById(element[0]).addEventListener('input', (e) => {
            document.querySelector(`[data-target=${element[0]}]`).innerHTML = e.target.value;
            if(e.target.name === inputNames[4][0]){
                const testDate = Date.parse(e.target.value);
                if(testDate){
                    const date = new Date(Date.parse(e.target.value));
                    const dates = getDates(date);
                    updateInputValue(inputNames[2][0], dates.last_date);
                    updateInputValue(inputNames[3][0], dates.last_timestamp);
                    updateInputValue(inputNames[5][0], dates.send_timestamp);
                }
            }
        })
    }
})


document.getElementById('refresh').addEventListener('click', (e) => {
    const dates = getDates(new Date());
    inputNames[0][1] = getRandomNumber(90000, 999999);
    inputNames[2][1] = dates.last_date;
    inputNames[3][1] = dates.last_timestamp;
    inputNames[4][1] = dates.send_date;
    inputNames[5][1] = dates.send_timestamp;
    inputNames[10][1] = 'Код для подписания Дополнительного соглашения: ' + getRandomNumber(10000, 99999);
    inputNames.forEach((element) => {
        updateInputValue(element[0], element[1]);
    })
})