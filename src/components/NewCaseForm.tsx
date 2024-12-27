import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const NewCaseForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Case created successfully");
    navigate("/");
    setIsSubmitting(false);
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Case Title</Label>
          <Input id="title" placeholder="Enter case title" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Case Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select case type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="civil">Civil Litigation</SelectItem>
              <SelectItem value="criminal">Criminal Defense</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="family">Family Law</SelectItem>
              <SelectItem value="estate">Estate Planning</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Case Description</Label>
          <Textarea
            id="description"
            placeholder="Enter case details..."
            className="min-h-[150px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="client">Client Information</Label>
          <Input id="client" placeholder="Client name" required />
        </div>

        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-legal-primary hover:bg-legal-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Case"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewCaseForm;