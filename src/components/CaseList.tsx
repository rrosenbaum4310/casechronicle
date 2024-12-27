import { Card } from "@/components/ui/card";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  { id: 1, title: "Smith vs. Johnson", type: "Civil Litigation", date: "2024-02-20", status: "Active" },
  { id: 2, title: "Estate of Williams", type: "Probate", date: "2024-02-18", status: "Pending" },
  { id: 3, title: "Corporate Merger A", type: "Corporate", date: "2024-02-15", status: "Active" },
];

const CaseList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-legal-primary">Active Cases</h2>
        <Button className="bg-legal-primary hover:bg-legal-primary/90">
          New Case
        </Button>
      </div>
      <div className="grid gap-4">
        {cases.map((case_) => (
          <Card key={case_.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-legal-primary" />
                <div>
                  <h3 className="font-medium text-lg">{case_.title}</h3>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span>{case_.type}</span>
                    <span>•</span>
                    <span>{case_.date}</span>
                    <span>•</span>
                    <span className="text-legal-primary font-medium">{case_.status}</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseList;