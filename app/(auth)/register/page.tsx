"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthForm } from "@/components/auth/auth-form";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function RegisterPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="w-full"
    >
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-serif">
            Create Your Account
          </CardTitle>
          <CardDescription>Start your journey with DearYou</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <AuthForm type="register" />
          <div className="mt-4 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
