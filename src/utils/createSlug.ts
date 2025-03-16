export const createSlugWithId = (title: string, id: string) => {
    return `${id}-${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`;
};