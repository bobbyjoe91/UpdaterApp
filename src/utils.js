function getTodaysDate() {
    let todayDate = new Date();
    let nameOfDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = nameOfDay[todayDate.getDay()];
    let date = todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
    let month = todayDate.getMonth() < 10 ? `0${todayDate.getMonth()}` : todayDate.getMonth();
    let year = todayDate.getFullYear();

    return `${day}, ${date}-${month}-${year}`;
}

function addDecimalPoints(numString) {
    if(numString) {
        let numStrArray = numString.split('');
        numStrArray.reverse();

        let length = numString.length;

        if(length > 3) {
            let index = (length%3 == 0) && (length > 3) ? Math.floor(length / 3)-1 : Math.floor(length / 3);
            for(let i=1; i <= index; i++) {
                numStrArray.splice(4*i - 1, 0, '.');
            }
            
            return numStrArray.reverse().join('');
        }
        
        return numString;
    }
}

export { addDecimalPoints, getTodaysDate };