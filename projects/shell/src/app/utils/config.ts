import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {
    exposed: string;
    displayName: string;
    routePath: string;
    titleName: string;
    typeExport: "COMPONENT" | "MODULE";
};

export type CustomManifest = Manifest<CustomRemoteConfig>;
