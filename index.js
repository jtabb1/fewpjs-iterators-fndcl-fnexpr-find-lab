
const superbowlWin = (resultObjectArray) => {
    if(resultObjectArray.find( resultObject => resultObject.result === "W")) {
        return resultObjectArray.find( resultObject => resultObject.result === "W").year;
    } else {
        return resultObjectArray.find( resultObject => resultObject.result === "W");
    }
}