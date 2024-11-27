//-----------------------------------------------------------------------------------------------------------
// File: /config/config.development.ts
//-----------------------------------------------------------------------------------------------------------

import {
  AuthClientMessages_UnAuthorised,
  AuthClientMessages_WaitForRegisterOtp,
  AuthClientMessages_AcceptTerms,
  AuthClientMessages_WaitForLoginOtp,
  AuthClientMessages_Authorised,
  AuthClientName,
  AuthServiceName,
} from "../actors/auth-client";
import { AppConfiguration, AppEnvironment } from "./def";

//-----------------------------------------------------------------------------------------------------------

// export const baseUrl = "https://taske.ihumanoid.in/api";
export const baseUrl = "https://1577-103-165-167-198.ngrok-free.app";
export const moduloApIEndpoint = `${baseUrl}/api/modulo`;

export const config: AppConfiguration = {
  app: {
    id: "customer-task-e",
    name: "Customer Task-E",
    version: "1.0.0",
    environment: AppEnvironment.Development,
  },
  saveActorStates: true,
  actors: {
    [AuthClientName]: {
      name: AuthClientName,
      type: "client",
      isAuthManager: true,
      sessionExpiredMessageName: "",
    },

    [AuthServiceName]: {
      name: AuthServiceName,
      type: "service-rest",
      isAuthManager: true,
      endPoint: "http://localhost:8080/api/modulo",
      httpMethod: {
        // State: UnAuthorised
        [AuthClientMessages_UnAuthorised.SendOtp]: "POST",

        // State: WaitForRegisterOtp
        [AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp]: "POST",
        [AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp]: "POST",

        // State: AcceptTerms
        [AuthClientMessages_AcceptTerms.CreateUser]: "POST",

        // State: WaitForLoginOtp
        [AuthClientMessages_WaitForLoginOtp.ResendLoginOtp]: "POST",
        [AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp]: "POST",

        // State: Authorised
        [AuthClientMessages_Authorised.Logout]: "POST",
        [AuthClientMessages_Authorised.DeactivateAccount]: "POST",
        [AuthClientMessages_Authorised.DeleteAccount]: "POST",
      },
      httpHeaders: {},
      timeout: 5000,
    },
  },
};

//-----------------------------------------------------------------------------------------------------------
