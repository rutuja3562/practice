//-----------------------------------------------------------------------------------------------------------
// File: /config/config.development.ts
//-----------------------------------------------------------------------------------------------------------

import {
  AuthClientMessages_UnAuthorised,
  AuthClientMessages_WaitForRegisterOtp,
  AuthClientMessages_ChooseProfession,
  AuthClientMessages_EnterPincode,
  AuthClientMessages_WaitForLoginOtp,
  AuthClientMessages_Authorised,
  AuthClientName,
  AuthServiceName,
} from "../actors/auth-client";
import { AppConfiguration, AppEnvironment } from "./def";

//-----------------------------------------------------------------------------------------------------------

export const config: AppConfiguration = {
  app: {
    id: "task-e",
    name: "Task-E",
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
      endPoint: "",
      httpMethod: {
        // State: UnAuthorised
        [AuthClientMessages_UnAuthorised.SendOtp]: "POST",

        // State: WaitForRegisterOtp
        [AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp]: "POST",
        [AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp]: "POST",

        // State: ChooseProfession

        // State: EnterPincode
        [AuthClientMessages_EnterPincode.CreateUser]: "POST",

        // State: WaitForLoginOtp
        [AuthClientMessages_WaitForLoginOtp.ResendLoginOtp]: "POST",
        [AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp]: "POST",

        // State: Authorised
        [AuthClientMessages_Authorised.Logout]: "POST",
      },
      httpHeaders: {},
      timeout: 5000,
    },
  },
};

//-----------------------------------------------------------------------------------------------------------
