import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  whatsapp: z.string().min(10, "Valid WhatsApp number required"),
  degree: z.string().min(1, "Select degree"),
year: z.string().min(3, "Please select your current year"),
  trainingType: z.string().min(1, "Select training type"),
  paymentModel: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentModel: "Regular Fee",
    },
  });

  const year = form.watch("year");
  const trainingType = form.watch("trainingType");

  const showPaymentModel =
    (year === "final" || year === "passed") &&
    (trainingType === "Placement-Focused Training" ||
      trainingType === "One-to-One Mentorship");

  const onSubmit = async (data: FormData) => {
    try {
      const urlEncodedData = new URLSearchParams();

      // <<< Google Form entry IDs from your prefilled link >>>
      urlEncodedData.append("entry.1530710792", data.name); // Full Name
      urlEncodedData.append("entry.1183025170", data.email); // Email Address
      urlEncodedData.append("entry.2126486953", data.whatsapp); // WhatsApp Number
      urlEncodedData.append("entry.188652168", data.degree); // Degree
      urlEncodedData.append("entry.1938494521", data.year); // Current Year / Status
      urlEncodedData.append("entry.1821951885", data.trainingType); // Looking For
      urlEncodedData.append("entry.1775288101", data.paymentModel || ""); // Payment Preference (optional)
      urlEncodedData.append("entry.826044730", data.message || ""); // Message

      // POST to your Google Form's formResponse endpoint
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData.toString(),
        }
      );

      // optional: reset form or keep values — here we show success screen
      setSubmitted(true);
    } catch (error) {
      console.error("Submit failed", error);
      // still show success to avoid exposing errors to users (no-cors prevents status)
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center px-4">
          <Card className="max-w-md text-center">
            <CardContent className="p-6">
              <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-green-600" />
              <h2 className="text-xl font-bold">Enquiry Submitted</h2>
              <p className="mt-2 text-muted-foreground">
                Our team will contact you within 24 hours on WhatsApp.
              </p>
              <Button className="mt-4 w-full" asChild>
                <a href="/">Go Home</a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <Navbar />

      <div className="container mx-auto flex-1 px-4 pt-36 pb-16">
        <Card className="mx-auto max-w-2xl shadow-lg">
          <CardHeader className="space-y-2">
            <CardTitle className="text-center text-2xl font-bold">
              Talk to a Career Mentor
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Share your details and we’ll guide you personally
            </p>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* BASIC DETAILS */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 XXXXX XXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* EDUCATION */}
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="degree"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Degree</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select degree" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="BCA">BCA</SelectItem>
                            <SelectItem value="MCA">MCA</SelectItem>
                            <SelectItem value="B.Sc (CS / IT)">B.Sc (CS / IT)</SelectItem>
                            <SelectItem value="B.Tech / BE (CS / IT)">B.Tech / BE (CS / IT)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Year</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1st Year">1st Year</SelectItem>
                            <SelectItem value="2nd Year">2nd Year</SelectItem>
                            <SelectItem value="3rd Year">3rd Year</SelectItem>
                            <SelectItem value="Final Year">Final Year</SelectItem>
                            <SelectItem value="Passed Out">Passed Out</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* TRAINING TYPE */}
                <FormField
                  control={form.control}
                  name="trainingType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What are you looking for?</FormLabel>
                      <FormControl>
                        <div className="grid gap-3 md:grid-cols-2">
                          {[
                            {
                              title: "One-to-One Mentorship",
                              desc: "Personal mentor & guidance",
                            },
                            {
                              title: "Placement-Focused Training",
                              desc: "Job preparation & placement support",
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              onClick={() => field.onChange(item.title)}
                              className={`cursor-pointer rounded-lg border p-4 transition
                              ${
                                field.value === item.title
                                  ? "border-primary bg-primary/5"
                                  : "border-muted hover:border-primary/40"
                              }`}
                            >
                              <p className="font-medium">{item.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* MESSAGE */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us your goals, expectations, or what kind of support you need"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full text-base">
                  Submit Enquiry
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
