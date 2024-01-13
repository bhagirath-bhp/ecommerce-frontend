export function capitalizeWords(inputString) {
    return inputString.replace(/\b\w/g, char => char.toUpperCase());
}