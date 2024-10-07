export const createSlugWithId = (title: string, id: number) => {
    return `${id}-${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`;
};