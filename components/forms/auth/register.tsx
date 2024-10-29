"use client";

import { Poppins } from "next/font/google";
import Container from "@/components/shared/container";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { registerSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type FormSchema = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAgreed: false,
      receiveMails: false,
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Container>
      <div className="my-8 w-[95%] max-w-lg space-y-8 rounded-lg bg-white px-6 py-8 max-lg:mx-auto">
        <h2
          className={cn(
            "text-center text-xl font-semibold md:text-2xl",
            poppins.className,
          )}
        >
          Create your account
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder={"Full name"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={"Email address"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"password"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={"Password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"confirmPassword"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={"Confirm Password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="termsAgreed"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start gap-2 space-y-0">
                    <FormControl>
                      <Checkbox onChange={field.onChange} />
                    </FormControl>
                    <FormLabel>
                      By registering, you agree to our{" "}
                      <Link href="#" className="text-primary">
                        terms
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-primary">
                        conditions
                      </Link>
                      .
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="receiveMails"
              render={({ field }) => (
                <FormItem className="flex items-start gap-2 space-y-0">
                  <FormControl>
                    <Checkbox onChange={field.onChange} />
                  </FormControl>
                  <FormLabel>
                    I want to receive emails and newsletters from Farmbuddy .
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary">
              Continue
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary underline">
            login
          </Link>
        </p>
      </div>
    </Container>
  );
};
export default RegisterForm;
