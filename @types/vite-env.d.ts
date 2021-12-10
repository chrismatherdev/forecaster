/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_OPEN_WEATHER_MAP_API_KEY: string;
  readonly VITE_GEO_API_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
