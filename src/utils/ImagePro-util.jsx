function getImageProURL(name) {
    return new URL (`../assets/projects/${name}`, import.meta.url).href
}

export {getImageProURL}