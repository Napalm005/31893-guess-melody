const hash = window.location.hash.replace(`#`, ``);

export const DEBUG = hash.toLowerCase() === `debug`;