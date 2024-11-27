//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/states/authorised.ts
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
// MESSAGE: logout
//-----------------------------------------------------------------------------------------------------------

export async function onLogout(messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage(
    withSessionToken({
      id: messageId,
      name: AuthClientMessages_Authorised.Logout,
      payload: {},
      from: AuthClientName,
      to: AuthServiceName,
      confidential: false,
    }),
  );
}

export async function onLogoutSuccess(
  data: AuthClientData_UnAuthorised,
  messageId: string,
): Promise<AuthClientData_UnAuthorised> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onLogoutFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: deactivate-account
//-----------------------------------------------------------------------------------------------------------

export async function onDeactivateAccount(messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage(
    withSessionToken({
      id: messageId,
      name: AuthClientMessages_Authorised.DeactivateAccount,
      payload: {},
      from: AuthClientName,
      to: AuthServiceName,
      confidential: false,
    }),
  );
}

export async function onDeactivateAccountSuccess(
  data: AuthClientData_UnAuthorised,
  messageId: string,
): Promise<AuthClientData_UnAuthorised> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onDeactivateAccountFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: delete-account
//-----------------------------------------------------------------------------------------------------------

export async function onDeleteAccount(messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage(
    withSessionToken({
      id: messageId,
      name: AuthClientMessages_Authorised.DeleteAccount,
      payload: {},
      from: AuthClientName,
      to: AuthServiceName,
      confidential: false,
    }),
  );
}

export async function onDeleteAccountSuccess(
  data: AuthClientData_UnAuthorised,
  messageId: string,
): Promise<AuthClientData_UnAuthorised> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onDeleteAccountFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
