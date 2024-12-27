import { Card } from "@/components/ui/card";
import { FileText, ArrowRight } from "lucide-react";

const cases = [
  { id: 1, title: "Smith vs. Johnson", type: "Civil Litigation", date: "2024-02-20" },
  { id: 2, title: "Estate of Williams", type: "Probate", date: "2024-02-18" },
  { id: 3, title: "Corporate Merger A", type: "Corporate", date: "2024-02-15" },
];

const CaseList = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Active Cases</h2>
      <div className="grid gap-4">
        {cases.map((case_) => (
          <Card key={case_.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-legal-primary" />
                <div>
                  <h3 className="font-medium">{case_.title}</h3>
                  <p className="text-sm text-gray-500">{case_.type}</p>
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