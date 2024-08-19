"use client";
import { supabase } from "@/lib/supabase";
import React from "react";

export const SessionContext = React.createContext<any>({});

export const SessionContextProvider = ({ children }: any) => {
  const loki = "chaulagain";
  const [session, setSession] = React.useState<any>(null);

  React.useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });
    return () => {
      // subscription.unsubscribe();
      subscription.data.subscription.unsubscribe();
    };
  }, []);

  return <SessionContext.Provider value={{ loki, session }}>{children}</SessionContext.Provider>;
};