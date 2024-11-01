"use client";

import { Poppins } from "next/font/google";
import Container from "@/components/shared/container";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { loginSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type FormSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
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
          Welcome back, Login
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

            <Button type="submit" className="w-full bg-primary">
              Login
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary underline">
            Get started
          </Link>
        </p>
      </div>
    </Container>
  );
};
export default LoginForm;
