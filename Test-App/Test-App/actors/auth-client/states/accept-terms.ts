//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/states/accept-terms.ts
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
// MESSAGE: cancel-accept-terms
//-----------------------------------------------------------------------------------------------------------

export async function onCancelAcceptTerms(messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.
  return {};
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: create-user
//-----------------------------------------------------------------------------------------------------------

export async function onCreateUser(phone: string, messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage({
    id: messageId,
    name: AuthClientMessages_AcceptTerms.CreateUser,
    payload: {
      phone,
    },
    from: AuthClientName,
    to: AuthServiceName,
    confidential: false,
  });
}

export async function onCreateUserSuccess(
  data: AuthClientData_Authorised,
  messageId: string,
): Promise<AuthClientData_Authorised> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onCreateUserFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
