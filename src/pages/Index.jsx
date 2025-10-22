import { useState } from "react";
import { RouteForm } from "@/components/RouteForm";
import { RouteList } from "@/components/RouteList";
import { RouteDetail } from "@/components/RouteDetail";

const Index = () => {
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleRouteCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleRouteSelect = (routeId) => {
    setSelectedRouteId(routeId);
  };

  const handleBack = () => {
    setSelectedRouteId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Route Planner
          </h1>
          <p className="text-muted-foreground text-lg">
            Plan and track your journey with precision
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          {selectedRouteId ? (
            <RouteDetail routeId={selectedRouteId} onBack={handleBack} />
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <RouteForm onRouteCreated={handleRouteCreated} />
              </div>
              <div>
                <RouteList
                  onRouteSelect={handleRouteSelect}
                  refreshTrigger={refreshTrigger}
                />
              </div>
            </div>
          )}
        </main>

        <footer className="mt-12 text-center text-muted-foreground text-sm">
          <p>© 2024 Route Planner. Plan your perfect route.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
