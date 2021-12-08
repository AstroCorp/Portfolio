type Link = {
    title: string;
    url: string;
}

export default interface Repository {
    title: string;
    description: string;
    links: Link[];
}
