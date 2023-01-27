// @ts-nocheck


/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
    const {VITE_SPOON_API} = import.meta.env
    const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${VITE_SPOON_API}`);

    if (response.ok) {
        return response.json();
    }
    else {
        return {
            error: "cannot fetch"
        }
    }
}