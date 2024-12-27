import Header from "@/components/Header";
import CaseList from "@/components/CaseList";
import CaseSummary from "@/components/CaseSummary";
import DocumentTemplates from "@/components/DocumentTemplates";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-legal-accent">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-legal-primary mb-6">Dashboard</h1>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <CaseList />
          </div>
          <div className="space-y-8">
            <CaseSummary />
            <DocumentTemplates />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;