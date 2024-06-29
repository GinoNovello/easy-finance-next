"use client";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "path";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { authSchema, AuthValues } from "@/schemas/auth-schema";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [url, setUrl] = useState("");
  const router = useRouter();

  const {register, handleSubmit, formState: { errors }

  } = useForm<AuthValues>({
    resolver: zodResolver(authSchema),
  })

  const onSubmit = async (values: AuthValues) => {
    setIsLoading(true);

    const resp = await fetch('/api/cookieinfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sheetUrl: values.sheetUrl, sheetName: values.sheetName}),
    });
    console.log("Evento ASDDSA:", values.sheetUrl)
    console.log("Respuesta:", resp)
    
    router.push("/dashboard")
  };

  

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
        <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register("sheetName")}
              id=""
              onChange={(e) => setUrl(e.target.value)}
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            {errors.sheetName && (<h2 className="text-red-500 text-sm">{errors.sheetName.message}</h2>)}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register("sheetUrl")}
              id=""
              onChange={(e) => setUrl(e.target.value)}
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            {errors.sheetUrl && (<h2 className="text-red-500 text-sm">{errors.sheetUrl.message}</h2>)}
          </div>
          <Button type="submit" variant="destructive">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Ingresar
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
     
    </div>
  );
}
