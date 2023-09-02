import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/supabase-js";
import type { AppProps } from "next/app";
import { Database } from "../types/supabase";

const Application = ({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) => {
  const [supabaseClient] = useState(() => createPagesBrowserClient<Database>());
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default Application;
