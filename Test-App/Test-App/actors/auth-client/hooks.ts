//-----------------------------------------------------------------------------------------------------------
// File: /actors/auth-client/hooks.ts
//-----------------------------------------------------------------------------------------------------------

import { useEffect, useRef, useState } from "react";
import {
  Actor,
  getActor,
  listenTo,
  stopListeningTo,
} from "../../utils/modulo-plus";
import {
  AuthClientName,
  AuthClientStates,
  AuthClientData_UnAuthorised,
  AuthClientData_WaitForRegisterOtp,
  AuthClientData_AcceptTerms,
  AuthClientData_WaitForLoginOtp,
  AuthClientData_Authorised,
  isAuthClientState_UnAuthorised,
  isAuthClientState_SendOtp_WIP,
  isAuthClientState_WaitForRegisterOtp,
  isAuthClientState_ValidateRegisterOtp_WIP,
  isAuthClientState_ResendRegisterOtp_WIP,
  isAuthClientState_AcceptTerms,
  isAuthClientState_CreateUser_WIP,
  isAuthClientState_WaitForLoginOtp,
  isAuthClientState_ResendLoginOtp_WIP,
  isAuthClientState_ValidateLoginOtp_WIP,
  isAuthClientState_Authorised,
  isAuthClientState_Logout_WIP,
  isAuthClientState_DeactivateAccount_WIP,
  isAuthClientState_DeleteAccount_WIP,
} from "./def";

//-----------------------------------------------------------------------------------------------------------
// Actor
//-----------------------------------------------------------------------------------------------------------

export const useAuthClientState = () => {
  const [state, setState] = useState(() => getActor(AuthClientName)?.state);
  const previousStateRef = useRef(state);

  useEffect(() => {
    const updateState = (actor: Actor) => {
      previousStateRef.current = state;
      setState(actor.state);
    };
    listenTo(AuthClientName, updateState);
    return () => stopListeningTo(AuthClientName, updateState);
  }, [state]);

  return { state, previousState: previousStateRef.current };
};

export const useAuthClientData = () => {
  const [data, setData] = useState(() => getActor(AuthClientName)?.data);
  useEffect(() => {
    const updateData = (actor: Actor) => setData(actor.data);
    listenTo(AuthClientName, updateData);
    return () => stopListeningTo(AuthClientName, updateData);
  }, []);
  return data;
};

export const useAuthClientError = () => {
  const [error, setError] = useState(() => getActor(AuthClientName)?.error);
  useEffect(() => {
    const updateData = (actor: Actor) => setError(actor.error);
    listenTo(AuthClientName, updateData);
    return () => stopListeningTo(AuthClientName, updateData);
  }, []);
  return error;
};

export const useAuthClientOnStateReached = (
  state: AuthClientStates,
  callback: (from?: AuthClientStates) => void,
) => {
  const previousStateRef = useRef<AuthClientStates | undefined>(undefined);
  useEffect(() => {
    const updateState = (actor: Actor) => {
      if (previousStateRef.current !== state && actor.state === state) {
        callback(previousStateRef.current);
      }
      previousStateRef.current = actor.state as AuthClientStates;
    };
    listenTo(AuthClientName, updateState);
    return () => {
      stopListeningTo(AuthClientName, updateState);
    };
  }, [state, callback]);
};

export const useAuthClientOnStateChange = (
  from: AuthClientStates,
  to: AuthClientStates,
  callback: () => void,
) => {
  const previousStateRef = useRef<AuthClientStates | undefined>(undefined);
  useEffect(() => {
    const updateState = (actor: Actor) => {
      if (previousStateRef.current === from && actor.state === to) {
        callback();
      }
      previousStateRef.current = actor.state as AuthClientStates;
    };
    listenTo(AuthClientName, updateState);
    return () => {
      stopListeningTo(AuthClientName, updateState); // Cleanup on unmount
    };
  }, [from, to, callback]);
};

//-----------------------------------------------------------------------------------------------------------
// State: UnAuthorised
//-----------------------------------------------------------------------------------------------------------

export const useIsAuthClientState_UnAuthorised = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_UnAuthorised(authClientState.state!);
};

export const useIsAuthClientState_SendOtp_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_SendOtp_WIP(authClientState.state!);
};

export const useAuthClientData_UnAuthorised = () => {
  const [authData, setAuthData] = useState<
    AuthClientData_UnAuthorised | undefined
  >(() => {
    const actor = getActor(AuthClientName);
    return actor && isAuthClientState_UnAuthorised(actor!.state)
      ? (actor.data as AuthClientData_UnAuthorised)
      : undefined;
  });
  useEffect(() => {
    const handleActorChange = (actor: Actor) => {
      if (isAuthClientState_UnAuthorised(actor.state)) {
        setAuthData(actor.data as AuthClientData_UnAuthorised);
      } else {
        setAuthData(undefined);
      }
    };

    // Subscribe to changes in the AuthClient
    listenTo(AuthClientName, handleActorChange);
    // Cleanup subscription on unmount
    return () => stopListeningTo(AuthClientName, handleActorChange);
  }, []);
  return authData;
};

//-----------------------------------------------------------------------------------------------------------
// State: WaitForRegisterOtp
//-----------------------------------------------------------------------------------------------------------

export const useIsAuthClientState_WaitForRegisterOtp = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_WaitForRegisterOtp(authClientState.state!);
};

export const useIsAuthClientState_ValidateRegisterOtp_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_ValidateRegisterOtp_WIP(authClientState.state!);
};
export const useIsAuthClientState_ResendRegisterOtp_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_ResendRegisterOtp_WIP(authClientState.state!);
};

export const useAuthClientData_WaitForRegisterOtp = () => {
  const [authData, setAuthData] = useState<
    AuthClientData_WaitForRegisterOtp | undefined
  >(() => {
    const actor = getActor(AuthClientName);
    return actor && isAuthClientState_WaitForRegisterOtp(actor!.state)
      ? (actor.data as AuthClientData_WaitForRegisterOtp)
      : undefined;
  });
  useEffect(() => {
    const handleActorChange = (actor: Actor) => {
      if (isAuthClientState_WaitForRegisterOtp(actor.state)) {
        setAuthData(actor.data as AuthClientData_WaitForRegisterOtp);
      } else {
        setAuthData(undefined);
      }
    };

    // Subscribe to changes in the AuthClient
    listenTo(AuthClientName, handleActorChange);
    // Cleanup subscription on unmount
    return () => stopListeningTo(AuthClientName, handleActorChange);
  }, []);
  return authData;
};

//-----------------------------------------------------------------------------------------------------------
// State: AcceptTerms
//-----------------------------------------------------------------------------------------------------------

export const useIsAuthClientState_AcceptTerms = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_AcceptTerms(authClientState.state!);
};

export const useIsAuthClientState_CreateUser_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_CreateUser_WIP(authClientState.state!);
};

export const useAuthClientData_AcceptTerms = () => {
  const [authData, setAuthData] = useState<
    AuthClientData_AcceptTerms | undefined
  >(() => {
    const actor = getActor(AuthClientName);
    return actor && isAuthClientState_AcceptTerms(actor!.state)
      ? (actor.data as AuthClientData_AcceptTerms)
      : undefined;
  });
  useEffect(() => {
    const handleActorChange = (actor: Actor) => {
      if (isAuthClientState_AcceptTerms(actor.state)) {
        setAuthData(actor.data as AuthClientData_AcceptTerms);
      } else {
        setAuthData(undefined);
      }
    };

    // Subscribe to changes in the AuthClient
    listenTo(AuthClientName, handleActorChange);
    // Cleanup subscription on unmount
    return () => stopListeningTo(AuthClientName, handleActorChange);
  }, []);
  return authData;
};

//-----------------------------------------------------------------------------------------------------------
// State: WaitForLoginOtp
//-----------------------------------------------------------------------------------------------------------

export const useIsAuthClientState_WaitForLoginOtp = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_WaitForLoginOtp(authClientState.state!);
};

export const useIsAuthClientState_ResendLoginOtp_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_ResendLoginOtp_WIP(authClientState.state!);
};
export const useIsAuthClientState_ValidateLoginOtp_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_ValidateLoginOtp_WIP(authClientState.state!);
};

export const useAuthClientData_WaitForLoginOtp = () => {
  const [authData, setAuthData] = useState<
    AuthClientData_WaitForLoginOtp | undefined
  >(() => {
    const actor = getActor(AuthClientName);
    return actor && isAuthClientState_WaitForLoginOtp(actor!.state)
      ? (actor.data as AuthClientData_WaitForLoginOtp)
      : undefined;
  });
  useEffect(() => {
    const handleActorChange = (actor: Actor) => {
      if (isAuthClientState_WaitForLoginOtp(actor.state)) {
        setAuthData(actor.data as AuthClientData_WaitForLoginOtp);
      } else {
        setAuthData(undefined);
      }
    };

    // Subscribe to changes in the AuthClient
    listenTo(AuthClientName, handleActorChange);
    // Cleanup subscription on unmount
    return () => stopListeningTo(AuthClientName, handleActorChange);
  }, []);
  return authData;
};

//-----------------------------------------------------------------------------------------------------------
// State: Authorised
//-----------------------------------------------------------------------------------------------------------

export const useIsAuthClientState_Authorised = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_Authorised(authClientState.state!);
};

export const useIsAuthClientState_Logout_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_Logout_WIP(authClientState.state!);
};
export const useIsAuthClientState_DeactivateAccount_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_DeactivateAccount_WIP(authClientState.state!);
};
export const useIsAuthClientState_DeleteAccount_WIP = () => {
  const authClientState = useAuthClientState();
  return isAuthClientState_DeleteAccount_WIP(authClientState.state!);
};

export const useAuthClientData_Authorised = () => {
  const [authData, setAuthData] = useState<
    AuthClientData_Authorised | undefined
  >(() => {
    const actor = getActor(AuthClientName);
    return actor && isAuthClientState_Authorised(actor!.state)
      ? (actor.data as AuthClientData_Authorised)
      : undefined;
  });
  useEffect(() => {
    const handleActorChange = (actor: Actor) => {
      if (isAuthClientState_Authorised(actor.state)) {
        setAuthData(actor.data as AuthClientData_Authorised);
      } else {
        setAuthData(undefined);
      }
    };

    // Subscribe to changes in the AuthClient
    listenTo(AuthClientName, handleActorChange);
    // Cleanup subscription on unmount
    return () => stopListeningTo(AuthClientName, handleActorChange);
  }, []);
  return authData;
};

//-----------------------------------------------------------------------------------------------------------
