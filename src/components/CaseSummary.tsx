import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles } from "lucide-react";

const CaseSummary = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-5 h-5 text-legal-primary" />
        <h2 className="text-xl font-semibold text-legal-primary">AI Assistant</h2>
      </div>
      <p className="text-gray-600 mb-6">
        Get instant insights and summaries for your cases using our AI-powered assistant.
      </p>
      <Button className="w-full bg-legal-primary hover:bg-legal-primary/90 gap-2">
        <Sparkles className="w-4 h-4" />
        Generate Summary
      </Button>
    </Card>
  );
};

export default CaseSummary;