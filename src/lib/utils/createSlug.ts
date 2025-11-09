export const createSlugWithId = (title: string, id: string) => {
    return `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}-${id}`;
}