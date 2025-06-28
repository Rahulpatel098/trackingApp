// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="auth" options={{ headerShown: false }} />
//     </Stack>
//   );
// }



// import { AuthProvider, useAuth } from "@/lib/auth-context";
// import { Stack, useRouter, useSegments } from "expo-router";
// import { useEffect } from "react";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { PaperProvider } from "react-native-paper";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// function RouteGuard({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const { user, isLoadingUser } = useAuth();
//   const segments = useSegments();

//   useEffect(() => {
//     const inAuthGroup = segments[0] === "auth";

//     if (!user && !inAuthGroup && !isLoadingUser) {
//       router.replace("/auth");
//     } else if (user && inAuthGroup && !isLoadingUser) {
//       router.replace("/");
//     }
//   }, [user, segments]);

//   return <>{children}</>;
// }

// export default function RootLayout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <AuthProvider>
//         <PaperProvider>
//           <SafeAreaProvider>
//             <RouteGuard>
//               <Stack>
//                 <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//               </Stack>
//             </RouteGuard>
//           </SafeAreaProvider>
//         </PaperProvider>
//       </AuthProvider>
//     </GestureHandlerRootView>
//   );
// }


import { Stack, useRouter } from "expo-router";

import { useEffect } from "react";

function RouteGuard({ children } : { children: React.ReactNode }) {

  const router = useRouter();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth");
    }
  }, []);
  return (
    <>
      {children}
    </>
  )
}

const RootLayout = () => {
  return (
    // <RouteGuard>
    
      <Stack>
        <Stack.Screen name="auth" options={{headerShown:false}}/>
        <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
      </Stack>
    
    // {/* </RouteGuard> */}

  );
}
export default RootLayout;
