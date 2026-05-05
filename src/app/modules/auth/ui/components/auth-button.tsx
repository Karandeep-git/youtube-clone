import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, Show, SignInButton, SignUpButton } from "@clerk/nextjs";

export const AuthButton = () => {
  return (
    // TODO: add different auth states
    <>
      <Show when="signed-in">
            <UserButton />
            {/* Add menu items for studio and menu profile */}
      </Show>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign-in
          </Button>
        </SignInButton>
      </Show>
    </>
  );
};
