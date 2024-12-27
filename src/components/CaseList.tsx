import { Card } from "@/components/ui/card";
import { FileText, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cases = [
  { id: 1, title: "Smith vs. Johnson", type: "Civil Litigation", date: "2024-02-20", status: "Active", priority: "High" },
  { id: 2, title: "Estate of Williams", type: "Probate", date: "2024-02-18", status: "Pending", priority: "Medium" },
  { id: 3, title: "Corporate Merger A", type: "Corporate", date: "2024-02-15", status: "Active", priority: "High" },
  { id: 4, title: "Brown Family Trust", type: "Trust", date: "2024-02-14", status: "Review", priority: "Low" },
  { id: 5, title: "Davidson LLC", type: "Business", date: "2024-02-12", status: "Active", priority: "Medium" },
];

const CaseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredCases = cases.filter(
    (case_) =>
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewCase = () => {
    navigate("/new-case");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-legal-primary">Active Cases</h2>
        <Button onClick={handleNewCase} className="bg-legal-primary hover:bg-legal-primary/90">
          New Case
        </Button>
      </div>
      
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search cases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredCases.map((case_) => (
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
                    <span className={`font-medium ${
                      case_.priority === "High" ? "text-red-500" :
                      case_.priority === "Medium" ? "text-yellow-500" :
                      "text-green-500"
                    }`}>
                      {case_.priority}
                    </span>
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