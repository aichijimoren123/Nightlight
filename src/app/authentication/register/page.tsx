import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import RegisterForm from "./RegisterForm";

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

export default function RegisterPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/authentication" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
