//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/service-stub.ts
//-----------------------------------------------------------------------------------------------------------

import {
  Actor,
  ActorMeta,
  MessageResult,
  Message,
  sendMessage,
} from "../../utils/modulo-plus";
import { afterDelayOf } from "../../utils/exec";
import {
  AuthClientMessages_UnAuthorised,
  AuthClientMessages_WaitForRegisterOtp,
  AuthClientMessages_AcceptTerms,
  AuthClientMessages_WaitForLoginOtp,
  AuthClientMessages_Authorised,
  AuthClientName,
  AuthServiceName,
} from "./def";

//-----------------------------------------------------------------------------------------------------------
// Constructor
//-----------------------------------------------------------------------------------------------------------

export const createAuthServiceStub = (
  actor?: Actor,
  config: Record<string, any> = {},
): Actor & ActorMeta =>
  actor
    ? { ...actor, messageHandler, config }
    : {
        name: AuthServiceName,
        state: "ready",
        data: {},
        messageHandler,
        config,
      };

//-----------------------------------------------------------------------------------------------------------
// Message Handler
//-----------------------------------------------------------------------------------------------------------

const messageHandler = async (
  message: Message,
  actor: Actor,
): Promise<Actor> => {
  afterDelayOf(1, () => {
    const { name: messageName, payload, from, to } = message;

    if (!from || !to) {
      console.error(`Message missing 'from' or 'to' fields:`, message);
      return;
    }

    const replyBase = {
      from: to,
      to: from,
      confidential: message.confidential,
    };

    switch (messageName) {
      case AuthClientMessages_UnAuthorised.SendOtp:
        {
          const { phone } = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: { userStatus: { phone: "8075720035", exists: false } },
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Could not check if user exists",
            });
        }
        break;

      case AuthClientMessages_WaitForRegisterOtp.ValidateRegisterOtp:
        {
          const { phone, otp } = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: {},
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Invalid OTP",
            });
        }
        break;

      case AuthClientMessages_WaitForRegisterOtp.ResendRegisterOtp:
        {
          const { phone } = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: { phone: "8075720035" },
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Could not resend OTP",
            });
        }
        break;

      case AuthClientMessages_AcceptTerms.CreateUser:
        {
          const { phone } = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: { userId: "user-2", sessionId: "session-2" },
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Invalid OTP",
            });
        }
        break;

      case AuthClientMessages_WaitForLoginOtp.ResendLoginOtp:
        {
          const { phone } = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: {},
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "",
            });
        }
        break;

      case AuthClientMessages_WaitForLoginOtp.ValidateLoginOtp:
        {
          const { phone, otp } = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: { userId: "user-1", sessionId: "session-1" },
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Invalid OTP",
            });
        }
        break;

      case AuthClientMessages_Authorised.Logout:
        {
          const {} = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: {},
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Logout",
            });
        }
        break;

      case AuthClientMessages_Authorised.DeactivateAccount:
        {
          const {} = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: {},
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Error: Deactivation unsuccessful",
            });
        }
        break;

      case AuthClientMessages_Authorised.DeleteAccount:
        {
          const {} = payload;
          const throwError = false;
          if (!throwError)
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Success}`,
              payload: {},
            });
          else
            sendMessage({
              ...replyBase,
              name: `${messageName}-${MessageResult.Failure}`,
              payload: "Error: Account deletion unsuccessful",
            });
        }
        break;

      default:
        sendMessage({
          ...replyBase,
          name: `${messageName}-${MessageResult.Failure}`,
          payload: "Invalid message",
        });
    }
  });

  return actor;
};

//-----------------------------------------------------------------------------------------------------------
