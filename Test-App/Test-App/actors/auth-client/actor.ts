//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/actor.ts
//-----------------------------------------------------------------------------------------------------------

import {
  Actor,
  ActorMeta,
  Message,
  MessageResult,
  getActor,
  sendMessage,
  listenTo,
  stopListeningTo,
} from "../../utils/modulo-plus";
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
  AuthClientStates,
  isAuthClientState_Authorised,
} from "./def";
import {
  onSendOtp,
  onSendOtpFailure,
  onSendOtpSuccess,
  onRegister,
  onLogin,
} from "./states/un-authorised";
import {
  onCancelRegisterOtp,
  onValidateRegisterOtp,
  onValidateRegisterOtpFailure,
  onValidateRegisterOtpSuccess,
  onResendRegisterOtp,
  onResendRegisterOtpFailure,
  onResendRegisterOtpSuccess,
} from "./states/wait-for-register-otp";
import {
  onCancelAcceptTerms,
  onCreateUser,
  onCreateUserFailure,
  onCreateUserSuccess,
} from "./states/accept-terms";
import {
  onCancelLoginOtp,
  onResendLoginOtp,
  onResendLoginOtpFailure,
  onResendLoginOtpSuccess,
  onValidateLoginOtp,
  onValidateLoginOtpFailure,
  onValidateLoginOtpSuccess,
} from "./states/wait-for-login-otp";
import {
  onLogout,
  onLogoutFailure,
  onLogoutSuccess,
  onDeactivateAccount,
  onDeactivateAccountFailure,
  onDeactivateAccountSuccess,
  onDeleteAccount,
  onDeleteAccountFailure,
  onDeleteAccountSuccess,
} from "./states/authorised";

//-----------------------------------------------------------------------------------------------------------

export const createAuthClient = (
  actor?: Actor,
  config: Record<string, any> = {},
): Actor & ActorMeta =>
  actor
    ? { ...actor, messageHandler, config }
    : {
        name: AuthClientName,
        state: AuthClientStates.UnAuthorised,
        data: {} as AuthClientData_UnAuthorised,
        messageHandler,
        config,
      };

//-----------------------------------------------------------------------------------------------------------

export const destroyAuthClient = () => {};

//-----------------------------------------------------------------------------------------------------------

const messageHandler = async (
  message: Message,
  actor: Actor,
): Promise<Actor> => {
  const { name, payload, from, to } = message;

  if (!from || !to) {
    console.error(`Message missing 'from' or 'to' fields:`, message);
    return actor;
  }

  switch (actor.state as AuthClientStates) {
    case AuthClientStates.UnAuthorised:
      switch (name as AuthClientMessages_UnAuthorised) {
        case AuthClientMessages_UnAuthorised.SendOtp:
          await onSendOtp(payload.phone, message.id!);
          return { ...actor, state: AuthClientStates.SendOtp_WIP };

        case AuthClientMessages_UnAuthorised.Register:
          let dataRegister = await onRegister(payload.phone, message.id!);
          return {
            ...actor,
            data: dataRegister,
            state: AuthClientStates.WaitForRegisterOtp,
          };

        case AuthClientMessages_UnAuthorised.Login:
          let dataLogin = await onLogin(payload.phone, message.id!);
          return {
            ...actor,
            data: dataLogin,
            state: AuthClientStates.WaitForLoginOtp,
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.SendOtp_WIP:
      switch (name) {
        case `${AuthClientMessages_UnAuthorised.SendOtp}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.UnAuthorised,
            data: await onSendOtpSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_UnAuthorised.SendOtp}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.UnAuthorised,
            error: await onSendOtpFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.WaitForRegisterOtp:
      switch (name as AuthClientMessages_WaitForRegisterOtp) {
        case AuthClientMessages_WaitForRegisterOtp.CancelRegisterOtp:
          let dataCancelRegisterOtp = await onCancelRegisterOtp(message.id!);
          return {
            ...actor,
            data: dataCancelRegisterOtp,
            state: AuthClientStates.UnAuthorised,
          };

        case AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp:
          await onValidateRegisterOtp(payload.phone, payload.otp, message.id!);
          return { ...actor, state: AuthClientStates.ValidateRegisterOtp_WIP };

        case AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp:
          await onResendRegisterOtp(payload.phone, message.id!);
          return { ...actor, state: AuthClientStates.ResendRegisterOtp_WIP };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.ValidateRegisterOtp_WIP:
      switch (name) {
        case `${AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.AcceptTerms,
            data: await onValidateRegisterOtpSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.WaitForRegisterOtp,
            error: await onValidateRegisterOtpFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.ResendRegisterOtp_WIP:
      switch (name) {
        case `${AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.WaitForRegisterOtp,
            data: await onResendRegisterOtpSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.WaitForRegisterOtp,
            error: await onResendRegisterOtpFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.AcceptTerms:
      switch (name as AuthClientMessages_AcceptTerms) {
        case AuthClientMessages_AcceptTerms.CancelAcceptTerms:
          let dataCancelAcceptTerms = await onCancelAcceptTerms(message.id!);
          return {
            ...actor,
            data: dataCancelAcceptTerms,
            state: AuthClientStates.UnAuthorised,
          };

        case AuthClientMessages_AcceptTerms.CreateUser:
          await onCreateUser(payload.phone, message.id!);
          return { ...actor, state: AuthClientStates.CreateUser_WIP };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.CreateUser_WIP:
      switch (name) {
        case `${AuthClientMessages_AcceptTerms.CreateUser}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.Authorised,
            data: await onCreateUserSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_AcceptTerms.CreateUser}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.AcceptTerms,
            error: await onCreateUserFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.WaitForLoginOtp:
      switch (name as AuthClientMessages_WaitForLoginOtp) {
        case AuthClientMessages_WaitForLoginOtp.CancelLoginOtp:
          let dataCancelLoginOtp = await onCancelLoginOtp(message.id!);
          return {
            ...actor,
            data: dataCancelLoginOtp,
            state: AuthClientStates.UnAuthorised,
          };

        case AuthClientMessages_WaitForLoginOtp.ResendLoginOtp:
          await onResendLoginOtp(payload.phone, message.id!);
          return { ...actor, state: AuthClientStates.ResendLoginOtp_WIP };

        case AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp:
          await onValidateLoginOtp(payload.phone, payload.otp, message.id!);
          return { ...actor, state: AuthClientStates.ValidateLoginOtp_WIP };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.ResendLoginOtp_WIP:
      switch (name) {
        case `${AuthClientMessages_WaitForLoginOtp.ResendLoginOtp}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.WaitForLoginOtp,
            data: await onResendLoginOtpSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_WaitForLoginOtp.ResendLoginOtp}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.WaitForLoginOtp,
            error: await onResendLoginOtpFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.ValidateLoginOtp_WIP:
      switch (name) {
        case `${AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.Authorised,
            data: await onValidateLoginOtpSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.WaitForLoginOtp,
            error: await onValidateLoginOtpFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.Authorised:
      switch (name as AuthClientMessages_Authorised) {
        case AuthClientMessages_Authorised.Logout:
          await onLogout(message.id!);
          return { ...actor, state: AuthClientStates.Logout_WIP };

        case AuthClientMessages_Authorised.DeactivateAccount:
          await onDeactivateAccount(message.id!);
          return { ...actor, state: AuthClientStates.DeactivateAccount_WIP };

        case AuthClientMessages_Authorised.DeleteAccount:
          await onDeleteAccount(message.id!);
          return { ...actor, state: AuthClientStates.DeleteAccount_WIP };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.Logout_WIP:
      switch (name) {
        case `${AuthClientMessages_Authorised.Logout}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.UnAuthorised,
            data: await onLogoutSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_Authorised.Logout}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.Authorised,
            error: await onLogoutFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.DeactivateAccount_WIP:
      switch (name) {
        case `${AuthClientMessages_Authorised.DeactivateAccount}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.UnAuthorised,
            data: await onDeactivateAccountSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_Authorised.DeactivateAccount}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.Authorised,
            error: await onDeactivateAccountFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    case AuthClientStates.DeleteAccount_WIP:
      switch (name) {
        case `${AuthClientMessages_Authorised.DeleteAccount}-${MessageResult.Success}`:
          return {
            ...actor,
            state: AuthClientStates.UnAuthorised,
            data: await onDeleteAccountSuccess(payload, message.id!),
          };

        case `${AuthClientMessages_Authorised.DeleteAccount}-${MessageResult.Failure}`:
          return {
            ...actor,
            state: AuthClientStates.Authorised,
            error: await onDeleteAccountFailure(payload, message.id!),
          };

        default:
          throw new Error(`Invalid message: ${actor.name}/${name}`);
      }

    default:
      throw new Error(`Unhandled state: ${actor.state}`);
  }
};

//-----------------------------------------------------------------------------------------------------------
// Syntax sugar for messages
//-----------------------------------------------------------------------------------------------------------

// State: un-authorised

export const sendOtp = (phone: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_UnAuthorised.SendOtp,
    payload: {
      phone,
    },
    to: actor.name,
    confidential: false,
  });
};

export const register = (phone: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_UnAuthorised.Register,
    payload: {
      phone,
    },
    to: actor.name,
    confidential: false,
  });
};

export const login = (phone: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_UnAuthorised.Login,
    payload: {
      phone,
    },
    to: actor.name,
    confidential: false,
  });
};

// State: wait-for-register-otp

export const cancelRegisterOtp = () => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_WaitForRegisterOtp.CancelRegisterOtp,
    payload: {},
    to: actor.name,
    confidential: false,
  });
};

export const validateRegisterOtp = (phone: string, otp: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp,
    payload: {
      phone,
      otp,
    },
    to: actor.name,
    confidential: false,
  });
};

export const resendRegisterOtp = (phone: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp,
    payload: {
      phone,
    },
    to: actor.name,
    confidential: false,
  });
};

// State: accept-terms

export const cancelAcceptTerms = () => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_AcceptTerms.CancelAcceptTerms,
    payload: {},
    to: actor.name,
    confidential: false,
  });
};

export const createUser = (phone: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_AcceptTerms.CreateUser,
    payload: {
      phone,
    },
    to: actor.name,
    confidential: false,
  });
};

// State: wait-for-login-otp

export const cancelLoginOtp = () => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_WaitForLoginOtp.CancelLoginOtp,
    payload: {},
    to: actor.name,
    confidential: false,
  });
};

export const resendLoginOtp = (phone: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_WaitForLoginOtp.ResendLoginOtp,
    payload: {
      phone,
    },
    to: actor.name,
    confidential: false,
  });
};

export const validateLoginOtp = (phone: string, otp: string) => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp,
    payload: {
      phone,
      otp,
    },
    to: actor.name,
    confidential: false,
  });
};

// State: authorised

export const logout = () => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_Authorised.Logout,
    payload: {},
    to: actor.name,
    confidential: false,
  });
};

export const deactivateAccount = () => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_Authorised.DeactivateAccount,
    payload: {},
    to: actor.name,
    confidential: false,
  });
};

export const deleteAccount = () => {
  const actor = getActor(AuthClientName)!;
  sendMessage({
    name: AuthClientMessages_Authorised.DeleteAccount,
    payload: {},
    to: actor.name,
    confidential: false,
  });
};

//-----------------------------------------------------------------------------------------------------------
// Misc
//-----------------------------------------------------------------------------------------------------------

export const withSessionToken = (message: Message) => {
  const authActor = getActor(AuthClientName);
  if (authActor && isAuthClientState_Authorised(authActor.state!)) {
    return { ...message, token: authActor.data.token };
  } else return message;
};

//-----------------------------------------------------------------------------------------------------------
