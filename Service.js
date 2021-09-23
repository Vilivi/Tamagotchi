const roundSubstractionCalcul = (value , subs) => {
    return Math.round((value - subs) * 10) / 10;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const createInput = (idInput) => {
    const feed = document.createElement("input");
    feed.setAttribute("type", "button");
    feed.setAttribute("value", capitalizeFirstLetter(idInput));
    feed.id = idInput;

    return feed;
}