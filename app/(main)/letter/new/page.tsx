import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewLetterPage() {
  return (
    <div className="container max-w-4xl py-10">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="font-serif text-2xl">
            Write a Letter to Your Future Self
          </CardTitle>
          <CardDescription>
            This letter will be saved and can be opened at a date you choose in
            the future.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Editor coming soon...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
