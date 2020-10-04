const removeHyphen = new RegExp("-", "g");
const translate = (text, upperCase) => {
    if (!text) {
        return null;
    }
    let formattedText = null;
    const textNoSpace = text.replace(/\s/g, '');
    if (textNoSpace.indexOf('-') > -1 && textNoSpace.length === 36) {
        formattedText = textNoSpace.replace(removeHyphen, '');
    }
    if (textNoSpace.indexOf('-') === -1 && textNoSpace.length === 32) {
        const parts = [textNoSpace.slice(0, 8), textNoSpace.slice(8, 12),  textNoSpace.slice(12, 16), textNoSpace.slice(16, 20), textNoSpace.slice(20)];
        formattedText = parts.join('-');
    }
    if (!formattedText) {
        return 'Not a valid UUID!';
    }
    return upperCase ? formattedText.toUpperCase() : formattedText.toLowerCase();
}

export default translate;