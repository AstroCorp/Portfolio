export interface Repository
{
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    language: string;
    license: {
        name: string,
        url: string
    };
    tags_url: string;
}