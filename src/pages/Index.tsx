import { useState } from "react";
import { RouteForm } from "@/components/RouteForm";
import { RouteList } from "@/components/RouteList";
import { RouteDetail } from "@/components/RouteDetail";
import { Map } from "lucide-react";

const Index = () => {
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleRouteCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleRouteSelect = (routeId: string) => {
    setSelectedRouteId(routeId);
  };

  const handleBack = () => {
    setSelectedRouteId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Map className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Route Planner</h1>
              <p className="text-white/90 text-sm mt-1">Create and manage your routes</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {selectedRouteId ? (
          <RouteDetail routeId={selectedRouteId} onBack={handleBack} />
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <RouteForm onRouteCreated={handleRouteCreated} />
            </div>
            <div>
              <RouteList onRouteSelect={handleRouteSelect} refreshTrigger={refreshTrigger} />
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 py-6 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Built with React, TypeScript, and Lovable Cloud
        </div>
      </footer>
    </div>
  );
};

export default Index;