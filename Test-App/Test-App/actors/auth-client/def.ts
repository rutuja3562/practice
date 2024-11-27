//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/def.ts
//-----------------------------------------------------------------------------------------------------------

// Enums
export enum UserState {
  Active = "active",
  Deactivated = "deactivated",
  Deleted = "deleted",
}

export enum SessionState {
  Active = "active",
  Closed = "closed",
  TimedOut = "timed-out",
}

//-----------------------------------------------------------------------------------------------------------

// Types
export type User = {
  id: string;
  id: string;
  fullName: string;
  phone: string;
  otp: string;
  otpValidTill: Date;
  state: UserState;
};

export type Session = {
  id: string;
  id: string;
  userId: string;
  startTime: Date;
  validTill: Date;
  lastActivityTime: Date;
  closedAt?: Date;
  state: SessionState;
};

//-----------------------------------------------------------------------------------------------------------
// Actor
//-----------------------------------------------------------------------------------------------------------

export const AuthClientName = "auth-client";
export const AuthServiceName = "auth-service";

export enum AuthClientStates {
  // Default state: un-authorised

  UnAuthorised = "un-authorised",
  SendOtp_WIP = "send-otp-wip",

  WaitForRegisterOtp = "wait-for-register-otp",
  ValidateRegisterOtp_WIP = "validate-register-otp-wip",
  ResendRegisterOtp_WIP = "resend-register-otp-wip",

  AcceptTerms = "accept-terms",
  CreateUser_WIP = "create-user-wip",

  WaitForLoginOtp = "wait-for-login-otp",
  ResendLoginOtp_WIP = "resend-login-otp-wip",
  ValidateLoginOtp_WIP = "validate-login-otp-wip",

  Authorised = "authorised",
  Logout_WIP = "logout-wip",
  DeactivateAccount_WIP = "deactivate-account-wip",
  DeleteAccount_WIP = "delete-account-wip",
}

//-----------------------------------------------------------------------------------------------------------
// State: un-authorised
//-----------------------------------------------------------------------------------------------------------

export const isAuthClientState_UnAuthorised = (state: string) =>
  [
    AuthClientStates.UnAuthorised,
    AuthClientStates.WaitForRegisterOtp,
    AuthClientStates.ValidateRegisterOtp_WIP,
    AuthClientStates.ResendRegisterOtp_WIP,
    AuthClientStates.AcceptTerms,
    AuthClientStates.CreateUser_WIP,
    AuthClientStates.WaitForLoginOtp,
    AuthClientStates.ResendLoginOtp_WIP,
    AuthClientStates.ValidateLoginOtp_WIP,
    AuthClientStates.SendOtp_WIP,
  ].includes(state as AuthClientStates);

export type AuthClientData_UnAuthorised = {
  userStatus: { phone: "string"; exists: "boolean" };
};

export enum AuthClientMessages_UnAuthorised {
  SendOtp = "send-otp",
  Register = "register",
  Login = "login",
}

export const isAuthClientState_SendOtp_WIP = (state: string) =>
  state === AuthClientStates.SendOtp_WIP;

//-----------------------------------------------------------------------------------------------------------
// State: wait-for-register-otp
//-----------------------------------------------------------------------------------------------------------

export const isAuthClientState_WaitForRegisterOtp = (state: string) =>
  [
    AuthClientStates.WaitForRegisterOtp,
    AuthClientStates.ValidateRegisterOtp_WIP,
    AuthClientStates.ResendRegisterOtp_WIP,
  ].includes(state as AuthClientStates);

export type AuthClientData_WaitForRegisterOtp = {
  phone: string;
};

export enum AuthClientMessages_WaitForRegisterOtp {
  CancelRegisterOtp = "cancel-register-otp",
  ValidateRegisterOtp = "validate-register-otp",
  ResendRegisterOtp = "resend-register-otp",
}

export const isAuthClientState_ValidateRegisterOtp_WIP = (state: string) =>
  state === AuthClientStates.ValidateRegisterOtp_WIP;

export const isAuthClientState_ResendRegisterOtp_WIP = (state: string) =>
  state === AuthClientStates.ResendRegisterOtp_WIP;

//-----------------------------------------------------------------------------------------------------------
// State: accept-terms
//-----------------------------------------------------------------------------------------------------------

export const isAuthClientState_AcceptTerms = (state: string) =>
  [AuthClientStates.AcceptTerms, AuthClientStates.CreateUser_WIP].includes(
    state as AuthClientStates,
  );

export type AuthClientData_AcceptTerms = {
  phone: string;
  profession: string;
  pincode: string;
};

export enum AuthClientMessages_AcceptTerms {
  CancelAcceptTerms = "cancel-accept-terms",
  CreateUser = "create-user",
}

export const isAuthClientState_CreateUser_WIP = (state: string) =>
  state === AuthClientStates.CreateUser_WIP;

//-----------------------------------------------------------------------------------------------------------
// State: wait-for-login-otp
//-----------------------------------------------------------------------------------------------------------

export const isAuthClientState_WaitForLoginOtp = (state: string) =>
  [
    AuthClientStates.WaitForLoginOtp,
    AuthClientStates.ResendLoginOtp_WIP,
    AuthClientStates.ValidateLoginOtp_WIP,
  ].includes(state as AuthClientStates);

export type AuthClientData_WaitForLoginOtp = {
  phone: string;
};

export enum AuthClientMessages_WaitForLoginOtp {
  CancelLoginOtp = "cancel-login-otp",
  ResendLoginOtp = "resend-login-otp",
  ValidateLoginOtp = "validate-login-otp",
}

export const isAuthClientState_ResendLoginOtp_WIP = (state: string) =>
  state === AuthClientStates.ResendLoginOtp_WIP;

export const isAuthClientState_ValidateLoginOtp_WIP = (state: string) =>
  state === AuthClientStates.ValidateLoginOtp_WIP;

//-----------------------------------------------------------------------------------------------------------
// State: authorised
//-----------------------------------------------------------------------------------------------------------

export const isAuthClientState_Authorised = (state: string) =>
  [
    AuthClientStates.Authorised,
    AuthClientStates.Logout_WIP,
    AuthClientStates.DeactivateAccount_WIP,
    AuthClientStates.DeleteAccount_WIP,
  ].includes(state as AuthClientStates);

export type AuthClientData_Authorised = {
  userId: string;
  sessionId: string;
};

export enum AuthClientMessages_Authorised {
  Logout = "logout",
  DeactivateAccount = "deactivate-account",
  DeleteAccount = "delete-account",
}

export const isAuthClientState_Logout_WIP = (state: string) =>
  state === AuthClientStates.Logout_WIP;

export const isAuthClientState_DeactivateAccount_WIP = (state: string) =>
  state === AuthClientStates.DeactivateAccount_WIP;

export const isAuthClientState_DeleteAccount_WIP = (state: string) =>
  state === AuthClientStates.DeleteAccount_WIP;

//-----------------------------------------------------------------------------------------------------------
