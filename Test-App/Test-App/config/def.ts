//-----------------------------------------------------------------------------------------------------------
// File: config/def.ts
//-----------------------------------------------------------------------------------------------------------

export enum AppEnvironment {
  Development = "development",
  QA = "quality-assurance",
  Staging = "staging",
  Production = "production",
}

//-----------------------------------------------------------------------------------------------------------

export type ClientActor = {
  name: string;
  type: "client";
  isAuthManager?: boolean;
  sessionExpiredMessageName?: string;
};

//-----------------------------------------------------------------------------------------------------------

export type RestServiceActor = {
  name: string;
  type: "service-rest";
  isAuthManager?: boolean;
  endPoint: string;
  httpMethod?: Record<string, "POST" | "GET" | "PUT" | "DELETE">;
  httpHeaders?: Record<string, any>;
  timeout?: number;
};

//-----------------------------------------------------------------------------------------------------------

export interface AppConfiguration {
  app: {
    id: string;
    name: string;
    description?: string;
    version: string;
    environment: AppEnvironment;
  };
  saveActorStates: boolean;
  actors: Record<string, ClientActor | RestServiceActor>;
}

//-----------------------------------------------------------------------------------------------------------
