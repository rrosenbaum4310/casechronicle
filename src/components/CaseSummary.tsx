import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

const CaseSummary = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-5 h-5 text-legal-primary" />
        <h2 className="text-xl font-semibold">AI Case Summary</h2>
      </div>
      <p className="text-gray-600 mb-4">
        Generate an AI-powered summary of your case details, including key dates, parties involved, and important documents.
      </p>
      <Button className="w-full bg-legal-primary hover:bg-legal-primary/90">
        Generate Summary
      </Button>
    </Card>
  );
};

export default CaseSummary;