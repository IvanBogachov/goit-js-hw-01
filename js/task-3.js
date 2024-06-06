function getElementWidth(content, padding, border) {
    let contentWidth = Number.parseFloat(content);
    let paddingWidth = Number.parseFloat(padding);
    let bordertWidth = Number.parseFloat(border);

    // console.log(contentWidth);
    // console.log(paddingWidth);
    // console.log(bordertWidth);

    let totalWidth = contentWidth + paddingWidth * 2 + bordertWidth * 2;

    return totalWidth;
};
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200