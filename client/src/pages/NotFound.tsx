import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-sm mx-4 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-xl font-semibold text-foreground/80 mb-4">
            Page Not Found
          </h2>

          <p className="text-foreground/70 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-foreground hover:bg-foreground/90 text-background px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-xs uppercase tracking-widest font-bold"
            >
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
