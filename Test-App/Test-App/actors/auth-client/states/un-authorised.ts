//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/states/un-authorised.ts
//-----------------------------------------------------------------------------------------------------------

import { sendMessage, Message } from "../../../utils/modulo-plus";
import {
  AuthClientData_UnAuthorised,
  AuthClientData_WaitForRegisterOtp,
  AuthClientData_AcceptTerms,
  AuthClientData_WaitForLoginOtp,
  AuthClientData_Authorised,
  AuthClientMessages_UnAuthorised,
  AuthClientMessages_WaitForRegisterOtp,
  AuthClientMessages_AcceptTerms,
  AuthClientMessages_WaitForLoginOtp,
  AuthClientMessages_Authorised,
  AuthClientName,
  AuthServiceName,
} from "../def";
import { withSessionToken } from "../../auth-client";

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: send-otp
//-----------------------------------------------------------------------------------------------------------

export async function onSendOtp(phone: string, messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage({
    id: messageId,
    name: AuthClientMessages_UnAuthorised.SendOtp,
    payload: {
      phone,
    },
    from: AuthClientName,
    to: AuthServiceName,
    confidential: false,
  });
}

export async function onSendOtpSuccess(
  data: AuthClientData_UnAuthorised,
  messageId: string,
): Promise<AuthClientData_UnAuthorised> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onSendOtpFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: register
//-----------------------------------------------------------------------------------------------------------

export async function onRegister(phone: string, messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.
  return { phone };
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: login
//-----------------------------------------------------------------------------------------------------------

export async function onLogin(phone: string, messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.
  return { phone };
}

//-----------------------------------------------------------------------------------------------------------
