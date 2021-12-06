export class UrlBuilder {

    private baseUrl: string;
    private paths: Array<string> = [];
    private params: Map<string, any> = new Map();

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    path(path: string): UrlBuilder {
        this.paths.push(path);
        return this;
    }

    queryParam(key: string, value: any): UrlBuilder {
        this.params.set(key, value);
        return this;
    }

    buildUrl(): string {
        if (!this.baseUrl.endsWith('/')) {
            this.baseUrl = `${this.baseUrl}/`;
        }

        this.paths.forEach((path, i, arr) => {
            if (i === arr.length - 1) {
                this.baseUrl = `${this.baseUrl}${path}`;
            } else {
                this.baseUrl = `${this.baseUrl}${path}/`;
            }
        });

        Array.from(this.params.entries()).forEach(([key, value], index) => {
            if (index === 0) {
                this.baseUrl = `${this.baseUrl}?${key}=${value}`;
            } else {
                this.baseUrl = `${this.baseUrl}&${key}=${value}`;
            }
        });

        return this.baseUrl;
    }
}