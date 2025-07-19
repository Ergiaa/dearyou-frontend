import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <h1 className="mb-8 font-serif text-4xl">Your Letters</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>No Letters Yet</CardTitle>
            <CardDescription>
              Start writing your first letter to your future self.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your letters will appear here once you start writing them.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
