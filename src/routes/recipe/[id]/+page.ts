// @ts-nocheck


/** @type {import('../$types').PageLoad} */
export async function load(page) {
    const {VITE_SPOON_API} = import.meta.env
    let id = page.params.id
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${VITE_SPOON_API}`

    const response = await fetch(url);
    const data = response.json()

    if (response.ok) {
        return data;
    }
    else {
        return {
            error: "cannot fetch"
        }
    }
}