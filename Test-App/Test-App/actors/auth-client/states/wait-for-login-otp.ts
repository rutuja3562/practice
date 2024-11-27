//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/states/wait-for-login-otp.ts
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
// MESSAGE: cancel-login-otp
//-----------------------------------------------------------------------------------------------------------

export async function onCancelLoginOtp(messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.
  return {};
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: resend-login-otp
//-----------------------------------------------------------------------------------------------------------

export async function onResendLoginOtp(phone: string, messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage({
    id: messageId,
    name: AuthClientMessages_WaitForLoginOtp.ResendLoginOtp,
    payload: {
      phone,
    },
    from: AuthClientName,
    to: AuthServiceName,
    confidential: false,
  });
}

export async function onResendLoginOtpSuccess(
  data: AuthClientData_WaitForLoginOtp,
  messageId: string,
): Promise<AuthClientData_WaitForLoginOtp> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onResendLoginOtpFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: validate-login-otp
//-----------------------------------------------------------------------------------------------------------

export async function onValidateLoginOtp(
  phone: string,
  otp: string,
  messageId: string,
) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage({
    id: messageId,
    name: AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp,
    payload: {
      phone,
      otp,
    },
    from: AuthClientName,
    to: AuthServiceName,
    confidential: false,
  });
}

export async function onValidateLoginOtpSuccess(
  data: AuthClientData_Authorised,
  messageId: string,
): Promise<AuthClientData_Authorised> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onValidateLoginOtpFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
