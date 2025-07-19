import Link from "next/link";
import { PenLine } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-gradient-to-b from-background to-muted/20 p-10 text-foreground dark:border-r lg:flex overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center">
            <PenLine className="mr-2 h-6 w-6" />
            <span className="font-serif">DearYou</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg font-serif">
              &ldquo;Letters are among the most significant memorial a person
              can leave behind them.&rdquo;
            </p>
            <footer className="text-sm">Johann Wolfgang von Goethe</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative lg:p-8">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background/50 lg:bg-none" />
        <div className="relative mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:w-[400px]">
          {children}
          <p className="px-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
