
export const MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export function getAbsoluteCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        width: elem.offsetWidth,
        height: elem.offsetHeight

    };

    
}

export function getCountDaysInMonts(year, month) {
    let date = new Date(year, +month + 1, 0);
    return date.getDate();
}