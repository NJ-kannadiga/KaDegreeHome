import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export function TestimonialCard({ name, role, company, quote, image }: TestimonialCardProps) {
  return (
    <Card className="border-none bg-muted/30 shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="pt-6">
        <Quote className="mb-4 h-8 w-8 text-accent/40" />
        <p className="mb-6 text-base italic text-muted-foreground">"{quote}"</p>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-background">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-serif font-bold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role} at <span className="font-semibold text-primary">{company}</span></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
