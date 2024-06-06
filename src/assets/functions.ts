export const formatTime = (ms: number) => {
    // Oblicz godziny, minuty, sekundy i milisekundy
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000

    // Sformatuj wyniki z dodaniem wiodących zer, jeśli potrzeba
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMilliseconds = String(Math.round(milliseconds / 10)).padStart(2, "0");

    // Złóż wszystko w jeden string
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
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