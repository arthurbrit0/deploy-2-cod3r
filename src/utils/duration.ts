export function fromSeconds(seconds: number) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    const time = [hours, minutes, secs].map((unit) => String(unit).padStart(2, '0'))
    if (time[0] === '00') {
        return `${time[1]}m ${time[2]}s`
    } else {
        return `${time[0]}h ${time[1]}m`
    }
}
