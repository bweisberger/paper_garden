let plantPosition = [10, 10]
let observer = null

function emitChange() {
    observer(plantPosition)
}

export function observe(o) {
    if(observer) {
        throw new Error('Multiple obervers not yet implemented')
    }
    observer = o
    emitChange()
}

export function movePlant(toX, toY){
    plantPosition = [toX, toY]
    emitChange()
}
