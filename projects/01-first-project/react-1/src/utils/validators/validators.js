export const required = (value) => {
    if (value) {
        return undefined;
    }
    return 'Field is required'
}

export const maxLength = (length) => {
    return (value) => {
        if (value.length < length) {
            return undefined
        }
        return `max length is ${length} symbols`
    }
}