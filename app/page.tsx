"use client";

import Link from "next/link";
import {
  PenLine,
  Share2,
  Lock,
  Heart,
  BookOpen,
  Inbox,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Temporary auth state for demo - replace with actual auth check
const isAuthenticated = true;
const user = { name: "Sarah" };

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Core features available to all users
const coreFeatures = [
  {
    icon: PenLine,
    title: "Write Freely",
    description:
      "Create letters for yourself, loved ones, or the world. Your words, your choice.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Each letter gets a unique link. Share it with specific people or keep it private.",
  },
  {
    icon: Lock,
    title: "Privacy Control",
    description:
      "Choose who can read your letters. Make them public, private, or share with select readers.",
  },
];

// Additional features for authenticated users
const authFeatures = [
  {
    icon: BookOpen,
    title: "Letter Collection",
    description:
      "Build your personal collection of letters, drafts, and memories.",
    link: "/dashboard",
  },
  {
    icon: Heart,
    title: "Favorites",
    description: "Save and organize your most meaningful letters.",
    link: "/dashboard/favorites",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Connect with others and share your letters with trusted readers.",
    link: "/dashboard/community",
  },
];

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="container relative flex min-h-[50vh] max-w-[64rem] flex-col items-center justify-center gap-8 text-center mx-auto py-20"
        >
          {isAuthenticated ? (
            // Authenticated Hero Content
            // Authenticated Hero Content
            <>
              <motion.div variants={fadeIn} className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">
                  Welcome back,{" "}
                  <span className="text-primary">{user.name}</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ready to write another heartfelt letter?
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
              >
                <Button asChild size="lg" className="rounded-2xl min-w-[160px]">
                  <Link href="/letter/new">
                    <PenLine className="mr-2 h-5 w-5" />
                    Write a Letter
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl min-w-[160px]"
                >
                  <Link href="/dashboard">View Your Letters</Link>
                </Button>
              </motion.div>
            </>
          ) : (
            // Unauthenticated Hero Content
            <>
              <motion.h1
                variants={fadeIn}
                className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Write Letters That{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Matter
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              >
                A heartfelt space to write letters to your future self, loved
                ones, or share your thoughts with the world. Capture moments,
                feelings, and dreams that deserve to be remembered.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
              >
                <Button asChild size="lg" className="rounded-2xl">
                  <Link href="/letter/new">
                    <PenLine className="mr-2 h-4 w-4" />
                    Write as Guest
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl"
                >
                  <Link href="/auth/login">Sign In / Register</Link>
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </section>

      {/* Core Features Section */}
      <section className="border-t bg-muted/50 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="container flex max-w-5xl flex-col items-center mx-auto"
        >
          <motion.h2
            variants={fadeIn}
            className="mb-12 text-center font-serif text-3xl"
          >
            How DearYou Works
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3 w-full">
            {coreFeatures.map((feature, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full border-2 p-6 rounded-2xl">
                  <CardContent className="space-y-4 p-0 text-center">
                    <feature.icon className="mx-auto h-12 w-12 text-primary" />
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Additional Features for Authenticated Users */}
      {isAuthenticated && (
        <section className="border-t bg-background py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="container flex max-w-5xl flex-col items-center mx-auto"
          >
            <motion.h2
              variants={fadeIn}
              className="mb-4 text-center font-serif text-3xl"
            >
              User Features
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mb-12 text-center text-muted-foreground"
            >
              Unlock more possibilities with your account
            </motion.p>
            <div className="grid gap-8 md:grid-cols-3 w-full">
              {authFeatures.map((feature, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Link href={feature.link}>
                    <Card className="h-full border-2 p-6 rounded-2xl transition-colors hover:bg-accent hover:border-accent">
                      <CardContent className="space-y-4 p-0 text-center">
                        <feature.icon className="mx-auto h-12 w-12 text-primary" />
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}
    </div>
  );
}
