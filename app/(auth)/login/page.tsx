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

export default function LoginPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="w-full"
    >
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-serif">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to continue your writing journey
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <AuthForm type="login" />
          <div className="mt-4 text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Create one
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
