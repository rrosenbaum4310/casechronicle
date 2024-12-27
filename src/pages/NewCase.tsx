import NewCaseForm from "@/components/NewCaseForm";
import Header from "@/components/Header";

const NewCase = () => {
  return (
    <div className="min-h-screen bg-legal-accent">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-legal-primary mb-6">Create New Case</h1>
        <NewCaseForm />
      </main>
    </div>
  );
};

export default NewCase;