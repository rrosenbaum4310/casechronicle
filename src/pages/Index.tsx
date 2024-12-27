import Header from "@/components/Header";
import CaseList from "@/components/CaseList";
import CaseSummary from "@/components/CaseSummary";
import DocumentTemplates from "@/components/DocumentTemplates";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
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