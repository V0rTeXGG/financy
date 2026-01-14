import type { $Fetch } from 'ofetch';

class HttpFactory {
    private readonly $fetch: $Fetch;

    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher;
    }

    private handleNormalizeURL(url: string): string {
        if (!url) {
            return url;
        }

        const [path, search] = url.split('?');
        const normalizedPath = path?.endsWith('/') ? path : `${path}/`;
        return search ? `${normalizedPath}?${search}` : normalizedPath;
    }

    async call<T>(url: string): Promise<T> {
        const normalizedUrl = this.handleNormalizeURL(url);

        const $res: T = await this.$fetch(normalizedUrl);
        return $res;
    }
}

export default HttpFactory;
