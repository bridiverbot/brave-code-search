import type { SearchResult } from '../search_settings.js';
export interface SettingsPlugin {
    searchContents(query: string): Promise<SearchResult>;
}
