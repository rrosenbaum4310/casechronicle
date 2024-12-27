import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, User, Scale, Clock, AlertCircle } from "lucide-react";

interface CaseDetails {
  id: number;
  title: string;
  type: string;
  date: string;
  status: string;
  priority: string;
  client: string;
  description: string;
  nextHearing: string;
  assignedTo: string;
}

const CaseView = ({ caseDetails }: { caseDetails: CaseDetails }) => {
  return (
    <Card className="p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-legal-primary" />
          <h2 className="text-2xl font-semibold text-legal-primary">{caseDetails.title}</h2>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          caseDetails.priority === "High" ? "bg-red-100 text-red-800" :
          caseDetails.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
          "bg-green-100 text-green-800"
        }`}>
          {caseDetails.priority} Priority
        </span>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Type:</span>
            <span className="font-medium">{caseDetails.type}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Filed Date:</span>
            <span className="font-medium">{caseDetails.date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Client:</span>
            <span className="font-medium">{caseDetails.client}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Next Hearing:</span>
            <span className="font-medium">{caseDetails.nextHearing}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Assigned To:</span>
            <span className="font-medium">{caseDetails.assignedTo}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Status:</span>
            <span className={`font-medium ${
              caseDetails.status === "Active" ? "text-green-600" :
              caseDetails.status === "Pending" ? "text-yellow-600" :
              "text-gray-600"
            }`}>
              {caseDetails.status}
            </span>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Case Description</h3>
        <p className="text-gray-600">{caseDetails.description}</p>
      </div>
    </Card>
  );
};

export default CaseView;