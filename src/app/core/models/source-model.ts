export class Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
    urlsToLogos: {
        small: string,
        medium: string,
        large: string;
    };
    sortBysAvailable: string[];
}