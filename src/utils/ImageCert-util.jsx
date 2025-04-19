function getImageURL(name) {
    return new URL (`../assets/certificates/${name}`, import.meta.url).href
}

export {getImageURL}