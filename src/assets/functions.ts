export const formatTime = (ms: number) => {
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = ms % 1000

    if (isNaN(minutes) || isNaN(seconds) || isNaN(milliseconds)) {
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
    }

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMilliseconds = String(Math.round(milliseconds / 10)).padStart(2, "0");

    const time = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`

    return time;
};

export const sortTimes = (arr: number[]) => {
    return arr.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
};

// export const sum = (array) => {
//     return array.reduce((prevEl, currentEl) => prevEl + currentEl, 0)
// }