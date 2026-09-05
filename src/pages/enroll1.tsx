// pages/enroll.tsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone required"),
  course: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
    },
  });

  // ✅ Get course from URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const q = new URLSearchParams(window.location.search).get("course");
      if (q) form.setValue("course", q);
    }
  }, [form]);

const onSubmit = async (data: FormData) => {
  try {
    const formData = new FormData();

    // Real user data
    formData.append("entry.1530710792", data.name);
    formData.append("entry.1183025170", data.email);
    formData.append("entry.2126486953", data.phone);

    // Required hidden fields
    formData.append("entry.188652168", "Course Enrollment"); // degree
    formData.append("entry.1938494521", "N/A"); // year
    formData.append("entry.1821951885", data.course); // trainingType (use this for course)
    formData.append("entry.1775288101", "Regular Fee");
    formData.append("entry.826044730", "Direct course enrollment");

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSew53F2YEJhjft_pd60mUFFxj_vy_2fT_rXLguPhNAx8DKmUg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    setSubmitted(true);
  } catch (error) {
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
              <h2 className="text-xl font-bold">Enrollment Submitted</h2>
              <p className="mt-2 text-muted-foreground">
                Our team will contact you shortly.
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
        <Card className="mx-auto max-w-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Enroll in Course
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Fill your details and we’ll contact you shortly.
            </p>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
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
                        <Input
                          type="email"
                          placeholder="you@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 XXXXX XXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Selected Course</FormLabel>
                      <FormControl>
                        <Input readOnly {...field} className="bg-muted/30" />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full text-base">
                  Submit Enrollment
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
