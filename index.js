
const superbowlWin = (a) => {
    if(a.find( o => o.result === "W")) {
        return a.find( o => o.result === "W").year;
    } else {
        return a.find( o => o.result === "W");
    }
}