import { Card } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";

const templates = [
  { id: 1, name: "Motion to Dismiss", category: "Litigation" },
  { id: 2, name: "Client Engagement Letter", category: "Administrative" },
  { id: 3, name: "Settlement Agreement", category: "Contracts" },
];

const DocumentTemplates = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Document Templates</h2>
      <div className="grid gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-legal-primary" />
                <div>
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-sm text-gray-500">{template.category}</p>
                </div>
              </div>
              <Plus className="w-5 h-5 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentTemplates;