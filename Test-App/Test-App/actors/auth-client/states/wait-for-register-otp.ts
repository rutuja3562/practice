//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/states/wait-for-register-otp.ts
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
// MESSAGE: cancel-register-otp
//-----------------------------------------------------------------------------------------------------------

export async function onCancelRegisterOtp(messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.
  return {};
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: validate-register-otp
//-----------------------------------------------------------------------------------------------------------

export async function onValidateRegisterOtp(
  phone: string,
  otp: string,
  messageId: string,
) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage({
    id: messageId,
    name: AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp,
    payload: {
      phone,
      otp,
    },
    from: AuthClientName,
    to: AuthServiceName,
    confidential: false,
  });
}

export async function onValidateRegisterOtpSuccess(
  data: AuthClientData_AcceptTerms,
  messageId: string,
): Promise<AuthClientData_AcceptTerms> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onValidateRegisterOtpFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
// MESSAGE: resend-register-otp
//-----------------------------------------------------------------------------------------------------------

export async function onResendRegisterOtp(phone: string, messageId: string) {
  // TODO: Add validations here. If they fail, throw an error.

  sendMessage({
    id: messageId,
    name: AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp,
    payload: {
      phone,
    },
    from: AuthClientName,
    to: AuthServiceName,
    confidential: false,
  });
}

export async function onResendRegisterOtpSuccess(
  data: AuthClientData_WaitForRegisterOtp,
  messageId: string,
): Promise<AuthClientData_WaitForRegisterOtp> {
  // TODO: Add any post-processing of data if required.
  return data;
}

export async function onResendRegisterOtpFailure(
  error: string,
  messageId: string,
): Promise<string> {
  // TODO: Add any post-processing of the error if required.
  return error;
}

//-----------------------------------------------------------------------------------------------------------
